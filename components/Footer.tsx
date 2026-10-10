import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-light-bg border-t border-border-subtle mt-auto text-body-text">
      {/* Top Footer Content */}
      <div className="ayka-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Overview */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-primary rounded-md py-1 px-1">
              <div className="">
                <Image
                  src="/ayka-pharma-logo.png"
                  alt="Ayka Pharma Logo"
                  width={120}
                  height={40}
                  priority
                  className="w-auto object-contain"
                />
                <p className="text-sm md:text-base leading-relaxed text-muted-text max-w-md">
                  Ayka Pharma is a trusted pharmaceutical manufacturer delivering science-led production, certified quality standards, and dependable business partnerships.
                </p>
              </div>
            </Link>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-navy">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Business Enquiries */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-navy">Business Enquiries</h3>
            <p className="text-sm text-muted-text">
              For contract manufacturing, production capacity, or partnership inquiries:
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium text-navy">Email: </span>
                <a
                  href="mailto:info@aykapharma.com"
                  className="text-primary hover:underline transition-colors"
                >
                  info@aykapharma.com
                </a>
              </div>
              <div className="pt-1">
                <Link href="/contact" className="btn-secondary text-xs py-2 px-3">
                  Send an Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-border-subtle bg-white py-6">
        <div className="ayka-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-text">
          <p>© {currentYear} Ayka Pharma. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-primary transition-colors">
              Terms of Business
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
