// src/app/solutions/revenue-automation/page.tsx
export default function RevenueAutomationPage() {
  const coreCapabilities = [
    { title: "Automated Levy Collection", desc: "Digital ingestion engines built for immediate tracking of taxes, public market fees, and administrative dues without manual intervention." },
    { title: "Smart Remittance Engine", desc: "Automated reconciliation pipelines running split-settlement routing to direct stakeholder bank accounts and state treasuries concurrently." },
    { title: "Real-Time Enforcement", desc: "Field officer verification loops utilizing handheld verification matrices to monitor transaction integrity and operator authentication on-site." },
    { title: "Predictive Analytics", desc: "Advanced data layers providing predictive forecasting and algorithmic visualization of historical revenue and remittance streams." },
    { title: "Multi-Channel Ingestion", desc: "Consolidates payments across physical field collection nodes, bank transfers, USSD triggers, and digital wallets natively." },
    { title: "Sovereign Audit Vault", desc: "Provides absolute tamper-proof auditing metrics ensuring all accounting records remain entirely immutable." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-ers-bg overflow-x-hidden animate-fadeIn">
      
      {/* 1. KINETIC IMMERSIVE HERO BLOCK */}
      <section className="relative bg-[#0B150F] text-white py-32 px-6 md:px-12 lg:px-24 flex items-center justify-start border-b-4 border-ers-gold overflow-hidden min-h-[60vh]">
        {/* Animated Cyber Grid Canvas Layer */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#C5A059_1px,transparent_1px),linear-gradient(to_bottom,#C5A059_1px,transparent_1px)] bg-[size:4rem_4rem] animate-gridSlide" />
        
        {/* Deep Infrastructure Photo Blend */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 animate-bgPulse"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000')` }}
        />

        {/* Ambient Floating Blurs */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-ers-gold/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-4xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-ers-gold/30 bg-[#111E16]/80 backdrop-blur-xs px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-ers-gold uppercase">
            ⚡ Core Solution Architecture
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Revenue Automation & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ers-gold via-yellow-100 to-ers-gold animate-[pulse_5s_ease-in-out_infinite]">
              Collection Systems
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-xl max-w-2xl leading-relaxed font-light">
            End-to-end digital infrastructure built to eliminate leakages, optimize transactional tracking, and establish an immutable accounting ledger for public and private institutions across Africa.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC INTERACTIVE CORE SPECIFICATION SPLIT */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-20 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Primary Ingestion Panel */}
          <div className="group p-10 bg-white border border-slate-200/60 rounded-3xl shadow-xl hover:shadow-2xl hover:border-ers-gold transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ers-gold/5 rounded-bl-full group-hover:bg-ers-gold/10 transition-colors" />
            <div className="space-y-4">
              <div className="h-2 w-12 bg-ers-gold rounded-full mb-4" />
              <h3 className="text-xs font-black uppercase tracking-widest text-ers-gold">The Collection Framework</h3>
              <p className="text-ers-army font-black text-xl md:text-2xl leading-snug tracking-tight">
                “Deploying rigid automation frameworks into high-velocity transaction zones to bridge fields and institutional vaults.”
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-8 block">
              SYSTEM_INGESTION // HUB_MODULE
            </span>
          </div>

          {/* Core Settlement Panel */}
          <div className="group p-10 bg-white border border-slate-200/60 rounded-3xl shadow-xl hover:shadow-2xl hover:border-ers-gold transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ers-gold/5 rounded-bl-full group-hover:bg-ers-gold/10 transition-colors" />
            <div className="space-y-4">
              <div className="h-2 w-12 bg-ers-gold rounded-full mb-4" />
              <h3 className="text-xs font-black uppercase tracking-widest text-ers-gold">The Clearing Mandate</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Our smart processing engine automatically drives incoming financial pipelines into split-settlement nodes, running direct allocations to partner bank accounts and regulatory state treasuries simultaneously with complete compliance safety.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-8 block">
              AUTOMATED_REMITTANCE // CORE_GRID
            </span>
          </div>

        </div>
      </section>

      {/* 3. THE 6 PILLARS GRID (Clean Typographic Numeric Labels Matching About Page Scale) */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-black text-ers-gold uppercase tracking-widest block">Structural Code</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-ers-army">System Capabilities</h2>
            <div className="h-1.5 w-16 bg-ers-gold mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((value, idx) => (
              <div 
                key={idx} 
                className="group p-8 bg-ers-bg rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl hover:bg-white hover:border-ers-gold transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between animate-fadeIn"
              >
                <div>
                  {/* Clean Numeric Indicator Container */}
                  <div className="h-12 w-12 bg-white group-hover:bg-ers-army rounded-xl shadow-xs flex items-center justify-center font-mono font-black text-sm text-ers-army group-hover:text-ers-gold transition-all duration-300 mb-6 border border-slate-200/40 group-hover:border-transparent">
                    0{idx + 1}
                  </div>
                  <h4 className="font-black text-ers-army text-xl group-hover:text-ers-gold transition-colors mb-3">
                    {value.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">
                    {value.desc}
                  </p>
                </div>
                <div className="mt-8 border-t border-slate-200/60 pt-4 text-[9px] font-mono text-slate-400 tracking-wider">
                  SYSTEM_FUNCTION_METRIC_0{idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. EXECUTIVE COMPLIANCE LAYER & CHALLENGE MATRIX */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Why We Exist Narrative Block */}
        <div className="space-y-6">
          <div className="border-l-4 border-ers-gold pl-4">
            <span className="text-xs font-black text-ers-gold uppercase tracking-widest block">The Continental Mandate</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ers-army">Why Automation Matters</h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
            Across Africa's high-velocity revenue and mobility sectors, manual leakages, unverified collection points, and fragmented tracking systems slow down macro-economic scaling. 
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
            ERS automation layers completely modernize this administrative reality. By injecting rigid, tamper-proof system frameworks into everyday commercial transactions, we bridge the gap between field activities and institutional bank vaults, fostering absolute accountability.
          </p>
        </div>

        {/* High-Tech Glassmorphism Governance Console */}
        <div className="p-8 md:p-12 bg-ers-army text-white rounded-3xl border border-ers-gold/30 shadow-2xl relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-ers-gold/10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-ers-gold font-bold uppercase">
              Regulatory Infrastructure // Act 2026
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">Financial Governance</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
              Our operational framework is bound strictly to severe corporate governance metrics, comprehensive data encryption audits, and uncompromising regulatory compliance mechanisms. ERS operations ensure that every stakeholder—from local transport unions to federal state departments—is protected by strict cryptographic safety walls and immutable tracking histories.
            </p>
            <div className="pt-4 flex items-center gap-3 border-t border-white/10">
              <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase">System Integrity Vault: Active</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}