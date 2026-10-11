import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-light-bg/70 border-t border-border-subtle mt-auto text-body-text">
      {/* Trust & Quality Verification Ribbon */}
      <div className="bg-white border-b border-border-subtle py-4">
        <div className="ayka-container flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-navy">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-teal text-lg">verified</span>
            <span>WHO-GMP Certified Facility</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
            <span>ISO 9001:2015 Accredited</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-success text-lg">medical_services</span>
            <span>WHO Low Osmolarity Formula (75 MMOL/L)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-teal text-lg">precision_manufacturing</span>
            <span>15 Million Pouches / Month Capacity</span>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="ayka-container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Column 1: Brand & Overview */}
          <div className="md:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-primary rounded-lg py-1 group"
            >
              <Image
                src="/pharma/ayka-pharma-logo.png"
                alt="Ayka Pharma Logo"
                width={200}
                height={78}
                className="w-auto h-20 object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted-text max-w-md">
              India&apos;s leading manufacturer of ready-to-drink Liquid Oral Rehydration Solutions (ORS), delivering sterile aseptic liquid packaging built to WHO guidelines.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-extrabold">
              <span className="px-3 py-1 bg-white border border-border-subtle rounded-lg text-navy shadow-2xs">
                WHO-GMP CERTIFIED
              </span>
              <span className="px-3 py-1 bg-white border border-border-subtle rounded-lg text-teal shadow-2xs">
                ISO 9001:2015
              </span>
              <span className="px-3 py-1 bg-white border border-border-subtle rounded-lg text-primary shadow-2xs">
                CLASS D CLEANROOM
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy font-heading">
              Company &amp; Portfolio
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors cursor-pointer font-medium">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors cursor-pointer font-medium">
                  Aykalute ORS (8 Flavors)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors cursor-pointer font-medium">
                  About Us &amp; Plant Capabilities
                </Link>
              </li>
              <li>
                <Link href="/contract-manufacturing" className="hover:text-primary transition-colors cursor-pointer font-medium">
                  Contract Manufacturing &amp; Co-Packing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors cursor-pointer font-medium">
                  Contact Us &amp; Submit RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Facility Coordinates */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy font-heading">
              Plant &amp; Sales Desk
            </h3>
            <div className="space-y-3.5 text-sm text-body-text">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-teal text-lg shrink-0 mt-0.5">location_on</span>
                <span className="text-xs text-muted-text leading-relaxed">
                  <strong className="text-navy block font-bold text-sm mb-0.5">Works Address:</strong>
                  Halka No. 61, Serve No. 156/1/1/1,<br />
                  Jamaniya Khurd, Indore,<br />
                  Madhya Pradesh, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-lg shrink-0">mail</span>
                <a
                  href="mailto:aykapharma@aykapharma.com"
                  className="text-xs text-primary font-bold hover:underline transition-colors cursor-pointer"
                >
                  aykapharma@aykapharma.com
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-primary text-xs py-2.5 px-4 w-full justify-center shadow-clinical cursor-pointer"
                >
                  Discuss B2B Requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-border-subtle bg-white py-6">
        <div className="ayka-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-text">
          <p>© {currentYear} Ayka Pharma. All rights reserved. Innovating Healthcare Solutions.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">
              Quality Assurance Terms
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">
              Supply Specifications
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
