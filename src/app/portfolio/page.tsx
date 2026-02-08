"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
  image: string;
  alt: string;
}

const PROJECTS: Project[] = [
  {
    name: "Cooper Residence",
    category: "Hardscaping",
    image: "/portfolio/cooper-residence.jpg",
    alt: "Cooper residence patio restoration — after completion",
  },
  {
    name: "Daniels Residence",
    category: "Landscape Design",
    image: "/portfolio/daniels-residence.jpg",
    alt: "Daniels residence landscape and garden design",
  },
  {
    name: "Baier Firepit & Patio",
    category: "Hardscaping",
    image: "/portfolio/baier-firepit.jpg",
    alt: "Baier residence custom firepit and patio hardscaping",
  },
  {
    name: "Mawhinney Residence",
    category: "Landscaping",
    image: "/portfolio/mawhinney-residence.jpg",
    alt: "Mawhinney residence full landscape transformation",
  },
  {
    name: "VonHeimburg Driveway",
    category: "Hardscaping",
    image: "/portfolio/vonheimburg-driveway.jpg",
    alt: "VonHeimburg driveway ribbon hardscaping",
  },
  {
    name: "Fostiak Residence",
    category: "Landscaping",
    image: "/portfolio/fostiak-residence.jpg",
    alt: "Fostiak residence landscaping and plantings",
  },
  {
    name: "Baier Columns & Masonry",
    category: "Hardscaping",
    image: "/portfolio/baier-columns.jpg",
    alt: "Baier residence stone column and masonry work",
  },
  {
    name: "Frasier Residence",
    category: "Landscape Design",
    image: "/portfolio/frasier-residence.jpg",
    alt: "Frasier residence landscape design project",
  },
  {
    name: "Buresh Residence",
    category: "Landscaping",
    image: "/portfolio/buresh-residence.jpg",
    alt: "Buresh residence landscaping and hardscape project",
  },
  {
    name: "Thatcher-Craig Restoration",
    category: "Hardscaping",
    image: "/portfolio/thatcher-craig.jpg",
    alt: "Thatcher-Craig project hardscape restoration — after",
  },
  {
    name: "Wheaton Hardscape",
    category: "Landscape Design",
    image: "/portfolio/sma-wheaton.jpg",
    alt: "Hardscapes and landscaping project in Wheaton, IL",
  },
  {
    name: "Brizzolara Residence",
    category: "Landscaping",
    image: "/portfolio/brizzolara-residence.jpg",
    alt: "Brizzolara residence landscaping project",
  },
  {
    name: "Theriault Residence",
    category: "Landscape Design",
    image: "/portfolio/theriault-residence.jpg",
    alt: "Theriault residence landscape design and installation",
  },
  {
    name: "Daniels Garden View",
    category: "Landscape Design",
    image: "/portfolio/daniels-residence-2.jpg",
    alt: "Daniels residence garden area alternate view",
  },
  {
    name: "St. Charles Project",
    category: "Hardscaping",
    image: "/portfolio/sma-stcharles.jpg",
    alt: "Hardscapes and restoration project in St. Charles, IL",
  },
  {
    name: "Naperville Patio",
    category: "Hardscaping",
    image: "/portfolio/sma-naperville.jpg",
    alt: "Hardscapes and restoration project in Naperville, IL",
  },
  {
    name: "VonHeimburg Landscape",
    category: "Landscaping",
    image: "/portfolio/vonheimburg-landscape.jpg",
    alt: "VonHeimburg residence full landscape view",
  },
  {
    name: "Barrington Estate",
    category: "Landscape Design",
    image: "/portfolio/sma-barrington.jpg",
    alt: "Hardscapes and restoration project in Barrington, IL",
  },
  {
    name: "Outdoor Lighting Design",
    category: "Landscape Lighting",
    image: "/portfolio/landscape-lighting.jpg",
    alt: "Professional landscape lighting installation",
  },
  {
    name: "Commercial Snow Services",
    category: "Snow Removal",
    image: "/portfolio/snow-removal.jpg",
    alt: "Commercial snow and ice removal services",
  },
];

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
                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Bottom Info */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-16">
                    <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg text-white">
                      {project.name}
                    </h3>
                  </div>
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
