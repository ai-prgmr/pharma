import Hero from "@/components/home/Hero";
import MetricsRibbon from "@/components/home/MetricsRibbon";
import CapabilitiesBento from "@/components/home/CapabilitiesBento";
import ProductSpotlight from "@/components/home/ProductSpotlight";
import ComplianceCapacity from "@/components/home/ComplianceCapacity";
import HomeContactSection from "@/components/home/HomeContactSection";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <MetricsRibbon />
      <CapabilitiesBento />
      <ProductSpotlight />
      <ComplianceCapacity />
      <HomeContactSection />
    </div>
  );
}
