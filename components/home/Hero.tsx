"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO_SLIDES = [
  {
    id: "machinery-1",
    title: "Tetra Pak & Aseptic Packaging Suite",
    subtitle: "Class D Environment & Sterile Aseptic Filling Platform",
    tag: "Aseptic Production Suite",
    image: "/pharma/images/hero/hero_machinery_1.png",
    specs: "High-Speed Liquid Packaging • 7-Layer Barrier Protection",
    badge: "Grade A / Class D Cleanroom",
  },
  {
    id: "machinery-2",
    title: "1.5 Crore (15M) Monthly Pouch Output",
    subtitle: "India's Premier High-Volume Liquid ORS Facility",
    tag: "High-Capacity Output",
    image: "/pharma/images/hero/hero_machinery_2.png",
    specs: "WHO-GMP Certified • Touch-Free Automated Lines",
    badge: "15 Million Pouches / Month",
  },
  {
    id: "machinery-3",
    title: "Temperature & RH Controlled Secondary Process",
    subtitle: "Complete Formulation to Final Hermetic Liquid Seal",
    tag: "Sterile Filling Workflow",
    image: "/pharma/images/hero/hero_machinery_3.png",
    specs: "Zero-Contamination Standard • WHO Low Osmolarity (75 MMOL/L)",
    badge: "WHO / UNICEF Standard",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 md:py-20" id="overview">
      {/* Subtle clinical background mesh grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Decorative ambient gradient blooms */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="ayka-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
          {/* Hero Text Column */}
          <div className="w-full lg:w-7/12 space-y-6">
            {/* Live Regulatory Status Indicator */}
            <div className="inline-flex items-center space-x-2.5 bg-light-bg px-4 py-1.5 rounded-full border border-border-subtle shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
              </span>
              <span className="text-[11px] font-extrabold text-navy uppercase tracking-wider">
                INNOVATING HEALTHCARE SOLUTIONS &bull; WHO-GMP CERTIFIED
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-navy tracking-tight leading-[1.12]">
              India&apos;s Premier Manufacturer of <span className="text-teal">Liquid ORS Solutions</span>
            </h1>

            <p className="text-base md:text-lg text-body-text leading-relaxed">
              AYKA PHARMA is a state-of-the-art pharmaceutical manufacturing unit in Indore, MP. As one of India&apos;s largest producers of ready-to-drink Liquid ORS, we formulate strictly to WHO guidelines with high-speed touch-free aseptic filling in Class D cleanrooms delivering <strong className="text-navy font-extrabold">15 Million pouches per month</strong>.
            </p>

            {/* Credential Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-xl bg-light-bg/80 border border-border-subtle flex items-start space-x-3 transition-all hover:bg-white hover:shadow-2xs">
                <div className="p-2 rounded-lg bg-teal/10 text-teal shrink-0">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-navy uppercase tracking-tight">WHO-GMP &amp; ISO 9001:2015</h3>
                  <p className="text-xs text-muted-text mt-0.5">Audited aseptic cleanroom compliance</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-light-bg/80 border border-border-subtle flex items-start space-x-3 transition-all hover:bg-white hover:shadow-2xs">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl">handshake</span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-navy uppercase tracking-tight">Low MOQ Co-Packing</h3>
                  <p className="text-xs text-muted-text mt-0.5">Private label &amp; export ready registration</p>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <Link
                href="/products"
                className="btn-primary text-sm py-3.5 px-6 inline-flex items-center justify-center gap-2 shadow-clinical cursor-pointer group"
              >
                <span>Explore Aykalute ORS (8 Flavors)</span>
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/contract-manufacturing"
                className="btn-secondary text-sm py-3.5 px-6 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg text-teal">settings_b2b</span>
                <span>Co-Packing &amp; Private Label</span>
              </Link>
            </div>
          </div>

          {/* Hero Interactive Machinery Showcase */}
          <div className="w-full lg:w-5/12">
            <div
              className="relative bg-light-bg p-3.5 rounded-2xl border border-border-subtle shadow-clinical group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Main Carousel Viewport */}
              <div className="relative rounded-xl overflow-hidden h-72 sm:h-96 w-full bg-white border border-border-subtle/80 flex items-center justify-center">
                {/* Background sterile grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 p-4 transition-all duration-700 ease-in-out flex items-center justify-center ${
                      idx === currentSlide
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-95 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain mix-blend-multiply p-2 drop-shadow-sm"
                      unoptimized
                      priority={idx === 0}
                    />
                  </div>
                ))}

                {/* Overlaid Banner at Bottom with Glassmorphism */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/75 to-transparent p-4 sm:p-5 text-white z-20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="inline-block px-2.5 py-0.5 bg-teal text-white rounded text-[10px] font-extrabold uppercase tracking-wider shadow-2xs">
                      {activeSlide.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-300">
                      {currentSlide + 1} / {HERO_SLIDES.length}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold tracking-tight">
                    {activeSlide.title}
                  </p>
                  <p className="text-xs text-slate-200 line-clamp-1 mt-0.5">
                    {activeSlide.specs}
                  </p>
                </div>

                {/* Carousel Controls (Arrows) */}
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
                    )
                  }
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-navy flex items-center justify-center shadow-md border border-border-subtle transition-all cursor-pointer opacity-80 hover:opacity-100"
                  aria-label="Previous Slide"
                >
                  <span className="material-symbols-outlined text-sm font-bold">chevron_left</span>
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
                  }
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-navy flex items-center justify-center shadow-md border border-border-subtle transition-all cursor-pointer opacity-80 hover:opacity-100"
                  aria-label="Next Slide"
                >
                  <span className="material-symbols-outlined text-sm font-bold">chevron_right</span>
                </button>
              </div>

              {/* Carousel Indicators / Interactive Slide Switcher */}
              <div className="flex items-center justify-between gap-2 mt-3 pt-1 px-1">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-left border cursor-pointer transition-all duration-300 ${
                      idx === currentSlide
                        ? "bg-white border-teal shadow-2xs"
                        : "bg-white/50 border-transparent hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentSlide ? "bg-teal scale-110" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={`text-[10px] font-bold tracking-tight truncate ${
                          idx === currentSlide ? "text-navy" : "text-muted-text"
                        }`}
                      >
                        {slide.tag}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Status Badges */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="p-2.5 bg-white rounded-xl border border-border-subtle flex items-center space-x-2">
                  <span className="material-symbols-outlined text-teal text-lg">verified</span>
                  <div>
                    <div className="text-[9px] font-bold text-muted-text uppercase">Certification</div>
                    <div className="text-xs font-bold text-navy">WHO-GMP &amp; ISO 9001</div>
                  </div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-border-subtle flex items-center space-x-2">
                  <span className="material-symbols-outlined text-primary text-lg">package_2</span>
                  <div>
                    <div className="text-[9px] font-bold text-muted-text uppercase">Monthly Output</div>
                    <div className="text-xs font-bold text-navy">15 Million Pouches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
