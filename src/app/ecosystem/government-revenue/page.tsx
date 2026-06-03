import Link from 'next/link';

export default function GovernmentRevenueEcosystemPage() {
  const categories = [
    { 
      title: "Ministries and Agencies", 
      detail: "We replace manual paperwork with clean, automated digital billing systems so departments can issue official government invoices and collect exact fees effortlessly." 
    },
    { 
      title: "Local Government Councils", 
      detail: "We provide local field teams with secure payment apps, making sure that grassroots collections in markets and communities are reported safely to the treasury." 
    },
    { 
      title: "Tax and Revenue Boards", 
      detail: "We give senior leaders complete dashboard views of daily, weekly, and monthly tax collections, helping them monitor and plan financial targets with absolute certainty." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(135deg,#FFFFFF_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            PUBLIC SECTOR EFFICIENCY
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Government Revenue <br />
            <span className="text-[#E5981A]">Management Services</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Helping states, local government councils, and federal agencies eliminate cash leakages, organize citizen records, and rebuild public trust.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {categories.map((item, idx) => (
              <div key={idx} className="pt-6 lg:pt-0 lg:px-6 first:pl-0 last:pr-0 space-y-4">
                <span className="text-xs font-bold text-[#E5981A] uppercase tracking-wider block">SUPPORTED DEPARTMENT // 0{idx+1}</span>
                <h3 className="text-xl font-bold text-[#0A2540] tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
            <Link href="/contact" className="inline-block bg-[#A62626] hover:bg-[#b82d2d] text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all">
              Request a Government Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}