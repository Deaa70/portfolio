import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-fraunces" });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-sans" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  title: "Deaa Naser - Full-Stack Software Engineer, AI Applications",
  description:
    "Full-stack software engineer building AI applications with React, Next.js, TypeScript, Python, Django, FastAPI and React Native. Creator of Siraj.",
  openGraph: {
    title: "Deaa Naser - Full-Stack Software Engineer, AI Applications",
    description:
      "Full-stack software engineer building AI applications with React, Next.js, TypeScript, Python, Django, FastAPI and React Native.",
    url: "https://deaa.vercel.app/",
    images: ["https://deaa.vercel.app/assets/me.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deaa Naser - Full-Stack Software Engineer, AI Applications",
    description:
      "Full-stack software engineer building AI applications with React, Next.js, TypeScript, Python, Django, FastAPI and React Native.",
    images: ["https://deaa.vercel.app/assets/me.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1217",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deaa Naser",
              jobTitle: "Full-Stack Software Engineer, AI Applications",
              url: "https://deaa.vercel.app/",
              email: "mailto:deaa.work7@gmail.com",
              sameAs: [
                "https://github.com/Deaa70",
                "https://www.linkedin.com/in/deaa-naser-b28573351",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}