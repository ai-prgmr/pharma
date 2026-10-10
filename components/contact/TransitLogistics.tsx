export default function TransitLogistics() {
  return (
    <section className="bg-white p-6 md:p-8 rounded-2xl border border-border-subtle shadow-xs space-y-6">
      <div className="space-y-1">
        <div className="text-xs font-bold text-teal tracking-wider uppercase">
          Central India Logistics Hub
        </div>
        <h2 className="text-2xl font-bold text-navy">
          Transit Coordinates &amp; Cold-Chain Corridors
        </h2>
        <p className="text-sm text-muted-text leading-relaxed">
          Our plant is centrally situated in the industrial pharma corridor of Indore, allowing refrigerated multi-axle freight connections across all major Indian sea ports and domestic terminals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Air Transit */}
        <div className="p-4 border border-border-subtle rounded-xl bg-light-bg space-y-2">
          <div className="flex items-center gap-2 text-navy font-semibold">
            <span className="material-symbols-outlined text-primary">flight_takeoff</span>
            <span className="text-sm">Air Cargo &amp; VIP Transit</span>
          </div>
          <div className="text-xl font-bold text-navy">~32 km / 45 mins</div>
          <p className="text-xs text-muted-text leading-relaxed">
            From Devi Ahilya Bai Holkar International Airport (IDR), Indore. Direct domestic air-cargo connections to Mumbai, Delhi, Hyderabad, and Bengaluru.
          </p>
        </div>

        {/* Rail Hub */}
        <div className="p-4 border border-border-subtle rounded-xl bg-light-bg space-y-2">
          <div className="flex items-center gap-2 text-navy font-semibold">
            <span className="material-symbols-outlined text-teal">train</span>
            <span className="text-sm">Rail Freight Terminal</span>
          </div>
          <div className="text-xl font-bold text-navy">~24 km / 35 mins</div>
          <p className="text-xs text-muted-text leading-relaxed">
            Direct access to Western Railway mainline hubs and CONCOR inland container depot (ICD) Pithampur for export container stuffing.
          </p>
        </div>

        {/* Cold Chain Logistics */}
        <div className="p-4 border border-border-subtle rounded-xl bg-light-bg space-y-2">
          <div className="flex items-center gap-2 text-navy font-semibold">
            <span className="material-symbols-outlined text-success">local_shipping</span>
            <span className="text-sm">Cold-Chain Dispatch</span>
          </div>
          <div className="text-xl font-bold text-navy">2°C – 8°C &amp; 15°C – 25°C</div>
          <p className="text-xs text-muted-text leading-relaxed">
            Dedicated insulated loading bays with continuous GPS temperature logging for contract batch distribution across PAN-India supply lines.
          </p>
        </div>
      </div>

      {/* Facility Map Overview Banner */}
      <div className="relative w-full rounded-xl overflow-hidden border border-border-subtle bg-light-bg p-6 text-center">
        <div className="max-w-md mx-auto space-y-3">
          <span className="material-symbols-outlined text-4xl text-teal">map</span>
          <h3 className="text-base font-bold text-navy">Jamaniya Khurd Manufacturing Facility Gate</h3>
          <p className="text-xs text-muted-text leading-relaxed">
            Security Checkpoint 1 • Weighbridge • Regulatory Reception Area • Visitor Badging Office
          </p>
          <a
            href="https://maps.google.com/?q=Jamaniya+Khurd+Indore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5 px-5 inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">directions</span>
            <span>Get Real-time Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
}
