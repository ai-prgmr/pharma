import Link from "next/link";

export default function CmHero() {
  return (
    <section className="bg-light-bg py-12 md:py-16 border-b border-border-subtle">
      <div className="ayka-container space-y-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-border-subtle shadow-2xs">
          <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-bold text-navy uppercase tracking-wider">
            CO-PACK YOUR BRAND &bull; LOW MOQ &bull; EXPORT READY
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
          Contract Manufacturing &amp; <span className="text-teal">Private Label Solutions</span>
        </h1>

        <p className="text-base md:text-lg text-body-text leading-relaxed max-w-3xl mx-auto">
          Ayka Pharma is your strategic partner for Liquid ORS co-packing, custom formulation development, and private label manufacturing. Powered by an installed capacity of 1.5 crore pouches monthly in WHO-GMP certified Class D facilities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="#co-packing-specs" className="btn-primary text-xs md:text-sm py-3 px-6">
            View Co-Packing Specifications
          </a>
          <Link href="/contact#rfq-form" className="btn-secondary text-xs md:text-sm py-3 px-6 cursor-pointer">
            Submit MOQ &amp; Private Label Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
