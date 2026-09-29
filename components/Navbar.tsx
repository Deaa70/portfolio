"use client";

import { useState } from "react";
import { GlobeIcon } from "@/components/Icons";
import Image from "next/image";
import deaaLogo from "@/assets/deaa-logo.png"
/* Brand mark — the "D" from the logo: teal D, peach code-slash.
   Same paths as the favicon, so the two always match. */
function LogoMark() {
  return (
                <Image src={deaaLogo} alt="Portrait of Deaa Naser" className="w-8 h-8 rounded-full object-cover" priority />
   
  );
}

export default function Navbar({ lang = "en" }: { lang?: "en" | "ar" }) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleLink = lang === "en" ? "/ar" : "/";

  const links = lang === "en"
    ? [
        { label: "About", href: "#about" },
        { label: "Case Study", href: "#siraj" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
      ]
    : [
        { label: "نبذة", href: "#about" },
        { label: "دراسة الحالة", href: "#siraj" },
        { label: "المهارات", href: "#skills" },
        { label: "الخبرة", href: "#experience" },
        { label: "المشاريع", href: "#projects" },
      ];

  return (
    <header
      className="nav-grad-line sticky top-0 z-50 bg-ink/86 backdrop-blur-md border-b border-line"
      style={{ direction: lang === "en" ? "ltr" : "rtl" }}
    >
      <div className="container-x flex items-center justify-between h-[68px]">
        {/* Brand — the D mark from the logo */}
        <a href="#top" className="group font-display font-semibold text-lg flex items-center gap-2.5 text-paper">
          <LogoMark />
          {lang === "en" ? "Deaa Naser" : "ضياء الناصر"}
        </a>

        <nav
          className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-7 ${
            navOpen
              ? "diag-pattern flex absolute inset-x-0 top-[68px] bg-ink p-8 border-b border-line"
              : "hidden"
          } md:flex`}
        >
          {links.map((link, i) => (
            <a key={i} href={link.href} className="btn-nav" onClick={() => setNavOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href={toggleLink}
              aria-label="Language toggle"
              className="text-paper-dim hover:text-teal transition-colors"
            >
              <GlobeIcon />
            </a>
            <a href="#contact" className="btn btn-primary" onClick={() => setNavOpen(false)}>
              {lang === "en" ? "Contact" : "تواصل"}
            </a>
          </div>
        </nav>

        <button
          className="md:hidden w-9 h-9 relative"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
        >
          <span className={`absolute left-1.5 right-1.5 h-px transition-all duration-300 ${navOpen ? "top-[18px] rotate-45 bg-teal" : "top-[13px] bg-paper"}`}></span>
          <span className={`absolute left-1.5 right-1.5 h-px transition-all duration-300 ${navOpen ? "opacity-0 top-[18px] bg-teal" : "top-[18px] bg-paper"}`}></span>
          <span className={`absolute left-1.5 right-1.5 h-px transition-all duration-300 ${navOpen ? "top-[18px] -rotate-45 bg-teal" : "top-[23px] bg-paper"}`}></span>
        </button>
      </div>
    </header>
  );
}