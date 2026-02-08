"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const CONTACT_INFO = [
  {
    label: "Address",
    value: "1112 Sears Circle, Elburn, IL 60119",
    href: undefined,
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx={12} cy={10} r={3} />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "630-397-0393",
    href: "tel:6303970393",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "julieb@shamrocklandscaping.com",
    href: "mailto:julieb@shamrocklandscaping.com",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const SERVICES = [
  "Landscape Design",
  "Hardscaping",
  "Landscaping",
  "Landscape Lighting",
  "Snow Removal",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ContactPage() {
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
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            Let Us Help
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg text-white/70"
          >
            We&apos;d love to hear about your project.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding py-20 md:py-28 bg-section-gradient">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl text-navy-500 mb-2">
                  Get in Touch
                </h2>
                <p className="text-navy-300 mb-8">
                  Reach out by phone, email, or fill out the form and
                  we&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>

              {CONTACT_INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm shadow-navy-500/5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-shamrock-50 text-shamrock-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-300 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-navy-500 font-medium hover:text-shamrock-500 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy-500 font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm variant="contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Reference */}
      <section className="section-padding py-16 md:py-20 bg-stone-light">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl text-navy-500 mb-8">
              Our Services
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                >
                  <Link
                    href="/services"
                    className="inline-block rounded-full border border-shamrock-500/30 bg-white px-6 py-2.5 text-sm font-semibold text-shamrock-600 transition-all duration-200 hover:bg-shamrock-500 hover:text-white hover:border-shamrock-500 hover:shadow-md"
                  >
                    {service}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
