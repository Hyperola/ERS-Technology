import Link from 'next/link';

export default function MerchantAgentNetworkPage() {
  const items = [
    { title: "Tough Point-of-Sale Hardware", text: "We supply field teams with heavy-duty handheld card devices that print instant receipts and confirm payments out on the street smoothly." },
    { title: "Easy Daily Ledgers", text: "Shop owners and retail managers get a straightforward phone app to track daily customer spending without complex accounting knowledge." },
    { title: "Safe Float Management", text: "We constantly check and verify balance entries across our agent network, keeping cash-out points stable and protected from fraud." }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_2px)] bg-[size:3rem_3rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            RETAIL & FIELD PARTNERS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Merchant & Agent <br />
            <span className="text-[#E5981A]">Collection Networks</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Empowering local shops, field collection workers, and mobile agents with the exact tools they need to collect bills and process items easily.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          <div className="p-8 md:p-12 lg:col-span-7 space-y-4 text-left">
            <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest block">In Your Neighborhood</span>
            <h2 className="text-3xl font-bold tracking-tight">Bringing Secure Payments Closer</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We make it easy to pay utility bills, local market dues, and transport fees right in your neighborhood. By putting our simple apps in the hands of trusted local agents, citizens no longer have to travel to distant city offices just to make basic payments.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="inline-block bg-[#A62626] hover:bg-[#b82d2d] text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all">
                Onboard New Field Agents &rarr;
              </Link>
            </div>
          </div>

          <div className="p-8 bg-slate-50 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200/60 flex flex-col justify-center space-y-6 text-left">
            {items.map((op, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="font-bold text-[#0A2540] text-sm">{op.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{op.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}