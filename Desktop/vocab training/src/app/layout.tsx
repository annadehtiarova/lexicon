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
  title: "LENN — German Vocabulary",
  description:
    "Photograph a textbook page, a menu or a street sign. Lexikon pulls out the German vocabulary, adds English translations, and builds ways to practise it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#172b35]">
        <header className="flex h-12 items-center justify-between bg-[#263fd6] px-5 text-white shadow-[0_4px_0_rgba(38,63,214,0.15)]">
          <span className="font-heading text-sm font-bold tracking-[1.6px]">
            LENN
          </span>
          <span className="font-body text-xs uppercase tracking-[1.8px] text-[#d8f56d]">
            Deutsch · B2
          </span>
        </header>
        {children}
      </body>
    </html>
  );
}
