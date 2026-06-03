// src/app/solutions/digital-ticketing/page.tsx
import Link from 'next/link';

export default function DigitalTicketingPage() {
  const deploymentVectors = [
    { 
      venue: "Transit Hub Interchanges", 
      utilities: "Smart ticketing systems engineered to handle high-volume motor parks and transit corridors seamlessly." 
    },
    { 
      venue: "Union Asset Validation", 
      utilities: "Real-time ticket tracking systems protecting drivers, transport unions, and local councils against ticket duplication." 
    },
    { 
      venue: "High-Throughput Commerce Arenas", 
      utilities: "Fast electronic ticketing applications built specifically to manage access and organize space levies inside dense public markets." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden animate-fadeIn selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* 1. IMMERSIVE HERO BANNER MODULE */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        {/* Infrastructure Background Photo Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105 animate-bgPulse"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2000')` }}
        />
        {/* Fine Structural Grid */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* Ambient Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E5981A]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            Solutions Architecture Group
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Digital Ticketing <br />
            <span className="text-[#E5981A]">Verification Platforms</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Electronic ticketing frameworks built to handle high-volume transit systems, public parks, and market operations. This module provides reliable verification structures designed to eliminate leakage.
          </p>
        </div>
      </section>

      {/* 2. FUNCTIONAL CARD GRID OVERLAY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deploymentVectors.map((vector, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#E5981A]/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[240px] text-left"
            >
              <div className="space-y-4">
                <div className="h-10 w-10 bg-[#F8FAFC] group-hover:bg-[#0A2540] group-hover:text-white rounded-xl flex items-center justify-center font-mono font-bold text-xs text-[#0A2540] transition-all duration-300 border border-slate-200/60 group-hover:border-transparent">
                  0{index + 1}
                </div>
                <h4 className="font-bold text-[#0A2540] text-xl group-hover:text-[#A62626] transition-colors">
                  {vector.venue}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {vector.utilities}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HIGH-TECH INSTITUTIONAL ACTION PANEL */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mb-12">
        <div className="p-8 md:p-16 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group text-center space-y-6">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <span className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[#E5981A] font-bold uppercase">
            Custom Transport Logistics Deployment
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Need a Specialized Infrastructure Variant?
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Our engineering teams build specialized offline-compatible ticketing structures tailored specifically for locations with erratic network coverage, ensuring absolute revenue capture under any condition.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Link 
              href="/contact" 
              className="bg-[#A62626] hover:bg-[#A62626]/90 text-white text-center font-bold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md w-full active:scale-95 duration-150"
            >
              Inquire Architecture Now
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}