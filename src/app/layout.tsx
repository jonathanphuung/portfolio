import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TopNav } from "@/components/top-nav";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Phung | Software Engineer",
  description:
    "Jonathan Phung is an SFSU computer science student building web apps with React, Next.js, TypeScript, and PostgreSQL.",
  applicationName: "Jonathan Phung Portfolio",
  authors: [{ name: "Jonathan Phung" }],
  creator: "Jonathan Phung",
  keywords: [
    "Jonathan Phung",
    "software engineer",
    "web app engineer",
    "React engineer",
    "Next.js engineer",
    "San Francisco software engineer",
    "software engineering intern",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jonathan Phung | Software Engineer",
    description: "Projects, experience, and contact information.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jonathan Phung | Software Engineer",
    description: "Projects, experience, and contact information.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jonathan Phung",
              jobTitle: "Software Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "San Francisco State University",
              },
              sameAs: [
                "https://www.linkedin.com/in/jonathanphuung",
                "https://github.com/jonathanphuung",
              ],
              knowsAbout: ["React", "Next.js", "TypeScript", "Java", "Python", "PostgreSQL"],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <TopNav />
        {children}
      </body>
    </html>
  );
}
