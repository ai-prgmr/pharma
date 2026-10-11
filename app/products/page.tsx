import type { Metadata } from "next";
import ProductsHero from "@/components/products/ProductsHero";
import FlavorsGrid from "@/components/products/FlavorsGrid";
import TechnicalFormulaTable from "@/components/products/TechnicalFormulaTable";
import PackagingIntegrity from "@/components/products/PackagingIntegrity";
import HomeContactSection from "@/components/home/HomeContactSection";

export const metadata: Metadata = {
  title: "AYKALUTE ORS Liquid Solution & 8 Flavors | Ayka Pharma",
  description: "Explore Aykalute ORS ready-to-drink liquid oral rehydration solution. Available in 8 flavors, 125ml/200ml 7-layer barrier packs, WHO low osmolarity standard formula.",
};

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      <ProductsHero />
      <FlavorsGrid />
      <TechnicalFormulaTable />
      <PackagingIntegrity />
      <HomeContactSection />
    </div>
  );
}
