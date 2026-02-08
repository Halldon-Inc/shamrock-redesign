"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

function ShamrockLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M16 6c-2.5-4-8-4-8 0s4.5 6 8 10c3.5-4 8-6 8-10s-5.5-4-8 0z"
        fill="#009244"
      />
      <path
        d="M6 16c-4 2.5-4 8 0 8s6-4.5 10-8c-4-3.5-6-8-10-8s-4 5.5 0 8z"
        fill="#009244"
      />
      <path
        d="M26 16c4 2.5 4 8 0 8s-6-4.5-10-8c4-3.5 6-8 10-8s4 5.5 0 8z"
        fill="#009244"
      />
      <path
        d="M16 18c0 0-1 4-2 8s0 4 2 4 3-1 2-4-2-8-2-8z"
        fill="#007035"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      const t = setTimeout(() => firstLinkRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const handleDrawerKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    },
    [closeMobile]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-md backdrop-blur-md"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        role="banner"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock-500"
            aria-label="Shamrock Hardscapes — Home"
          >
            <ShamrockLogo />
            <span className="text-xl font-bold tracking-widest text-shamrock-500 font-display">
              SHAMROCK
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock-500 ${
                    isActive
                      ? "text-shamrock-500"
                      : "text-navy-500 hover:text-shamrock-500"
                  }`}
                  {...(isActive ? { "aria-current": "page" as const } : {})}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-shamrock-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:6303970393"
              className="text-sm font-medium text-navy-300 transition-colors hover:text-shamrock-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock-500"
              aria-label="Call us at 630-397-0393"
            >
              630-397-0393
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-shamrock-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-shamrock-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock-700 active:scale-[0.97]"
            >
              Request Estimate
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-navy-500 transition-colors hover:bg-shamrock-50 hover:text-shamrock-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock-500 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-navy-500/40 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
              onClick={closeMobile}
            />
            <motion.nav
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl lg:hidden"
              aria-label="Mobile navigation"
              onKeyDown={handleDrawerKeyDown}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-stone-light px-4 py-3">
                  <span className="text-lg font-bold tracking-widest text-shamrock-500 font-display">
                    SHAMROCK
                  </span>
                  <button
                    type="button"
                    className="rounded-md p-2 text-navy-300 transition-colors hover:text-navy-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock-500"
                    onClick={closeMobile}
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <ul className="space-y-1" role="list">
                    {NAV_LINKS.map((link, i) => {
                      const isActive = pathname === link.href;
                      return (
                        <li key={link.label}>
                          <Link
                            ref={i === 0 ? firstLinkRef : undefined}
                            href={link.href}
                            onClick={closeMobile}
                            className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock-500 ${
                              isActive
                                ? "bg-shamrock-50 text-shamrock-500"
                                : "text-navy-500 hover:bg-stone-light hover:text-shamrock-500"
                            }`}
                            {...(isActive
                              ? { "aria-current": "page" as const }
                              : {})}
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="border-t border-stone-light px-4 py-4 space-y-3">
                  <a
                    href="tel:6303970393"
                    className="block text-center text-sm font-medium text-navy-300 hover:text-shamrock-500"
                    aria-label="Call us at 630-397-0393"
                  >
                    630-397-0393
                  </a>
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="block w-full rounded-full bg-shamrock-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-shamrock-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock-700"
                  >
                    Request Estimate
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <div className="h-16" aria-hidden="true" />
    </>
  );
}
