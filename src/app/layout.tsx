import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eftekin.com"),
  title: "Mustafa Eftekin - AI & Full-Stack Developer",
  description:
    "AI & Full-Stack Developer with a passion for machine learning, data science, and building innovative projects.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eftekin.com",
    siteName: "Mustafa Eftekin Portfolio",
    title: "Mustafa Eftekin - AI & Full-Stack Developer",
    description:
      "AI & Full-Stack Developer with a passion for machine learning, data science, and building innovative projects.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-black antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
