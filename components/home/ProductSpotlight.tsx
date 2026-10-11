"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    id: "apple",
    name: "Apple",
    badge: "Crisp Red Apple",
    image: "/pharma/images/products/prolyte-apple.png",
    color: "#dc2626",
    bgColor: "rgba(220, 38, 38, 0.06)",
    borderColor: "rgba(220, 38, 38, 0.2)",
    pillBg: "bg-red-50 text-red-700 border-red-200",
  },
  {
    id: "orange",
    name: "Orange",
    badge: "Zesty Citrus",
    image: "/pharma/images/products/prolyte-lemon.png",
    color: "#ea580c",
    bgColor: "rgba(234, 88, 12, 0.06)",
    borderColor: "rgba(234, 88, 12, 0.2)",
    pillBg: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    id: "lemon",
    name: "Lemon",
    badge: "Refreshing Citrus",
    image: "/pharma/images/products/prolyte-lemon.png",
    color: "#ca8a04",
    bgColor: "rgba(202, 138, 4, 0.06)",
    borderColor: "rgba(202, 138, 4, 0.2)",
    pillBg: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: "chilli-guava",
    name: "Chilli Guava",
    badge: "Spiced Tropical",
    image: "/pharma/images/products/prolyte-aam-panna.png",
    color: "#16a34a",
    bgColor: "rgba(22, 163, 74, 0.06)",
    borderColor: "rgba(22, 163, 74, 0.2)",
    pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    badge: "Sweet Tropical",
    image: "/pharma/images/products/prolyte-jeera.png",
    color: "#d97706",
    bgColor: "rgba(217, 119, 6, 0.06)",
    borderColor: "rgba(217, 119, 6, 0.2)",
    pillBg: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    id: "blackcurrant",
    name: "Black Currant",
    badge: "Rich Berry Blend",
    image: "/pharma/images/products/prolyte-blackcurrant.png",
    color: "#9333ea",
    bgColor: "rgba(147, 51, 234, 0.06)",
    borderColor: "rgba(147, 51, 234, 0.2)",
    pillBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "litchi",
    name: "Litchi",
    badge: "Delicate Exotic",
    image: "/pharma/images/products/prolyte-blackcurrant.png",
    color: "#db2777",
    bgColor: "rgba(219, 39, 119, 0.06)",
    borderColor: "rgba(219, 39, 119, 0.2)",
    pillBg: "bg-pink-50 text-pink-700 border-pink-200",
  },
  {
    id: "mix-fruit",
    name: "Mix Fruit",
    badge: "Multi-Fruit Fusion",
    image: "/pharma/images/products/prolyte-apple.png",
    color: "#2563eb",
    bgColor: "rgba(37, 99, 235, 0.06)",
    borderColor: "rgba(37, 99, 235, 0.2)",
    pillBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

const TECHNICAL_FORMULA = [
  { component: "Sodium Chloride (NaCl)", concentration: "75 MMOL/L", weight: "2.6 g/l", purpose: "Sodium source" },
  { component: "Tri-Sodium Citrate Dihydrate", concentration: "10 MMOL/L", weight: "2.9 g/l", purpose: "Alkalizing agent" },
  { component: "Potassium Chloride (KCl)", concentration: "20 MMOL/L", weight: "1.5 g/l", purpose: "Potassium source" },
  { component: "Anhydrous Glucose", concentration: "75 MMOL/L", weight: "13.5 g/l", purpose: "Co-transport mechanism" },
];

export default function ProductSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PRODUCTS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentProduct = PRODUCTS[currentIndex];

  return (
    <section className="py-14 md:py-20 bg-light-bg/50 border-y border-border-subtle overflow-hidden" id="products">
      <div className="ayka-container space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-teal tracking-wider uppercase">
              FLAGSHIP PRODUCT LINE &bull; W.H.O. RECOMMENDED FORMULA
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy tracking-tight mt-1">
              AYKALUTE ORS Liquid Solution
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-primary hover:text-navy transition-colors cursor-pointer"
          >
            <span>View Full Product Portfolio &amp; Flavors</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-border-subtle p-6 md:p-10 shadow-clinical">
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
            {/* Interactive Product Showcase Box */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div
                className="relative rounded-2xl border transition-all duration-500 p-5 flex flex-col items-center group cursor-pointer shadow-2xs"
                style={{
                  backgroundColor: currentProduct.bgColor,
                  borderColor: currentProduct.borderColor,
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Header Tag */}
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-xs rounded-full text-[10px] font-extrabold text-navy border border-border-subtle uppercase tracking-wider shadow-2xs">
                    READY-TO-DRINK &bull; 125ML &amp; 200ML
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white text-navy border border-border-subtle">
                    Flavor {currentIndex + 1} of {PRODUCTS.length}
                  </span>
                </div>

                {/* Main Product Image Stage */}
                <div className="relative w-full h-[330px] sm:h-[370px] rounded-2xl overflow-hidden flex items-center justify-center bg-white border border-border-subtle/70 shadow-inner">
                  {/* Flavor-Responsive Ambient Glow */}
                  <div
                    className="absolute inset-0 opacity-25 transition-all duration-500 blur-2xl scale-125"
                    style={{ backgroundColor: currentProduct.color }}
                  />

                  {PRODUCTS.map((product, idx) => (
                    <div
                      key={product.id}
                      className={`absolute inset-0 p-3 transition-all duration-500 ease-in-out flex items-center justify-center ${
                        idx === currentIndex
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-95 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={product.image}
                        alt={`Aykalute ORS - ${product.name} Flavor`}
                        fill
                        className="object-contain p-2 drop-shadow-sm"
                        unoptimized
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Active Flavor Title & Compliance Badge */}
                <div className="mt-4 text-center w-full">
                  <div className="text-lg font-extrabold text-navy font-heading">
                    AYKALUTE ORS &bull; {currentProduct.name}
                  </div>
                  <div
                    className="text-xs font-bold mt-1.5 inline-block px-3.5 py-1 rounded-full border border-white/80 bg-white shadow-2xs transition-all duration-300"
                    style={{ color: currentProduct.color }}
                  >
                    {currentProduct.badge} Flavor &bull; High Paediatric Compliance
                  </div>
                </div>

                {/* 8-Flavor Interactive Selector Strip */}
                <div className="w-full grid grid-cols-4 gap-1.5 mt-4 pt-3 border-t border-border-subtle">
                  {PRODUCTS.map((product, idx) => (
                    <button
                      key={product.id}
                      onClick={() => setCurrentIndex(idx)}
                      title={`${product.name} Flavor`}
                      aria-label={`Select ${product.name} flavor`}
                      className={`py-1.5 px-1 rounded-lg text-center text-[10px] font-bold border transition-all cursor-pointer ${
                        idx === currentIndex
                          ? "bg-navy text-white border-navy scale-105 shadow-2xs font-extrabold"
                          : "bg-white text-body-text border-border-subtle hover:border-teal"
                      }`}
                    >
                      {product.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Specifications & Technical Formula */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#ECFDF5] text-success rounded-full text-xs font-bold uppercase tracking-wider border border-success/20">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span>WHO/UNICEF LOW OSMOLARITY STANDARD &bull; 75 MMOL/L</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight leading-tight">
                  Scientifically Balanced Liquid Rehydration
                </h3>

                <p className="text-sm text-body-text leading-relaxed">
                  Ayka Pharma packages ready-to-drink Liquid ORS formulated precisely according to WHO guidelines. Ready-to-drink convenience eliminates mixing errors and ensures immediate bioavailability for emergency care, hospital hydration, and large-scale distribution programs.
                </p>

                {/* Packaging Integrity Feature Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 bg-light-bg rounded-xl border border-border-subtle space-y-1">
                    <span className="text-[10px] font-bold text-teal uppercase">Barrier Protection</span>
                    <p className="text-xs font-extrabold text-navy">7-Layer Barrier Film</p>
                    <p className="text-[11px] text-muted-text">Aluminium + plastic layers against oxygen</p>
                  </div>
                  <div className="p-3.5 bg-light-bg rounded-xl border border-border-subtle space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase">Volume Formats</span>
                    <p className="text-xs font-extrabold text-navy">125 ml &amp; 200 ml</p>
                    <p className="text-[11px] text-muted-text">Hygienic single-use ready packs</p>
                  </div>
                  <div className="p-3.5 bg-light-bg rounded-xl border border-border-subtle space-y-1">
                    <span className="text-[10px] font-bold text-success uppercase">Storage Spec</span>
                    <p className="text-xs font-extrabold text-navy">Store below 25°C</p>
                    <p className="text-[11px] text-muted-text">Protect from light &bull; Long stability</p>
                  </div>
                </div>

                {/* Technical Formula Table */}
                <div className="border border-border-subtle rounded-xl overflow-hidden text-xs shadow-2xs">
                  <div className="bg-navy text-white px-4 py-2.5 font-bold flex justify-between items-center">
                    <span className="font-heading">Technical Formula (Per Liter)</span>
                    <span className="text-teal font-extrabold text-[11px] uppercase tracking-wide">
                      TOTAL OSMOLARITY: 75 MMOL/L
                    </span>
                  </div>
                  <div className="divide-y divide-border-subtle bg-white">
                    {TECHNICAL_FORMULA.map((item, idx) => (
                      <div key={idx} className="grid grid-cols-12 px-4 py-2 hover:bg-light-bg transition-colors">
                        <span className="col-span-5 font-bold text-navy">{item.component}</span>
                        <span className="col-span-3 text-teal font-semibold">{item.concentration}</span>
                        <span className="col-span-2 text-muted-text font-medium">{item.weight}</span>
                        <span className="col-span-2 text-right font-medium text-navy">{item.purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/products"
                  className="btn-primary text-xs py-3 px-5 inline-flex items-center justify-center gap-2 cursor-pointer shadow-clinical"
                >
                  <span className="material-symbols-outlined text-base">science</span>
                  <span>View All 8 Flavors &amp; Full Packaging Specs</span>
                </Link>
                <Link
                  href="/contact#rfq-form"
                  className="btn-secondary text-xs py-3 px-5 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Private Label Sample Batch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
