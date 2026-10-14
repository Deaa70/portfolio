import React from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail, MessageCircle, Send } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

import meImage from "@/assets/me.jpg";
import contImage from "@/assets/cont.png";
import appImage from "@/assets/mobile-siraj.png";

import type { Metadata } from "next";

const RESUME_URL = "https://f005.backblazeb2.com/file/siraj-public/deaa_naser_cv.pdf";
const GITHUB_URL = "https://github.com/Deaa70";
const LINKEDIN_URL = "https://www.linkedin.com/in/deaa-naser-b28573351";
const EMAIL = "deaa.work7@gmail.com";

import type { SVGProps } from "react";

export const SiLinkedin = ({size } : {size : number}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
     
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.25-.02-2.27-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.57 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Deaa Naser - Full-Stack Software Engineer, AI Applications",
  description:
    "Full-stack software engineer building AI applications with React, Next.js, TypeScript, Python, Django, FastAPI and React Native. Creator of Siraj.",
  metadataBase: new URL("https://deaa.vercel.app"),
  alternates: { canonical: "/", languages: { en: "/", ar: "/ar" } },
  authors: [{ name: "Deaa Naser", url: "https://deaa.vercel.app/" }],
  creator: "Deaa Naser",
  publisher: "Deaa Naser",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deaa.vercel.app/",
    siteName: "Deaa Naser",
    title: "Deaa Naser - Full-Stack Software Engineer, AI Applications",
    description:
      "Full-stack software engineer building AI applications with React, Next.js, TypeScript, Python, Django, FastAPI and React Native.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Deaa Naser - Full-Stack Software Engineer, AI Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deaa Naser - Full-Stack Software Engineer, AI Applications",
    description:
      "Full-stack software engineer building AI applications with React, Next.js, TypeScript, Python, Django, FastAPI and React Native.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

const Section = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <section id={id} className="relative py-24 border-b border-line last:border-b-0">
    <div className="container-x grid grid-cols-1 md:grid-cols-[48px_1fr] md:gap-x-8">
      <div className="hidden md:block relative spine">
        <span className="absolute top-0 left-[19px] w-2.5 h-2.5 rounded-full bg-gradient-to-br from-teal to-peach shadow-[0_0_0_4px_rgba(78,209,193,0.16)]"></span>
      </div>
      <div>{children}</div>
    </div>
  </section>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center font-mono text-[0.72rem] tracking-wide text-gray-400 border border-line-strong px-2.5 py-1 rounded-full">
    {children}
  </span>
);

