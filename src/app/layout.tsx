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
  title: "Swastik.S.Karabashettar — AI & Data Science Student, Builder",
  description:
    "Personal portfolio of Swastik.S.Karabashettar, an AI & Data Science undergraduate at UVCE Bengaluru exploring Generative AI, local LLMs, deterministic systems, and media automation.",
  keywords: [
    "Swastik.S.Karabashettar",
    "Swastik Karabashettar",
    "Swastik S. Karabashettar",
    "UVCE Bengaluru",
    "Artificial Intelligence",
    "Data Science",
    "Local LLMs",
    "CivicPath",
    "AutoClip",
    "Generative AI Portfolio",
  ],
  authors: [{ name: "Swastik.S.Karabashettar", url: "https://github.com/123swastik123" }],
  creator: "Swastik.S.Karabashettar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/123swastik123",
    title: "Swastik.S.Karabashettar — AI & Data Science Student, Builder",
    description:
      "B.Tech AI & Data Science undergraduate at UVCE Bengaluru exploring generative intelligence, local LLM architectures, and practical automation tools.",
    siteName: "Swastik.S.Karabashettar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swastik.S.Karabashettar — AI & Data Science Student, Builder",
    description:
      "B.Tech AI & Data Science undergraduate at UVCE Bengaluru exploring generative systems, local LLMs, and practical systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Swastik.S.Karabashettar",
              url: "https://swastik-portfolio-iota.vercel.app",
              email: "mailto:swastikarabashettar@gmail.com",
              sameAs: ["https://github.com/123swastik123"],
              jobTitle: "AI & Data Science Developer",
              worksFor: {
                "@type": "CollegeOrUniversity",
                name: "University Visvesvaraya College of Engineering (UVCE)",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#08080a] text-[#f4f4f5] antialiased selection:bg-[#f4f4f5] selection:text-[#08080a] font-sans">
        {children}
      </body>
    </html>
  );
}
