import Link from "next/link";

export default function CapabilitiesBento() {
  return (
    <section className="py-14 md:py-20 bg-white" id="capabilities">
      <div className="ayka-container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal tracking-wider uppercase">
            MANUFACTURING EXCELLENCE &bull; BUILT FOR SCALE &amp; COMPLIANCE
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy tracking-tight">
            High-Throughput Aseptic Infrastructure
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            State-of-the-art pharmaceutical manufacturing unit in Indore, MP—engineered for zero contamination and maximum bioavailability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Bento Card 1: Sterile Class D Environment */}
          <div className="ayka-card flex flex-col justify-between space-y-6 hover:shadow-clinical-hover transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal border border-teal/20">
                  <span className="material-symbols-outlined text-2xl">clean_hands</span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#ECFDF5] text-success uppercase tracking-wider border border-success/20">
                  CLASS D CLEANROOM
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy font-heading">
                Sterile Filling &amp; RH Control
              </h3>
              <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                Filling takes place in a certified Class D cleanroom environment, supported by continuous temperature and Relative Humidity (RH) control in all secondary areas.
              </p>
            </div>
            <ul className="border-t border-border-subtle pt-4 space-y-2.5 text-xs md:text-sm text-body-text">
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Touch-free automated production lines</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Advanced Aseptic Filling Technology</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Air filtration &amp; pressure cascade management</span>
              </li>
            </ul>
          </div>

          {/* Bento Card 2: 1.5 Crore Output Capacity */}
          <div className="ayka-card flex flex-col justify-between space-y-6 hover:shadow-clinical-hover transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#F0F9FF] text-primary uppercase tracking-wider border border-primary/20">
                  15M POUCHES / MONTH
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy font-heading">
                High-Capacity Output Line
              </h3>
              <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                As one of India&apos;s largest producers of Liquid ORS, our high-volume automated lines deliver 1.5 crore pouches monthly in 125ml and 200ml formats.
              </p>
            </div>
            <ul className="border-t border-border-subtle pt-4 space-y-2.5 text-xs md:text-sm text-body-text">
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>Installed capacity: 15 Million pouches / month</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>Flexible packaging: 125ml &amp; 200ml options</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>High-efficiency processes for mass supply</span>
              </li>
            </ul>
          </div>

          {/* Bento Card 3: Strategic B2B & Co-Packing */}
          <div className="ayka-card flex flex-col justify-between space-y-6 hover:shadow-clinical-hover transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy border border-navy/20">
                  <span className="material-symbols-outlined text-2xl">handshake</span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#FFFBEB] text-[#D97706] uppercase tracking-wider border border-[#D97706]/20">
                  LOW MOQ CO-PACKING
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy font-heading">
                Strategic Partner &amp; Private Label
              </h3>
              <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                Co-pack your brand at Ayka with low MOQs, competitive pricing, custom formulations, and export-ready global compliance documentation.
              </p>
            </div>
            <ul className="border-t border-border-subtle pt-4 space-y-2.5 text-xs md:text-sm text-body-text">
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Co-Pack your brand with low MOQ</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Export ready with full registration support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Custom proprietary formulation capabilities</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/contract-manufacturing"
            className="btn-primary text-xs md:text-sm py-3.5 px-7 inline-flex items-center gap-2 cursor-pointer shadow-clinical"
          >
            <span className="material-symbols-outlined text-lg">settings_b2b</span>
            <span>Explore Full Contract Manufacturing Capabilities</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
