import Link from 'next/link';

export default function TelecomPartnershipsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(135deg,#FFFFFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            MASS CONNECTIVITY CHANNELS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Telecom Partnerships & <br />
            <span className="text-[#E5981A]">Mobile Money Rails</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Leveraging national MNO channels, offline USSD infrastructure, and mobile wallets to anchor mass financial transactions.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-8">
          
          {/* Main Context Panel */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">High-Volume Subscriber Loops</span>
              <h2 className="text-3xl font-bold tracking-tight">Mobile Network Operator Alliances</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We combine the vast reach of mobile networks with specialized sector accounting logic. Our platform routes mass consumer ticketing and association payments straight through telco money pipelines, keeping connection rates fast even across low-signal hubs.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/contact?ref=telco-partner" className="inline-block bg-[#E5981A] hover:bg-[#d48c15] text-[#0A2540] font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all">
                Link Telco Clearing Gates
              </Link>
            </div>
          </div>

          {/* Subfeatures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">Zero-Rated USSD Gateways</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Direct integration with telco network switches to run stable, high-concurrency offline financial menus for feature-phone fields.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">Direct Wallet Pinning</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Native connections with major mobile wallet operators to make transit ticketing payments completely frictionless for daily commuters.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}