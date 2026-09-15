import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const title = "Mustafa Eftekin — software engineer";
const description =
  "Software engineer in Istanbul, backend and platform focused. A year-by-year record of where I've been, and the projects that came out of it.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eftekin.com"),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eftekin.com",
    siteName: "Mustafa Eftekin",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F4EF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper font-display text-paper-ink antialiased selection:bg-paper-accent selection:text-paper">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
