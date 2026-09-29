import React from "react";
import Image from "next/image";
import { ArrowIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, TelegramIcon, WhatsappIcon } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

import meImage from "@/assets/me.jpg";
import contImage from "@/assets/cont.png";
import appImage from "@/assets/mobile-siraj.png";
import klimateImage from "@/assets/klimate.png";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deaa Naser — Full-Stack Developer, AI Solutions & Product Builder",
  description:
    "Deaa Naser is a Full-Stack Developer and product builder specializing in React, Next.js, Django, Python, React Native, and AI-powered solutions. Creator of Siraj, an AI-driven educational platform.",
  metadataBase: new URL("https://deaa.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar",
    },
  },
  authors: [
    {
      name: "Deaa Naser",
      url: "https://deaa.vercel.app/",
    },
  ],
  creator: "Deaa Naser",
  publisher: "Deaa Naser",
  keywords: [
    "Deaa Naser",
    "Full-Stack Developer",
    "AI Solutions",
    "Product Builder",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Python Developer",
    "React Native Developer",
    "AI Developer",
    "EdTech",
    "Siraj",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deaa.vercel.app/",
    siteName: "Deaa Naser",
    title: "Deaa Naser — Full-Stack Developer, AI Solutions & Product Builder",
    description:
      "Full-Stack Developer building modern web, mobile, backend, and AI-powered products. Creator of Siraj, an AI-driven educational platform.",
    images: [
      {
        url: "/assets/me.jpg",
        width: 1200,
        height: 630,
        alt: "Deaa Naser — Full-Stack Developer, AI Solutions & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deaa Naser — Full-Stack Developer, AI Solutions & Product Builder",
    description:
      "Full-Stack Developer building modern web, mobile, backend, and AI-powered products. Creator of Siraj.",
    images: ["/assets/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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

export default function Home() {
  return (
    <>
      <Navbar lang="en" />
      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[76px] pb-24 border-b border-line">
          {/* diagonal </> texture — echoes the logo mark */}
          <div aria-hidden="true" className="diag-pattern pointer-events-none absolute inset-0"></div>
          <span aria-hidden="true" className="pointer-events-none select-none absolute -top-10 -right-4 md:right-4 font-mono font-medium text-[15rem] md:text-[20rem] leading-none text-gradient opacity-[0.05]">&lt;/&gt;</span>

          <div className="container-x relative grid grid-cols-1 md:grid-cols-[1.25fr_0.85fr] gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.1em] uppercase text-paper-dim border border-line-strong px-3 py-1.5 rounded-full mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-teal to-peach animate-pulse"></span>Open to full-stack & AI roles
              </span>
              <h1 className="font-display font-semibold text-[2.4rem] md:text-[4.1rem] leading-[1.04] tracking-tight">
                I build AI products<br />that ship — <em className="italic text-gradient">not demos.</em>
              </h1>
              <p className="mt-6 text-lg text-paper-dim max-w-[560px] leading-[1.75]">
                I design and own complete intelligent systems: retrieval pipelines, LLM orchestration, the backend and mobile apps around them, and the infrastructure that keeps it all running. Most recently, <strong className="text-paper font-medium">Siraj</strong> — an AI education platform I built solo, from empty repo to production, now used by students across Syria.
              </p>
              <div className="flex flex-wrap gap-4 mt-9">
                <a href="#siraj" className="btn btn-primary">View Siraj case study <ArrowIcon /></a>
                <a href="https://f005.backblazeb2.com/file/siraj-public/deaa_naser_cv.pdf" download="Deaa_Naser_CV.pdf" target="_blank" rel="noopener" className="btn btn-ghost">Resume <DownloadIcon /></a>
              </div>
            </div>
            <div className="relative max-w-[280px] md:max-w-none">
              <div className="diag-top relative border border-line-strong rounded overflow-hidden aspect-[4/5] bg-ink-raised">
                <Image src={meImage} alt="Portrait of Deaa Naser" className="w-full h-full object-cover" priority />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-ink/78 backdrop-blur-sm border border-line p-2.5 font-mono text-xs text-paper-dim tracking-wide">
                  Homs, Syria — Full-Stack & AI Engineer, CEO at Siraj
                </div>
              </div>
              <div className="flex gap-3.5 mt-4 flex-wrap">
                <a href="https://github.com/Deaa70" target="_blank" rel="noopener" aria-label="GitHub" className="w-9 h-9 border border-line-strong rounded-sm flex items-center justify-center text-paper-dim hover:border-teal/50 hover:text-teal transition-colors"><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/deaa-naser-b28573351" target="_blank" rel="noopener" aria-label="LinkedIn" className="w-9 h-9 border border-line-strong rounded-sm flex items-center justify-center text-paper-dim hover:border-teal/50 hover:text-teal transition-colors"><LinkedinIcon /></a>
                <a href="mailto:deaa.work7@gmail.com" aria-label="Email" className="w-9 h-9 border border-line-strong rounded-sm flex items-center justify-center text-paper-dim hover:border-teal/50 hover:text-teal transition-colors"><MailIcon /></a>
                <a href="https://t.me/Deaa0000" target="_blank" rel="noopener" aria-label="Telegram" className="w-9 h-9 border border-line-strong rounded-sm flex items-center justify-center text-paper-dim hover:border-teal/50 hover:text-teal transition-colors"><TelegramIcon /></a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// About</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">Engineering ownership, end to end.</h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-paper-dim text-lg leading-[1.8] mb-5">I don&apos;t work on isolated features — I own systems, start to finish. On Siraj that meant being the person who decides the retrieval architecture on Monday, debugs a React Native crash on Tuesday, and configures swap on the VPS on Wednesday because the build ran out of memory.</p>
              <p className="text-paper-dim text-lg leading-[1.8] mb-5">That range isn&apos;t a side effect of working solo — it&apos;s the point. <strong className="text-paper font-medium">Building an AI product means the model, the data layer, the app, and the infrastructure all have to agree with each other</strong>, and someone has to be responsible for that whole line, not just their slice of it.</p>
              <p className="text-paper-dim text-lg leading-[1.8]">Outside of Siraj, I keep my problem-solving sharp through competitive programming — rated Specialist on Codeforces — which is where a lot of the instinct for &quot;what&apos;s the actually efficient way to do this&quot; comes from.</p>
            </div>
            <ul>
              {[
                { k: "Based in", v: "Homs, Syria" },
                { k: "Education", v: "Homs University" },
                { k: "Building Siraj since", v: "March 2024" },
                { k: "Role", v: "Solo founder & software engineer" },
                { k: "Competitive programming", v: "Codeforces Specialist (~1506)" },
                { k: "Currently", v: "Open to full-stack & AI roles" }
              ].map((item, i) => (
                <li key={i} className="flex justify-between gap-4 py-3.5 border-b border-line first:border-t text-base">
                  <span className="font-mono text-paper-dimmer text-xs tracking-wide uppercase">{item.k}</span>
                  <span className="text-paper text-right">{item.v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        {/* PROOF OF WORK */}
        <Section id="activity">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// Proof of work</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">Consistency, not bursts.</h2>
            <p className="mt-3.5 text-paper-dim text-lg max-w-[620px]">Solo means there&apos;s no team velocity to hide behind — just a commit history. This is seven months of building Siraj, one day at a time.</p>
          </Reveal>
          <Reveal className="diag-top border border-line bg-ink-raised rounded p-8">
            <Image src={contImage} alt="GitHub contribution graph showing daily activity on Siraj over the last 7 months" className="w-full h-auto rounded-sm" />
            <p className="text-sm text-paper-dim mt-4 pt-4 border-t border-line"><b className="text-paper font-medium">1,140 contributions</b> to Siraj in the last 7 months — the day-to-day of building, debugging, and shipping a production AI product solo.</p>
          </Reveal>
        </Section>

        {/* FEATURED CASE STUDY: SIRAJ */}
        <Section id="siraj">
          <Reveal><span className="eyebrow mb-4">// Featured case study</span></Reveal>
          <Reveal className="flex flex-wrap justify-between gap-6 items-end mb-2">
            <h2 className="font-display font-bold text-[3.1rem] tracking-tight">Siraj — AI Education Platform</h2>
            <div className="flex gap-3.5 flex-wrap">
              <a href="https://siraj.sy/" target="_blank" rel="noopener" className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-teal hover:border-teal/50">Teacher platform <ArrowIcon width={13} height={13} /></a>
              <a href="https://play.google.com/store/apps/details?id=com.deaa00.siraj1" target="_blank" rel="noopener" className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-teal hover:border-teal/50">Student app <ArrowIcon width={13} height={13} /></a>
            </div>
          </Reveal>
          <Reveal className="mt-3.5 text-paper-dim text-lg max-w-[620px]">A full-stack AI learning ecosystem for Syrian students in grades 6–12, covering an AI-tutor mobile app for students and a publishing platform for teachers — built and run solo, from the AI layer to the production VPS.</Reveal>

          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line my-12">
            {[
              { n: "Student mobile app", h4: "Learn & get graded, offline or online", p: "An AI teacher in your pocket: curriculum-grounded Q&A, a question bank with AI grading, interactive lessons, and gamified progress — usable with or without a connection." },
              { n: "Teacher web platform", h4: "siraj.sy — publish & earn", p: "Where teachers create and sell courses, quizzes, and study notes into the Syrian market, with an analytics dashboard for sales, subscriptions, and student engagement." },
              { n: "Learning ecosystem", h4: "One backend, two audiences", p: "A shared Django API, AI layer, and data store power both sides of the platform, so content a teacher publishes flows straight into what a student sees." }
            ].map((card, i) => (
              <div key={i} className="corner-cut bg-ink p-6">
                <span className="font-mono text-teal text-xs tracking-[0.08em] uppercase">{card.n}</span>
                <h4 className="font-display text-xl font-semibold mt-2.5">{card.h4}</h4>
                <p className="text-paper-dim text-[0.92rem] mt-2.5 leading-[1.65]">{card.p}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 items-center mb-14">
            <div className="diag-top border border-line rounded overflow-hidden bg-ink-raised">
              <Image src={appImage} alt="Siraj student app home screen" className="w-full h-auto" />
            </div>
            <div>
              <span className="eyebrow mb-3.5">// Product</span>
              <h4 className="font-display text-[1.3rem] font-semibold mb-3">What students actually open every day</h4>
              <p className="text-paper-dim text-[0.95rem] leading-[1.7] max-w-[420px]">The home screen students land on: XP and level progress, streaks, a daily challenge, and live platform stats — designed to make studying feel worth coming back to.</p>
            </div>
          </Reveal>

          <Reveal className="diag-top border border-line bg-ink-raised rounded p-8 mb-16">
            <span className="eyebrow mb-4.5 block">System architecture</span>
            <svg viewBox="0 0 800 400" role="img" aria-labelledby="diagramTitle" className="w-full h-auto">
              <title id="diagramTitle">Siraj system architecture: student app and teacher web both call the Django REST API, which connects to an AI layer (Qdrant plus LLMs) and a data layer (MySQL plus object storage), coordinated by Celery and Redis.</title>
              <defs>
                <linearGradient id="gradAccent" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4ED1C1" />
                  <stop offset="100%" stopColor="#F4A261" />
                </linearGradient>
              </defs>
              <g fill="none" stroke="#4ED1C1" strokeOpacity="0.4" strokeWidth="1.5"><path d="M190,90 V125 H400 V160" /><path d="M610,90 V125 H400 V160" /><path d="M400,230 V260 H210 V290" /><path d="M400,230 V260 H590 V290" /></g>
              <rect x="40" y="20" width="300" height="70" rx="3" fill="#151B24" stroke="#2C3947" /><text x="190" y="50" textAnchor="middle" fill="#E9F1F6" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">STUDENT APP</text><text x="190" y="70" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">React Native · Expo · offline-first</text>
              <rect x="460" y="20" width="300" height="70" rx="3" fill="#151B24" stroke="#2C3947" /><text x="610" y="50" textAnchor="middle" fill="#E9F1F6" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">TEACHER WEB</text><text x="610" y="70" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">siraj.sy · React · TypeScript</text>
              <rect x="250" y="160" width="300" height="70" rx="3" fill="#1B232E" stroke="url(#gradAccent)" strokeOpacity="0.6" /><text x="400" y="190" textAnchor="middle" fill="#4ED1C1" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">DJANGO REST API</text><text x="400" y="210" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">Celery workers · Redis broker</text>
              <rect x="40" y="290" width="340" height="90" rx="3" fill="#151B24" stroke="#F4A261" strokeOpacity="0.5" /><text x="210" y="320" textAnchor="middle" fill="#F4A261" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">AI LAYER</text><text x="210" y="340" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">Qdrant + LLMs (RAG, grading,</text><text x="210" y="356" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">OCR, agentic tool-calling)</text>
              <rect x="420" y="290" width="340" height="90" rx="3" fill="#151B24" stroke="#2C3947" /><text x="590" y="320" textAnchor="middle" fill="#E9F1F6" fontFamily="IBM Plex Mono" fontSize="14" fontWeight="500">DATA & STORAGE</text><text x="590" y="340" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">MySQL · Redis cache ·</text><text x="590" y="356" textAnchor="middle" fill="#6B7C86" fontFamily="IBM Plex Mono" fontSize="11">Backblaze S3 object storage</text>
            </svg>
            <p className="text-sm text-paper-dim mt-4 pt-4 border-t border-line"><b className="text-paper font-medium">One shared API, two frontends.</b> Both the student app and the teacher platform talk to the same Django REST API. Latency-sensitive work — grading, OCR, report generation — is pushed onto Celery workers so neither app ever blocks on an LLM call.</p>
          </Reveal>

          {[
            { tag: "AI engineering", h4: "The core intelligence layer", list: ["Retrieval-augmented generation — answers are grounded in the actual curriculum content rather than the model's general knowledge, using a vector search backend tuned for Arabic educational text.", "Curriculum-aware retrieval — content is organized and searched in a way that respects how grade levels and subjects actually differ from one another.", "Query understanding & routing — incoming questions are classified by intent and routed to the retrieval and prompting strategy best suited to that kind of request.", "Agentic assistant mode — a higher-tier chat mode that can chain multiple steps and tool calls together instead of answering in a single pass.", "LLM orchestration — model providers were selected through direct, empirical comparison on cost, quality, and latency rather than defaults, with room to swap providers as the market moves.", "Structured AI grading — subject-aware grading logic, since exact-answer subjects and rubric-based subjects need fundamentally different evaluation approaches.", "Vision & document understanding — a vision-model pipeline reads handwritten student answers and ingests printed textbooks into the same knowledge base."] },
            { tag: "Mobile engineering", h4: "React Native, built offline-first", list: ["Offline-first content — local persistence with an offline/online sync pattern, so lessons and progress work without a connection and reconcile once one returns.", "Custom markdown & math renderer — a purpose-built renderer for mixed Arabic RTL text and LaTeX math, since general-purpose libraries aren't built for that combination.", "Typewriter streaming — AI responses stream in token-by-token with rendering tuned for lower-end Android devices.", "Device security layer — screenshot/recording protection and compromised-device detection gate access to paid content.", "Custom download management — offline caching of lesson assets, with progress tracking kept out of the render path for smooth scrolling.", "State & data layer — Zustand for shared client state, TanStack Query for server state, caching, and infinite lists.", "Styling & UI — NativeWind for Tailwind-style styling, Gluestack UI as the component system.", "Native integrations — push notifications, file system access, and security checks wired through Expo config plugins."] },
            { tag: "Backend & infrastructure", h4: "Production, run solo", list: ["Django REST Framework — a single API surface shared by the mobile app and the teacher web platform.", "Async job processing — every AI-bound operation (grading, OCR, report generation) runs in the background instead of blocking a request.", "Relational database — primary data store, with schema and queries tuned for reporting and analytics workloads.", "Docker + Dokploy — containerized deployment on a self-managed VPS, no managed PaaS in the loop.", "Cloudflare — CDN and DNS in front of the VPS.", "Object storage — for media assets and automated backups."] }
          ].map((block, i) => (
            <Reveal key={i} className="mb-14">
              <div className="flex items-baseline gap-3.5 mb-5.5">
                <span className="font-mono text-xs tracking-[0.08em] uppercase text-ink bg-gradient-to-r from-teal to-peach px-2 py-1 rounded-sm">{block.tag}</span>
                <h4 className="font-display text-[1.3rem] font-semibold">{block.h4}</h4>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {block.list.map((item, j) => (
                  <li key={j} className="pl-4.5 relative text-paper-dim text-[0.95rem] leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-px before:bg-teal/50">
                    <strong className="text-paper font-medium">{item.split('—')[0]}</strong> — {item.split('—').slice(1).join('—')}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal>
            <p className="font-mono text-xs tracking-[0.08em] uppercase text-paper-dim mb-5.5">Engineering challenges — problem → approach → outcome</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
              {[
                { p: "Generic LLM answers ignored what students were actually being taught.", a: "Grounded every answer in the real curriculum through a retrieval layer, rather than relying on the model's general training.", o: "Traded some architectural simplicity for a large, measurable jump in curriculum accuracy." },
                { p: "Arabic math content broke standard renderers — mixed RTL text, LaTeX, and inconsistent model output.", a: "Built a rendering pipeline specifically for mixed Arabic and math content, rather than forcing a general-purpose library to handle it.", o: "Owned the rendering layer end to end instead of fighting a third-party tool never designed for this combination." },
                { p: "AI grading and report generation were too slow to run inline on a request.", a: "Moved every AI-bound job onto background processing so the app never waits on a model call.", o: "Chose async-by-default even at solo scale, prioritizing response latency over infrastructure simplicity." },
                { p: "Students across Syria often have unreliable or no connectivity.", a: "Built local-first storage so lessons and progress work offline and sync automatically once a connection returns.", o: "Treated offline support as core architecture from day one, not a retrofit." }
              ].map((chal, i) => (
                <div key={i} className="bg-ink p-7 flex flex-col gap-3.5">
                  <div className="flex gap-3 items-start">
                    <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-0.5 w-[78px] flex-shrink-0">Problem</span>
                    <p className="text-sm text-paper leading-[1.6]">{chal.p}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-signal pt-0.5 w-[78px] flex-shrink-0">Approach</span>
                    <p className="text-sm text-paper-dim leading-[1.6]">{chal.a}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-peach pt-0.5 w-[78px] flex-shrink-0">Outcome</span>
                    <p className="text-sm text-paper-dim leading-[1.6]">{chal.o}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="skills">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// Capabilities</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">What I actually work in</h2>
          </Reveal>
          <Reveal className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-line">
            {[
              { title: "AI Engineering", items: ["RAG systems", "LLM applications", "Vector databases", "Embeddings", "AI agents", "Prompt engineering", "Vision models"] },
              { title: "Backend Engineering", items: ["Python", "Django & DRF", "REST API design", "Celery", "Redis", "Database design"] },
              { title: "Frontend Engineering", items: ["React", "TypeScript", "Modern React ecosystem", "Tailwind CSS"] },
              { title: "Mobile Engineering", items: ["React Native", "Expo", "Offline-first apps"] },
              { title: "Infrastructure", items: ["Docker", "Linux VPS", "Cloudflare", "Deployment automation"] }
            ].map((col, i) => (
              <div key={i} className="p-6 md:py-6 md:pr-5 md:pl-1.5 border-b md:border-b-0 md:border-r border-line last:border-r-0">
                <h4 className="font-mono text-xs tracking-[0.06em] uppercase text-teal mb-4">{col.title}</h4>
                <ul>
                  {col.items.map((item, j) => (
                    <li key={j} className="text-paper-dim text-[0.92rem] py-1.5 border-b border-dashed border-line last:border-0">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </Section>

        <Section id="experience">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// Experience</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">One role, full ownership</h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
            <div className="font-mono text-xs text-paper-dimmer">Mar 2024 — Present</div>
            <div>
              <div className="mb-1.5">
                <h4 className="font-display text-[1.4rem] font-semibold">Founder & Software Engineer — Siraj</h4>
                <div className="font-mono text-xs text-paper-dimmer">AI education platform · Syria</div>
              </div>
              <ul className="mt-5">
                {[
                  "Product architecture — defined the system end to end: AI layer, backend, mobile app, teacher platform, and how they connect.",
                  "Technical decisions — chose and validated the stack and model providers through direct, empirical comparison rather than defaults.",
                  "Full-stack development — built the Django backend, the siraj.sy teacher platform, and the React Native student app.",
                  "AI system design — built the retrieval pipeline, intent routing, agentic assistant mode, and AI grading pipeline from scratch.",
                  "Infrastructure & production ops — self-managed VPS, Docker deployments, Cloudflare, backups, and a self-hosted mobile build pipeline.",
                  "Shipped and live — in production on siraj.sy and Google Play, serving 304+ students ."
                ].map((exp, i) => (
                  <li key={i} className="py-3 border-t border-line text-paper-dim text-[0.95rem] leading-[1.6] grid grid-cols-[22px_1fr] gap-2.5 last:border-b last:border-line">
                    <span className="font-mono text-peach text-xs">{`0${i + 1}`}</span>
                    <p><strong className="text-paper font-medium">{exp.split('—')[0]}</strong> — {exp.split('—').slice(1).join('—')}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        <Section id="philosophy">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// How I work</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">I don&apos;t just write code. I design systems.</h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
            {[
              { n: "01", h4: "Problem solving", p: "I look for the smallest change that actually fixes the problem — not the most impressive one. Surgical beats sweeping, almost every time." },
              { n: "02", h4: "Architecture decisions", p: "Every stack and model choice is made against real constraints — cost, latency, a team of one — and checked against alternatives before it ships." },
              { n: "03", h4: "Performance optimization", p: "Anything latency-sensitive runs async by default. I profile before I optimize; assumptions about what's slow are usually wrong." },
              { n: "04", h4: "Production reliability", p: "Offline-first for unreliable networks, staged pipelines for heavy jobs, and infrastructure I understand well enough to fix myself at 2am." }
            ].map((phil, i) => (
              <div key={i} className="corner-cut bg-ink p-7">
                <span className="font-mono text-peach/70 text-sm">{phil.n}</span>
                <h4 className="font-display text-lg font-semibold mt-3.5 mb-2.5">{phil.h4}</h4>
                <p className="text-paper-dim text-sm leading-[1.65]">{phil.p}</p>
              </div>
            ))}
          </Reveal>
        </Section>

        <Section id="projects">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// Other builds</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">Smaller projects</h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="diag-top border border-line rounded overflow-hidden bg-ink-raised">
              <div className="relative aspect-video bg-ink-raised-2 overflow-hidden">
                <Image src={klimateImage} alt="Klimate weather app screenshot" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5.5">
                <h4 className="font-display text-lg font-semibold">Klimate</h4>
                <p className="text-paper-dim text-sm mt-2.5 leading-[1.6]">A real-time weather app with location-based forecasts and city search, built to be fast and responsive rather than feature-heavy.</p>
                <div className="mt-3.5 font-mono text-xs text-paper-dimmer tracking-wide">Vite · React · TypeScript · Tailwind CSS · TanStack Query · Redux</div>
                <a href="https://weather-app-8yo1.vercel.app/" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 mt-4 font-mono text-xs text-teal border-b border-teal/50 pb-0.5">Live demo <ArrowIcon width={13} height={13} /></a>
              </div>
            </div>
            <div className="diag-top border border-line rounded p-5.5 flex flex-col justify-center items-start gap-2.5">
              <h4 className="font-display text-lg font-semibold">More on GitHub</h4>
              <p className="text-paper-dim text-sm leading-[1.6]">Smaller experiments, algorithm practice, and work in progress live in my GitHub — Siraj itself is closed-source given its scale and users.</p>
              <a href="https://github.com/Deaa70" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-mono text-xs text-teal border-b border-teal/50 pb-0.5">github.com/Deaa70 <ArrowIcon width={13} height={13} /></a>
            </div>
          </Reveal>
        </Section>

        <Section id="contact">
          <Reveal className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-end">
            <div>
              <span className="eyebrow mb-4">// Get in touch</span>
              <h2 className="font-display font-semibold text-[3rem] tracking-tight leading-[1.1]">Have something in mind? <em className="italic text-gradient">Let&apos;s build it.</em></h2>
              <p className="mt-4.5 text-paper-dim text-lg max-w-[480px] leading-[1.75]">If you want to build something modern or AI-driven — a real, production-ready product, not just a demo — I take it from idea to shipped. Get in touch and let&apos;s talk about it.</p>
              <div className="flex gap-4 mt-8 flex-wrap">
                <a href="mailto:deaa.work7@gmail.com" className="btn btn-primary">Email me <MailIcon /></a>
                <a href="https://f005.backblazeb2.com/file/siraj-public/deaa_naser_cv.pdf" download="Deaa_Naser_CV.pdf" target="_blank" rel="noopener" className="btn btn-ghost">Resume <DownloadIcon /></a>
              </div>
            </div>
            <ul className="border-t border-line">
              {[
                { h: "Email", v: "deaa.work7@gmail.com", href: "mailto:deaa.work7@gmail.com", icon: <MailIcon /> },
                { h: "LinkedIn", v: "deaa-naser", href: "https://www.linkedin.com/in/deaa-naser-b28573351", icon: <LinkedinIcon /> },
                { h: "GitHub", v: "Deaa70", href: "https://github.com/Deaa70", icon: <GithubIcon /> },
                { h: "WhatsApp", v: "+963 980 734 524", href: "https://wa.me/+963980734524", icon: <WhatsappIcon /> },
                { h: "Telegram", v: "@Deaa0000", href: "https://t.me/Deaa0000", icon: <TelegramIcon /> }
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between py-4 border-b border-line">
                  <span className="font-mono text-xs text-paper-dimmer uppercase tracking-[0.05em]">{item.h}</span>
                  <a href={item.href} target="_blank" rel="noopener" className="flex items-center gap-2.5 text-paper text-[0.95rem] hover:text-teal transition-colors">
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
            <span aria-hidden="true" className="text-gradient font-medium">&lt;/&gt;</span> Homs, Syria
          </span>
        </div>
      </footer>
    </>
  );
}