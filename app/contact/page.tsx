import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactDirectChannels from "@/components/contact/ContactDirectChannels";
import ContactRfqForm from "@/components/contact/ContactRfqForm";
import PlantVerification from "@/components/contact/PlantVerification";
import TransitLogistics from "@/components/contact/TransitLogistics";

export const metadata: Metadata = {
  title: "Contact & Technical Liaison | Ayka Pharma",
  description: "Connect with Ayka Pharma for contract manufacturing, BFS packaging inquiries, WHO-GMP facility audit scheduling, and regulatory technical liaison.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-8 md:py-12 pb-20">
      <div className="ayka-container space-y-10 md:space-y-14">
        <ContactHero />
        <ContactDirectChannels />
        <ContactRfqForm />
        <PlantVerification />
        <TransitLogistics />
      </div>
    </div>
  );
}
