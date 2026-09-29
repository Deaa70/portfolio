import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-fraunces" });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-sans" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  title: "Deaa Naser — AI Engineer & Product Builder",
  description: "Deaa Naser is an AI Engineer and Product Builder who ships complete intelligent products end to end. Creator of Siraj, an AI education platform live in Syria.",
  openGraph: {
    title: "Deaa Naser — AI Engineer & Product Builder",
    description: "I build and ship intelligent products from idea to production.",
    url: "https://deaa.vercel.app/",
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
    
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Deaa Naser",
          "jobTitle": "Full Stack Engineer & Product Builder",
          "url": "https://deaa.vercel.app/",
          "email": "mailto:deaa.work7@gmail.com",
          "sameAs": [
            "https://github.com/Deaa70",
            "https://www.linkedin.com/in/deaa-naser-b28573351",
            "https://www.facebook.com/deaa.naser.52/"
          ]
        })}} />
      </head>
      <body>{children}</body>
    </html>
  );
}