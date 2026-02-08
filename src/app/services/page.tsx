"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline SVG icons                                                   */
/* ------------------------------------------------------------------ */

function DesignIcon() {
  return (
    <svg
      className="h-10 w-10 text-shamrock-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

function HardscapeIcon() {
  return (
    <svg
      className="h-10 w-10 text-shamrock-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
      />
    </svg>
  );
}

function LandscapeIcon() {
  return (
    <svg
      className="h-10 w-10 text-shamrock-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 009-9m-9 9a9 9 0 01-9-9m9 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c4.5 3 6 6 6 9s-1.5 6-6 9c-4.5-3-6-6-6-9s1.5-6 6-9z"
      />
    </svg>
  );
}

function LightingIcon() {
  return (
    <svg
      className="h-10 w-10 text-shamrock-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
}

function SnowIcon() {
  return (
    <svg
      className="h-10 w-10 text-shamrock-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3M7.05 7.05l1.414 1.414m7.072 7.072l1.414 1.414M7.05 16.95l1.414-1.414m7.072-7.072l1.414-1.414"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Service data                                                       */
/* ------------------------------------------------------------------ */

const SERVICES = [
  {
    title: "Landscape Design",
    description:
      "Professional landscape design that creates believable concepts feeling like natural extensions of your home. Clean lines complemented by flowering plants. Every design is unique \u2014 no templates or recycled plans.",
    Icon: DesignIcon,
  },
  {
    title: "Hardscaping",
    description:
      "Brick paving, patios, retaining walls, walkways, outdoor kitchens and entertainment areas. Transform your outdoor living space with professional-grade hardscape installation that stands the test of time.",
    Icon: HardscapeIcon,
  },
  {
    title: "Landscaping",
    description:
      "Front and back yard landscaping, sod installation and edging, plantings. Create beautiful outdoor spaces with expert plant selection and installation tailored to your property.",
    Icon: LandscapeIcon,
  },
  {
    title: "Landscape Lighting",
    description:
      "Professional landscape lighting to enhance your outdoor spaces day and night. Highlight architectural features, pathways, and garden areas with carefully placed fixtures.",
    Icon: LightingIcon,
  },
  {
    title: "Commercial Snow Removal",
    description:
      "Full-service commercial maintenance and snow removal. Keep your property safe and accessible throughout the winter months with reliable, prompt service.",
    Icon: SnowIcon,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy-500">
        {/* Gradient accent */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-shamrock-500/20 blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-shamrock-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 section-padding container-narrow w-full py-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-shamrock-400"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-200"
          >
            Full-service landscaping company: from brick paving to yard
            maintenance to landscape lighting, we&apos;ll bring your dream yard
            to life.
          </motion.p>
        </div>
      </section>

      {/* ---- Services Grid ---- */}
      <section className="bg-section-gradient py-24 section-padding">
        <motion.div
          className="container-narrow"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <motion.article
                key={service.title}
                variants={cardVariant}
                custom={i}
                className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone/60 transition-all duration-300 hover:shadow-lg hover:shadow-shamrock-500/5 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex rounded-xl bg-shamrock-50 p-3">
                  <service.Icon />
                </div>
                <h2 className="mb-3 font-display text-xl font-bold text-navy-500">
                  {service.title}
                </h2>
                <p className="text-base leading-relaxed text-navy-300">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-navy-500 py-24 section-padding">
        <div className="container-narrow text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl font-bold text-white sm:text-4xl"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-4 max-w-xl text-lg text-navy-200"
          >
            Let us help you create the outdoor space you&apos;ve been dreaming
            of.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={2}
            className="mt-8"
          >
            <Link href="/contact" className="btn-primary">
              Request Estimate
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
