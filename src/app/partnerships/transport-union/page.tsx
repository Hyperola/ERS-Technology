import Link from 'next/link';

export default function TransportUnionsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_bottom_right,#FFFFFF_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            FLEET REVENUE EMPOWERMENT
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Transport Unions & <br />
            <span className="text-[#E5981A]">Mobility Stakeholders</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Empowering localized transport executives, union administrators, and commercial park fleets with automated ticketing toolkits.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-8">
          
          {/* Main Context Panel */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">Sustaining Transport Ecosystems</span>
              <h2 className="text-3xl font-bold tracking-tight">Structured Operational Alliances</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We don't bypass transport structures; we empower them. Our specialized union frameworks protect structural stakeholder dynamics by running automated split logic loops, making sure correct fractions reach vehicle owners and committees transparently.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/contact?ref=union-partner" className="inline-block bg-[#A62626] hover:bg-[#b82d2d] text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all">
                Deploy Union Revenue Rails
              </Link>
            </div>
          </div>

          {/* Subfeatures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">Park Executive Console</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Dedicated management views built for route leadership, providing absolute clarity on total daily tickets issued and vehicle frequencies across parks.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">Welfare Levy Tracking</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Automated collections configured to branch internal member mutual fees straight into group saving accounts cleanly and without dispute.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}