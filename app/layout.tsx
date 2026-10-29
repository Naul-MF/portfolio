import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CursorGlow from "@/components/ui/CursorGlow";
import Background from "@/components/Background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naul.dev"),
  title: {
    default: "Naul — Full-Stack Developer",
    template: "%s — Naul",
  },
  description:
    "Full-stack developer focused on building modern, responsive and high-performance web applications with Next.js, TypeScript and .NET.",
  keywords: [
    "full-stack developer",
    "web developer",
    "Next.js",
    "TypeScript",
    "React",
    "portfolio",
  ],
  openGraph: {
    title: "Naul — Full-Stack Developer",
    description:
      "I build digital experiences that make an impact. Modern, responsive and high-performance web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naul — Full-Stack Developer",
    description: "I build digital experiences that make an impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="noise font-sans">
        <SmoothScroll>
          <Background />
          <CursorGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
