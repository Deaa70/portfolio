import type { Metadata } from "next";
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
    images: ["https://deaa.vercel.app/assets/me-etiF2MF6.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22%3E%3Crect width=%2232%22 height=%2232%22 rx=%226%22 fill=%22%230B0D12%22/%3E%3Ccircle cx=%2216%22 cy=%2216%22 r=%226%22 fill=%22%23E4A855%22/%3E%3C/svg%3E" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Deaa Naser",
          "jobTitle": "AI Engineer & Product Builder",
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