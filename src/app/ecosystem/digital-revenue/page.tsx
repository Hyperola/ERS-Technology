import Link from 'next/link';

export default function DigitalRevenueEcosystemPage() {
  const highlights = [
    { 
      title: "All Payments in One Place", 
      detail: "We bring together money collected from public markets, transport systems, online payments, and bank transfers into a single, clean management system." 
    },
    { 
      title: "Real-Time Tracking", 
      detail: "See exactly how much revenue has been collected the moment a payment is made. No more waiting for daily or weekly reports to find out your true balance." 
    },
    { 
      title: "Zero Waste & Leaks", 
      detail: "By moving away from cash and physical handovers, our system makes sure that every single cent paid by the public safely reaches its destination without disappearing along the way." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            HOW WE MANAGE REVENUE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Digital Revenue <br />
            <span className="text-[#E5981A]">Collection Network</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            A simple, secure, and completely transparent digital system that connects all public and private payment channels into one reliable network.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Side Overview Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col justify-between text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">Our Big Picture</span>
              <h3 className="text-2xl font-bold tracking-tight">Simple and Secure Money Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe public funds should be easy to pay and completely trackable. Our network helps governments and organizations modernize how they protect and grow their finances.
              </p>
            </div>
            <Link href="/contact" className="mt-8 inline-block bg-[#0A2540] hover:bg-[#0A2540]/90 text-white text-center font-bold text-xs uppercase px-6 py-4 rounded-xl shadow-md transition-all">
              Read Our Solution Guide &rarr;
            </Link>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl text-left flex flex-col justify-center space-y-8">
            {highlights.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                <div className="bg-slate-50 border border-slate-200 font-bold text-sm text-[#E5981A] px-3 py-1 rounded-md">0{i+1}</div>
                <div>
                  <h4 className="font-bold text-[#0A2540] text-lg">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}