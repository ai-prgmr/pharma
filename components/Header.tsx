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
    { name: "Products & Flavors", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contract Manufacturing", href: "/contract-manufacturing" },
    { name: "Contact & RFQ", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-subtle shadow-xs transition-all">
      {/* Top Clinical Utility Bar */}
      <div className="bg-navy text-white text-[11px] py-1.5 hidden md:block border-b border-navy-dark">
        <div className="ayka-container flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              WHO-GMP &amp; ISO 9001:2015 Accredited Plant
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Class D Sterile Cleanroom Filling</span>
            <span className="text-slate-500">•</span>
            <span className="text-teal font-semibold">1.5 Cr (15M) Pouches / Month</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:aykapharma@aykapharma.com"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-xs text-teal">mail</span>
              <span>aykapharma@aykapharma.com</span>
            </a>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-teal">location_on</span>
              <span>Indore, Madhya Pradesh</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="ayka-container h-18 md:h-20 flex items-center justify-between">
        {/* Brand Logo & Corporate Tagline */}
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-primary rounded-lg py-1 px-1 group"
        >
          <div className="relative flex items-center h-10 w-40 md:w-48">
            <Image
              src="/pharma/ayka-pharma-logo.png"
              alt="Ayka Pharma Logo"
              width={180}
              height={54}
              priority
              className="w-auto h-10 md:h-20 object-contain transition-transform group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[14px] font-semibold tracking-tight transition-all py-2 px-3.5 rounded-lg relative cursor-pointer ${active
                      ? "text-primary bg-light-bg shadow-2xs font-bold"
                      : "text-body-text hover:text-primary hover:bg-light-bg/70"
                      }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Primary CTA */}
          <Link
            href="/contact"
            className="btn-primary text-xs font-bold py-2.5 px-4 shadow-sm inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>Request Batch RFQ</span>
            <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5">
              arrow_forward
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-body-text hover:text-primary hover:bg-light-bg focus:outline-2 focus:outline-primary cursor-pointer"
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
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-border-subtle px-4 pt-3 pb-6 space-y-4 animate-ayka-fade-up shadow-lg">
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${active
                        ? "bg-light-bg text-primary font-bold border-l-4 border-primary"
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

          <div className="pt-2 px-2 border-t border-border-subtle space-y-2">
            <div className="text-[11px] text-muted-text px-2">
              <span className="block font-semibold text-navy">AYKA PHARMA &bull; Works Site:</span>
              <span>Jamaniya Khurd, Indore, Madhya Pradesh</span>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center text-xs py-2.5 justify-center cursor-pointer"
            >
              Discuss Requirements &bull; Submit RFQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
