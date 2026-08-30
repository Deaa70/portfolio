import React from "react";
import Image from "next/image";
import {
  ArrowIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TelegramIcon,
  WhatsappIcon,
} from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

import meImage from "@/assets/me.jpg";
import contImage from "@/assets/cont.png";
import appImage from "@/assets/mobile-siraj.png";
import klimateImage from "@/assets/klimate.png";

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

export default function ArabicHome() {
  return (
    <>
      <Navbar lang="ar" />
      <main
        id="top"
        style={{
          direction: "rtl",
        }}>
        {/* HERO */}
        <section className="relative pt-[76px] pb-24 border-b border-line">
          <div className="container-x grid grid-cols-1 md:grid-cols-[1.25fr_0.85fr] gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.1em] uppercase text-paper-dim border border-line-strong px-3 py-1.5 rounded-full mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse"></span>
                مفتوح لفرص عمل بدوام كامل في مجال تطوير البرمجيات والذكاء الاصطناعي
              </span>
              <h1 className="font-display font-semibold text-[2.4rem] md:text-[4.1rem] leading-[1.5] tracking-tight">
                أبني منتجات ذكاء اصطناعي
                <br />
                تعمل في الواقع —{" "}
                <em className="italic text-flame">وليست مجرد نماذج تجريبية.</em>
              </h1>
              <p className="mt-6 text-lg text-paper-dim max-w-[560px] leading-[1.75]">
                أطوّر منتجات وأنظمة متكاملة تعتمد على الذكاء الاصطناعي، بدءاً من تصميم النظام وطبقة البيانات والاسترجاع، مروراً بالنماذج والواجهات الخلفية، وصولاً إلى تطبيقات الجوال والبنية التحتية. من أبرز أعمالي مؤخراً{" "}
                <strong className="text-paper font-medium">سراج</strong> — منصة تعليمية بالذكاء الاصطناعي طورتها بشكل كامل من الصفر وحتى الإنتاج، وتُستخدم اليوم من قبل طلاب في سوريا.
              </p>
              <div className="flex flex-wrap gap-4 mt-9">
                <a href="#siraj" className="btn btn-primary">
                  عرض دراسة حالة سراج <ArrowIcon />
                </a>
                <a
                  href="https://f005.backblazeb2.com/file/siraj-public/deaa_naser_cv.pdf"
                  download="Deaa_Naser_CV.pdf"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost">
                  السيرة الذاتية <DownloadIcon />
                </a>
              </div>
            </div>
            <div className="relative max-w-[280px] md:max-w-none">
              <div className="relative border border-line-strong rounded overflow-hidden aspect-[4/5] bg-ink-raised">
                <Image
                  src={meImage}
                  alt="صورة ضياء ناصر"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute bottom-3.5 start-3.5 end-3.5 bg-ink/78 backdrop-blur-sm border border-line p-2.5 font-mono text-xs text-paper-dim tracking-wide">
                  حمص، سوريا — مطور برمجيات ومؤسس سراج
                </div>
              </div>
              <div className="flex gap-3.5 mt-4 flex-wrap">
                <a
                  href="https://github.com/Deaa70"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  className="w-9 h-9 border border-line-strong rounded-sm flex items-center justify-center text-paper-dim hover:border-flame-line hover:text-flame transition-colors">
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/deaa-naser-b28573351"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  className="w-9 h-9 border border-line-strong rounded-sm flex items-center justify-center text-paper-dim hover:border-flame-line hover:text-flame transition-colors">
                  <LinkedinIcon />
                </a>
                <a
                  href="mailto:deaa.work7@gmail.com"
                  aria-label="Email"
                  className="w-9 h-9 border border-line-strong rounded-sm flex items-center justify-center text-paper-dim hover:border-flame-line hover:text-flame transition-colors">
                  <MailIcon />
                </a>
                <a
                  href="https://t.me/Deaa0000"
                  target="_blank"
                  rel="noopener"
                  aria-label="Telegram"
                  className="w-9 h-9 border border-line-strong rounded-sm flex items-center justify-center text-paper-dim hover:border-flame-line hover:text-flame transition-colors">
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// نبذة</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">
              أبني النظام كاملاً، لا جزءاً منه.
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-paper-dim text-lg leading-[1.8] mb-5">
                لا أعمل فقط على ميزة أو جزء محدد من المنتج. أحب أن أفهم الصورة كاملة وأتحمل مسؤولية النظام من الفكرة وحتى التشغيل. في سراج مثلاً، قد أعمل على تصميم معمارية الاسترجاع، ثم أنتقل في اليوم التالي لإصلاح مشكلة في React Native، وبعدها أتعامل مع إعدادات الخادم أو أداء النظام.
              </p>
              <p className="text-paper-dim text-lg leading-[1.8] mb-5">
                هذا النوع من العمل هو بالضبط ما أبحث عنه.{" "}
                <strong className="text-paper font-medium">
                  بناء منتج يعتمد على الذكاء الاصطناعي يتطلب أن تعمل طبقة الذكاء الاصطناعي، والبيانات، والتطبيق، والبنية التحتية كمنظومة واحدة.
                </strong>{" "}
                لذلك أحرص دائماً على فهم العلاقة بين هذه الأجزاء، وليس التعامل مع كل جزء بمعزل عن الآخر.
              </p>
              <p className="text-paper-dim text-lg leading-[1.8]">
                وبعيداً عن تطوير المنتجات، أمارس البرمجة التنافسية للحفاظ على مهاراتي في حل المشكلات. أنا مصنف كـ Specialist على Codeforces، وهو جانب ساعدني كثيراً على التفكير في الحلول الفعالة واختيار أبسط طريقة مناسبة للمشكلة.
              </p>
            </div>
            <ul>
              {[
                { k: "الموقع", v: "حمص، سوريا" },
                { k: "التعليم", v: "جامعة حمص" },
                { k: "أعمل على سراج منذ", v: "مارس 2024" },
                { k: "الدور", v: "المؤسس ومهندس برمجيات" },
                { k: "البرمجة التنافسية", v: "Specialist على Codeforces (~1506)" },
                {
                  k: "حالياً",
                  v: "مفتوح لفرص عمل بدوام كامل في تطوير البرمجيات والذكاء الاصطناعي",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between gap-4 py-3.5 border-b border-line first:border-t text-base">
                  <span className="font-mono text-paper-dimmer text-xs tracking-wide uppercase">
                    {item.k}
                  </span>
                  <span className="text-paper text-right">{item.v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        {/* PROOF OF WORK */}
        <Section id="activity">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// العمل والاستمرارية</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">
              العمل المستمر، وليس مجرد دفعات مؤقتة.
            </h2>
            <p className="mt-3.5 text-paper-dim text-lg max-w-[620px]">
              عندما تعمل بمفردك، لا يوجد فريق كبير وراءك يفسر حجم العمل أو السرعة. ما يبقى هو ما تبنيه فعلياً. هذه المساهمات تعكس سبعة أشهر من التطوير المستمر لسراج، يوماً بعد يوم.
            </p>
          </Reveal>
          <Reveal className="border border-line bg-ink-raised rounded p-8">
            <Image
              src={contImage}
              alt="رسم بياني لمساهمات GitHub يظهر النشاط اليومي على سراج خلال الأشهر السبعة الماضية"
              className="w-full h-auto rounded-sm"
            />
            <p className="text-sm text-paper-dim mt-4 pt-4 border-t border-line">
              <b className="text-paper font-medium">1,100 مساهمة</b> في سراج خلال الأشهر السبعة الماضية — من تطوير ميزات جديدة وإصلاح المشاكل، إلى تحسين الأداء وتشغيل المنتج في بيئة الإنتاج.
            </p>
          </Reveal>
        </Section>

        {/* FEATURED CASE STUDY: SIRAJ */}
        <Section id="siraj">
          <Reveal>
            <span className="eyebrow mb-4">// دراسة الحالة</span>
          </Reveal>
          <Reveal className="flex flex-wrap justify-between gap-6 items-end mb-2">
            <h2 className="font-display font-bold text-[3.1rem] tracking-tight">
              سراج — منصة تعليمية تعتمد على الذكاء الاصطناعي
            </h2>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="https://siraj.sy/"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-flame hover:border-flame-line">
                منصة المعلم <ArrowIcon width={13} height={13} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.deaa00.siraj1"
                target="_blank"
                rel="noopener"
                className="font-mono text-xs tracking-wide uppercase inline-flex items-center gap-1.5 text-paper-dim border-b border-line-strong pb-0.5 hover:text-flame hover:border-flame-line">
                تطبيق الطالب <ArrowIcon width={13} height={13} />
              </a>
            </div>
          </Reveal>
          <Reveal className="mt-3.5 text-paper-dim text-lg max-w-[620px]">
            منصة تعليمية متكاملة لطلاب سوريا من الصف السادس وحتى الثاني عشر. تجمع بين تطبيق للطلاب يعتمد على الذكاء الاصطناعي ومنصة ويب للمعلمين لنشر وبيع المحتوى التعليمي — وقد تم تطوير المنصة وتشغيلها بالكامل بشكل مستقل، من طبقة الذكاء الاصطناعي وحتى خادم الإنتاج.
          </Reveal>

          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line my-12">
            {[
              {
                n: "تطبيق الطلاب",
                h4: "التعلم والمراجعة في أي وقت",
                p: "مساعد تعليمي بالذكاء الاصطناعي يساعد الطلاب في فهم الدروس، والإجابة عن الأسئلة، والتدرب من خلال بنك الأسئلة، إضافة إلى الدروس التفاعلية ونظام التقدم والتحفيز. صُمم التطبيق ليعمل أيضاً في حال عدم توفر اتصال بالإنترنت.",
              },
              {
                n: "منصة المعلمين",
                h4: "انشر محتواك وبِعه",
                p: "منصة تتيح للمعلمين إنشاء وبيع الدورات والاختبارات والمذكرات التعليمية ضمن السوق السوري، مع لوحة تحكم لمتابعة المبيعات والاشتراكات وتفاعل الطلاب مع المحتوى.",
              },
              {
                n: "نظام واحد متكامل",
                h4: "واجهة خلفية واحدة تخدم الطرفين",
                p: "تطبيق الطلاب ومنصة المعلمين يعتمدان على نفس واجهة Django API وطبقة الذكاء الاصطناعي وقاعدة البيانات، لذلك ينتقل المحتوى الذي ينشره المعلم مباشرة إلى تجربة الطالب.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-ink p-6">
                <span className="font-mono text-flame text-xs tracking-[0.08em] uppercase">
                  {card.n}
                </span>
                <h4 className="font-display text-xl font-semibold mt-2.5">
                  {card.h4}
                </h4>
                <p className="text-paper-dim text-[0.92rem] mt-2.5 leading-[1.65]">
                  {card.p}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 items-center mb-14">
            <div className="border border-line rounded overflow-hidden bg-ink-raised">
              <Image
                src={appImage}
                alt="الشاشة الرئيسية لتطبيق سراج للطلاب"
                className="w-full h-auto"
              />
            </div>
            <div>
              <span className="eyebrow mb-3.5">// المنتج</span>
              <h4 className="font-display text-[1.3rem] font-semibold mb-3">
                ما يستخدمه الطلاب فعلياً كل يوم
              </h4>
              <p className="text-paper-dim text-[0.95rem] leading-[1.7] max-w-[420px]">
                الشاشة الرئيسية التي يعود إليها الطالب يومياً: مستوى التقدم، نقاط XP، السلسلة اليومية، التحدي اليومي وإحصائيات الدراسة — كلها مصممة بطريقة تجعل متابعة الدراسة أكثر وضوحاً وتحفيزاً.
              </p>
            </div>
          </Reveal>

          <Reveal className="border border-line bg-ink-raised rounded p-8 mb-16">
            <span className="eyebrow mb-4.5 block">معمارية النظام</span>
            <svg
              viewBox="0 0 800 400"
              role="img"
              aria-labelledby="diagramTitle"
              className="w-full h-auto">
              <title id="diagramTitle">
                معمارية سراج: تطبيق الطالب ومنصة المعلم يتصلان بواجهة Django REST API، والتي تتكامل مع طبقة الذكاء الاصطناعي وقاعدة البيانات والتخزين. تتم إدارة المهام الثقيلة في الخلفية باستخدام Celery وRedis.
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
                Qdrant + LLMs (RAG، التقييم،
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
            <p className="text-sm text-paper-dim mt-4 pt-4 border-t border-line">
              <b className="text-paper font-medium">
                واجهة خلفية واحدة، وواجهتان أماميتان.
              </b>{" "}
              يستخدم التطبيق ومنصة المعلم نفس Django REST API، بينما تُنقل العمليات التي تحتاج إلى وقت أطول — مثل التصحيح وOCR وإنشاء التقارير — إلى مهام تعمل في الخلفية باستخدام Celery، حتى لا يبقى المستخدم منتظراً استجابة نموذج الذكاء الاصطناعي.
            </p>
          </Reveal>

          {[
            {
              tag: "هندسة الذكاء الاصطناعي",
              h4: "طبقة الذكاء الاصطناعي",
              list: [
                "التوليد المعزز بالاسترجاع (RAG) — ربط إجابات النموذج بالمحتوى الفعلي للمنهج بدلاً من الاعتماد على المعرفة العامة للنموذج، مع استخدام قاعدة بيانات متجهية مهيأة للمحتوى التعليمي العربي.",
                "استرجاع يعتمد على المنهج — تنظيم المحتوى واسترجاعه مع مراعاة الصف والمادة والوحدة، بحيث تحصل كل إجابة على السياق المناسب.",
                "فهم السؤال وتحديد المسار — تحليل السؤال وتحديد نوعه قبل اختيار طريقة الاسترجاع والتعليمات المناسبة للإجابة.",
                "مساعد ذكي متعدد الخطوات — دعم سيناريوهات تحتاج إلى أكثر من خطوة أو أداة بدلاً من الاكتفاء بطلب واحد للنموذج.",
                "إدارة النماذج ومزوديها — مقارنة النماذج والمزودين بناءً على الجودة والتكلفة وزمن الاستجابة، مع إمكانية تبديل المزود حسب الحاجة.",
                "التصحيح بالذكاء الاصطناعي — أنظمة تصحيح تختلف باختلاف نوع المادة والسؤال وطبيعة الإجابة المطلوبة.",
                "فهم الصور والمستندات — استخدام نماذج الرؤية لقراءة إجابات الطلاب المكتوبة بخط اليد وإدخال محتوى الكتب والمستندات ضمن قاعدة المعرفة.",
              ],
            },
            {
              tag: "هندسة تطبيقات الجوال",
              h4: "React Native، مع دعم العمل دون اتصال",
              list: [
                "العمل دون اتصال — حفظ البيانات والمحتوى محلياً ومزامنتها عند عودة الاتصال بالإنترنت.",
                "عارض مخصص للنص والرياضيات — دعم المحتوى العربي RTL مع معادلات LaTeX ضمن تجربة عرض موحدة.",
                "عرض استجابات الذكاء الاصطناعي بشكل تدريجي — بث الإجابات وتحسين طريقة عرضها على أجهزة Android محدودة الإمكانيات.",
                "حماية المحتوى — منع لقطات الشاشة والتسجيل واكتشاف الأجهزة غير الآمنة لحماية المحتوى المدفوع.",
                "إدارة تنزيلات مخصصة — تخزين محتوى الدروس محلياً لتقليل الاعتماد على الاتصال أثناء الدراسة.",
                "إدارة الحالة والبيانات — Zustand لإدارة حالة التطبيق وTanStack Query لإدارة بيانات الخادم والتخزين المؤقت.",
                "تصميم الواجهة — NativeWind مع Gluestack UI لبناء واجهة موحدة وقابلة لإعادة الاستخدام.",
                "التكامل مع إمكانيات الجهاز — الإشعارات، نظام الملفات، وفحوصات الأمان من خلال Expo والمكونات الأصلية.",
              ],
            },
            {
              tag: "الواجهة الخلفية والبنية التحتية",
              h4: "بيئة إنتاج أديرها بالكامل",
              list: [
                "Django REST — واجهة API مشتركة بين تطبيق الطلاب ومنصة المعلمين.",
                "المعالجة في الخلفية — نقل العمليات الثقيلة المرتبطة بالذكاء الاصطناعي مثل التصحيح وOCR وإنشاء التقارير إلى مهام غير متزامنة.",
                "قاعدة بيانات علائقية — استخدام MySQL كمخزن البيانات الأساسي مع التركيز على تنظيم المخطط والأداء في الاستعلامات.",
                "Docker + Dokploy — تشغيل الخدمات داخل حاويات ونشرها على VPS تتم إدارته بشكل مستقل.",
                "Cloudflare — استخدام CDN وDNS أمام البنية التحتية.",
                "التخزين — حفظ الملفات والأصول والنسخ الاحتياطية باستخدام تخزين كائنات.",
              ],
            },
          ].map((block, i) => (
            <Reveal key={i} className="mb-14">
              <div className="flex items-baseline gap-3.5 mb-5.5">
                <span className="font-mono text-xs tracking-[0.08em] uppercase text-ink bg-flame px-2 py-1 rounded-sm">
                  {block.tag}
                </span>
                <h4 className="font-display text-[1.3rem] font-semibold">
                  {block.h4}
                </h4>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                {block.list.map((item, j) => (
                  <li
                    key={j}
                    className="ps-4.5 relative text-paper-dim text-[0.95rem] leading-[1.6] before:content-[''] before:absolute before:start-0 before:top-2.5 before:w-1.5 before:h-px before:bg-flame-line">
                    <strong className="text-paper font-medium">
                      {item.split("—")[0]}
                    </strong>{" "}
                    — {item.split("—").slice(1).join("—")}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal>
            <p className="font-mono text-xs tracking-[0.08em] uppercase text-paper-dim mb-5.5">
              تحديات هندسية — المشكلة ← الحل ← النتيجة
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
              {[
                {
                  p: "الإجابات العامة للنماذج اللغوية لم تكن مرتبطة دائماً بما يدرسه الطالب فعلياً.",
                  a: "ربط الإجابات بمحتوى المنهج من خلال نظام RAG بدلاً من الاعتماد على المعرفة العامة للنموذج.",
                  o: "زيادة دقة الإجابات المتعلقة بالمنهج بشكل واضح، مع الحفاظ على مرونة طبقة الذكاء الاصطناعي.",
                },
                {
                  p: "المحتوى العربي مع RTL ومعادلات LaTeX تسبب في مشاكل مع عارضات المحتوى الجاهزة.",
                  a: "تطوير مسار عرض مخصص للتعامل مع النص العربي والمعادلات ضمن نفس المحتوى.",
                  o: "الحصول على طبقة عرض يمكن التحكم بها بالكامل وتطويرها بما يناسب طبيعة المحتوى.",
                },
                {
                  p: "التصحيح بالذكاء الاصطناعي وإنشاء التقارير يحتاجان إلى وقت أطول من زمن الطلب العادي.",
                  a: "تنفيذ هذه العمليات في الخلفية باستخدام Celery بدلاً من إبقاء الطلب مفتوحاً حتى انتهاء النموذج.",
                  o: "تحسين استجابة التطبيق وفصل العمليات الثقيلة عن تجربة المستخدم.",
                },
                {
                  p: "الطلاب لا يملكون دائماً اتصالاً ثابتاً بالإنترنت.",
                  a: "تصميم المحتوى والتقدم بحيث يمكن استخدامهما محلياً ثم مزامنتهما عند عودة الاتصال.",
                  o: "إمكانية متابعة الدراسة حتى عند ضعف أو انقطاع الاتصال.",
                },
              ].map((chal, i) => (
                <div key={i} className="bg-ink p-7 flex flex-col gap-3.5">
                  <div className="flex gap-3 items-start">
                    <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-paper-dimmer pt-0.5 w-[78px] flex-shrink-0">
                      المشكلة
                    </span>
                    <p className="text-sm text-paper leading-[1.6]">{chal.p}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-signal pt-0.5 w-[78px] flex-shrink-0">
                      الحل
                    </span>
                    <p className="text-sm text-paper-dim leading-[1.6]">
                      {chal.a}
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono text-[0.68rem] tracking-[0.08em] uppercase text-flame pt-0.5 w-[78px] flex-shrink-0">
                      النتيجة
                    </span>
                    <p className="text-sm text-paper-dim leading-[1.6]">
                      {chal.o}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="skills">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// المهارات</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">
              التقنيات التي أعمل بها فعلياً
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-line">
            {[
              {
                title: "هندسة الذكاء الاصطناعي",
                items: [
                  "أنظمة RAG",
                  "تطبيقات LLM",
                  "قواعد البيانات المتجهية",
                  "Embeddings",
                  "وكلاء الذكاء الاصطناعي",
                  "هندسة الأوامر",
                  "نماذج الرؤية",
                ],
              },
              {
                title: "هندسة الواجهة الخلفية",
                items: [
                  "Python",
                  "Django & DRF",
                  "REST API",
                  "Celery",
                  "Redis",
                  "تصميم قواعد البيانات",
                ],
              },
              {
                title: "هندسة الواجهة الأمامية",
                items: [
                  "React",
                  "TypeScript",
                  "منظومة React الحديثة",
                  "Tailwind CSS",
                ],
              },
              {
                title: "تطوير تطبيقات الجوال",
                items: ["React Native", "Expo", "تطبيقات تعمل دون اتصال"],
              },
              {
                title: "البنية التحتية",
                items: [
                  "Docker",
                  "Linux VPS",
                  "Cloudflare",
                  "أتمتة النشر",
                ],
              },
            ].map((col, i) => (
              <div
                key={i}
                className="p-6 md:py-6 md:pe-5 md:ps-1.5 border-b md:border-b-0 md:border-e border-line last:border-e-0">
                <h4 className="font-mono text-xs tracking-[0.06em] uppercase text-flame mb-4">
                  {col.title}
                </h4>
                <ul>
                  {col.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-paper-dim text-[0.92rem] py-1.5 border-b border-dashed border-line last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </Section>

        <Section id="experience">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// الخبرة</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">
              دور واحد، ومسؤولية كاملة
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
            <div className="font-mono text-xs text-paper-dimmer">
              مارس 2024 — حتى الآن
            </div>
            <div>
              <div className="mb-1.5">
                <h4 className="font-display text-[1.4rem] font-semibold">
                  المؤسس ومهندس البرمجيات — سراج
                </h4>
                <div className="font-mono text-xs text-paper-dimmer">
                  منصة تعليمية تعتمد على الذكاء الاصطناعي · سوريا
                </div>
              </div>
              <ul className="mt-5">
                {[
                  "معمارية المنتج — تصميم النظام بالكامل وربط طبقة الذكاء الاصطناعي والواجهة الخلفية وتطبيق الجوال ومنصة المعلم.",
                  "القرارات التقنية — اختيار التقنيات ومزودي النماذج بعد اختبارهم ومقارنة البدائل عملياً.",
                  "التطوير الكامل — بناء الواجهة الخلفية باستخدام Django، ومنصة المعلم siraj.sy، وتطبيق الطلاب باستخدام React Native.",
                  "نظام الذكاء الاصطناعي — تطوير نظام الاسترجاع، وفهم نية السؤال، والمساعد متعدد الخطوات، وأنظمة التصحيح من الصفر.",
                  "البنية التحتية والإنتاج — إدارة الخوادم، والنشر عبر Docker، وCloudflare، والنسخ الاحتياطية، وبنية بناء تطبيق الجوال.",
                  "الإطلاق والتشغيل — تشغيل المنصة في بيئة الإنتاج عبر siraj.sy وGoogle Play، مع أكثر من 304 طالباً.",
                ].map((exp, i) => (
                  <li
                    key={i}
                    className="py-3 border-t border-line text-paper-dim text-[0.95rem] leading-[1.6] grid grid-cols-[22px_1fr] gap-2.5 last:border-b last:border-line">
                    <span className="font-mono text-flame text-xs">{`0${i + 1}`}</span>
                    <p>
                      <strong className="text-paper font-medium">
                        {exp.split("—")[0]}
                      </strong>{" "}
                      — {exp.split("—").slice(1).join("—")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        <Section id="philosophy">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// كيف أعمل</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">
              أنا لا أكتب الكود فقط.
              <br />
              أنا أبني الأنظمة.
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
            {[
              {
                n: "01",
                h4: "حل المشكلات",
                p: "أبحث أولاً عن أبسط تغيير يمكنه حل المشكلة فعلياً، بدلاً من إعادة بناء النظام بالكامل. أفضّل الحلول الواضحة والمحددة على التعقيد غير الضروري.",
              },
              {
                n: "02",
                h4: "القرارات المعمارية",
                p: "أختار التقنيات والنماذج بناءً على قيود حقيقية مثل التكلفة، وزمن الاستجابة، وحجم النظام، وإمكانية إدارته بشكل عملي.",
              },
              {
                n: "03",
                h4: "الأداء",
                p: "أقيس المشكلة قبل أن أحاول تحسينها. والعمليات التي لا تحتاج إلى تنفيذ فوري أجعلها غير متزامنة عندما يكون ذلك مناسباً.",
              },
              {
                n: "04",
                h4: "الاعتمادية",
                p: "أصمم الأنظمة لتتعامل مع الظروف الواقعية: اتصال غير مستقر، مهام ثقيلة، وأخطاء يجب اكتشافها ومعالجتها بدون التأثير على باقي النظام.",
              },
            ].map((phil, i) => (
              <div key={i} className="bg-ink p-7">
                <span className="font-mono text-flame-line text-sm">
                  {phil.n}
                </span>
                <h4 className="font-display text-lg font-semibold mt-3.5 mb-2.5">
                  {phil.h4}
                </h4>
                <p className="text-paper-dim text-sm leading-[1.65]">
                  {phil.p}
                </p>
              </div>
            ))}
          </Reveal>
        </Section>

        <Section id="projects">
          <Reveal className="mb-11 max-w-[720px]">
            <span className="eyebrow mb-4">// مشاريع أخرى</span>
            <h2 className="font-display font-semibold text-[2.4rem] tracking-tight">
              مشاريع جانبية
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-line rounded overflow-hidden bg-ink-raised">
              <div className="relative aspect-video bg-ink-raised-2 overflow-hidden">
                <Image
                  src={klimateImage}
                  alt="لقطة شاشة لتطبيق طقس Klimate"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5.5">
                <h4 className="font-display text-lg font-semibold">Klimate</h4>
                <p className="text-paper-dim text-sm mt-2.5 leading-[1.6]">
                  تطبيق للطقس في الوقت الحقيقي يعرض التوقعات بناءً على الموقع أو البحث عن المدن. ركزت فيه على السرعة والبساطة وسهولة الاستخدام بدلاً من إضافة عدد كبير من الميزات.
                </p>
                <div className="mt-3.5 font-mono text-xs text-paper-dimmer tracking-wide">
                  Vite · React · TypeScript · Tailwind CSS · TanStack Query ·
                  Redux
                </div>
                <a
                  href="https://weather-app-8yo1.vercel.app/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 mt-4 font-mono text-xs text-flame border-b border-flame-line pb-0.5">
                  عرض المشروع <ArrowIcon width={13} height={13} />
                </a>
              </div>
            </div>
            <div className="border border-line rounded p-5.5 flex flex-col justify-center items-start gap-2.5">
              <h4 className="font-display text-lg font-semibold">
                المزيد على GitHub
              </h4>
              <p className="text-paper-dim text-sm leading-[1.6]">
                المشاريع التجريبية الصغيرة، وتطبيقات الخوارزميات، والأعمال التي ما زالت قيد التطوير موجودة على GitHub. أما سراج فهو مشروع مغلق المصدر نظراً لطبيعته وحجمه والمستخدمين الذين يعتمدون عليه.
              </p>
              <a
                href="https://github.com/Deaa70"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-flame border-b border-flame-line pb-0.5">
                github.com/Deaa70 <ArrowIcon width={13} height={13} />
              </a>
            </div>
          </Reveal>
        </Section>

        <Section id="contact">
          <Reveal className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-end">
            <div>
              <span className="eyebrow mb-4">// تواصل معي</span>
              <h2 className="font-display font-semibold text-[3rem] tracking-tight leading-[1.1]">
                لديك فكرة تريد تحويلها إلى منتج؟
              </h2>
              <p className="mt-4.5 text-paper-dim text-lg max-w-[480px] leading-[1.75]">
                أساعد في بناء منتجات حديثة وحلول تعتمد على الذكاء الاصطناعي، من الفكرة والمعمارية الأولى وحتى الإطلاق والتشغيل. إذا كان لديك مشروع حقيقي تريد تطويره، يسعدني أن نتحدث عنه.
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                <a
                  href="mailto:deaa.work7@gmail.com"
                  className="btn btn-primary">
                  راسلني <MailIcon />
                </a>
                <a
                  href="https://f005.backblazeb2.com/file/siraj-public/deaa_naser_cv.pdf"
                  download="Deaa_Naser_CV.pdf"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost">
                  السيرة الذاتية <DownloadIcon />
                </a>
              </div>
            </div>
            <ul className="border-t border-line">
              {[
                {
                  h: "البريد",
                  v: "deaa.work7@gmail.com",
                  href: "mailto:deaa.work7@gmail.com",
                  icon: <MailIcon />,
                },
                {
                  h: "لينكدإن",
                  v: "deaa-naser",
                  href: "https://www.linkedin.com/in/deaa-naser-b28573351",
                  icon: <LinkedinIcon />,
                },
                {
                  h: "جيت هب",
                  v: "Deaa70",
                  href: "https://github.com/Deaa70",
                  icon: <GithubIcon />,
                },
                {
                  h: "واتساب",
                  v: "+963 980 734 524",
                  href: "https://wa.me/+963980734524",
                  icon: <WhatsappIcon />,
                },
                {
                  h: "تيليجرام",
                  v: "@Deaa0000",
                  href: "https://t.me/Deaa0000",
                  icon: <TelegramIcon />,
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
                    style={{
                      direction:'ltr',
                    }}
                    className="flex items-center gap-2.5 text-paper text-[0.95rem] hover:text-flame transition-colors">
                    {item.icon} {item.v}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      </main>

      <footer className="py-7">
        <div className="container-x flex justify-between items-center flex-wrap gap-3 font-mono text-xs text-paper-dimmer">
          <span>© 2026 ضياء ناصر. جميع الحقوق محفوظة.</span>
          <span>حمص، سوريا</span>
        </div>
      </footer>
    </>
  );
}