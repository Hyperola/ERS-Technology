import Link from 'next/link';

export default function GovernmentPublicSectorPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,#FFFFFF_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            PUBLIC SECTOR MODERNIZATION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Government & <br />
            <span className="text-[#E5981A]">Public Sector Systems</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Expanding fiscal space and modernizing civic revenue collection channels through direct, highly secure digital platforms.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-8">
          
          {/* Main Context Panel */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">Leakage-Proof Administration</span>
              <h2 className="text-3xl font-bold tracking-tight">Centralized Revenue Infrastructure</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We bridge the gap between ministries, departments, and agencies by deploying unified revenue channels. Our tools transition traditional cash processing into automated electronic pathways, giving public accountants instant tracking power over incoming civic payments.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/contact" className="inline-block bg-[#A62626] hover:bg-[#b82d2d] text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all parsing-btn">
                Request Civic Consultation
              </Link>
            </div>
          </div>

          {/* Subfeatures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-3">
              <h3 className="font-bold text-lg text-[#0A2540]">Treasury Account Sync</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Automated settlement windows that route collected public funds securely and directly into centralized state treasury allocations.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-3">
              <h3 className="font-bold text-lg text-[#0A2540]">Automated Levy Invoicing</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Smart generation of non-replicable transaction codes to completely replace physical documentation and prevent paper billing fraud.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-3">
              <h3 className="font-bold text-lg text-[#0A2540]">Audit Verification Panels</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Read-only analytics dashboards tailored specifically for rapid financial tracking, giving internal teams transparent auditing power.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}