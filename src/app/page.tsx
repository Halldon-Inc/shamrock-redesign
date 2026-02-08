"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

/* ---------- animation helpers ---------- */

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ---------- data ---------- */

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
        <path
          d="M24 12v12l8 5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "INSPIRE",
    description: "23+ years of experience",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M6 42L24 6l18 36H6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 6l6 18H18l6-18z"
          fill="currentColor"
          fillOpacity="0.15"
        />
      </svg>
    ),
    title: "DESIGN",
    description: "Create what you are dreaming",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect
          x="6"
          y="22"
          width="36"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 22V14a10 10 0 0120 0v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="20" y="30" width="8" height="6" rx="1" fill="currentColor" />
      </svg>
    ),
    title: "BUILD",
    description: "Professional elegant landscape",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path
          d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M44 24c0-11.046-8.954-20-20-20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        <path
          d="M24 16v8l6 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="38" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M38 34v8M34 38h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "MAINTAIN",
    description: "Full service commercial maintenance & snow removal",
  },
];

const services = [
  {
    title: "Landscape Design",
    description:
      "Custom designs that transform your outdoor space into a personal oasis, blending beauty with functionality.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path
          d="M20 4c-6 8-14 14-14 22a14 14 0 0028 0C34 18 26 12 20 4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M20 18v14M14 24l6-6 6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Hardscaping",
    description:
      "Patios, walkways, retaining walls, and outdoor living spaces built with precision and lasting materials.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <rect
          x="4"
          y="4"
          width="14"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="22"
          y="4"
          width="14"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="22"
          width="14"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="22"
          y="22"
          width="14"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Landscaping",
    description:
      "From plantings to grading to complete yard transformations, we create lush and thriving landscapes.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path
          d="M20 36V20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 20c-8-2-12-10-8-16 6 2 10 8 8 16z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M20 24c6-2 10-8 8-14-5 1-9 6-8 14z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Landscape Lighting",
    description:
      "Illuminate your property with expertly designed lighting that enhances beauty and safety after dark.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path
          d="M20 4v4M32 8l-3 3M36 20h-4M32 32l-3-3M8 8l3 3M4 20h4M8 32l3-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 32h8M17 36h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Commercial Snow Removal",
    description:
      "Reliable, professional snow and ice management to keep your commercial property safe and accessible.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path
          d="M20 4v32M4 20h32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.6 8.6l22.8 22.8M31.4 8.6L8.6 31.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="20"
          cy="20"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Dick & Linda Daniels",
    quote:
      "Your crew is remarkable, and managed the project efficiently. They are experts dedicated to landscape work on time and to satisfaction.",
  },
  {
    name: "John and Judy Cooper",
    quote:
      "The two-tier patio with water feature and fire pit has made our backyard truly beautiful and an extension of our home.",
  },
  {
    name: "Robyn, Andy & Reece",
    quote:
      "Your design to control excess rainwater runoff is working well. We were amazed the entire project was done in one day.",
  },
  {
    name: "Nickie and Phyllis Keiss",
    quote:
      "Not only were we impressed with you personally, but with your workers as well.",
  },
  {
    name: "Angie Manfuller",
    quote:
      "I absolutely love my new back patio, front walk, and stoop. I have received dozens of compliments.",
  },
];

/* ================================================================
   SECTION 1 — HERO
   ================================================================ */

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy-500">
      {/* layered radial green gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0,146,68,0.18) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0,146,68,0.12) 0%, transparent 70%)",
            "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,112,53,0.08) 0%, transparent 80%)",
          ].join(", "),
        }}
      />

      {/* subtle dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* diagonal accent lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 80px,
            rgba(0,146,68,0.4) 80px,
            rgba(0,146,68,0.4) 81px
          )`,
        }}
      />

      {/* hero-gradient overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-gradient" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 max-w-xl text-sm font-medium uppercase tracking-[0.25em] text-shamrock-200/90 sm:text-base"
        >
          Proudly serving Chicago and surrounding suburbs since 1997
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-10 mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Inspire. Design. Build. Maintain.
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <Link href="/contact" className="btn-primary">
            Request Estimate
          </Link>
          <Link href="/portfolio" className="btn-secondary">
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border-2 border-white/30 p-[3px]"
        >
          <div className="h-2 w-full rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ================================================================
   SECTION 2 — FOUR PILLARS
   ================================================================ */

function PillarsSection() {
  const { ref, inView } = useScrollReveal(0.2);

  return (
    <section className="bg-section-gradient section-padding py-24 md:py-32">
      <div className="container-wide" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-shamrock-500/10 text-shamrock-600 transition-colors duration-300 group-hover:bg-shamrock-500/20">
                {p.icon}
              </div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-navy-500">
                {p.title}
              </h3>
              <p className="max-w-[220px] text-sm leading-relaxed text-navy-300">
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION 3 — ABOUT / SERVICES INTRO
   ================================================================ */

function ServicesIntro() {
  const { ref: tagRef, inView: tagInView } = useScrollReveal(0.2);
  const { ref: gridRef, inView: gridInView } = useScrollReveal(0.1);

  return (
    <section className="section-padding bg-white py-24 md:py-32">
      <div className="container-narrow">
        {/* tagline */}
        <div ref={tagRef} className="mb-16 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={tagInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl font-display text-2xl font-semibold leading-snug text-navy-500 sm:text-3xl md:text-4xl"
          >
            Shamrock Hardscapes and Restoration is a full-service landscaping
            company: from brick paving to yard maintenance to landscape lighting,
            we&rsquo;ll bring your dream yard to life.
          </motion.h2>
        </div>

        {/* service cards */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group rounded-2xl border border-stone bg-cream p-8 transition-all duration-300 hover:border-shamrock-200 hover:shadow-lg hover:shadow-shamrock-500/5"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-shamrock-500/10 text-shamrock-600 transition-colors duration-300 group-hover:bg-shamrock-500/15">
                {s.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy-500">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-300">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION 4 — TESTIMONIALS
   ================================================================ */

function TestimonialsSection() {
  const { ref, inView } = useScrollReveal(0.1);

  return (
    <section className="section-padding bg-navy-500 py-24 md:py-32">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center font-display text-3xl font-semibold text-white sm:text-4xl"
        >
          What Our Clients Say
        </motion.h2>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              {/* quote icon */}
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="mb-4 h-8 w-8 shrink-0 text-shamrock-400/60"
                aria-hidden
              >
                <path
                  d="M6 18h6l-4 8h4l4-8V8H6v10zm14 0h6l-4 8h4l4-8V8H20v10z"
                  fill="currentColor"
                />
              </svg>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-shamrock-300">
                &mdash; {t.name}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION 5 — CTA BANNER
   ================================================================ */

function CtaBanner() {
  const { ref, inView } = useScrollReveal(0.3);

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden py-24 md:py-28"
      style={{
        background: "linear-gradient(135deg, #009244 0%, #007035 100%)",
      }}
    >
      {/* decorative circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5"
      />

      <div className="container-narrow relative z-10 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-10 font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
        >
          We Can Help You Build Your Dream Landscape
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-shamrock-600 transition-all duration-300 hover:bg-cream hover:shadow-lg active:scale-[0.98]"
          >
            Request Estimate
          </Link>
          <a
            href="tel:6303970393"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
          >
            Call Us: 630-397-0393
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   PAGE EXPORT
   ================================================================ */

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ServicesIntro />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
