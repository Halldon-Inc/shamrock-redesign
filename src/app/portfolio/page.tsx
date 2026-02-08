"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CATEGORIES = [
  "All",
  "Landscape Design",
  "Hardscaping",
  "Landscaping",
  "Landscape Lighting",
  "Snow Removal",
] as const;

type Category = (typeof CATEGORIES)[number];

interface Project {
  name: string;
  category: Exclude<Category, "All">;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    name: "Cooper Residence Patio",
    category: "Hardscaping",
    gradient: "from-shamrock-700 to-shamrock-400",
  },
  {
    name: "Daniels Garden Redesign",
    category: "Landscape Design",
    gradient: "from-emerald-800 to-emerald-500",
  },
  {
    name: "Keiss Retaining Wall",
    category: "Hardscaping",
    gradient: "from-stone-dark to-stone",
  },
  {
    name: "Manfuller Walkway",
    category: "Hardscaping",
    gradient: "from-amber-800 to-amber-500",
  },
  {
    name: "Cedar Lane Lighting",
    category: "Landscape Lighting",
    gradient: "from-yellow-700 to-yellow-400",
  },
  {
    name: "Maple Drive Landscape",
    category: "Landscaping",
    gradient: "from-green-800 to-green-500",
  },
  {
    name: "Oak Park Hardscape",
    category: "Hardscaping",
    gradient: "from-orange-800 to-orange-500",
  },
  {
    name: "River Trail Patio",
    category: "Landscape Design",
    gradient: "from-teal-700 to-teal-400",
  },
  {
    name: "Willow Creek Garden",
    category: "Landscaping",
    gradient: "from-lime-800 to-lime-500",
  },
  {
    name: "Highland Snow Services",
    category: "Snow Removal",
    gradient: "from-slate-600 to-slate-300",
  },
  {
    name: "Prairie View Design",
    category: "Landscape Design",
    gradient: "from-shamrock-800 to-emerald-400",
  },
  {
    name: "Elmhurst Outdoor Kitchen",
    category: "Hardscaping",
    gradient: "from-rose-800 to-rose-500",
  },
];

function LandscapeIcon() {
  return (
    <svg
      className="w-16 h-16 text-white/30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 20h20" />
      <path d="M5 20l5-12 3 6 2-4 4 10" />
      <circle cx={18} cy={6} r={2} />
    </svg>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-navy-500 section-padding">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-navy-600 to-shamrock-900/40" />
        <div className="container-narrow relative z-10 py-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-shamrock-400"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg text-white/70"
          >
            Experience &mdash; Knowledge &mdash; Reliability. Making your Dream
            a Reality.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="section-padding py-8 bg-cream sticky top-16 z-30 border-b border-stone">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? "bg-shamrock-500 text-white shadow-md shadow-shamrock-500/25"
                    : "bg-stone-light text-navy-300 hover:bg-stone hover:text-navy-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding py-16 md:py-24 bg-section-gradient">
        <div className="container-wide">
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <button
                    type="button"
                    className="absolute inset-0 w-full h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock-500 rounded-2xl"
                    aria-label={`View ${project.name} project`}
                  >
                    {/* Placeholder Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                    />

                    {/* Landscape Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <LandscapeIcon />
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-16 text-left">
                      <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                      <h3 className="font-display text-lg text-white">
                        {project.name}
                      </h3>
                    </div>

                    {/* Hover/Focus Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-shamrock-500/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <span className="rounded-full border-2 border-white px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-105">
                        View Project
                      </span>
                    </div>
                  </button>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-navy-300 py-12">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 bg-navy-500">
        <div className="container-narrow text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-6"
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
          >
            Let us bring your vision to life with expert design and
            craftsmanship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
