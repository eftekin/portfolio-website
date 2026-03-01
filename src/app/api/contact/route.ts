import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().email(),
  message: z.string().trim().min(10).max(1000),
});

const rateLimiter = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 5;
const TIME_WINDOW = 60 * 60 * 1000;

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimiter.get(ip);

  if (!userLimit) {
    rateLimiter.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - userLimit.timestamp >= TIME_WINDOW) {
    rateLimiter.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return true;
  }

  userLimit.count += 1;
  return false;
}

function sanitizeMessage(message: string): string {
  return message.trim().replace(/<[^>]*>/g, "");
}

function buildDiscordPayload({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return {
    embeds: [
      {
        title: "New Contact Form Submission",
        color: 0x5865f2,
        fields: [
          {
            name: "Name",
            value: name,
            inline: true,
          },
          {
            name: "Email",
            value: email,
            inline: true,
          },
          {
            name: "Message",
            value: message,
          },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };
}

async function sendToDiscord(webhookUrl: string, payload: unknown) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Discord webhook failed (${response.status}): ${body}`);
  }
}

export async function POST(request: Request) {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const contentLength = parseInt(request.headers.get("content-length") || "0");
    if (contentLength > 10000) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }

    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Only JSON requests are allowed" },
        { status: 415 }
      );
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
          details: result.error.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;
    const sanitizedMessage = sanitizeMessage(message);

    await sendToDiscord(
      webhookUrl,
      buildDiscordPayload({
        name,
        email,
        message: sanitizedMessage,
      })
    );

    return NextResponse.json(
      {
        message: "Message sent successfully",
      },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
