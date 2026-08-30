"use client";

import { useState } from "react";
import { GlobeIcon } from "@/components/Icons";

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
    <header className="sticky top-0 z-50 bg-ink/86 backdrop-blur-md border-b border-line"
      style={{
      direction:lang == "en" ? 'ltr': 'rtl',
    }}>
      <div className="container-x flex items-center justify-between h-[68px]">
        <a href="#top" className="font-display font-semibold text-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-flame shadow-[0_0_10px_#e4a855]"></span>
          {lang === "en" ? 'Deaa Naser' : "ضياء الناصر"}
        </a>
        <nav className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-7 ${navOpen ? "flex absolute inset-x-0 top-[68px] bg-ink p-8 border-b border-line" : "hidden"} md:flex`}>
          {links.map((link, i) => (
            <a key={i} href={link.href} className="btn-nav" onClick={() => setNavOpen(false)}>{link.label}</a>
          ))}
          <div className="flex items-center gap-4">
            <a href={toggleLink} aria-label="Language toggle" className="text-paper-dim hover:text-flame transition-colors">
              <GlobeIcon />
            </a>
            <a href="#contact" className="font-mono text-[0.8rem] uppercase tracking-wider bg-flame text-ink px-4 py-2 border border-flame hover:bg-transparent hover:text-flame transition-colors" onClick={() => setNavOpen(false)}>
              {lang === "en" ? "Contact" : "تواصل"}
            </a>
          </div>
        </nav>
        <button className="md:hidden w-9 h-9 relative" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation" aria-expanded={navOpen}>
          <span className={`absolute left-1.5 right-1.5 h-px bg-paper transition-transform ${navOpen ? "top-[18px] rotate-45" : "top-[13px]"}`}></span>
          <span className={`absolute left-1.5 right-1.5 h-px bg-paper transition-opacity ${navOpen ? "opacity-0 top-[18px]" : "top-[18px]"}`}></span>
          <span className={`absolute left-1.5 right-1.5 h-px bg-paper transition-transform ${navOpen ? "top-[18px] -rotate-45" : "top-[23px]"}`}></span>
        </button>
      </div>
    </header>
  );
}