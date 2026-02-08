"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactFormSchema, type ContactFormData, sanitizeInput } from "@/lib/validation";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  variant?: "careers" | "contact" | "quick";
}

export default function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("submitting");
    const sanitized = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: sanitizeInput(data.phone),
      message: sanitizeInput(data.message),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitized),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const headingText =
    variant === "careers"
      ? "Ready to Join Our Team?"
      : variant === "quick"
        ? "Quick Inquiry"
        : "Get in Touch";

  const subtitleText =
    variant === "careers"
      ? "Fill out the form below and we'll be in touch."
      : variant === "quick"
        ? "Tell us about your project and we'll get back to you."
        : "Let us help you build your dream landscape.";

  const submitText =
    variant === "careers" ? "Start Your Career" : "Send Message";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white rounded-2xl shadow-lg shadow-navy-500/5 p-8 sm:p-10 md:p-12">
        <h3 className="font-display text-2xl sm:text-3xl text-navy-500 mb-2">
          {headingText}
        </h3>
        <p className="text-navy-500/60 mb-8">{subtitleText}</p>

        {variant === "careers" && (
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { icon: "clock", text: "Takes 2 minutes" },
              { icon: "reply", text: "We respond within 24 hours" },
              { icon: "shield", text: "No commitment required" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-navy-500/50">
                <svg className="w-4 h-4 text-shamrock-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icon === "clock" && <><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></>}
                  {icon === "reply" && <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />}
                  {icon === "shield" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        )}

        {status === "success" ? (
          <div className="text-center py-8" role="status">
            <svg className="w-14 h-14 text-shamrock-500 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h4 className="font-display text-2xl text-navy-500 mb-2">Thank you!</h4>
            <p className="text-navy-500/70">We&apos;ll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-500 mb-1.5">
                  Your Name <span className="text-shamrock-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full rounded-lg border bg-cream px-4 py-3 text-navy-500 placeholder:text-navy-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-shamrock-500/50 focus:border-shamrock-500 ${errors.name ? "border-red-400" : "border-stone-dark"}`}
                  placeholder="John Smith"
                  {...register("name")}
                />
                {errors.name && <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy-500 mb-1.5">
                  Your Email <span className="text-shamrock-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full rounded-lg border bg-cream px-4 py-3 text-navy-500 placeholder:text-navy-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-shamrock-500/50 focus:border-shamrock-500 ${errors.email ? "border-red-400" : "border-stone-dark"}`}
                  placeholder="john@example.com"
                  {...register("email")}
                />
                {errors.email && <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-navy-500 mb-1.5">
                Your Phone <span className="text-shamrock-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full rounded-lg border bg-cream px-4 py-3 text-navy-500 placeholder:text-navy-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-shamrock-500/50 focus:border-shamrock-500 ${errors.phone ? "border-red-400" : "border-stone-dark"}`}
                placeholder="(630) 555-0123"
                {...register("phone")}
              />
              {errors.phone && <p id="phone-error" role="alert" className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-navy-500 mb-1.5">
                Your Message <span className="text-navy-500/40 font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full rounded-lg border bg-cream px-4 py-3 text-navy-500 placeholder:text-navy-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-shamrock-500/50 focus:border-shamrock-500 resize-y ${errors.message ? "border-red-400" : "border-stone-dark"}`}
                placeholder={variant === "careers" ? "Tell us about yourself and your experience..." : "Tell us about your project..."}
                {...register("message")}
              />
              {errors.message && <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>

            {status === "error" && (
              <div role="alert" className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                Something went wrong. Please try again or call us at{" "}
                <a href="tel:6303970393" className="font-semibold underline">630-397-0393</a>.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                submitText
              )}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
