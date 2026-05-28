// src/app/solutions/smart-remittance/page.tsx
import Link from 'next/link';

export default function SmartRemittancePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden animate-fadeIn selection:bg-[#E5981A]/30 selection:text-[#0A2540]">
      
      {/* 1. IMMERSIVE HERO BANNER MODULE */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden">
        {/* Infrastructure Background Photo Blur Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105 animate-bgPulse"
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
            Smart Remittance <br />
            <span className="text-[#E5981A]">Settlement Core</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
            Automated backend reconciliation pipelines designed to split incoming treasury pools, handle institutional clearances, and track state remittance nodes without manual processing gaps.
          </p>
        </div>
      </section>

      {/* 2. THREE-PILLAR FUNCTIONAL GRID OVERLAY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 01 */}
          <div className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#E5981A]/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[280px]">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-[#F8FAFC] group-hover:bg-[#0A2540] group-hover:text-white rounded-xl flex items-center justify-center font-mono font-black text-xs text-[#0A2540] transition-all duration-300 border border-slate-200/60 group-hover:border-transparent">
                01
              </div>
              <h4 className="font-black text-[#0A2540] text-xl group-hover:text-[#E5981A] transition-colors">
                Automated Split Settlements
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed font-light">
                Instantly divides incoming transaction streams into precise target percentage buckets for partners, local funds, and state treasuries.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-4 text-[9px] font-mono text-slate-400 tracking-wider">
              REVENUE_FLOW // SPLIT_MANDATE
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#E5981A]/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[280px]">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-[#F8FAFC] group-hover:bg-[#0A2540] group-hover:text-white rounded-xl flex items-center justify-center font-mono font-black text-xs text-[#0A2540] transition-all duration-300 border border-slate-200/60 group-hover:border-transparent">
                02
              </div>
              <h4 className="font-black text-[#0A2540] text-xl group-hover:text-[#E5981A] transition-colors">
                Zero-Manual Reconciliation
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed font-light">
                Runs continuous match checks between field ticketing logs and actual cash deposits to cross-verify structural collections completely.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-4 text-[9px] font-mono text-slate-400 tracking-wider">
              AUTOMATION // LOGISTIC_RECON
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#E5981A]/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[280px]">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-[#F8FAFC] group-hover:bg-[#0A2540] group-hover:text-white rounded-xl flex items-center justify-center font-mono font-black text-xs text-[#0A2540] transition-all duration-300 border border-slate-200/60 group-hover:border-transparent">
                03
              </div>
              <h4 className="font-black text-[#0A2540] text-xl group-hover:text-[#E5981A] transition-colors">
                Auditable Ledger Channels
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed font-light">
                Maintains persistent tracking states, giving external accounting teams clean compliance registers for smooth periodic reviews.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-4 text-[9px] font-mono text-slate-400 tracking-wider">
              COMPLIANCE // LEDGER_AUDIT
            </div>
          </div>

        </div>
      </section>

      {/* 3. HIGH-TECH INSTITUTIONAL ACTION PANEL */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="p-8 md:p-16 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group text-center space-y-6">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <span className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[#E5981A] font-bold uppercase">
            Liquidity Speed Optimization Matrix
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Streamline Settlement Protocols?
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Maximize system liquidity speed while keeping your administrative tracking clear. Connect with our engineering core to audit your current clearance process.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Link 
              href="/contact" 
              className="bg-[#E5981A] hover:bg-[#E5981A]/90 text-[#0A2540] text-center font-extrabold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md w-full"
            >
              Connect Settlement Architect
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}