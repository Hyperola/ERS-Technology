import Link from 'next/link';

export default function TransportEcosystemPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_bottom_left,#FFFFFF_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            PUBLIC TRANSPORTATION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Smart Travel & <br />
            <span className="text-[#E5981A]">Transit Systems</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Making transport collections simpler with cashless tickets, secure card scanning, and clear payment splitting for owners and unions.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-8">
          
          {/* Main Context Panel */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">Better Ways to Move</span>
              <h2 className="text-3xl font-bold tracking-tight">Connected Transport Systems</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We bring digital ticketing to buses, trains, and ferry networks. Our system helps government authorities and local transport unions work together cleanly, tracking every single ticket sold from the road right back to the central office.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/contact" className="inline-block bg-[#A62626] hover:bg-[#b82d2d] text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all">
                Talk to Transport Experts
              </Link>
            </div>
          </div>

          {/* Subfeatures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">Quick Ticket Scanning</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Handheld payment devices and smartphone scanners allow drivers and conductor teams to check customer tickets quickly, even when there is absolutely no phone network or internet access on the road.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">Fair and Automatic Earnings Splitting</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our platform automatically calculates ticket payments and separates the money into different accounts, sending correct shares straight to vehicle owners, local unions, and government agencies instantly.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}