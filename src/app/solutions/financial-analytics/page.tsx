// src/app/solutions/financial-analytics/page.tsx
import Link from 'next/link';

export default function FinancialAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540]">
      
      {/* 1. IMMERSIVE HERO BANNER MODULE */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden">
        {/* Infrastructure Background Photo Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')` }}
        />
        {/* Fine Structural Grid */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* Ambient Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E5981A]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-xs px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            Solutions Architecture Group
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Financial Analytics <br />
            <span className="text-[#E5981A]">Intelligence Frameworks</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
            Centralized intelligence hubs providing clear revenue trend lines, predictive cash inflow charts, and automated tracking reports built specifically for executive decision-makers.
          </p>
        </div>
      </section>

      {/* 2. CORE DASHBOARD PRESENTATION MODULE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 space-y-8 shadow-xl">
          
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-[10px] font-mono text-[#E5981A] uppercase block tracking-widest font-black">
                LIVE TRACKING SIMULATOR
              </span>
              <h3 className="text-xl font-black text-[#0A2540] tracking-tight">
                Executive Revenue Insight Node
              </h3>
            </div>
            <div className="bg-[#F8FAFC] px-4 py-2 rounded-xl border border-slate-200/60 text-xs font-mono font-black text-emerald-600 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              REVENUE RECORD STREAMING ACTIVE
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-200/60 space-y-2 group hover:border-[#E5981A]/30 transition-colors duration-300">
              <span className="text-[10px] font-mono font-black text-slate-400 uppercase block">
                Aggregated Clearing Velocity
              </span>
              <div className="text-3xl font-black text-[#0A2540]">99.98%</div>
              <p className="text-[11px] text-emerald-600 font-medium">Optimized transactional load throughput</p>
            </div>
            
            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-200/60 space-y-2 group hover:border-[#E5981A]/30 transition-colors duration-300">
              <span className="text-[10px] font-mono font-black text-slate-400 uppercase block">
                Anomalous Variance Detection
              </span>
              <div className="text-3xl font-black text-[#E5981A]">0.02%</div>
              <p className="text-[11px] text-slate-500 font-light">Instantly flagged to regional clearing units</p>
            </div>
            
            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-200/60 space-y-2 group hover:border-[#E5981A]/30 transition-colors duration-300">
              <span className="text-[10px] font-mono font-black text-slate-400 uppercase block">
                Predictive Inflow Scaling
              </span>
              <div className="text-3xl font-black text-[#0A2540]">+24.5%</div>
              <p className="text-[11px] text-slate-500 font-light">Estimated matching trend next period</p>
            </div>
          </div>

          <p className="text-slate-600 text-sm font-light leading-relaxed max-w-4xl border-t border-slate-100 pt-6">
            This analytical module pulls messy transactional data loops from field devices and cleanses them into organized data sets, giving management teams accurate projections to optimize long-term economic planning.
          </p>

          <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400 tracking-wider">
            ANALYTICS_ENGINE // CORE_NODE_08
          </div>
        </div>
      </section>

      {/* 3. HIGH-TECH INSTITUTIONAL ACTION PANEL */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="p-8 md:p-16 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group text-center space-y-6">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <span className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[#E5981A] font-bold uppercase">
            Data Orchestration Layer
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready for Automated Financial Clarity?
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Unify fragmented records into high-fidelity data pipelines. Partner with our architectural group to configure secure dashboard interfaces tailored specifically for institutional decision-makers.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Link 
              href="/contact" 
              className="bg-[#E5981A] hover:bg-[#E5981A]/90 text-[#0A2540] text-center font-extrabold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md w-full"
            >
              Request Platform Architecture Demo
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}