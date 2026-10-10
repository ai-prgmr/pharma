"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO_SLIDES = [
  {
    id: "machinery-1",
    title: "Tetra Pak Aseptic Liquid Packaging Line",
    subtitle: "Grade A Aseptic Processing & Sterile Filling Platform",
    tag: "Aseptic Line #1",
    image: "/pharma/images/hero/hero_machinery_1.png",
    specs: "High-Speed Liquid Packaging • Sterile Barrier Protection",
  },
  {
    id: "machinery-2",
    title: "High-Capacity Industrial Automated System",
    subtitle: "24/7 High-Volume Commercial Production Line",
    tag: "Commercial Unit #2",
    image: "/pharma/images/hero/hero_machinery_2.png",
    specs: "WHO-GMP Certified • Continuous Quality Control",
  },
  {
    id: "machinery-3",
    title: "End-to-End Aseptic Processing & Tank Workflow",
    subtitle: "Complete Formulation to Final Aseptic Liquid Seal",
    tag: "Processing Flow",
    image: "/pharma/images/hero/hero_machinery_3.png",
    specs: "Multi-Stage Sterilization • Zero-Contamination Standard",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-12 px-4 md:py-16" id="overview">
      <div className="ayka-container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Hero Text Column */}
          <div className="w-full lg:w-7/12 space-y-5">
            {/* Regulatory Status Chip */}
            <div className="inline-flex items-center space-x-2 bg-light-bg px-3.5 py-1.5 rounded-full border border-border-subtle shadow-xs">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-bold text-navy uppercase tracking-wider">
                35+ YEARS OF INDUSTRY EXCELLENCE • W.H.O. STANDARDS
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Your Partner from <span className="text-teal">Concept to Completion</span>
            </h1>

            <p className="text-base md:text-lg text-body-text leading-relaxed">
              Ayka PHARMA is a leading pharmaceutical company committed to providing high-quality, cost-effective products. With over 35 years of experience, we have established a state-of-the-art manufacturing facility for Aseptic Packaging in central India that adheres to W.H.O. standards.
            </p>

            <div className="p-4 rounded-xl bg-light-bg border border-border-subtle flex items-start space-x-3">
              <span className="material-symbols-outlined text-teal text-xl mt-0.5">biotech</span>
              <p className="text-xs md:text-sm text-body-text leading-relaxed">
                <strong className="text-navy">End-to-End Lifecycle:</strong> We handle the entire product lifecycle—from formulation development and raw material sourcing to analytical release testing and sterile manufacturing.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link href="/contact" className="btn-primary text-sm py-3 px-6 inline-flex items-center justify-center gap-2">
                <span>Request Facility Audit</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <a href="#compliance" className="btn-secondary text-sm py-3 px-6 inline-flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg text-muted-text">fact_check</span>
                <span>Inspect Dossier &amp; Licenses</span>
              </a>
            </div>
          </div>

          {/* Hero Facility Carousel */}
          <div className="w-full lg:w-5/12">
            <div
              className="relative bg-light-bg p-3 rounded-2xl border border-border-subtle shadow-xs group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Main Carousel Viewport */}
              <div className="relative rounded-xl overflow-hidden h-72 sm:h-96 w-full bg-white border border-border-subtle flex items-center justify-center">
                {/* Background grid texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 p-4 transition-all duration-700 ease-in-out flex items-center justify-center ${idx === currentSlide
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-95 z-0 pointer-events-none"
                      }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain mix-blend-multiply p-2"
                      unoptimized
                      priority={idx === 0}
                    />
                  </div>
                ))}

                {/* Overlaid Banner at Bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/60 to-transparent p-4 text-white z-20">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2.5 py-0.5 bg-teal/90 rounded text-[10px] font-bold uppercase tracking-wider">
                      {activeSlide.tag}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-300">
                      {currentSlide + 1} / {HERO_SLIDES.length}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold mt-1 tracking-tight">
                    {activeSlide.title}
                  </p>
                  <p className="text-xs text-slate-200 line-clamp-1">
                    {activeSlide.subtitle}
                  </p>
                </div>

                {/* Carousel Controls (Arrows) */}
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-navy flex items-center justify-center shadow-md border border-border-subtle transition-all opacity-80 hover:opacity-100"
                  aria-label="Previous Slide"
                >
                  <span className="material-symbols-outlined text-sm font-bold">chevron_left</span>
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-navy flex items-center justify-center shadow-md border border-border-subtle transition-all opacity-80 hover:opacity-100"
                  aria-label="Next Slide"
                >
                  <span className="material-symbols-outlined text-sm font-bold">chevron_right</span>
                </button>
              </div>

              {/* Carousel Indicators / Slide Selector Bar */}
              <div className="flex items-center justify-between gap-2 mt-3 pt-1 px-1">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-left border transition-all duration-300 ${idx === currentSlide
                        ? "bg-white border-teal shadow-2xs"
                        : "bg-white/50 border-transparent hover:bg-white"
                      }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-teal scale-110" : "bg-gray-300"
                          }`}
                      />
                      <span
                        className={`text-[10px] font-bold tracking-tight truncate ${idx === currentSlide ? "text-navy" : "text-muted-text"
                          }`}
                      >
                        {slide.tag}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Status Matrix */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="p-2.5 bg-white rounded-xl border border-border-subtle flex items-center space-x-2">
                  <span className="material-symbols-outlined text-teal text-lg">verified</span>
                  <div>
                    <div className="text-[9px] font-bold text-muted-text uppercase">Certification</div>
                    <div className="text-xs font-bold text-navy">WHO-GMP Compliant</div>
                  </div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-border-subtle flex items-center space-x-2">
                  <span className="material-symbols-outlined text-primary text-lg">pin_drop</span>
                  <div>
                    <div className="text-[9px] font-bold text-muted-text uppercase">Location</div>
                    <div className="text-xs font-bold text-navy">Central India Hub</div>
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

