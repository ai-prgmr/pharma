"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-subtle shadow-xs">
      <div className="ayka-container h-28 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-primary rounded-md py-1 px-1">
          <div className="relative flex items-center h-12 w-28">
            <Image
              src="/pharma/ayka-pharma-logo.png"
              alt="Ayka Pharma Logo"
              width={120}
              height={40}
              priority
              className="w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[15px] font-medium transition-colors py-2 px-1 relative ${active
                      ? "text-primary font-semibold"
                      : "text-body-text hover:text-primary"
                      }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Primary CTA */}
          <Link href="/contact" className="btn-primary">
            Discuss Requirements
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-body-text hover:text-primary hover:bg-light-bg focus:outline-2 focus:outline-primary"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border-subtle px-4 pt-3 pb-6 space-y-4 animate-ayka-fade-up">
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${active
                        ? "bg-light-bg text-primary font-semibold border-l-4 border-primary"
                        : "text-body-text hover:bg-light-bg hover:text-primary"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="pt-2 px-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              Discuss Requirements
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
