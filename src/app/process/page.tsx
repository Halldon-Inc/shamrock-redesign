"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Process stage data                                                 */
/* ------------------------------------------------------------------ */

const STAGES = [
  {
    number: 1,
    title: "Create Your Vision With Our Designers",
    description:
      "The process begins with an introductory site visit. Clients meet their designer to evaluate space functionality and discuss budget parameters. Upon mutual agreement, the designer synthesizes discussions into a finalized design plan reflecting the client\u2019s vision.",
    philosophy: "Inspire / Envision",
    philosophyDetail:
      "Architectural integration, personal expression, distinctive plantings and hardscape elements.",
  },
  {
    number: 2,
    title: "The Preparation",
    description:
      "Following design approval, preparation commences. Clients provide final sign-off. A 50% deposit is collected. Materials are procured, the yard is prepared for construction, and neighbors are notified.",
    philosophy: "Design",
    philosophyDetail:
      "Landscapes are treated as unique entities. No templates or recycled designs. An experienced team of designers, horticulturalists, project managers, and crew.",
  },
  {
    number: 3,
    title: "The Build",
    description:
      "On-site design review with designer, project manager, crew, and client before work commences. Neighbors are notified. Ongoing communication throughout the project. Final adjustments and a concluding walkthrough.",
    philosophy: "Install",
    philosophyDetail:
      "An earthy, practical process where plans become reality. Careful quoting, timely execution, highest-quality materials.",
  },
  {
    number: 4,
    title: "Your Vision Realized",
    description:
      "Warranty program activates. An aftercare specialist provides seasonal plant support and spring assessments, replacing any trees or shrubs that didn\u2019t survive the first winter.",
    philosophy: "Maintain",
    philosophyDetail:
      "One growing year warranty. Under-performing plants replaced at no additional cost.",
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

const stageVariant = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: "easeOut" as const },
  }),
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ProcessPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy-500">
        {/* Gradient accent */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-shamrock-500/15 blur-[120px]" />
          <div className="absolute -bottom-32 left-1/4 h-[360px] w-[360px] rounded-full bg-shamrock-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 section-padding container-narrow w-full py-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-shamrock-400"
          >
            Our Process
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            The Steps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-200"
          >
            From vision to reality &mdash; our proven four-stage process.
          </motion.p>
        </div>
      </section>

      {/* ---- Timeline ---- */}
      <section className="bg-section-gradient py-24 section-padding">
        <div className="container-narrow">
          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-shamrock-500 via-shamrock-300 to-shamrock-100 md:left-8 lg:block"
              aria-hidden="true"
            />

            <div className="space-y-16">
              {STAGES.map((stage, i) => (
                <motion.div
                  key={stage.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={stageVariant}
                  custom={i}
                  className="relative flex gap-6 md:gap-10 lg:pl-20"
                >
                  {/* Number badge */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-shamrock-500 text-lg font-bold text-white shadow-lg shadow-shamrock-500/30 ring-4 ring-cream md:h-16 md:w-16 md:text-xl lg:absolute lg:left-0">
                    {stage.number}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone/60 md:p-8">
                    <h2 className="font-display text-xl font-bold text-navy-500 md:text-2xl">
                      {stage.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-navy-300">
                      {stage.description}
                    </p>

                    {/* Philosophy accent */}
                    <div className="mt-5 rounded-lg border-l-4 border-shamrock-500 bg-shamrock-50/60 py-3 pl-4 pr-4">
                      <p className="text-sm font-semibold uppercase tracking-wider text-shamrock-600">
                        {stage.philosophy}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-navy-300">
                        {stage.philosophyDetail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-4 max-w-xl text-lg text-navy-200"
          >
            Let our team guide you from inspiration to a finished outdoor space
            you&apos;ll love for years to come.
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
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
