import type { Metadata } from "next";
import CmHero from "@/components/contract-manufacturing/CmHero";
import CoPackingCapabilities from "@/components/contract-manufacturing/CoPackingCapabilities";
import ExportReadiness from "@/components/contract-manufacturing/ExportReadiness";
import OemProcessSteps from "@/components/contract-manufacturing/OemProcessSteps";
import HomeContactSection from "@/components/home/HomeContactSection";

export const metadata: Metadata = {
  title: "Contract Manufacturing & Co-Packing | Ayka Pharma",
  description: "Co-pack your brand with Ayka Pharma. Low MOQ, private label options, custom formulations, 1.5 crore monthly pouch capacity, export-ready global documentation.",
};

export default function ContractManufacturingPage() {
  return (
    <div className="bg-white min-h-screen">
      <CmHero />
      <CoPackingCapabilities />
      <ExportReadiness />
      <OemProcessSteps />
      <HomeContactSection />
    </div>
  );
}
