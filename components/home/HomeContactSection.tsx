import Link from "next/link";

export default function HomeContactSection() {
  return (
    <section className="py-14 md:py-20 bg-light-bg border-t border-border-subtle" id="contact">
      <div className="ayka-container space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            PARTNER WITH US &bull; YOUR TRUSTED SUPPLIER
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            Discuss MOQ, Registration &amp; Private Label
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            We are more than a manufacturer; we are a strategic partner committed to your commercial success in the healthcare market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Facility Details Card */}
          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-3xl border border-border-subtle shadow-clinical space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal/10 text-teal">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy font-heading">Works Location &amp; Sales Desk</h3>
                  <p className="text-xs text-muted-text">Direct regulatory liaison and plant access</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-body-text">
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-light-bg/80 border border-border-subtle">
                  <span className="material-symbols-outlined text-teal text-xl mt-0.5 shrink-0">apartment</span>
                  <div>
                    <div className="text-[10px] font-extrabold text-muted-text uppercase tracking-wider">Manufacturing Works Site</div>
                    <div className="text-sm text-navy font-semibold mt-0.5 leading-relaxed">
                      Halka No. 61, Serve No. 156/1/1/1,<br />
                      Jamaniya Khurd, Indore, Madhya Pradesh, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-light-bg/80 border border-border-subtle">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">mail</span>
                  <div>
                    <div className="text-[10px] font-extrabold text-muted-text uppercase tracking-wider">Sales &amp; Partnership Email</div>
                    <a
                      href="mailto:aykapharma@aykapharma.com"
                      className="text-sm text-primary hover:underline font-bold mt-0.5 block cursor-pointer"
                    >
                      aykapharma@aykapharma.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-light-bg/80 border border-border-subtle">
                  <span className="material-symbols-outlined text-success text-xl mt-0.5 shrink-0">verified_user</span>
                  <div>
                    <div className="text-[10px] font-extrabold text-muted-text uppercase tracking-wider">Quality Accreditations</div>
                    <div className="text-xs text-navy font-bold mt-0.5">
                      WHO Guidelines Compliant &bull; WHO-GMP &bull; ISO 9001:2015
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-2 text-[11px] font-bold text-navy">
              <span className="px-3 py-1 bg-light-bg rounded-lg border border-border-subtle">Reliable Supply Chain</span>
              <span className="px-3 py-1 bg-light-bg rounded-lg border border-border-subtle">Low MOQ Co-Packing</span>
              <span className="px-3 py-1 bg-light-bg rounded-lg border border-border-subtle">Competitive Pricing</span>
            </div>
          </div>

          {/* Quick Contact CTA Card */}
          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-3xl border border-border-subtle shadow-clinical space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 bg-[#ECFDF5] text-success rounded-full text-xs font-bold uppercase tracking-wider border border-success/20">
                PRIVATE LABEL &amp; EXPORT OPPORTUNITIES
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-navy font-heading">
                Contact Our Commercial Team Today
              </h3>
              <p className="text-sm text-muted-text leading-relaxed">
                Discuss MOQ, registration requirements, export documentation, and custom formulations directly with our commercial technical team.
              </p>

              <ul className="space-y-2.5 text-xs md:text-sm text-body-text pt-2">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-teal text-lg">check_circle</span>
                  <span><strong>Co-Pack your brand</strong> at Ayka with low MOQ</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-teal text-lg">check_circle</span>
                  <span><strong>Competitive Pricing</strong> for commercial mass distribution</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-teal text-lg">check_circle</span>
                  <span><strong>Export Ready</strong> with full regulatory dossier support</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-teal text-lg">check_circle</span>
                  <span><strong>Custom Formulations</strong> tailored for specific market needs</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3.5">
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto text-sm py-3.5 px-7 inline-flex items-center justify-center gap-2 shadow-clinical cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">edit_note</span>
                <span>Send B2B RFQ Inquiry</span>
              </Link>
              <a
                href="mailto:aykapharma@aykapharma.com?subject=B2B%20Partnership%20Enquiry%20-%20Ayka%20Pharma"
                className="btn-secondary w-full sm:w-auto text-sm py-3.5 px-6 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Direct Sales Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
