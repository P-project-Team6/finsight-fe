import BottomNav from "./_components/BottomNav";
import Header from "./_components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Finsight",
  description: "AI 기반 투자 인사이트 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30">
          <Header />
          <main className="pt-20 pb-20 max-w-md mx-auto px-4 min-h-screen">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
