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
  title: "Lenn — Learn B2 Beruf Deutsch",
  description:
    "Photograph a textbook page, a menu or a street sign. Lexikon pulls out the German vocabulary, adds English translations, and builds ways to practise it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#172b35]">
        <header className="flex h-10 items-center justify-between bg-[#263fd6] px-4 text-white">
          <span className="font-heading text-[11px] font-semibold tracking-[1.5px]">Lenn</span>
          <span className="font-body text-[10px] uppercase tracking-[1.8px] text-[#dbeaec]">Deutsch · B2</span>
        </header>
        {children}
      </body>
    </html>
  );
}
