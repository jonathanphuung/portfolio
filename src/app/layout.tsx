import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TopNav } from "@/components/top-nav";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Phung - Software Engineer",
  description:
    "Jonathan Phung is a computer science student building full-stack tools for caregivers, job seekers, and student researchers.",
  openGraph: {
    title: "Jonathan Phung - Software Engineer",
    description: "Full-stack projects, experience, and contact information.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
