import Link from 'next/link';

export default function DataIntelligenceEcosystemPage() {
  const tools = [
    { 
      title: "Live Revenue Dashboards", 
      text: "See immediate updates on sales and collection volumes across hundreds of local districts at the same time, without annoying system lag." 
    },
    { 
      title: "Smart Variance Alerts", 
      text: "Our platform automatically spots sudden drops or changes in daily collections, helping managers resolve local problems before they become massive deficits." 
    },
    { 
      title: "Automated Book Matching", 
      text: "We cross-check every single field receipt against incoming bank records to make sure your financial logs balance perfectly at the end of the day." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,#FFFFFF_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            CLEAR FINANCIAL INSIGHTS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Data Intelligence & <br />
            <span className="text-[#E5981A]">Reporting Systems</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Providing straightforward analytics, automated performance checks, and custom reports to help you understand your business or government data instantly.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {tools.map((metric, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md flex flex-col justify-between hover:border-[#E5981A]/50 transition-all duration-300">
              <div className="space-y-4">
                <span className="text-xs font-bold bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded text-slate-400 block w-fit">REPORTING STEP // 0{i+1}</span>
                <h3 className="font-bold text-[#0A2540] text-lg tracking-tight">{metric.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{metric.text}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50 h-2 w-2 rounded-full bg-[#A62626]" />
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-[#0A2540] text-white rounded-3xl p-8 md:p-12 text-center space-y-4">
          <h3 className="text-2xl font-bold tracking-tight">Gain Complete Control Over Your Data</h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">Link our interactive dashboards directly to your workspace to view field collections and download customized summaries easily.</p>
          <Link href="/contact" className="inline-block bg-[#A62626] hover:bg-[#b82d2d] text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all">Request a System Demo</Link>
        </div>
      </section>
    </main>
  );
}