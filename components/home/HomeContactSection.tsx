import Link from "next/link";

export default function HomeContactSection() {
  return (
    <section className="py-12 md:py-16 bg-light-bg border-t border-border-subtle" id="contact">
      <div className="ayka-container space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">Central India Hub</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            Facility Location &amp; Direct Inquiry
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            Connect with our manufacturing regulatory coordinators in Indore, MP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Facility Details Card */}
          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-2xl border border-border-subtle shadow-xs space-y-5">
            <h3 className="text-lg font-bold text-navy flex items-center space-x-2">
              <span className="material-symbols-outlined text-teal">apartment</span>
              <span>Registered Plant &amp; Manufacturing Facility</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-muted-text mt-0.5">location_on</span>
                <div>
                  <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider">Site Address</div>
                  <div className="text-sm text-body-text font-medium">
                    Halka No. 61, Survey No. 154/1/1/1, Jamaniya Khurd, Indore, Madhya Pradesh
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-muted-text mt-0.5">receipt</span>
                <div>
                  <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider">Tax Registration</div>
                  <div className="text-sm text-navy font-mono font-bold">
                    GST No. - 23AXBPK9633R1ZW
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-muted-text mt-0.5">mail</span>
                <div>
                  <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider">Technical Liaison &amp; Inquiries</div>
                  <a href="mailto:info@aykapharma.com" className="text-sm text-primary hover:underline font-semibold">
                    info@aykapharma.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact CTA Card */}
          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-2xl border border-border-subtle shadow-xs space-y-5 text-center lg:text-left flex flex-col justify-center">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-light-bg text-primary rounded-full text-xs font-bold uppercase tracking-wider border border-border-subtle">
                DIRECT RFQ &amp; DOSSIER REQUESTS
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-navy">
                Commission a Batch or Schedule a cGMP Site Audit
              </h3>
              <p className="text-sm text-muted-text leading-relaxed">
                Our regulatory affairs desk responds within 24 business hours. Submit protocol parameters, target batch quantities, and technical specifications directly.
              </p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-sm py-3 px-6 inline-flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">verified</span>
                <span>Open Contact &amp; RFQ Desk</span>
              </Link>
              <a
                href="mailto:info@aykapharma.com?subject=Facility%20Audit%20Request%20-%20Ayka%20Pharma"
                className="btn-secondary w-full sm:w-auto text-sm py-3 px-6 inline-flex items-center justify-center gap-2"
              >
                <span>Request Site Audit</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