export default function Home() {
  return (
    <>
      <Navbar lang="en" />
      <main id="top">
        {/* 1. HEADER */}
        <section className="relative overflow-hidden pt-[76px] pb-24 border-b border-line">
          <div aria-hidden="true" className="diag-pattern pointer-events-none absolute inset-0"></div>
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-10 -right-4 md:right-4 font-mono font-medium text-[15rem] md:text-[20rem] leading-none text-gradient opacity-[0.05]"
          >
            &lt;/&gt;
          </span>

          <div className="container-x relative grid grid-cols-1 md:grid-cols-[1.25fr_0.85fr] gap-16 items-start">
            <div>
              <h1 className="font-display font-semibold text-[2.6rem] md:text-[3.6rem] leading-[1.06] tracking-tight">
                Deaa Naser
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-paper">
                Full-Stack Software Engineer, AI Applications
              </p>
              <p className="mt-6 font-mono text-[0.82rem] text-paper-dim tracking-wide leading-[1.75] max-w-[560px]">
                React · Next.js · TypeScript · Python · Django · FastAPI · React Native · LLM/RAG · Docker
              </p>
              <p className="mt-5 text-paper">Open to remote work and relocation (Gulf/MENA)</p>
              <p className="mt-1 font-mono text-xs text-paper-dimmer tracking-wide">Homs, Syria</p>
              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href={RESUME_URL}
                  download="Deaa_Naser_CV.pdf"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  Resume <Download size={16} />
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener" className="btn btn-ghost">
                  GitHub <SiGithub size={16} />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener" className="btn btn-ghost">
                  LinkedIn <SiLinkedin size={16} />
                </a>
                <a href={`mailto:${EMAIL}`} className="btn btn-ghost">
                  Email <Mail size={16} />
                </a>
              </div>
            </div>
            <div className="relative max-w-[280px] md:max-w-none">
              <div className="diag-top relative border border-line-strong rounded overflow-hidden aspect-[4/5] bg-ink-raised">
                <Image src={meImage} alt="Portrait of Deaa Naser" className="w-full h-full object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPERIENCE */}
        <Section id="experience">
          <Reveal className="mb-10 max-w-[720px]">
            <span className="eyebrow mb-4">// Experience</span>
          </Reveal>

          {/* Entry 1 — Siraj */}
          <Reveal className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div className="font-mono text-xs text-paper-dimmer">Oct 2025 — Present · Syria</div>
            <div>
              <h4 className="font-display text-[1.4rem] font-semibold">Software Engineer and Founder, Siraj</h4>
              <p className="mt-3 text-paper-dim">AI education platform for grades 6-12. Sole engineer.</p>
              <ul className="mt-5">
                {[
                  "Built the Django REST backend, the React/Next teacher web platform (siraj.sy) and the React Native student app.",
                  "Designed and built the RAG, intent routing, AI grading and OCR pipeline (Qdrant, LLM providers, Celery, Redis).",
                  "Deploy and operate production on a self-managed VPS (Docker, Dokploy, Cloudflare, automated backups).",
                  "Live on Google Play and siraj.sy, 500+ students.",
                ].map((exp, i) => (
                  <li
                    key={i}
                    className="py-3 border-t border-line text-paper-dim text-[0.95rem] leading-[1.6] grid grid-cols-[22px_1fr] gap-2.5 last:border-b last:border-line"
                  >
                    <span className="font-mono text-peach text-xs">{`0${i + 1}`}</span>
                    <p>{exp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Entry 2 — Problem solving practice */}
          <Reveal className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 mt-12 pt-12 border-t border-line">
            <div className="font-mono text-xs text-paper-dimmer">Oct 2021 — Present</div>
            <div>
              <h4 className="font-display text-[1.4rem] font-semibold">Competitive Programming and Problem Solving</h4>
              <ul className="mt-5">
                {[
                  "Solve algorithmic problems on Codeforces and LeetCode since October 2021.",
                  "About 1,500 problems solved on Codeforces across data structures and algorithms.",
                  "Practice SQL problem solving alongside algorithm work.",
                  "Learned multiple programming languages through regular competitive practice.",
                ].map((exp, i) => (
                  <li
                    key={i}
                    className="py-3 border-t border-line text-paper-dim text-[0.95rem] leading-[1.6] grid grid-cols-[22px_1fr] gap-2.5 last:border-b last:border-line"
                  >
                    <span className="font-mono text-peach text-xs">{`0${i + 1}`}</span>
                    <p>{exp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        {/* 3. EDUCATION */}
        <Section id="education">
          <Reveal className="mb-8 max-w-[720px]">
            <span className="eyebrow mb-4">// Education</span>
          </Reveal>
          <Reveal>
            {/* TODO: confirm exact degree name and graduation year. */}
            <p className="text-paper-dim">
              Information Technology, Software Engineering and AI Applications,{" "}
              <span className="text-white">Homs University</span>, Oct 2025.
            </p>
          </Reveal>
        </Section>

        {/* 4. SKILLS */}
        <Section id="skills">
          <Reveal className="mb-10 max-w-[720px]">
            <span className="eyebrow mb-4">// Skills</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-5">
            {[
              {
                label: "Frontend",
                items: [
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "TanStack Query",
                  "State Management",
                  "Zustand",
                  "Redux",
                  "Context API",
                  "Shadcn UI",
                  "External Import",
                  "SEO optimization",
                ],
              },
              {
                label: "Backend",
                items: [
                  "Python",
                  "Django",
                  "DRF",
                  "FastAPI",
                  "REST API design",
                  "Celery",
                  "Integrations",
                  "Scripts",
                  "Redis",
                  "Cache",
                  "MySQL",
                  "Postgres",
                  "ORM",
                  "Database Design",
                  "Database Optimization",
                ],
              },
              {
                label: "AI",
                items: [
                  "RAG",
                  "LLM applications",
                  "vector databases (Qdrant)",
                  "embeddings",
                  "AI agents",
                  "prompt engineering",
                  "vision models",
                  "invocation tools",
                  "workflows",
                ],
              },
              {
                label: "Data",
                items: [
                  "SQL queries",
                  "data analysis",
                  "Excel",
                  "Google Sheets",
                  "Tableau",
                  "data visualization",
                ],
              },
              {
                label: "Mobile",
                items: [
                  "React Native",
                  "Expo",
                  "offline-first apps",
                  "Local Database",
                  "Native packages",
                  "Markdown & LaTeX rendering",
                ],
              },
              {
                label: "Infrastructure",
                items: ["Docker", "Linux VPS", "Cloudflare", "deployment automation", "DNS"],
              },
              {
                label: "Practices",
                items: [
                  "clean code",
                  "design patterns",
                  "system design",
                  "project management",
                  "critical thinking",
                  "problem solving",
                ],
              },
            ].map((group) => (
              <div
                key={group.label}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 items-baseline border-t border-line pt-4"
              >
                <span className="font-mono text-xs tracking-[0.06em] uppercase text-teal">{group.label}</span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </Section>

        {/* 5. PROJECT: SIRAJ */}
        <Section id="siraj">
          <Reveal>
            <span className="eyebrow mb-4">// Projects</span>
          </Reveal>
          <Reveal className="flex flex-wrap justify-between gap-6 items-end mb-2">
            <h2 className="font-display font-bold text-[2.6rem] tracking-tight">Siraj</h2>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="https://siraj.sy/"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-teal hover:border-teal/50"
              >
                Teacher platform <ArrowRight size={13} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.deaa00.siraj1"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-teal hover:border-teal/50"
              >
                Student app <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>
          <Reveal className="mt-3.5 text-paper-dim text-lg max-w-[640px]">
            A mobile learning platform for Syrian students in grades 6-12, covering the national curriculum. Students
            study, practice and ask questions in one app; content is managed through a web dashboard on the same
            backend.
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {[
              {
                k: "Built for",
                v: "Students preparing for school and baccalaureate exams in Syria, often with unreliable internet. Study material, exam-style practice and an AI tutor in one app.",
              },
              {
                k: "Learned",
                v: "Design for the real constraints (connectivity, latency, cost) from day one, not as a retrofit.",
              },
              {
                k: "Includes",
                v: "Study notes in a PDF viewer · Question bank with solutions and answer checking (photo or typed) · Courses · Curriculum-aware AI Teacher · XP, levels, streaks and ranking · Study reports",
                wide: true,
              },
              {
                k: "Uses",
                v: "Django REST backend with Celery workers for AI jobs · hybrid RAG (dense + sparse retrieval) over curriculum content · rubric-based AI grading · offline-first React Native app · self-managed VPS with Docker.",
                wide: true,
              },
            ].map((row) => (
              <div key={row.k} className={`flex gap-3 items-start ${row.wide ? "md:col-span-2" : ""}`}>
                <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-1 w-[78px] flex-shrink-0">
                  {row.k}
                </span>
                <p className="text-paper-dim text-[0.95rem] leading-[1.65]">{row.v}</p>
              </div>
            ))}
            {/* Stack row unchanged; add "Next.js" to the chip list */}
          </Reveal>
          {/* Screenshot + architecture, sized down */}
          <Reveal className="grid grid-cols-1 md:grid-cols-[238px_1fr] gap-8 items-start mt-12">
            <div className="diag-top border border-line rounded overflow-hidden bg-ink-raised">
              <Image src={appImage} alt="Siraj student app home screen" className="w-full h-auto" />
            </div>
            <div className="diag-top border border-line bg-ink-raised rounded p-5">
              <span className="eyebrow mb-3 block">System architecture</span>
              <svg viewBox="0 0 800 400" role="img" aria-labelledby="diagramTitle" className="w-full h-auto">
                <title id="diagramTitle">
                  Siraj system architecture: student app and teacher web both call the Django REST API, which connects
                  to an AI layer (Qdrant plus LLMs) and a data layer (MySQL plus object storage), coordinated by Celery
                  and Redis.
                </title>
                <defs>
                  <linearGradient id="gradAccent" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4ED1C1" />
                    <stop offset="100%" stopColor="#F4A261" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="#4ED1C1" strokeOpacity="0.4" strokeWidth="1.5">
                  <path d="M190,90 V125 H400 V160" />
                  <path d="M610,90 V125 H400 V160" />
                  <path d="M400,230 V260 H210 V290" />
                  <path d="M400,230 V260 H590 V290" />
                </g>
                <rect x="40" y="20" width="300" height="70" rx="3" fill="#151B24" stroke="#2C3947" />
                <text x="190" y="50" textAnchor="middle" fill="#E9F1F6" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">STUDENT APP</text>
                <text x="190" y="70" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">React Native · Expo · offline-first</text>
                <rect x="460" y="20" width="300" height="70" rx="3" fill="#151B24" stroke="#2C3947" />
                <text x="610" y="50" textAnchor="middle" fill="#E9F1F6" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">TEACHER WEB</text>
                <text x="610" y="70" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">siraj.sy · React · TypeScript</text>
                <rect x="250" y="160" width="300" height="70" rx="3" fill="#1B232E" stroke="url(#gradAccent)" strokeOpacity="0.6" />
                <text x="400" y="190" textAnchor="middle" fill="#4ED1C1" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">DJANGO REST API</text>
                <text x="400" y="210" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">Celery workers · Redis broker</text>
                <rect x="40" y="290" width="340" height="90" rx="3" fill="#151B24" stroke="#F4A261" strokeOpacity="0.5" />
                <text x="210" y="320" textAnchor="middle" fill="#F4A261" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">AI LAYER</text>
                <text x="210" y="340" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">Qdrant + LLMs (RAG, grading,</text>
                <text x="210" y="356" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">OCR, agentic tool-calling)</text>
                <rect x="420" y="290" width="340" height="90" rx="3" fill="#151B24" stroke="#2C3947" />
                <text x="590" y="320" textAnchor="middle" fill="#E9F1F6" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">DATA & STORAGE</text>
                <text x="590" y="340" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">MySQL · Redis cache ·</text>
                <text x="590" y="356" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">Backblaze S3 object storage</text>
              </svg>
            </div>
          </Reveal>

          {/* Contribution graph */}
          <Reveal className="mt-12">
            <div className="diag-top border border-line bg-ink-raised rounded p-5 ">
              <Image
                src={contImage}
                alt="GitHub contribution graph for the Siraj repository"
                className="w-full h-auto rounded-sm"
              />
              <p className="text-xs text-paper-dim mt-3 pt-3 border-t border-line">
                1,140 contributions to Siraj in 7 months
              </p>
            </div>
          </Reveal>

          {/* Collapsed technical detail */}
          <Reveal className="mt-14">
            <details className="border-t border-line py-5">
              <summary className="cursor-pointer font-mono text-xs tracking-[0.1em] uppercase text-teal">
                AI engineering
              </summary>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {[
                  "RAG — answers grounded in the real curriculum via vector search tuned for Arabic educational text.",
                  "Curriculum-aware retrieval — grade levels and subjects searched as distinct spaces.",
                  "Query routing — incoming questions classified by intent and routed to the right retrieval and prompting strategy.",
                  "Agentic assistant — a mode that chains multiple steps and tool calls instead of answering in a single pass.",
                  "LLM orchestration — providers chosen by empirical comparison on cost, quality and latency, swappable as the market moves.",
                  "Structured AI grading — subject-aware logic; exact-answer and rubric-based subjects evaluated differently.",
                  "Vision pipeline — reads handwritten student answers and ingests printed textbooks into the knowledge base.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="pl-4.5 relative text-paper-dim text-[0.95rem] leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-px before:bg-teal/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </details>

            <details className="border-t border-line py-5">
              <summary className="cursor-pointer font-mono text-xs tracking-[0.1em] uppercase text-teal">
                Mobile engineering
              </summary>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {[
                  "Offline-first content — local persistence with offline/online sync; lessons and progress work without a connection.",
                  "Custom markdown & math renderer — purpose-built for mixed Arabic RTL text and LaTeX, which general libraries don't handle.",
                  "Typewriter streaming — token-by-token AI responses tuned for lower-end Android devices.",
                  "Device security — screenshot/recording protection and compromised-device detection gate paid content.",
                  "Download management — offline lesson assets cached; progress tracking kept out of the render path.",
                  "State & data — Zustand for client state, TanStack Query for server state and caching.",
                  "Styling & UI — NativeWind for Tailwind-style styling, Gluestack UI as the component system.",
                  "Native integrations — push notifications, file system access and security checks via Expo config plugins.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="pl-4.5 relative text-paper-dim text-[0.95rem] leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-px before:bg-teal/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </details>

            <details className="border-t border-b border-line py-5">
              <summary className="cursor-pointer font-mono text-xs tracking-[0.1em] uppercase text-teal">
                Backend and infrastructure
              </summary>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {[
                  "Django REST Framework — a single API surface shared by the mobile app and the teacher platform.",
                  "Async job processing — grading, OCR and report generation run in background, never blocking a request.",
                  "Relational database — primary store, schema and queries tuned for reporting and analytics.",
                  "Docker + Dokploy — containerized deployment on a self-managed VPS, no managed PaaS in the loop.",
                  "Cloudflare — CDN and DNS in front of the VPS.",
                  "Object storage — media assets and automated backups.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="pl-4.5 relative text-paper-dim text-[0.95rem] leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-px before:bg-teal/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>
        </Section>

        {/* EXAM GENERATOR */}
        <Section id="exam-generator">
          <Reveal>
            <span className="eyebrow mb-4">// Project</span>
          </Reveal>

          <Reveal className="flex flex-wrap justify-between gap-6 items-end mb-2">
            <h2 className="font-display font-bold text-[2.6rem] tracking-tight">Exam Generator</h2>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="https://exam-generator.siraj.sy/"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-teal hover:border-teal/50"
              >
                Live tool <ArrowRight size={13} />
              </a>
              <a
                href="https://exam-generator.siraj.sy/how-it-works"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-teal hover:border-teal/50"
              >
                How it works <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>

          <Reveal className="mt-3.5 text-paper-dim text-lg max-w-[640px]">
            A Next.js + FastAPI tool for Arabic teachers to compose exam papers with rich text, LaTeX math and images,
            then export them as print-ready A4 PDFs.
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {[
              {
                k: "Built for",
                v: "Arabic teachers who need exam papers with RTL typography, inline LaTeX math and per-question images, exported as PDFs.",
              },
              {
                k: "Learned",
                v: "Rendering pipelines fail silently — the math layer must be verified before output is emitted, not assumed.",
              },
              {
                k: "Includes",
                v: "Single-page form with Zod validation · rich-text question editor with MathLive · per-question AR/EN toggle · per-question image upload · live generation stats · rate-limited backend",
                wide: true,
              },
              {
                k: "Uses",
                v: "Next.js App Router frontend · FastAPI backend · MathJax 3 inside headless Chromium (Playwright) · SQLite stats · in-memory per-IP rate limiting.",
                wide: true,
              },
            ].map((row) => (
              <div key={row.k} className={`flex gap-3 items-start ${row.wide ? "md:col-span-2" : ""}`}>
                <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-1 w-[78px] flex-shrink-0">
                  {row.k}
                </span>
                <p className="text-paper-dim text-[0.95rem] leading-[1.65]">{row.v}</p>
              </div>
            ))}

            <div className="flex gap-3 items-start md:col-span-2">
              <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-1 w-[78px] flex-shrink-0">
                Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "React Hook Form",
                  "Zod",
                  "MathLive",
                  "MathJax 3",
                  "FastAPI",
                  "Playwright",
                  "SQLite",
                ].map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Collapsed technical detail */}
          <Reveal className="mt-12">
            <details className="border-t border-b border-line py-5">
              <summary className="cursor-pointer font-mono text-xs tracking-[0.1em] uppercase text-teal">
                Technical detail
              </summary>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {[
                  "Single-page App Router shell — server component layout, client components for interactivity.",
                  "Rich question editor — contentEditable field supporting HTML, LaTeX and inline math; the MathLive dialog appends math into whichever field is focused and re-typesets via MathJax.",
                  "Multipart submit — posts exam metadata, indexed questions and per-question images to the FastAPI backend, receives the PDF as a Blob and downloads it.",
                  "Backend rendering — FastAPI fills an RTL HTML template, normalizes LaTeX to inline form, typesets it with MathJax inside headless Chromium (Playwright), and refuses to emit a PDF if MathJax fails.",
                  "Print-correct output — A4 geometry, three-column exam header, and انتهى pinned to the bottom of the last page.",
                  "Production guards — per-IP sliding-window rate limiting, SQLite generation stats, CORS locked to the production origin.",
                  "MathJax is loaded from a CDN; the README documents vendoring it locally for offline deployment.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="pl-4.5 relative text-paper-dim text-[0.95rem] leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-px before:bg-teal/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>
        </Section>


        {/* TELEGRAM JOB FEED */}
        <Section id="telegram-job-feed">
          <Reveal>
            <span className="eyebrow mb-4">// Project</span>
          </Reveal>

          <Reveal className="flex flex-wrap justify-between gap-6 items-end mb-2">
            <h2 className="font-display font-bold text-[2.6rem] tracking-tight">
              Telegram Job Feed
            </h2>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="https://github.com/Deaa70/telegram-job-feed"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-teal hover:border-teal/50"
              >
                Source code <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>

          <Reveal className="mt-3.5 text-paper-dim text-lg max-w-[640px]">
            A Python automation pipeline that turns noisy Telegram job
            channels into a clean, deduplicated daily feed of relevant tech
            vacancies, using an LLM to filter posts, extract structured details,
            and publish consistently formatted Arabic messages.
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {[
              {
                k: "Built for",
                v: "Job seekers following multiple Telegram channels who need one focused feed of relevant tech jobs without manually sorting through advertisements, courses, scams, and unrelated vacancies.",
              },
              {
                k: "Learned",
                v: "LLMs can classify and structure unorganized job posts, but factual details need deterministic safeguards. Duplicate detection should also happen before expensive processing whenever possible.",
              },
              {
                k: "Includes",
                v: "Read-only channel collection · batch LLM classification · per-post detail extraction · Arabic job summaries with English technical terms preserved · hidden application-link extraction · two-stage duplicate detection · SQLite-backed processing history · scheduled execution",
                wide: true,
              },
              {
                k: "Uses",
                v: "Telethon to read selected channels · OpenAI-compatible LLM APIs for classification and extraction · regular expressions to capture contact details · SQLite for persistence and deduplication · Telegram Bot API for publishing · Docker and Dokploy for scheduled VPS execution.",
                wide: true,
              },
            ].map((row) => (
              <div
                key={row.k}
                className={`flex gap-3 items-start ${row.wide ? "md:col-span-2" : ""}`}
              >
                <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-1 w-[78px] flex-shrink-0">
                  {row.k}
                </span>
                <p className="text-paper-dim text-[0.95rem] leading-[1.65]">
                  {row.v}
                </p>
              </div>
            ))}

            <div className="flex gap-3 items-start md:col-span-2">
              <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-1 w-[78px] flex-shrink-0">
                Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Telethon",
                  "OpenAI SDK",
                  "LLM Integration",
                  "SQLite",
                  "Telegram Bot API",
                  "Regular Expressions",
                  "Docker",
                  "Dokploy",
                  "Linux VPS",
                  "python-dotenv",
                ].map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </Reveal>

   
        </Section>

        
        {/* 6. PROBLEM SOLVING */}
        <Section id="problem-solving">
          <Reveal className="mb-8 max-w-[720px]">
            <span className="eyebrow mb-4">// Problem solving</span>
          </Reveal>
          <Reveal>
            <p className="text-paper-dim">
              Codeforces Specialist (~1506) —{" "}
              <a
                href="https://codeforces.com/profile/Deaa"
                target="_blank"
                rel="noopener"
                className="text-teal border-b border-teal/50"
              >
                Deaa
              </a>
            </p>
            <p className="mt-2 text-paper-dim text-sm max-w-[640px]">
              Algorithmic problem solving. Core topics:
            </p>
          </Reveal>
          <Reveal className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {[
              {
                t: "Constructive algorithms",
                d: "Building a valid answer directly from the problem's constraints.",
              },
              {
                t: "Implementation",
                d: "Turning detailed statements into correct code that handles edge cases.",
              },
              {
                t: "Data structures",
                d: "Segment tree for range queries and updates.",
              },
              {
                t: "Dynamic programming",
                d: "Defining states and transitions for optimization and counting problems.",
              },
              {
                t: "Binary search",
                d: "Searching sorted data, and searching over the answer itself.",
              },
              {
                t: "Math and number theory",
                d: "Applying number theory and mathematical reasoning to problem constraints.",
              },
            ].map((topic) => (
              <div key={topic.t} className="bg-ink p-7 flex flex-col gap-2.5">
                <h3 className="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-signal">{topic.t}</h3>
                <p className="text-sm text-paper-dim leading-[1.6]">{topic.d}</p>
              </div>
            ))}
          </Reveal>
        </Section>

        {/* 8. CERTIFICATES */}
        <Section id="certificates">
          <Reveal className="mb-8 max-w-[720px]">
            <span className="eyebrow mb-4">// Certificates</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Bachelor's degree, Homs University", // TODO: exact degree name as written on the certificate
                meta: "Homs University · 2025",
                text: "University graduation certificate in Information Technology Engineering, Software Engineering.",
                img: "/uni_cer.png",
              },
              {
                title: "Google Data Analytics Professional Certificate", // TODO: match the exact title on the certificate
                meta: "Google via Coursera · 2023",
                text: "Data cleaning, analysis and visualization with SQL, spreadsheets and R.", // TODO: confirm tools covered
                img: "/gog_cer.png",
                verify: "", // TODO: Coursera verification URL
              },
              {
                title: "SQL for Data Science",
                meta: "University of California, Davis via Coursera · Mar 2023",
                text: "Online non-credit course authorized by UC Davis. Querying and analyzing data with SQL.",
                img: "/sql.png",
                verify: "",
              },
              {
                title: "Syrian College Programming Contest 2024", // TODO: match wording on the certificate
                meta: "Participant · 2024",
                text: "Team programming contest, used as training for Codeforces and ICPC-style competition.",
                img: "/cp_2024.png",
              },
              {
                title: "Syrian College Programming Contest 2023",
                meta: "Participant · 2023",
                text: "Team programming contest, used as training for Codeforces and ICPC-style competition.",
                img: "/cp_2023.png",
              },
              {
                title: "Syrian College Programming Contest 2022",
                meta: "Participant · 2022",
                text: "Team programming contest, used as training for Codeforces and ICPC-style competition.",
                img: "/cp_2022.png",
              },
            ].map((c) => (
              <div key={c.title} className="border border-line bg-ink-raised rounded overflow-hidden flex flex-col">
                <a href={c.img} target="_blank" rel="noopener" aria-label={`Open ${c.title} certificate`}>
                  <Image
                    src={c.img}
                    alt={`Certificate: ${c.title}`}
                    width={800}
                    height={566}
                    className="w-full object-cover h-auto aspect-[4/3] bg-ink"
                  />
                </a>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-sm text-paper leading-[1.5]">{c.title}</h3>
                  <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer">
                    {c.meta}
                  </span>
                  <p className="text-sm text-paper-dim leading-[1.6]">{c.text}</p>
                  {c.verify && (
                    <a
                      href={c.verify}
                      target="_blank"
                      rel="noopener"
                      className="text-teal border-b border-teal/50 text-sm self-start"
                    >
                      Verify
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        </Section>

        {/* 9. CONTACT */}
        <Section id="contact">
          <Reveal className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-end">
            <div>
              <span className="eyebrow mb-4">// Contact</span>
              <h2 className="font-display font-semibold text-[2.4rem] tracking-tight leading-[1.1]">Contact</h2>
              <p className="mt-4 text-paper-dim text-lg">Available for full-time and remote roles.</p>
              <div className="flex gap-3 mt-8 flex-wrap">
                <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                  Email me <Mail size={16} />
                </a>
                <a
                  href={RESUME_URL}
                  download="Deaa_Naser_CV.pdf"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost"
                >
                  Resume <Download size={16} />
                </a>
              </div>
            </div>
            <ul className="border-t border-line">
              {[
                { h: "Email", v: EMAIL, href: `mailto:${EMAIL}`, icon: <Mail size={16} /> },
                { h: "LinkedIn", v: "deaa-naser", href: LINKEDIN_URL, icon: <SiLinkedin size={16} /> },
                { h: "GitHub", v: "Deaa70", href: GITHUB_URL, icon: <SiGithub size={16} /> },
                {
                  h: "WhatsApp",
                  v: "+963 980 734 524",
                  href: "https://wa.me/+963980734524",
                  icon: <MessageCircle size={16} />,
                },
                { h: "Telegram", v: "@DeaaDev0", href: "https://t.me/DeaaDev0", icon: <Send size={16} /> },
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between py-4 border-b border-line">
                  <span className="font-mono text-xs text-paper-dimmer uppercase tracking-[0.05em]">{item.h}</span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2.5 text-paper text-[0.95rem] hover:text-teal transition-colors"
                  >
                    {item.icon} {item.v}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      </main>

      <footer className="relative py-7 border-t border-line">
        <div className="container-x flex justify-between items-center flex-wrap gap-3 font-mono text-xs text-paper-dimmer">
          <span>© 2026 Deaa Naser. All rights reserved.</span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="text-gradient font-medium">
              &lt;/&gt;
            </span>{" "}
            Homs, Syria
          </span>
        </div>
      </footer>
    </>
  );
}