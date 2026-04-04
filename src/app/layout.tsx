import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rassim | Backend Developer",
  description:
    "Minimal black and white portfolio for Douaouria Rassim, focused on backend development and cybersecurity projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
