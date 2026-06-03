// src/app/technology/cybersecurity-framework/page.tsx
import Link from 'next/link';

export default function CybersecurityFrameworkPage() {
  const securityDefenses = [
    {
      domain: "Data & Ledger Transit",
      protocols: ["AES-256 GCM Encryption", "TLS 1.3 Strict Tunneling", "Hardware Security Modules (HSM)"],
      desc: "Secures all financial transaction data at rest and in transit, establishing permanent cryptographic seals across municipal ledger pipelines."
    },
    {
      domain: "Access & Identity",
      protocols: ["Zero-Trust Network Access", "Biometric Terminal Sign-On", "Role-Based Auditing Logs"],
      desc: "Enforces continuous verification across all field collection terminals, completely locking out unauthorized devices and spoofed hardware profiles."
    },
    {
      domain: "Threat Mitigation",
      protocols: ["Real-Time Intrusion Drops", "Automated Anomaly Coring", "DDoS Shield Filtering"],
      desc: "Actively monitors systemic traffic signals to immediately isolate, track, and mitigate multi-vector vectors without interrupting civic remittance flows."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* 1. IMMERSIVE HERO BANNER MODULE WITH CYBER-MATRIX OVERLAY */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        {/* Secure Network Background Photo Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000')` }}
        />
        {/* Fine Circuit-Style Line Grid Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_2px),linear-gradient(to_bottom,transparent_40px,#FFFFFF_42px)] bg-[size:6rem_3rem]" />
        {/* Accent Deep Red Ambient Security Glow */}
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-[#A62626]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A62626]" /> MITIGATION AND ASSURANCE PROTOCOL
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Cybersecurity <br />
            <span className="text-[#E5981A]">Framework Architecture</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Security architecture protecting financial and operational systems.
          </p>
        </div>
      </section>

      {/* 2. CORE ARCHITECTURAL ASYMMETRIC STREAM ARRAY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Block Header Pillar (Takes 4 of 12 structural columns) */}
            <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-8 text-left">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#E5981A] uppercase tracking-widest block">
                  Hardened Infrastructure Layer
                </span>
                <h3 className="text-2xl font-bold text-[#0A2540] tracking-tight">
                  Defending Sovereign Revenue Ecosystems
                </h3>
                <p className="text-slate-600 text-sm font-normal leading-relaxed">
                  We deploy deep tactical layers across software, perimeter hardware, and endpoints. This ensures that every public sector ledger entry remains permanent, visible, and completely insulated from manipulation.
                </p>
              </div>
              
              <div className="pt-8 lg:pt-0">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#A62626] hover:bg-[#A62626]/90 text-white font-mono font-bold text-xs uppercase px-6 py-3 rounded-xl shadow transition-colors">
                  Review Security Audits &rarr;
                </Link>
              </div>
            </div>

            {/* Right Stacked Protocol Matrix (Takes 8 of 12 structural columns) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-1 gap-8 text-left">
              {securityDefenses.map((defense, idx) => (
                <div key={idx} className="group border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <div className="w-1 h-3 bg-slate-200 group-hover:bg-[#A62626] transition-colors self-center hidden sm:block" />
                    <h4 className="font-bold text-[#0A2540] text-lg">
                      {defense.domain}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:ml-auto mt-1 sm:mt-0">
                      {defense.protocols.map((proto, pIdx) => (
                        <span key={pIdx} className="text-[9px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded">
                          {proto}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal pl-0 sm:pl-5">
                    {defense.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. HIGH-TECH INSTITUTIONAL ACTION PANEL */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mb-12">
        <div className="p-8 md:p-16 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group text-center space-y-6">
          {/* Alternating decorative rings positioned on the left for design variety */}
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <span className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[#E5981A] font-bold uppercase">
            Sovereign Perimeter Shield
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Establish Institutional-Grade Protection
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Isolate vulnerabilities, enforce multi-layer network cryptographic signature policies, and actively secure civic databases. Connect with our technical security group to audit your integration architecture.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Link 
              href="/contact" 
              className="bg-[#A62626] hover:bg-[#A62626]/90 text-white text-center font-bold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md w-full active:scale-95 duration-150"
            >
              Consult Security Architects
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}