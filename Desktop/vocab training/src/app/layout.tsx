import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lexikon — Photo to Flashcards",
  description:
    "Photograph a textbook page, a menu or a street sign. Lexikon pulls out the German vocabulary, adds English translations, and builds ways to practise it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0e14] text-slate-100">
        {children}
      </body>
    </html>
  );
}
