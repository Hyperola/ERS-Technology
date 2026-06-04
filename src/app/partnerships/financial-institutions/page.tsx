import Link from 'next/link';

export default function FinancialInstitutionsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            CLEARING & SETTLEMENT NETWORKS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Financial Institutions & <br />
            <span className="text-[#E5981A]">Fintech Integrations</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Connecting institutional banking infrastructure, licensed switch gateways, and payment service operators with active economic hubs.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-8">
          
          {/* Main Context Panel */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">Direct Core-Banking Rails</span>
              <h2 className="text-3xl font-bold tracking-tight">Co-Developed Settlement Channels</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We act as a reliable last-mile pipeline for banking networks. By integrating into commercial core systems, our transactional layers capture previously manual, unbanked market flows and seamlessly route incoming composite streams directly into secure treasury deposits.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/partnerships/become-a-partner" className="inline-block bg-[#0A2540] hover:bg-slate-900 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all tracking-wider">
                Integrate Banking APIs
              </Link>
            </div>
          </div>

          {/* Subfeatures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">Acquiring Switch Channels</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Deep-pipeline payment integrations supporting banks, POS networks, instant QR, dynamic web checkout setups, and mobile wallets.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">Automated Split Clearing</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Smart remittance logic nodes designed to instantly break down composite revenue items and separate baseline taxes from agency fees securely.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">NPL Risk Minimization</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Provides automated tracking and structured digital debtor engagement workflows to help institutions reduce non-performing loans.
              </p>
            </div>
          </div>

          {/* Page Bottom CTA Block */}
          <div className="bg-[#0A2540] text-white p-8 md:p-12 rounded-3xl text-center space-y-6 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <h3 className="text-2xl font-bold">Deploy Robust Transaction Processing Nodes</h3>
              <p className="text-slate-300 text-sm">Partner with ERS to co-locate acquiring switches and build high-efficiency liquidation grids.</p>
              <div className="pt-4">
                <Link href="/partnerships/become-a-partner" className="inline-block bg-[#E5981A] hover:bg-[#f5a92a] text-[#0A2540] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all">
                  Register as Financial Partner
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}