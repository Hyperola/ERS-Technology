import Link from 'next/link';

export default function ApiConnectivityFrameworkPage() {
  const steps = [
    { code: "Check Payments Feed", use: "Allows your internal corporate finance software to easily view cleared payment pools and check daily balances without long delays." },
    { code: "Create New Invoices", use: "Helps external business websites and retail portals easily build and drop official invoices directly into your customers' billing feeds." },
    { code: "Instant Notifications", use: "Sends quick, automatic data alerts the exact moment a user pays, keeping all your disconnected business servers in perfect agreement." }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:3rem_1.5rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            SYSTEM CONNECTIONS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Easy API & <br />
            <span className="text-[#E5981A]">Integration Tools</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Straightforward integration tools that allow your company's existing IT systems or software to securely connect directly to our core network assets.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-6 text-left">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold tracking-tight text-[#0A2540] mb-3">Straightforward Developer Tools</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl">
              We make it simple to link your custom business software to our platform. By using very basic, step-by-step data guides, your internal development teams can start syncing collection information safely between our field systems and your home office databases in just a few days.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden divide-y divide-slate-100">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 md:p-8 flex flex-col md:flex-row md:items-baseline gap-4 hover:bg-slate-50/50 transition-colors">
                <span className="text-xs font-bold bg-[#0A2540] text-white px-3 py-1 rounded w-fit md:w-1/4 block text-center md:text-left uppercase tracking-wider">{step.code}</span>
                <p className="text-slate-500 text-sm md:w-3/4 leading-relaxed font-normal">{step.use}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-block bg-[#A62626] hover:bg-[#A62626]/90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all">
            Get Our Developer Integration Guides &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}