// src/app/solutions/state-revenue/page.tsx
export default function StateRevenuePage() {
  const sections = [
    {
      num: "01",
      tag: "TREASURY CONSOLIDATION",
      title: "Treasury Single Account Links",
      desc: "Direct cryptographic pipelines feeding sub-municipal revenue allocations straight into central state bank vectors. Minimizes commercial float cycles and bridges the tracking window entirely."
    },
    {
      num: "02",
      tag: "COLLECTION ENGINE",
      title: "Automated Internal Revenue",
      desc: "Instant point-of-transaction auditing modules deployed across formal and informal trade corridors, locking down systemic leakages and capturing baseline micro-revenues natively."
    },
    {
      num: "03",
      tag: "LEDGER AUDITING",
      title: "Real-Time Accounting Blocks",
      desc: "Immutable ledger frameworks tracking incoming structural payments, ensuring that municipal allocations match physical banking cash flows down to the single millisecond."
    },
    {
      num: "04",
      tag: "ANALYTICS CORE",
      title: "Macro-Fiscal Visibility Matrix",
      desc: "High-velocity data modeling modules projecting tax velocities, assessing corridor compliance trends, and feeding real-time financial tracking directly to executive boards."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-ers-army overflow-x-hidden animate-fadeIn">
      
      {/* 1. KINETIC IMMERSIVE HERO BLOCK WITH IMAGE */}
      <section className="relative bg-[#0B150F] text-white py-36 px-6 md:px-12 lg:px-24 flex items-center justify-start border-b-4 border-ers-gold overflow-hidden min-h-[65vh]">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#C5A059_1px,transparent_1px),linear-gradient(to_bottom,#C5A059_1px,transparent_1px)] bg-[size:4rem_4rem] animate-gridSlide" />
        
        {/* Heavy Fiscal/Banking Abstract Asset Blend */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000')` }}
        />

        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-ers-gold/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-ers-gold/30 bg-[#111E16]/80 backdrop-blur-xs px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-ers-gold uppercase">
            ⚡ Macro Fiscal Security Matrix
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            State Revenue & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ers-gold via-yellow-100 to-ers-gold animate-[pulse_5s_ease-in-out_infinite]">
              Fiscal Architecture
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-xl max-w-3xl leading-relaxed font-light">
            Engineered systems designed to unify municipal collections, optimize treasury management loops, and grant sovereign governance total visibility into financial operations.
          </p>
        </div>
      </section>

      {/* 2. MASSIVE STICKY SPLIT LAYOUT */}
      <section className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-20">
        
        {/* Left Sticky Context Column - Locks on scroll */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:h-fit space-y-6">
          <div className="h-2 w-16 bg-ers-gold rounded-full" />
          <span className="text-xs font-black text-ers-gold uppercase tracking-widest block">Fiscal Sovereign Blueprint</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-ers-army leading-tight">
            Macro-Fiscal Integration & Node Security
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
            Sovereign financial survival relies completely on precise tracking. ERS injects modern cryptographic loops into state asset lines, eliminating unverified diversions and securing civil revenue.
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

      {/* 3. HARD-CONTAINED FISCAL GOVERNANCE SUMMARY BLOCK */}
      <section className="bg-white border-t border-slate-200 py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto border border-ers-army rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          
          {/* Main Statement Tile */}
          <div className="bg-ers-army text-white p-12 md:p-16 lg:col-span-5 flex flex-col justify-center min-h-[340px]">
            <span className="text-[10px] font-mono tracking-widest text-ers-gold font-bold uppercase block">Central Core Engine</span>
            <div className="space-y-4 mt-4">
              <h4 className="text-3xl font-black tracking-tight leading-tight">Consolidated Liquidity Hub</h4>
              <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                A hardened processing framework that automatically sweeping non-tax income buckets into single sovereign accounts without latency.
              </p>
            </div>
          </div>

          {/* Expanded Informational Box */}
          <div className="p-12 md:p-16 lg:col-span-7 flex flex-col justify-center space-y-6 bg-[#FAFAFA]">
            <div className="border-l-4 border-ers-gold pl-4">
              <span className="text-xs font-black text-ers-gold uppercase tracking-widest block">Regulatory Compliance Structure</span>
              <h5 className="text-2xl md:text-3xl font-black tracking-tight text-ers-army">State Fiscal Audit Guidelines</h5>
            </div>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Every tracking parameter, incoming ledger entry, and automated municipal payout processes strictly within national guidelines and regional regulatory frameworks. ERS establishes total audit permanence for executive oversight while eliminating the processing friction that typically blocks modern public accounting workflows.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}