import Link from 'next/link';

export default function ComplianceEnforcementLayerPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(135deg,#FFFFFF_2px,transparent_2px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#A62626]/40 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A62626]" /> GOVERNANCE FRAMEWORK
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Compliance & <br />
            <span className="text-[#E5981A]">Enforcement Barriers</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Continuous system behavior monitoring, automated collection logging, and operational audit trails built for regulatory oversight.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold text-[#A62626] uppercase tracking-widest block">Audit Security Protocol</span>
            <h3 className="text-3xl font-bold text-[#0A2540] tracking-tight">Securing System Behavior</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our continuous compliance architecture monitors active system components. It creates verifiable tracking records for all core operations to completely prevent unauthorized modifications and isolate transaction vulnerabilities.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-block bg-[#0A2540] text-white font-mono font-bold text-xs uppercase px-6 py-3 rounded-xl">
                Consult Security Engineers &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
            <div className="space-y-1">
              <h4 className="font-bold text-[#0A2540] text-base">Continuous Tracking Audits</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Creates permanent digital records of user actions, collection movements, and account changes to simplify administrative review workflows.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#0A2540] text-base">Automated Validation Alerts</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Instantly identifies field processing anomalies, system access conflicts, or unauthorized hardware platforms, blocking access at the perimeter.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}