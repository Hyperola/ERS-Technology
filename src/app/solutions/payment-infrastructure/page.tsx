// src/app/solutions/payment-infrastructure/page.tsx
import Link from 'next/link';

export default function PaymentInfrastructurePage() {
  const nodes = [
    "Commercial Banking APIs", 
    "Interoperable Point-of-Sale (POS) Systems", 
    "Dynamic QR Code Payments", 
    "Localized USSD Channels", 
    "Secure Digital Wallet Systems", 
    "Mobile Money Processing Networks"
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden animate-fadeIn selection:bg-[#E5981A]/30 selection:text-[#0A2540]">
      
      {/* 1. IMMERSIVE HERO BANNER MODULE */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden">
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
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-xs px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            Solutions Architecture Group
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Payment Infrastructure <br />
            <span className="text-[#E5981A]">Multi-Channel Core</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
            An integrated settlement layer powering continuous reconciliation between commercial banks, fintech systems, field operators, and institutional administrative accounts.
          </p>
        </div>
      </section>

      {/* 2. CORE PRESENTATION GRID OVERLAY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Side Banner Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#E5981A]/30 transition-all duration-300 shadow-xl min-h-[320px]">
            <div className="space-y-4">
              <div className="h-2 w-2 rounded-full bg-[#E5981A]" />
              <h3 className="text-xs font-mono font-black text-[#E5981A] tracking-widest uppercase">
                INTEROPERABILITY PROTOCOLS
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                We link multiple fragmented transactional touchpoints into a unified clearing stream, keeping settlement paths fully reliable, auditable, and secure across complex fiscal ecosystems.
              </p>
            </div>
            
            <div className="mt-8 border-t border-slate-100 pt-6">
              <Link href="/contact" className="text-xs font-mono font-black uppercase text-[#0A2540] hover:text-[#E5981A] tracking-wider flex items-center gap-1 transition-colors">
                Request API Integration <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Infrastructure Nodes Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nodes.map((node, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-xl hover:shadow-2xl hover:border-[#E5981A]/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="text-sm font-black text-[#0A2540] group-hover:text-[#E5981A] transition-colors max-w-[80%]">
                  {node}
                </span>
                <span className="text-slate-300 group-hover:text-[#0A2540] text-xs font-mono font-black transition-colors">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HIGH-TECH INSTITUTIONAL ACTION PANEL */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="p-8 md:p-16 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group text-center space-y-6">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <span className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[#E5981A] font-bold uppercase">
            Unified Settlement Matrix
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Connect Financial Frameworks?
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Bring absolute interoperability to your structural networks. Partner with our architecture group to clear transit pipelines, unify developer endpoints, and build real-time transaction nodes.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Link 
              href="/contact" 
              className="bg-[#E5981A] hover:bg-[#E5981A]/90 text-[#0A2540] text-center font-extrabold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md w-full"
            >
              Deploy Infrastructure Layer
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}