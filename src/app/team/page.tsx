"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const avatarGradients = [
  "from-shamrock-400 to-shamrock-600",
  "from-shamrock-500 to-shamrock-700",
  "from-shamrock-300 to-shamrock-500",
  "from-shamrock-600 to-shamrock-800",
  "from-shamrock-400 to-shamrock-700",
];

interface TeamMember {
  name: string;
  initials: string;
  title: string;
  credentials?: string;
  bio: string;
  quote?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Julie Baier",
    initials: "JB",
    title: "President, CFO, Commercial Sales and Operations",
    credentials:
      "40+ years experience. Loyola BBA Accounting, College of DuPage Design & Horticulture.",
    bio: "Julie brings a farm background and decades of business acumen to every project. She specializes in prairie plantings and sustainable landscaping, blending environmental stewardship with beautiful design.",
    quote:
      "From the initial phone call or website visit, I promise to walk you through the process of giving the estimate to the completion.",
  },
  {
    name: "Steven Baier",
    initials: "SB",
    title: "Estimating and Project Management",
    credentials: "High Point University, College of DuPage Horticulture.",
    bio: "Steven grew up in the landscape industry and has always wanted to work in the field he was raised in. Known for his integrity and energizing personality, he loves being outdoors working alongside his parents. When not on the job, he enjoys soccer and traveling.",
    quote:
      "Steven loves to be outdoors working with his parents and has always wanted to work in the landscape field he grew up in.",
  },
  {
    name: "Amanda Arnold",
    initials: "AA",
    title: "Landscape Architecture Partner",
    credentials: "PLA, SITES AP, LEED AP+ BD+C, ASLA. Ball State University.",
    bio: "Amanda is passionate about environmental stewardship and the intersection of design and ecology. Her professional certifications reflect a deep commitment to sustainable, performance-driven landscape architecture.",
    quote:
      "There is a great satisfaction by creating a meal from something that you have helped grow. I have always been inspired by the complexity and wonder of nature.",
  },
  {
    name: "Brian Clement",
    initials: "BC",
    title: "Horticulturist",
    credentials:
      "MS Agriculture Iowa State, BS Education Illinois State, PLTW certifications from Milwaukee School of Engineering.",
    bio: "Brian believes that collaboration between homeowners and professionals ensures spectacular results for even the simplest of projects. His attention to detail and deep horticultural knowledge bring science and artistry together in every planting plan.",
    quote:
      "Collaboration between homeowners and professionals ensures spectacular results for even the simplest of projects.",
  },
  {
    name: "Jesus Vargas",
    initials: "JV",
    title: "Landscape Foreman and Construction",
    credentials: "With Shamrock since 2002.",
    bio: "Jesus brings a family farm background from Mexico and over two decades of hands-on experience with large-scale hardscape projects. His meticulous precision and efficiency are contagious to those he trains and works with.",
    quote:
      "His meticulous precision and efficiency are contagious to those he trains and works with.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-navy-500">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-shamrock-500/20 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-[360px] w-[360px] rounded-full bg-shamrock-700/15 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative z-10 section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Meet Our Staff
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            The talented people behind every Shamrock project.
          </motion.p>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="bg-section-gradient py-24 lg:py-32">
        <div className="section-padding container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid gap-10 md:grid-cols-2 xl:grid-cols-3"
          >
            {teamMembers.map((member, i) => (
              <motion.article
                key={member.name}
                variants={fadeUp}
                custom={i}
                className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="flex items-center gap-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[i]} shadow-lg shadow-shamrock-500/20`}
                  >
                    <span className="text-xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-500">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-shamrock-600">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Credentials */}
                {member.credentials && (
                  <p className="mt-5 text-xs font-medium uppercase tracking-wider text-navy-200">
                    {member.credentials}
                  </p>
                )}

                {/* Bio */}
                <p className="mt-4 flex-1 leading-relaxed text-navy-300">
                  {member.bio}
                </p>

                {/* Quote */}
                {member.quote && (
                  <blockquote className="mt-6 border-l-2 border-shamrock-300 pl-4">
                    <p className="text-sm italic leading-relaxed text-navy-400">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </blockquote>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-navy-500 py-24 lg:py-32">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-shamrock-500/15 blur-[100px]"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 section-padding text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Want to Join Our Team?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            We&apos;re always looking for passionate people who share our
            commitment to quality craftsmanship.
          </p>
          <Link href="/careers" className="btn-primary mt-10 inline-block">
            View Open Positions
          </Link>
        </motion.div>
      </section>
    </>
  );
}
