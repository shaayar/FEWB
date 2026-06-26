import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: 'VERUM AI Platform — Know Exactly Where You Stand',
  description:
    'Premium AI-driven financial automation platform for Indian freelancers, creators, consultants, and small business owners.',
  keywords: [
    'AI automation',
    'financial awareness',
    'freelancer tools',
    'GST tracking',
    'financial platform',
    'India',
  ],
  openGraph: {
    title: 'VERUM AI Platform',
    description: 'Know Exactly Where You Stand',
    url: 'https://verum-landing.vercel.app',
    siteName: 'VERUM',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'VERUM Team' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
