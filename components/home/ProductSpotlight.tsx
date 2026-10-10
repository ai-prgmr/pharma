"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    id: "aam-panna",
    name: "Aam Panna Flavour",
    badge: "Refreshing Raw Mango",
    image: "/images/products/prolyte-aam-panna.png",
    color: "#16a34a",
    bgColor: "rgba(22, 163, 74, 0.08)",
    borderColor: "rgba(22, 163, 74, 0.25)",
  },
  {
    id: "apple",
    name: "Apple Flavour",
    badge: "Crisp Red Apple",
    image: "/images/products/prolyte-apple.png",
    color: "#dc2626",
    bgColor: "rgba(220, 38, 38, 0.08)",
    borderColor: "rgba(220, 38, 38, 0.25)",
  },
  {
    id: "jeera",
    name: "Jeera Flavour",
    badge: "Traditional Cumin Hydration",
    image: "/images/products/prolyte-jeera.png",
    color: "#d97706",
    bgColor: "rgba(217, 119, 6, 0.08)",
    borderColor: "rgba(217, 119, 6, 0.25)",
  },
  {
    id: "blackcurrant",
    name: "Blackcurrant Flavour",
    badge: "Rich Berry Blend",
    image: "/images/products/prolyte-blackcurrant.png",
    color: "#9333ea",
    bgColor: "rgba(147, 51, 234, 0.08)",
    borderColor: "rgba(147, 51, 234, 0.25)",
  },
  {
    id: "lemon",
    name: "Lemon Flavour",
    badge: "Zesty Citrus Refresh",
    image: "/images/products/prolyte-lemon.png",
    color: "#ca8a04",
    bgColor: "rgba(202, 138, 4, 0.08)",
    borderColor: "rgba(202, 138, 4, 0.25)",
  },
];

export default function ProductSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PRODUCTS.length);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentProduct = PRODUCTS[currentIndex];

  return (
    <section className="py-12 md:py-16 bg-light-bg border-y border-border-subtle overflow-hidden">
      <div className="ayka-container">
        <div className="bg-white rounded-2xl border border-border-subtle p-5 md:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10">
            {/* Product Image Stage */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div
                className="relative rounded-2xl border transition-all duration-500 p-4 md:p-5 flex flex-col items-center group cursor-pointer shadow-xs"
                style={{
                  backgroundColor: currentProduct.bgColor,
                  borderColor: currentProduct.borderColor,
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Header Tag */}
                <div className="w-full flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs rounded text-[10px] font-extrabold text-navy border border-border-subtle uppercase tracking-wider shadow-2xs">
                    READY TO DRINK ELECTROLYTE
                  </span>
                </div>

                {/* Main Image Showcase - Maximized height, reduced gutters */}
                <div className="relative w-full h-[360px] sm:h-[400px] rounded-xl overflow-hidden flex items-center justify-center bg-white border border-border-subtle/60 shadow-inner">
                  {/* Subtle flavor ambient backdrop glow inside frame */}
                  <div
                    className="absolute inset-0 opacity-20 transition-all duration-500 blur-xl scale-125"
                    style={{ backgroundColor: currentProduct.color }}
                  />

                  {PRODUCTS.map((product, idx) => (
                    <div
                      key={product.id}
                      className={`absolute inset-0 p-1 sm:p-2 transition-all duration-500 ease-in-out flex items-center justify-center ${idx === currentIndex
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-95 z-0 pointer-events-none"
                        }`}
                    >
                      <Image
                        src={product.image}
                        alt={`Prolyte ORS - ${product.name}`}
                        fill
                        className="object-contain p-1"
                        unoptimized
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Active Flavor Title & Badge */}
                <div className="mt-3 text-center w-full">
                  <div className="text-base font-extrabold text-navy">
                    Prolyte ORS Packaging
                  </div>
                  <div
                    className="text-xs font-bold mt-1 inline-block px-3 py-1 rounded-full border border-white/60 bg-white/80 shadow-2xs transition-all duration-300"
                    style={{ color: currentProduct.color }}
                  >
                    {currentProduct.name} &bull; {currentProduct.badge}
                  </div>
                </div>

                {/* Thumbnail Strip to eliminate empty whitespace */}
                <div className="w-full grid grid-cols-5 gap-1.5 mt-3 pt-3 border-t border-navy/10">
                  {PRODUCTS.map((product, idx) => (
                    <button
                      key={product.id}
                      onClick={() => setCurrentIndex(idx)}
                      title={product.name}
                      aria-label={`Select ${product.name}`}
                      className={`relative aspect-[3/4] rounded-lg overflow-hidden border transition-all duration-200 bg-white p-0.5 ${idx === currentIndex
                        ? "ring-2 ring-teal border-transparent scale-105 shadow-xs"
                        : "border-border-subtle opacity-70 hover:opacity-100 hover:border-teal/50"
                        }`}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Specifications & Narrative */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#ECFDF5] text-success rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span>COMMERCIAL CONTRACT RUN READY &bull; 5 FLAVORS AVAILABLE</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight">
                  Featured Product: Prolyte ORS Formulations
                </h2>

                <p className="text-sm md:text-base text-body-text leading-relaxed">
                  Engineered with high thermodynamic barrier laminates for delicate electrolyte balance stability. Ayka Pharma packages oral rehydration salts with sterile precision across 5 distinct ready-to-drink formulation flavors, preserving osmotic stability across diverse storage temperatures.
                </p>

                {/* Interactive Variant Selection Bar */}
                <div className="p-3.5 bg-light-bg rounded-xl border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-muted-text uppercase tracking-wider">
                    <span>Available Ready-To-Drink Flavors:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCTS.map((product, idx) => (
                      <button
                        key={product.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all duration-200 border ${idx === currentIndex
                          ? "bg-navy text-white border-navy shadow-xs scale-105"
                          : "bg-white text-body-text border-border-subtle hover:border-teal"
                          }`}
                      >
                        {product.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Technical Specification Table */}
                <div className="border border-border-subtle rounded-xl overflow-hidden text-xs md:text-sm">
                  <div className="grid grid-cols-2 bg-light-bg px-4 py-2.5 font-bold text-navy border-b border-border-subtle">
                    <span>Parameter Specification</span>
                    <span>Compliance Metric</span>
                  </div>
                  <div className="grid grid-cols-2 px-4 py-2.5 bg-white border-b border-border-subtle">
                    <span className="text-muted-text">Dosage Form</span>
                    <span className="font-semibold text-navy">Aseptic Liquid Ready-to-Drink</span>
                  </div>
                  <div className="grid grid-cols-2 px-4 py-2.5 bg-light-bg border-b border-border-subtle">
                    <span className="text-muted-text">Active Selection</span>
                    <span
                      className="font-extrabold"
                      style={{ color: currentProduct.color }}
                    >
                      {currentProduct.name} ({currentIndex + 1} of 5)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 px-4 py-2.5 bg-white border-b border-border-subtle">
                    <span className="text-muted-text">Packaging Spec</span>
                    <span className="font-semibold text-navy">200ml Multi-layer Barrier Pack (BFS / Cartons)</span>
                  </div>
                  <div className="grid grid-cols-2 px-4 py-2.5 bg-light-bg">
                    <span className="text-muted-text">Regulatory Basis</span>
                    <span className="font-semibold text-navy">WHO Recommended Osmolarity Formula</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact#rfq-form"
                  className="btn-primary text-sm py-3 px-5 inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-teal text-lg">receipt_long</span>
                  <span>Request ORS Formulation Batch Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


