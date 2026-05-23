import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HelpingHandsAu & LetsGO — Powering Local Economies & Mobility",
  description:
    "HelpingHandsAu and LetsGO are production-grade Australian platforms connecting service providers, customers, riders and drivers through intelligent, secure, and compliant technology.",
  keywords: [
    "HelpingHandsAu", "LetsGO", "Australian marketplace", "rideshare", "service providers",
    "Stripe payments", "AI fraud prevention", "driver compliance", "realtime tracking"
  ],
  authors: [{ name: "HelpingHandsAu & LetsGO" }],
  openGraph: {
    title: "HelpingHandsAu & LetsGO",
    description: "Two intelligent platforms powering local economies and mobility across Australia.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelpingHandsAu & LetsGO",
    description: "Two intelligent platforms powering local economies and mobility across Australia.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F7F5] text-[#111111]">
        <div className="flex flex-col flex-1" style={{ paddingTop: "var(--nav-height)" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
