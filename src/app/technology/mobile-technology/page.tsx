// src/app/technology/mobile-technology/page.tsx
import Link from 'next/link';

export default function MobileTechnologyPage() {
  const systemCapabilities = [
    {
      title: "Offline-First Synchronization",
      tag: "FIELD PERIMETER PROTOCOL",
      desc: "Enables operators to process field transactions securely in areas without cellular connectivity. Data cryptographically buffers locally and syncs automatically when a network anchor is established."
    },
    {
      title: "Biometric Terminal Enforcement",
      tag: "HARDWARE ACCESS ASSURANCE",
      desc: "Secures point-of-collection terminals through multi-factor cryptographic handshakes and hardware-bound biometric authentication to prevent identity spoofing or credential theft."
    },
    {
      title: "Thermal Print Optimization",
      tag: "PERIPHERAL INTERFACE LAYER",
      desc: "Bridges legacy field hardware with advanced mobile applications, issuing physical, tamper-evident receipts with encrypted verification codes directly to the customer."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* 1. IMMERSIVE HERO BANNER MODULE WITH TOPOGRAPHIC OVERLAY */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        {/* Mobile Infrastructure Background Photo Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000')` }}
        />
        {/* Organic Curved Radial Topographic Backdrop Lines */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_bottom_left,#FFFFFF_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
        {/* Subtle Side Ambient Glow */}
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-[#E5981A]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5981A] animate-ping" /> FIELD OPERATION SUITE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Mobile <br />
            <span className="text-[#E5981A]">Technology Deployment</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Mobile-first solutions for field operators and edge validation architectures.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC STAGGERED OFFSET PRESENTATION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-12">
          
          {/* Main Context Card */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-[#A62626] tracking-widest uppercase block">
                Edge Validation Framework
              </span>
              <h2 className="text-3xl font-bold text-[#0A2540] tracking-tight">
                Empowering Decentralized Networks
              </h2>
              <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-4xl">
                Our application matrix transfers computing power into the field, deploying highly robust, cryptographic tracking platforms straight to secure hand-held hardware. We remove terminal operational latency completely.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right w-full">
              <Link href="/contact" className="inline-block bg-[#A62626] hover:bg-[#A62626]/90 text-white font-mono font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 duration-150 w-full lg:w-auto text-center">
                Request Field App Demo &rarr;
              </Link>
            </div>
          </div>

          {/* Staggered Alternating Capability Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {systemCapabilities.map((capability, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:border-[#E5981A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-[9px] font-mono font-bold text-[#E5981A] tracking-wider block bg-slate-50 border border-slate-200/60 w-fit px-2 py-0.5 rounded">
                    {capability.tag}
                  </span>
                  <h3 className="font-bold text-[#0A2540] text-lg tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    {capability.desc}
                  </p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-2 text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#0A2540]" />
                  <div className="h-[1px] flex-grow bg-slate-100" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HIGH-TECH INSTITUTIONAL ACTION PANEL */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mb-12">
        <div className="p-8 md:p-16 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group text-center space-y-6">
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <span className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[#E5981A] font-bold uppercase">
            Distributed Terminal Matrix
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Provision Your Mobile Edge Network
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Acquire fully managed, high-security terminal images optimized for field collection enforcement. Connect directly with our deployment engineers to coordinate regional system distribution schedules.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Link 
              href="/contact" 
              className="bg-[#A62626] hover:bg-[#A62626]/90 text-white text-center font-bold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md w-full active:scale-95 duration-150"
            >
              Consult Mobile Systems Engineers
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}