"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const VALUES = [
  {
    title: "Career Growth",
    description:
      "Grow your skills with hands-on mentorship and advancement opportunities",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Team Culture",
    description:
      "Work alongside a tight-knit crew that treats each other like family",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Outdoor Work",
    description:
      "Trade the cubicle for fresh air and the satisfaction of building something real",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx={12} cy={12} r={5} />
        <line x1={12} y1={1} x2={12} y2={3} />
        <line x1={12} y1={21} x2={12} y2={23} />
        <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
        <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
        <line x1={1} y1={12} x2={3} y2={12} />
        <line x1={21} y1={12} x2={23} y2={12} />
        <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
        <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
      </svg>
    ),
  },
  {
    title: "Established Legacy",
    description:
      "25+ years of excellence — join a company with a proven track record",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const TEAM = [
  { name: "Julie Baier", role: "Owner", initials: "JB" },
  { name: "Steven Baier", role: "Co-Owner", initials: "SB" },
  { name: "Amanda Arnold", role: "Operations Manager", initials: "AA" },
  { name: "Brian Clement", role: "Project Lead", initials: "BC" },
  { name: "Jesus Vargas", role: "Field Supervisor", initials: "JV" },
];

const BENEFITS = [
  {
    title: "Competitive Pay",
    description:
      "Industry-leading wages that reflect your hard work and expertise",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1={12} y1={1} x2={12} y2={23} />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Year-Round Work",
    description:
      "Landscaping in spring through fall, snow removal keeps you busy in winter",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <line x1={16} y1={2} x2={16} y2={6} />
        <line x1={8} y1={2} x2={8} y2={6} />
        <line x1={3} y1={10} x2={21} y2={10} />
      </svg>
    ),
  },
  {
    title: "Professional Development",
    description:
      "Certifications, training programs, and skill-building on the job",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Quality Equipment",
    description:
      "Work with professional-grade tools and well-maintained fleet vehicles",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Team Environment",
    description:
      "Collaborative atmosphere where every voice matters and contributions are valued",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Growth Opportunities",
    description:
      "Clear paths to advance from crew member to project lead and beyond",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center bg-navy-500 section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-navy-600 to-shamrock-900/30" />
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-shamrock-500/5 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-shamrock-500/5 blur-3xl" />

        <div className="container-narrow relative z-10 py-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-sm font-semibold uppercase tracking-widest text-shamrock-400"
          >
            Careers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6 max-w-4xl leading-tight"
          >
            We&apos;re always looking for talented designers, and people ready to
            get their hands dirty.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-white/70 mb-10"
          >
            Join our team today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo("apply")}
              className="btn-primary"
            >
              Start Your Career
            </button>
            <button
              type="button"
              onClick={() => scrollTo("why-join")}
              className="btn-secondary"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section
        id="why-join"
        className="section-padding py-20 md:py-28 bg-cream"
      >
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-shamrock-500">
              Why Shamrock
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-500">
              Why Join Shamrock?
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group rounded-2xl bg-white p-8 shadow-sm shadow-navy-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-shamrock-500/10 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-shamrock-50 text-shamrock-500 transition-colors duration-300 group-hover:bg-shamrock-500 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl text-navy-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section-padding py-20 md:py-28 bg-navy-500">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-shamrock-400">
              Our People
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white">
              Built by People Who Care
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 px-6 py-4 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-shamrock-500 text-sm font-bold text-white">
                  {member.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-white/50">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <svg
              className="mx-auto mb-4 h-8 w-8 text-shamrock-500/60"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-display text-xl sm:text-2xl text-white/90 italic leading-relaxed">
              At Shamrock, every project is a chance to create something
              beautiful. We take pride in our craft and our team.
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding py-20 md:py-28 bg-cream">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-shamrock-500">
              Benefits
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-500">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group rounded-2xl bg-white p-7 shadow-sm shadow-navy-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-shamrock-500/10 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-shamrock-50 text-shamrock-500 transition-colors duration-300 group-hover:bg-shamrock-500 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg text-navy-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="apply"
        className="section-padding py-20 md:py-28 bg-stone-light"
      >
        <div className="container-narrow max-w-2xl">
          <ContactForm variant="careers" />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding py-20 md:py-28 bg-gradient-to-br from-shamrock-500 via-shamrock-600 to-shamrock-700">
        <div className="container-narrow text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4"
          >
            Your Next Chapter Starts Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Join a team that builds beautiful spaces and builds great careers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo("apply")}
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-shamrock-600 transition-all duration-300 hover:bg-white/90 hover:shadow-lg active:scale-[0.98]"
            >
              Apply Now
            </button>
            <a
              href="tel:6303970393"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-[0.98]"
            >
              Call Us: 630-397-0393
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
