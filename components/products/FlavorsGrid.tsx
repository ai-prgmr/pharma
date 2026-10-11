"use client";

import { useState } from "react";
import Image from "next/image";

const FLAVORS = [
  {
    id: "chilli-guava",
    name: "Chilli Guava",
    subtitle: "Spiced Tropical Refreshment",
    description: "Unique blend of sweet guava with a subtle spice note to enhance palatability and fluid intake.",
    color: "#16a34a",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    image: "/pharma/images/products/prolyte-aam-panna.png",
    tag: "Popular Regional Flavor",
  },
  {
    id: "lemon",
    name: "Lemon",
    subtitle: "Classic Zesty Citrus",
    description: "Traditional citrus flavor formulation providing crisp, refreshing taste for instant hydration compliance.",
    color: "#ca8a04",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    image: "/pharma/images/products/prolyte-lemon.png",
    tag: "High Compliance Standard",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    subtitle: "Sweet Tropical Fusion",
    description: "Naturally sweet tropical note formulated to mask saltiness and encourage paediatric compliance.",
    color: "#d97706",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    image: "/pharma/images/products/prolyte-jeera.png",
    tag: "Pediatric Preferred",
  },
  {
    id: "apple",
    name: "Apple",
    subtitle: "Crisp Red Apple",
    description: "Smooth, familiar apple profile ideal for daily rehydration and recovery programs.",
    color: "#dc2626",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    image: "/pharma/images/products/prolyte-apple.png",
    tag: "Universal Favorite",
  },
  {
    id: "orange",
    name: "Orange",
    subtitle: "Zesty Citrus Boost",
    description: "Vibrant orange formulation delivering bright flavor alignment with standard electrolyte therapy.",
    color: "#ea580c",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    image: "/pharma/images/products/prolyte-lemon.png",
    tag: "Market Standard",
  },
  {
    id: "blackcurrant",
    name: "Black Currant",
    subtitle: "Rich Berry Blend",
    description: "Deep berry flavor profile designed for premium commercial retail and export packaging.",
    color: "#9333ea",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    image: "/pharma/images/products/prolyte-blackcurrant.png",
    tag: "Premium Export Spec",
  },
  {
    id: "litchi",
    name: "Litchi",
    subtitle: "Delicate Exotic Taste",
    description: "Subtle and refreshing exotic flavor profile offering superior palatability in acute diarrhea recovery.",
    color: "#db2777",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    image: "/pharma/images/products/prolyte-blackcurrant.png",
    tag: "Mild & Gentle",
  },
  {
    id: "mix-fruit",
    name: "Mix Fruit",
    subtitle: "Multi-Fruit Symphony",
    description: "Harmonious blend of orchard fruits providing broad appeal across all age groups and healthcare settings.",
    color: "#2563eb",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    image: "/pharma/images/products/prolyte-apple.png",
    tag: "Broad Appeal",
  },
];

export default function FlavorsGrid() {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-16 bg-white" id="flavors-grid">
      <div className="ayka-container space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            SUPERIOR PALATABILITY &bull; 8 PLEASANTMild FLAVORS
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            Aykalute ORS Flavor Portfolio
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            Available in pleasant mild flavors to improve patient compliance, especially in paediatric cases during dehydration recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLAVORS.map((flavor) => {
            const isSelected = selectedFlavor === flavor.id;
            return (
              <div
                key={flavor.id}
                onClick={() => setSelectedFlavor(isSelected ? null : flavor.id)}
                className={`ayka-card flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 ${
                  isSelected ? "ring-2 ring-teal shadow-md" : ""
                }`}
              >
                {/* Top Tag & Color Pill */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded ${flavor.bgColor} text-navy border ${flavor.borderColor}`}>
                    {flavor.tag}
                  </span>
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: flavor.color }}
                  />
                </div>

                {/* Product Image Stage */}
                <div className="relative w-full h-48 bg-light-bg rounded-xl overflow-hidden border border-border-subtle flex items-center justify-center my-2 p-2">
                  <div
                    className="absolute inset-0 opacity-15 blur-lg transition-transform group-hover:scale-110"
                    style={{ backgroundColor: flavor.color }}
                  />
                  <Image
                    src={flavor.image}
                    alt={`Aykalute ORS - ${flavor.name} Flavor`}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>

                {/* Flavor Details */}
                <div className="space-y-1.5 mt-2">
                  <h3 className="text-base font-extrabold text-navy group-hover:text-primary transition-colors">
                    {flavor.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal">{flavor.subtitle}</p>
                  <p className="text-xs text-muted-text leading-relaxed line-clamp-3">
                    {flavor.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-border-subtle flex items-center justify-between text-xs font-bold text-navy">
                  <span>Available Volumes:</span>
                  <span className="text-teal font-extrabold">125ml &amp; 200ml</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
