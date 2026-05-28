// src/app/about/page.tsx
export default function AboutPage() {
  const coreValues = [
    { title: "Integrity", desc: "Absolute transparency and honesty in every revenue line and technological architecture we deploy." },
    { title: "Innovation", desc: "Pioneering state-of-the-art fintech and mobility systems custom-built for Africa's unique landscape." },
    { title: "Accountability", desc: "Providing uncompromised real-time data auditing to completely eliminate leakages." },
    { title: "Excellence", desc: "Maintaining institutional-grade performance, high system uptime, and flawless UX precision." },
    { title: "Transparency", desc: "Opening up clear, visible financial tracking streams for governments and citizens alike." },
    { title: "Nation Building", desc: "Strengthening local economies by empowering institutions to optimize asset collections natively." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden animate-fadeIn selection:bg-[#E5981A]/30 selection:text-[#0A2540]">
      
      {/* 1. KINETIC IMMERSIVE HERO BLOCK */}
      <section className="relative bg-[#0A2540] text-white py-32 px-6 md:px-12 lg:px-24 flex items-center justify-start border-b border-[#E5981A]/20 overflow-hidden min-h-[60vh]">
        {/* Animated Cyber Grid Canvas Layer */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#E5981A_1px,transparent_1px),linear-gradient(to_bottom,#E5981A_1px,transparent_1px)] bg-[size:4rem_4rem] animate-gridSlide" />
        
        {/* Deep Infrastructure Photo Blend */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 animate-bgPulse"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')` }}
        />

        {/* Ambient Floating Blurs */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#E5981A]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-4xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/40 bg-[#0F355C]/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-[#E5981A] uppercase shadow-xl shadow-black/20">
            ⚡ Corporate Identity Matrix
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Modernizing Africa's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5981A] via-amber-200 to-[#E5981A] animate-[pulse_5s_ease-in-out_infinite]">
              Revenue Core
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-xl max-w-2xl leading-relaxed font-light">
            Ethical Recovery System Technologies Ltd (ERS) is a technology-driven infrastructure power building scalable digital revenue ecosystems across the continent.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC INTERACTIVE VISION & MISSION SPLIT */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-20 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Interactive Panel */}
          <div className="group p-10 bg-white border border-slate-200 rounded-3xl shadow-xl hover:shadow-2xl hover:border-[#E5981A]/40 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5981A]/5 rounded-bl-full group-hover:bg-[#E5981A]/10 transition-colors" />
            <div className="space-y-4">
              <div className="h-2 w-12 bg-[#E5981A] rounded-full mb-4" />
              <h3 className="text-xs font-black uppercase tracking-widest text-[#E5981A]">The Horizon Blueprint</h3>
              <p className="text-[#0A2540] font-black text-xl md:text-2xl leading-snug tracking-tight">
                “To become Africa’s leading Digital Revenue Infrastructure powering transparent and intelligent economies.”
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-8 block">
              SYSTEM_VISION // CORE_TARGET
            </span>
          </div>

          {/* Mission Interactive Panel */}
          <div className="group p-10 bg-white border border-slate-200 rounded-3xl shadow-xl hover:shadow-2xl hover:border-[#E5981A]/40 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5981A]/5 rounded-bl-full group-hover:bg-[#E5981A]/10 transition-colors" />
            <div className="space-y-4">
              <div className="h-2 w-12 bg-[#E5981A] rounded-full mb-4" />
              <h3 className="text-xs font-black uppercase tracking-widest text-[#E5981A]">The Operational Mandate</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                To provide secure, innovative, and scalable digital systems that optimize revenue generation, monitoring, collection, reconciliation, and remittance across Africa.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-8 block">
              SYSTEM_MISSION // SCALABLE_GRID
            </span>
          </div>

        </div>
      </section>

      {/* 3. THE 6 PILLARS GRID (Clean Typographic Numeric Labels) */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-black text-[#E5981A] uppercase tracking-widest block">Structural Code</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0A2540]">Our Core Values</h2>
            <div className="h-1 w-16 bg-[#E5981A] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className="group p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:bg-white hover:border-[#E5981A]/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Clean Numeric Indicator Container */}
                  <div className="h-12 w-12 bg-white group-hover:bg-[#0A2540] group-hover:text-white rounded-xl shadow-xs flex items-center justify-center font-mono font-black text-sm text-[#0A2540] transition-all duration-300 mb-6 border border-slate-200 group-hover:border-transparent">
                    0{idx + 1}
                  </div>
                  <h4 className="font-black text-[#0A2540] text-xl group-hover:text-[#E5981A] transition-colors mb-3">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    {value.desc}
                  </p>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-4 text-[9px] font-mono text-slate-400 tracking-wider">
                  SECURE_METRIC_VALUE_0{idx + 1}
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
          <div className="border-l-4 border-[#E5981A] pl-4">
            <span className="text-xs font-black text-[#E5981A] uppercase tracking-widest block">The Continental Mandate</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0A2540]">Why ERS Exists</h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
            Across Africa's high-velocity revenue and mobility sectors, manual leakages, unverified collection points, and fragmented tracking systems slow down macro-economic scaling. 
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
            ERS exists to completely modernize this administrative reality. By injecting rigid, tamper-proof automation frameworks into everyday commercial transactions, we bridge the gap between field activities and institutional bank vaults, fostering absolute accountability.
          </p>
        </div>

        {/* High-Tech Glassmorphism Governance Console */}
        <div className="p-8 md:p-12 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-[#E5981A] font-bold uppercase">
              Regulatory Infrastructure // Act 2026
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">Corporate Governance</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
              Our operational framework is bound strictly to severe corporate governance metrics, comprehensive data encryption audits, and uncompromising regulatory compliance mechanisms. ERS operations ensure that every stakeholder—from local transport unions to federal state departments—is protected by strict cryptographic safety walls and immutable tracking histories.
            </p>
            <div className="pt-4 flex items-center gap-3 border-t border-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase">Vault Compliance Status: Secure</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}