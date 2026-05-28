// src/app/solutions/market-infrastructure/page.tsx
export default function MarketInfrastructurePage() {
  const sections = [
    {
      num: "01",
      tag: "IDENTITY MATRIX",
      title: "Trader Biometric Registry",
      desc: "Robust physical-to-digital enrollment workflows tracking structural merchant tenancy and identity. Establishes a verified marketplace baseline to protect space utilization rights natively."
    },
    {
      num: "02",
      tag: "PERMIT LOGIC",
      title: "Digital Permit Allocations",
      desc: "Instant dynamic issuing systems for trade permits, retail licenses, and operational space permissions. Replaces paper records with hard-coded digital ledger authentication protocols."
    },
    {
      num: "03",
      tag: "FEE CAPTURE",
      title: "Automated Space Collections",
      desc: "Point-of-service tolling layers tracking daily, weekly, or seasonal lease cycles. Securely logs facility usage fees instantly from open-air micro-vendors and formal stalls alike."
    },
    {
      num: "04",
      tag: "CORRIDOR MONITOR",
      title: "Asset Allocation Analytics",
      desc: "High-density space optimization matrices visualizing venue occupancy rates, transaction velocities, and commercial footprint compliance metrics across municipal markets."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-ers-army overflow-x-hidden animate-fadeIn">
      
      {/* 1. KINETIC IMMERSIVE HERO BLOCK WITH IMAGE */}
      <section className="relative bg-[#0B150F] text-white py-36 px-6 md:px-12 lg:px-24 flex items-center justify-start border-b-4 border-ers-gold overflow-hidden min-h-[65vh]">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#C5A059_1px,transparent_1px),linear-gradient(to_bottom,#C5A059_1px,transparent_1px)] bg-[size:4rem_4rem] animate-gridSlide" />
        
        {/* Heavy Commercial Hub Asset Blend */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2000')` }}
        />

        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-ers-gold/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-ers-gold/30 bg-[#111E16]/80 backdrop-blur-xs px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-ers-gold uppercase">
            ⚡ Public Commerce Infrastructure Matrix
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Market Infrastructure & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ers-gold via-yellow-100 to-ers-gold animate-[pulse_5s_ease-in-out_infinite]">
              Trade Hub Gateways
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-xl max-w-3xl leading-relaxed font-light">
            Bringing automated transparency to municipal commerce nodes, digitizing trade hub management, and securing informal economic ecosystems seamlessly.
          </p>
        </div>
      </section>

      {/* 2. MASSIVE STICKY SPLIT LAYOUT */}
      <section className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-20">
        
        {/* Left Sticky Context Column - Locks on scroll */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:h-fit space-y-6">
          <div className="h-2 w-16 bg-ers-gold rounded-full" />
          <span className="text-xs font-black text-ers-gold uppercase tracking-widest block">Structural Commerce Blueprint</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-ers-army leading-tight">
            Market Integration & Node Security
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            Informal commercial hubs drive local urban development. ERS replaces manual tracking vulnerabilities with hard-coded identification profiles and tamper-proof fee logging nodes.
          </p>
        </div>

        {/* Right Flow Stacking List - Scrolls by the side */}
        <div className="lg:col-span-7 space-y-8">
          {sections.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-10 md:p-12 bg-white border border-slate-200/60 rounded-[2rem] shadow-xl hover:shadow-2xl hover:border-ers-gold transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ers-gold/5 rounded-bl-full group-hover:bg-ers-gold/10 transition-colors" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-xs font-mono font-bold text-ers-gold tracking-widest block">
                    {item.tag}
                  </span>
                  <div className="text-2xl md:text-3xl font-mono font-black text-slate-200 group-hover:text-ers-gold/40 transition-colors">
                    {item.num}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-ers-army">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. HARD-CONTAINED TRADE GOVERNANCE SUMMARY BLOCK */}
      <section className="bg-white border-t border-slate-200 py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto border border-ers-army rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          
          {/* Main Statement Tile */}
          <div className="bg-ers-army text-white p-12 md:p-16 lg:col-span-5 flex flex-col justify-center min-h-[340px]">
            <span className="text-[10px] font-mono tracking-widest text-ers-gold font-bold uppercase block">Core Retail Node</span>
            <div className="space-y-4 mt-4">
              <h4 className="text-3xl font-black tracking-tight leading-tight">Decentralized Asset Clearing</h4>
              <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                A hard-coded micro-reconciliation system matching active market stalls with continuous spatial asset streams dynamically.
              </p>
            </div>
          </div>

          {/* Expanded Informational Box */}
          <div className="p-12 md:p-16 lg:col-span-7 flex flex-col justify-center space-y-6 bg-[#FAFAFA]">
            <div className="border-l-4 border-ers-gold pl-4">
              <span className="text-xs font-black text-ers-gold uppercase tracking-widest block">Sovereign Asset Protection</span>
              <h5 className="text-2xl md:text-3xl font-black tracking-tight text-ers-army">Municipal Trader Compliance Framework</h5>
            </div>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Every tracking framework, trader biometric validation loop, and spatial allocation log map straight to local regulatory governance directives. ERS delivers total record-keeping clarity for state administrators while preserving the high-velocity operational momentum required within informal retail hubs.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}