// src/app/technology/big-data-analytics/page.tsx
import Link from 'next/link';

export default function BigDataAnalyticsPage() {
  const telemetryMetrics = [
    {
      metric: "10M+",
      label: "Daily Ingestion Logs",
      desc: "Streams, parses, and structures high-velocity operator collection files without system latency or structural queuing."
    },
    {
      metric: "0.2s",
      label: "Anomaly Discovery Edge",
      desc: "Flags collection leaks and unauthorized digital account overrides the moment transaction packets sync with regional databases."
    },
    {
      metric: "99.99%",
      label: "Audit Trail Integrity",
      desc: "Secures distributed, tamper-evident record streams across regional financial clearing networks for permanent validation tracking."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* 1. IMMERSIVE HERO BANNER */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000')` }}
        />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#A62626]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            <span className="flex gap-1"><span className="w-1 h-1 bg-[#E5981A]"/><span className="w-1 h-1 bg-[#E5981A]"/></span> TELEMETRY ARCHITECTURE ENGINE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Big Data <br />
            <span className="text-[#E5981A]">& Analytics Platforms</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Real-time transaction monitoring and data intelligence systems.
          </p>
        </div>
      </section>

      {/* 2. ALTERNATE ASYMMETRIC METRICS LEDGER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[380px] text-left">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#A62626] tracking-widest uppercase block">
                Continuous Stream Intelligence
              </span>
              <h2 className="text-2xl font-bold text-[#0A2540] tracking-tight">
                Processing Complex Multi-Node Transaction Streams
              </h2>
              <p className="text-slate-600 text-sm font-normal leading-relaxed">
                Our technology framework actively aggregates disparate collection points into a clean, operational data pool. We transform high-volume logs into structured insights for instant administrative auditing.
              </p>
            </div>
            
            <div className="mt-8 border-t border-slate-100 pt-6">
              <Link href="/contact" className="text-xs font-mono font-bold uppercase text-[#A62626] hover:text-[#0A2540] tracking-wider flex items-center gap-1 transition-colors group">
                Access Monitoring Solutions <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            {telemetryMetrics.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:border-[#E5981A]/40 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="sm:w-1/4 flex flex-col">
                  <span className="text-3xl font-bold text-[#0A2540] tracking-tight">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#E5981A] uppercase tracking-wider mt-1">
                    {item.label}
                  </span>
                </div>
                
                <div className="sm:w-3/4 border-l-0 sm:border-l border-slate-100 sm:pl-6 space-y-1">
                  <h4 className="font-bold text-[#0A2540] text-base">
                    {item.desc.split(" ").slice(0, 3).join(" ")} Framework
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HIGH-TECH INSTITUTIONAL ACTION PANEL */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mb-12">
        <div className="p-8 md:p-16 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group text-center space-y-6">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <span className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[#E5981A] font-bold uppercase">
            Data Intelligence Layer
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Activate Advanced Telemetry Controls
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Deploy analytical pipelines optimized for institutional scale. Instantly track collection trends, clean legacy transactional entries, and gain undisputed visibility over public revenue channels.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Link 
              href="/contact" 
              className="bg-[#A62626] hover:bg-[#A62626]/90 text-white text-center font-bold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md w-full active:scale-95 duration-150"
            >
              Request Engine Infrastructure Overview
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}