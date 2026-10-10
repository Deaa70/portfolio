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

const RESUME_URL =
  "https://f005.backblazeb2.com/file/siraj-public/deaa_naser_cv.pdf";
const GITHUB_URL = "https://github.com/Deaa70";
const LINKEDIN_URL = "https://www.linkedin.com/in/deaa-naser-b28573351";
const EMAIL = "deaa.work7@gmail.com";

export const SiLinkedin = ({ size }: { size: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export const metadata: Metadata = {
  title: "ضياء الناصر - مهندس برمجيات Full-Stack، تطبيقات الذكاء الاصطناعي",
  description:
    "مهندس برمجيات Full-Stack يبني تطبيقات الذكاء الاصطناعي باستخدام React وNext.js وTypeScript وPython وDjango وFastAPI وReact Native. مؤسس منصة سراج.",
  metadataBase: new URL("https://deaa.vercel.app"),
  alternates: { canonical: "/ar", languages: { en: "/", ar: "/ar" } },
  authors: [{ name: "ضياء الناصر", url: "https://deaa.vercel.app/ar" }],
  creator: "ضياء الناصر",
  publisher: "ضياء الناصر",
  openGraph: {
    type: "website",
    locale: "ar_SY",
    url: "https://deaa.vercel.app/ar",
    siteName: "ضياء الناصر",
    title: "ضياء الناصر - مهندس برمجيات Full-Stack، تطبيقات الذكاء الاصطناعي",
    description:
      "مهندس برمجيات Full-Stack يبني تطبيقات الذكاء الاصطناعي باستخدام React وNext.js وTypeScript وPython وDjango وFastAPI وReact Native.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ضياء الناصر - مهندس برمجيات Full-Stack، تطبيقات الذكاء الاصطناعي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ضياء الناصر - مهندس برمجيات Full-Stack، تطبيقات الذكاء الاصطناعي",
    description:
      "مهندس برمجيات Full-Stack يبني تطبيقات الذكاء الاصطناعي باستخدام React وNext.js وTypeScript وPython وDjango وFastAPI وReact Native.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

const Section = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="relative py-24 border-b border-line last:border-b-0">
    <div className="container-x grid grid-cols-1 md:grid-cols-[48px_1fr] md:gap-x-8">
      <div className="hidden md:block relative spine">
        <span className="absolute top-0 start-[19px] w-2.5 h-2.5 rounded-full bg-flame shadow-[0_0_0_4px_rgba(228,168,85,0.14)]"></span>
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

export default function ArabicHome() {
  return (
    <>
      <Navbar lang="ar" />
      <main id="top" style={{ direction: "rtl" }}>
        {/* 1. HEADER */}
        <section className="relative overflow-hidden pt-[76px] pb-24 border-b border-line">
          <div className="container-x relative grid grid-cols-1 md:grid-cols-[1.25fr_0.85fr] gap-16 items-start">
            <div>
              <h1 className="font-display font-semibold text-[2.6rem] md:text-[3.6rem] leading-[1.2] tracking-tight">
                ضياء الناصر
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-paper">
                مهندس برمجيات Full-Stack، تطبيقات الذكاء الاصطناعي
              </p>
              <p
                className="mt-6 font-mono text-[0.82rem] text-paper-dim tracking-wide leading-[1.9] max-w-[560px]"
                style={{ direction: "ltr" }}>
                React · Next.js · TypeScript · Python · Django · FastAPI · React
                Native · LLM/RAG · Docker
              </p>
              <p className="mt-5 text-paper">
                متاح للعمل عن بُعد أو الانتقال (الخليج/الشرق الأوسط)
              </p>
              <p className="mt-1 font-mono text-xs text-paper-dimmer tracking-wide">
                حمص، سوريا
              </p>
              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href={RESUME_URL}
                  download="Deaa_Naser_CV.pdf"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary">
                  السيرة الذاتية <Download size={16} />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost">
                  GitHub <SiGithub width={16} height={16} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost">
                  LinkedIn <SiLinkedin size={16} />
                </a>
                <a href={`mailto:${EMAIL}`} className="btn btn-ghost">
                  البريد <Mail size={16} />
                </a>
              </div>
            </div>
            <div className="relative max-w-[280px] md:max-w-none">
              <div className="relative border border-line-strong rounded overflow-hidden aspect-[4/5] bg-ink-raised">
                <Image
                  src={meImage}
                  alt="صورة ضياء الناصر"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPERIENCE */}
        <Section id="experience">
          <Reveal className="mb-10 max-w-[720px]">
            <span className="eyebrow mb-4">// الخبرة</span>
          </Reveal>

          {/* Entry 1 — Siraj */}
          <Reveal className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div className="font-mono text-xs text-paper-dimmer">
              أكتوبر 2025 — حتى الآن · سوريا
            </div>
            <div>
              <h4 className="font-display text-[1.4rem] font-semibold">
                مهندس برمجيات ومؤسس، سراج
              </h4>
              <p className="mt-3 text-paper-dim">
                منصة تعليمية بالذكاء الاصطناعي للصفوف 6-12. مهندس واحد.
              </p>
              <ul className="mt-5">
                {[
                  "بناء الواجهة الخلفية باستخدام Django REST، ومنصة المعلم على الويب بـ React/Next (siraj.sy)، وتطبيق الطالب بـ React Native.",
                  "تصميم وبناء نظام RAG، وتوجيه النية، والتصحيح بالذكاء الاصطناعي، ومعالجة OCR (Qdrant، ومزودو LLM، وCelery، وRedis).",
                  "نشر وتشغيل بيئة الإنتاج على VPS تُدار ذاتياً (Docker، وDokploy، وCloudflare، ونسخ احتياطية تلقائية).",
                  "مباشر على Google Play وsiraj.sy، مع أكثر من 500 طالب.",
                ].map((exp, i) => (
                  <li
                    key={i}
                    className="py-3 border-t border-line text-paper-dim text-[0.95rem] leading-[1.7] grid grid-cols-[22px_1fr] gap-2.5 last:border-b last:border-line">
                    <span className="font-mono text-flame text-xs">{`0${i + 1}`}</span>
                    <p>{exp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Entry 2 — Problem solving practice */}
          <Reveal className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 mt-12 pt-12 border-t border-line">
            <div className="font-mono text-xs text-paper-dimmer">
              أكتوبر 2021 — حتى الآن
            </div>
            <div>
              <h4 className="font-display text-[1.4rem] font-semibold">
                البرمجة التنافسية وحل المشكلات
              </h4>
              <ul className="mt-5">
                {[
                  "حل مسائل خوارزميات على Codeforces وLeetCode منذ أكتوبر 2021.",
                  "حوالي 1,500 مسألة محلولة على Codeforces في هياكل البيانات والخوارزميات.",
                  "التدرّب على حل مسائل SQL إلى جانب العمل على الخوارزميات.",
                  "تعلّم عدة لغات برمجة من خلال الممارسة التنافسية المنتظمة.",
                ].map((exp, i) => (
                  <li
                    key={i}
                    className="py-3 border-t border-line text-paper-dim text-[0.95rem] leading-[1.7] grid grid-cols-[22px_1fr] gap-2.5 last:border-b last:border-line">
                    <span className="font-mono text-flame text-xs">{`0${i + 1}`}</span>
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
            <span className="eyebrow mb-4">// التعليم</span>
          </Reveal>
          <Reveal>
            {/* TODO: تأكيد اسم الشهادة وسنة التخرج كما هما مكتوبان على الشهادة. */}
            <p className="text-paper-dim">
              تقنية المعلومات، هندسة البرمجيات وتطبيقات الذكاء الاصطناعي،{" "}
              <span className="text-white">جامعة حمص</span>، أكتوبر 2025.
            </p>
          </Reveal>
        </Section>

        {/* 4. SKILLS */}
        {/* 4. SKILLS */}
        <Section id="skills">
          <Reveal className="mb-10 max-w-[720px]">
            <span className="eyebrow mb-4">// المهارات</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-5 rtl">
            {[
              {
                label: "الواجهة الأمامية",
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
                label: "الواجهة الخلفية",
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
                label: "الذكاء الاصطناعي",
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
                label: "البيانات",
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
                label: "تطبيقات الجوال",
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
                label: "البنية التحتية",
                items: [
                  "Docker",
                  "Linux VPS",
                  "Cloudflare",
                  "deployment automation",
                  "DNS",
                ],
              },
              {
                label: "الممارسات",
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
                className="grid grid-cols-1 rtl md:grid-cols-[160px_1fr] gap-3 items-baseline border-t border-line pt-4">
                <span className="font-mono text-xs tracking-[0.06em] uppercase text-flame">
                  {group.label}
                </span>
                <div
                  className="flex flex-wrap gap-2"
                  style={{ direction: "rtl" }}>
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
            <span className="eyebrow mb-4">// المشاريع</span>
          </Reveal>
          <Reveal className="flex flex-wrap justify-between gap-6 items-end mb-2">
            <h2 className="font-display font-bold text-[2.6rem] tracking-tight">
              سراج
            </h2>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="https://siraj.sy/"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-flame hover:border-flame-line">
                منصة المعلم <ArrowRight size={13} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.deaa00.siraj1"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-flame hover:border-flame-line">
                تطبيق الطالب <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>
          <Reveal className="mt-3.5 text-paper-dim text-lg max-w-[640px] leading-[1.8]">
            منصة تعلم متنقلة لطلاب سوريا من الصف السادس حتى الثاني عشر، تغطي
            المنهج الوطني. يدرس الطلاب ويتدربون ويطرحون الأسئلة في تطبيق واحد،
            بينما يُدار المحتوى من خلال لوحة تحكم على الويب تعمل على نفس الواجهة
            الخلفية.
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {[
              {
                k: "الجمهور",
                v: "طلاب يستعدون للامتحانات المدرسية والبكالوريا في سوريا، غالباً باتصال غير مستقر. مادة دراسية، وتدريب على نمط الامتحان، ومعلّم ذكاء اصطناعي في تطبيق واحد.",
              },
              {
                k: "تعلّمت",
                v: "التصميم ينطلق من القيود الحقيقية (الاتصال، وزمن الاستجابة، والتكلفة) من اليوم الأول، لا كإضافة لاحقة.",
              },
              {
                k: "يشمل",
                v: "مذكرات دراسية داخل عارض PDF · بنك أسئلة مع الحلول والتحقق من الإجابة (صورة أو كتابة) · دورات · معلّم ذكاء اصطناعي مرتبط بالمنهج · XP ومستويات وسلاسل وترتيب · تقارير دراسة",
                wide: true,
              },
              {
                k: "يستخدم",
                v: "واجهة Django REST مع عمّال Celery لمهام الذكاء الاصطناعي · RAG هجين (استرجاع كثيف ومتناثر) على محتوى المنهج · تصحيح بالذكاء الاصطناعي وفق معايير · تطبيق React Native يعمل دون اتصال · VPS يُدار ذاتياً مع Docker.",
                wide: true,
              },
            ].map((row) => (
              <div
                key={row.k}
                className={`flex gap-3 items-start ${row.wide ? "md:col-span-2" : ""}`}>
                <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-1 w-[78px] flex-shrink-0">
                  {row.k}
                </span>
                <p className="text-paper-dim text-[0.95rem] leading-[1.75]">
                  {row.v}
                </p>
              </div>
            ))}
          </Reveal>

          {/* Screenshot + architecture, sized down */}
          <Reveal className="grid grid-cols-1 md:grid-cols-[238px_1fr] gap-8 items-start mt-12">
            <div className="border border-line rounded overflow-hidden bg-ink-raised">
              <Image
                src={appImage}
                alt="الشاشة الرئيسية لتطبيق سراج للطلاب"
                className="w-full h-auto"
              />
            </div>
            <div className="border border-line bg-ink-raised rounded p-5">
              <span className="eyebrow mb-3 block">معمارية النظام</span>
              <svg
                viewBox="0 0 800 400"
                role="img"
                aria-labelledby="diagramTitle"
                className="w-full h-auto">
                <title id="diagramTitle">
                  معمارية سراج: تطبيق الطالب ومنصة المعلم يتصلان بواجهة Django
                  REST API، والتي تتكامل مع طبقة الذكاء الاصطناعي (Qdrant
                  والنماذج اللغوية) وطبقة البيانات (MySQL وتخزين الكائنات)،
                  وتُدار المهام عبر Celery وRedis.
                </title>
                <g fill="none" stroke="#7A5A2E" strokeWidth="1.5">
                  <path d="M190,90 V125 H400 V160" />
                  <path d="M610,90 V125 H400 V160" />
                  <path d="M400,230 V260 H210 V290" />
                  <path d="M400,230 V260 H590 V290" />
                </g>
                <rect
                  x="40"
                  y="20"
                  width="300"
                  height="70"
                  rx="3"
                  fill="#151821"
                  stroke="#3a3f4d"
                />
                <text
                  x="190"
                  y="50"
                  textAnchor="middle"
                  fill="#ECE7DD"
                  fontFamily="IBM Plex Mono"
                  fontSize="14"
                  fontWeight="500">
                  تطبيق الطالب
                </text>
                <text
                  x="190"
                  y="70"
                  textAnchor="middle"
                  fill="#9C978F"
                  fontFamily="IBM Plex Mono"
                  fontSize="11">
                  React Native · Expo · يعمل دون اتصال
                </text>
                <rect
                  x="460"
                  y="20"
                  width="300"
                  height="70"
                  rx="3"
                  fill="#151821"
                  stroke="#3a3f4d"
                />
                <text
                  x="610"
                  y="50"
                  textAnchor="middle"
                  fill="#ECE7DD"
                  fontFamily="IBM Plex Mono"
                  fontSize="14"
                  fontWeight="500">
                  منصة المعلم
                </text>
                <text
                  x="610"
                  y="70"
                  textAnchor="middle"
                  fill="#9C978F"
                  fontFamily="IBM Plex Mono"
                  fontSize="11">
                  siraj.sy · React · TypeScript
                </text>
                <rect
                  x="250"
                  y="160"
                  width="300"
                  height="70"
                  rx="3"
                  fill="#1B1F2A"
                  stroke="#E4A855"
                  strokeOpacity="0.5"
                />
                <text
                  x="400"
                  y="190"
                  textAnchor="middle"
                  fill="#E4A855"
                  fontFamily="IBM Plex Mono"
                  fontSize="14"
                  fontWeight="500">
                  Django REST API
                </text>
                <text
                  x="400"
                  y="210"
                  textAnchor="middle"
                  fill="#9C978F"
                  fontFamily="IBM Plex Mono"
                  fontSize="11">
                  Celery workers · Redis broker
                </text>
                <rect
                  x="40"
                  y="290"
                  width="340"
                  height="90"
                  rx="3"
                  fill="#151821"
                  stroke="#6FA8A0"
                  strokeOpacity="0.5"
                />
                <text
                  x="210"
                  y="320"
                  textAnchor="middle"
                  fill="#6FA8A0"
                  fontFamily="IBM Plex Mono"
                  fontSize="14"
                  fontWeight="500">
                  طبقة الذكاء الاصطناعي
                </text>
                <text
                  x="210"
                  y="340"
                  textAnchor="middle"
                  fill="#9C978F"
                  fontFamily="IBM Plex Mono"
                  fontSize="11">
                  Qdrant + LLMs (RAG، التصحيح،
                </text>
                <text
                  x="210"
                  y="356"
                  textAnchor="middle"
                  fill="#9C978F"
                  fontFamily="IBM Plex Mono"
                  fontSize="11">
                  OCR، واستدعاء الأدوات)
                </text>
                <rect
                  x="420"
                  y="290"
                  width="340"
                  height="90"
                  rx="3"
                  fill="#151821"
                  stroke="#3a3f4d"
                />
                <text
                  x="590"
                  y="320"
                  textAnchor="middle"
                  fill="#ECE7DD"
                  fontFamily="IBM Plex Mono"
                  fontSize="14"
                  fontWeight="500">
                  البيانات والتخزين
                </text>
                <text
                  x="590"
                  y="340"
                  textAnchor="middle"
                  fill="#9C978F"
                  fontFamily="IBM Plex Mono"
                  fontSize="11">
                  MySQL · Redis Cache ·
                </text>
                <text
                  x="590"
                  y="356"
                  textAnchor="middle"
                  fill="#9C978F"
                  fontFamily="IBM Plex Mono"
                  fontSize="11">
                  Backblaze S3
                </text>
              </svg>
            </div>
          </Reveal>

          {/* Contribution graph */}
          <Reveal className="mt-12">
            <div className="border border-line bg-ink-raised rounded p-5">
              <Image
                src={contImage}
                alt="رسم بياني لمساهمات GitHub على مستودع سراج"
                className="w-full h-auto rounded-sm"
              />
              <p className="text-xs text-paper-dim mt-3 pt-3 border-t border-line">
                1,140 مساهمة في سراج خلال 7 أشهر
              </p>
            </div>
          </Reveal>

          {/* Collapsed technical detail */}
          <Reveal className="mt-14">
            <details className="border-t border-line py-5">
              <summary className="cursor-pointer font-mono text-xs tracking-[0.1em] uppercase text-flame">
                هندسة الذكاء الاصطناعي
              </summary>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {[
                  "RAG — إجابات مرتبطة بالمنهج الفعلي عبر بحث متجهي مهيأ للنصوص التعليمية العربية.",
                  "استرجاع مرتبط بالمنهج — بحث منفصل لكل صف ومادة كمساحات مستقلة.",
                  "توجيه الاستعلام — تصنيف السؤال حسب النية وتوجيهه إلى استراتيجية الاسترجاع والتلقين المناسبة.",
                  "مساعد متعدد الخطوات — نمط يربط عدة خطوات واستدعاءات أدوات بدلاً من الإجابة في مرور واحد.",
                  "إدارة النماذج — اختيار المزودين عبر مقارنة عملية للتكلفة والجودة وزمن الاستجابة، مع إمكانية التبديل.",
                  "تصحيح منظم — منطق يراعي نوع المادة؛ الإجابات المحددة والأسئلة المعيارية تُقيَّم بطرق مختلفة.",
                  "مسار الرؤية — قراءة إجابات الطلاب المكتوبة بخط اليد وإدخال الكتب المطبوعة إلى قاعدة المعرفة.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="ps-4.5 relative text-paper-dim text-[0.95rem] leading-[1.7] before:content-[''] before:absolute before:start-0 before:top-2.5 before:w-1.5 before:h-px before:bg-flame-line">
                    {item}
                  </li>
                ))}
              </ul>
            </details>

            <details className="border-t border-line py-5">
              <summary className="cursor-pointer font-mono text-xs tracking-[0.1em] uppercase text-flame">
                هندسة تطبيقات الجوال
              </summary>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {[
                  "محتوى يعمل دون اتصال — تخزين محلي مع مزامنة عند عودة الاتصال؛ الدروس والتقدم يعملان دون اتصال.",
                  "عارض مخصص للنص والرياضيات — مبني خصيصاً للنص العربي RTL مع LaTeX، وهو ما لا تدعمه المكتبات العامة.",
                  "بث تدريجي — إجابات الذكاء الاصطناعي تظهر تدريجياً وفق تحسين للأجهزة الأندرويد المحدودة.",
                  "أمان الجهاز — منع لقطات الشاشة والتسجيل واكتشاف الأجهزة المخترقة لحماية المحتوى المدفوع.",
                  "إدارة التنزيلات — تخزين أصول الدروس محلياً مع إبقاء تتبع التقدم خارج مسار العرض.",
                  "الحالة والبيانات — Zustand لحالة العميل، وTanStack Query لبيانات الخادم والتخزين المؤقت.",
                  "التنسيق والواجهة — NativeWind لتنسيق بنمط Tailwind، وGluestack UI كنظام مكونات.",
                  "تكاملات أصلية — إشعارات فورية، والوصول إلى نظام الملفات، وفحوصات الأمان عبر Expo config plugins.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="ps-4.5 relative text-paper-dim text-[0.95rem] leading-[1.7] before:content-[''] before:absolute before:start-0 before:top-2.5 before:w-1.5 before:h-px before:bg-flame-line">
                    {item}
                  </li>
                ))}
              </ul>
            </details>

            <details className="border-t border-b border-line py-5">
              <summary className="cursor-pointer font-mono text-xs tracking-[0.1em] uppercase text-flame">
                الواجهة الخلفية والبنية التحتية
              </summary>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {[
                  "Django REST Framework — واجهة API واحدة يشاركها تطبيق الجوال ومنصة المعلم.",
                  "معالجة غير متزامنة — التصحيح وOCR وإنشاء التقارير تُنفَّذ في الخلفية ولا توقف الطلب.",
                  "قاعدة بيانات علائقية — المخزن الأساسي، مع مخطط واستعلامات مهيأة للتقارير والتحليلات.",
                  "Docker + Dokploy — نشر معزول على VPS يُدار ذاتياً، دون PaaS.",
                  "Cloudflare — CDN وDNS أمام الخادم.",
                  "تخزين الكائنات — أصول الوسائط والنسخ الاحتياطية التلقائية.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="ps-4.5 relative text-paper-dim text-[0.95rem] leading-[1.7] before:content-[''] before:absolute before:start-0 before:top-2.5 before:w-1.5 before:h-px before:bg-flame-line">
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
            <span className="eyebrow mb-4">// مشروع</span>
          </Reveal>

          <Reveal className="flex flex-wrap justify-between gap-6 items-end mb-2">
            <h2 className="font-display font-bold text-[2.6rem] tracking-tight">
              مولّد الاختبارات
            </h2>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="https://exam-generator.siraj.sy/"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-flame hover:border-flame-line">
                الأداة <ArrowRight size={13} />
              </a>
              <a
                href="https://exam-generator.siraj.sy/how-it-works"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-flame hover:border-flame-line">
                كيف يعمل <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>

          <Reveal className="mt-3.5 text-paper-dim text-lg max-w-[640px] leading-[1.8]">
            أداة مبنية بـ Next.js وFastAPI تتيح للمعلمين العرب إنشاء أوراق
            اختبار بنصوص غنية ومعادلات LaTeX وصور، ثم تصديرها كملفات PDF جاهزة
            للطباعة بمقاس A4.
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {[
              {
                k: "الجمهور",
                v: "معلمون عرب يحتاجون إلى أوراق اختبار بتنسيق RTL ومعادلات LaTeX وصور لكل سؤال، مع تصديرها كملفات PDF.",
              },
              {
                k: "تعلّمت",
                v: "مسارات العرض تفشل بصمت — يجب التحقق من طبقة الرياضيات قبل إصدار المخرجات، لا افتراض نجاحها.",
              },
              {
                k: "يشمل",
                v: "نموذج من صفحة واحدة مع تحقق Zod · محرر أسئلة غني مع MathLive · تبديل عربي/إنجليزي لكل سؤال · رفع صورة لكل سؤال · إحصاءات توليد مباشرة · واجهة خلفية محدودة بمعدل الطلبات",
                wide: true,
              },
              {
                k: "يستخدم",
                v: "واجهة أمامية بـ Next.js App Router · واجهة خلفية بـ FastAPI · MathJax 3 داخل Chromium بدون واجهة (Playwright) · إحصاءات SQLite · تحديد معدل لكل IP في الذاكرة.",
                wide: true,
              },
            ].map((row) => (
              <div
                key={row.k}
                className={`flex gap-3 items-start ${row.wide ? "md:col-span-2" : ""}`}>
                <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-1 w-[78px] flex-shrink-0">
                  {row.k}
                </span>
                <p className="text-paper-dim text-[0.95rem] leading-[1.75]">
                  {row.v}
                </p>
              </div>
            ))}

            <div className="flex gap-3 items-start md:col-span-2">
              <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-1 w-[78px] flex-shrink-0">
                التقنيات
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
              <summary className="cursor-pointer font-mono text-xs tracking-[0.1em] uppercase text-flame">
                تفاصيل تقنية
              </summary>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {[
                  "هيكل صفحة واحدة بـ App Router — قشرة من مكوّن خادم، ومكونات عميل للتفاعل.",
                  "محرر أسئلة غني — حقل contentEditable يدعم HTML وLaTeX والرياضيات السطرية؛ نافذة MathLive تُضيف الرياضيات إلى الحقل النشط وتُعيد العرض عبر MathJax.",
                  "إرسال متعدد الأجزاء — تُرسل بيانات الاختبار والأسئلة المفهرسة وصور كل سؤال إلى واجهة FastAPI، ويُستقبل PDF كـ Blob ويُنزَّل تلقائياً.",
                  "عرض من الخادم — FastAPI يملأ قالب HTML بتنسيق RTL، ويوحّد LaTeX إلى صيغة سطرية، ويعرضه عبر MathJax داخل Chromium بدون واجهة (Playwright)، ويرفض إصدار PDF إذا فشل MathJax.",
                  "مخرج جاهز للطباعة — مقاس A4، وترويسة اختبار من ثلاثة أعمدة، وكلمة «انتهى» مثبّتة أسفل الصفحة الأخيرة.",
                  "حماية في الإنتاج — تحديد معدل الطلبات لكل IP، وإحصاءات توليد بـ SQLite، وتقييد CORS على أصل الإنتاج.",
                  "يُحمَّل MathJax من CDN؛ ويوثّق ملف README كيف يمكن استضافته محلياً للنشر دون إنترنت.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="ps-4.5 relative text-paper-dim text-[0.95rem] leading-[1.7] before:content-[''] before:absolute before:start-0 before:top-2.5 before:w-1.5 before:h-px before:bg-flame-line">
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>

 


        </Section>

        {/* 6. PROBLEM SOLVING */}
        <Section id="problem-solving">
          <Reveal className="mb-8 max-w-[720px]">
            <span className="eyebrow mb-4">// حل المشكلات</span>
          </Reveal>
          <Reveal>
            <p className="text-paper-dim">
              Specialist on Codeforces (~1506) —{" "}
              <a
                href="https://codeforces.com/profile/Deaa"
                target="_blank"
                rel="noopener"
                className="text-flame border-b border-flame-line">
                Deaa
              </a>
            </p>
            <p className="mt-2 text-paper-dim text-sm max-w-[640px]">
              حل مسائل خوارزميات. المواضيع الأساسية:
            </p>
          </Reveal>
          <Reveal className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {[
              {
                t: "خوارزميات بنائية",
                d: "بناء إجابة صحيحة مباشرة من قيود المسألة.",
              },
              {
                t: "التنفيذ",
                d: "تحويل النصوص المفصلة إلى كود صحيح يتعامل مع الحالات الطرفية.",
              },
              {
                t: "هياكل البيانات",
                d: "Segment tree لاستعلامات وتحديثات النطاقات.",
              },
              {
                t: "البرمجة الديناميكية",
                d: "تعريف الحالات والانتقالات لمسائل التحسين والعدّ.",
              },
              {
                t: "البحث الثنائي",
                d: "البحث في بيانات مرتبة، والبحث فوق الإجابة نفسها.",
              },
              {
                t: "الرياضيات ونظرية الأعداد",
                d: "تطبيق نظرية الأعداد والتفكير الرياضي على قيود المسائل.",
              },
            ].map((topic) => (
              <div key={topic.t} className="bg-ink p-7 flex flex-col gap-2.5">
                <h3 className="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-signal">
                  {topic.t}
                </h3>
                <p className="text-sm text-paper-dim leading-[1.7]">
                  {topic.d}
                </p>
              </div>
            ))}
          </Reveal>
        </Section>

        {/* 8. CERTIFICATES */}
        <Section id="certificates">
          <Reveal className="mb-8 max-w-[720px]">
            <span className="eyebrow mb-4">// الشهادات</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "بكالوريوس، جامعة حمص", // TODO: exact degree name as written on the certificate
                meta: "جامعة حمص · 2025",
                text: "شهادة تخرج جامعية في هندسة تقنية المعلومات، هندسة البرمجيات.",
                img: "/uni_cer.png",
              },
              {
                title: "شهادة Google لتحليل البيانات", // TODO: match the exact title on the certificate
                meta: "Google via Coursera · 2023",
                text: "تنظيف البيانات وتحليلها وتصويرها باستخدام SQL والجداول وR.", // TODO: confirm tools covered
                img: "/gog_cer.png",
                verify: "", // TODO: Coursera verification URL
              },
              {
                title: "SQL لعلوم البيانات",
                meta: "University of California, Davis via Coursera · مارس 2023",
                text: "دورة غير معتمدة للاعتماد الأكاديمي من UC Davis. استعلام وتحليل البيانات بـ SQL.",
                img: "/sql.png",
                verify: "",
              },
              {
                title: "مسابقة البرمجة الجامعية السورية 2024", // TODO: match wording on the certificate
                meta: "مشارك · 2024",
                text: "مسابقة برمجة جماعية، استُخدمت كتدريب لـ Codeforces ومسابقات بنمط ICPC.",
                img: "/cp_2024.png",
              },
              {
                title: "مسابقة البرمجة الجامعية السورية 2023",
                meta: "مشارك · 2023",
                text: "مسابقة برمجة جماعية، استُخدمت كتدريب لـ Codeforces ومسابقات بنمط ICPC.",
                img: "/cp_2023.png",
              },
              {
                title: "مسابقة البرمجة الجامعية السورية 2022",
                meta: "مشارك · 2022",
                text: "مسابقة برمجة جماعية، استُخدمت كتدريب لـ Codeforces ومسابقات بنمط ICPC.",
                img: "/cp_2022.png",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="border border-line bg-ink-raised rounded overflow-hidden flex flex-col">
                <a
                  href={c.img}
                  target="_blank"
                  rel="noopener"
                  aria-label={`فتح شهادة ${c.title}`}>
                  <Image
                    src={c.img}
                    alt={`شهادة: ${c.title}`}
                    width={800}
                    height={566}
                    className="w-full object-cover h-auto aspect-[4/3] bg-ink"
                  />
                </a>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-sm text-paper leading-[1.7]">
                    {c.title}
                  </h3>
                  <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer">
                    {c.meta}
                  </span>
                  <p className="text-sm text-paper-dim leading-[1.7]">
                    {c.text}
                  </p>
                  {c.verify && (
                    <a
                      href={c.verify}
                      target="_blank"
                      rel="noopener"
                      className="text-flame border-b border-flame-line text-sm self-start">
                      تحقق
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
              <span className="eyebrow mb-4">// تواصل</span>
              <h2 className="font-display font-semibold text-[2.4rem] tracking-tight leading-[1.2]">
                تواصل
              </h2>
              <p className="mt-4 text-paper-dim text-lg">
                متاح لفرص العمل بدوام كامل وعن بُعد.
              </p>
              <div className="flex gap-3 mt-8 flex-wrap">
                <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                  راسلني <Mail size={16} />
                </a>
                <a
                  href={RESUME_URL}
                  download="Deaa_Naser_CV.pdf"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost">
                  السيرة الذاتية <Download size={16} />
                </a>
              </div>
            </div>
            <ul className="border-t border-line">
              {[
                {
                  h: "البريد",
                  v: EMAIL,
                  href: `mailto:${EMAIL}`,
                  icon: <Mail size={16} />,
                },
                {
                  h: "لينكدإن",
                  v: "deaa-naser",
                  href: LINKEDIN_URL,
                  icon: <SiLinkedin size={16} />,
                },
                {
                  h: "جيت هب",
                  v: "Deaa70",
                  href: GITHUB_URL,
                  icon: <SiGithub width={16} height={16} />,
                },
                {
                  h: "واتساب",
                  v: "+963 980 734 524",
                  href: "https://wa.me/+963980734524",
                  icon: <MessageCircle size={16} />,
                },
                {
                  h: "تيليجرام",
                  v: "@Deaa0000",
                  href: "https://t.me/Deaa0000",
                  icon: <Send size={16} />,
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between py-4 border-b border-line">
                  <span className="font-mono text-xs text-paper-dimmer uppercase tracking-[0.05em]">
                    {item.h}
                  </span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    style={{ direction: "ltr" }}
                    className="flex items-center gap-2.5 text-paper text-[0.95rem] hover:text-flame transition-colors">
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
          <span>© 2026 ضياء الناصر. جميع الحقوق محفوظة.</span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="text-gradient font-medium">
              &lt;/&gt;
            </span>{" "}
            حمص، سوريا
          </span>
        </div>
      </footer>
    </>
  );
}
