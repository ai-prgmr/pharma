import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ManufacturingExcellence from "@/components/about/ManufacturingExcellence";
import QualityCertifications from "@/components/about/QualityCertifications";
import StrategicPartnerPillars from "@/components/about/StrategicPartnerPillars";
import HomeContactSection from "@/components/home/HomeContactSection";

export const metadata: Metadata = {
  title: "About Ayka Pharma | Manufacturing Unit & WHO-GMP Facility",
  description: "Learn about Ayka Pharma, one of India's largest producers of Liquid ORS located in Indore, MP. Operating Class D cleanrooms, 15M pouches/month capacity, WHO-GMP & ISO 9001:2015 certified.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <AboutHero />
      <ManufacturingExcellence />
      <QualityCertifications />
      <StrategicPartnerPillars />
      <HomeContactSection />
    </div>
  );
}
