// src/app/solutions/agency-enterprise/page.tsx
import Link from 'next/link';

export default function AgencyEnterprisePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden animate-fadeIn selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* 1. IMMERSIVE HERO BANNER MODULE */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        {/* Infrastructure Background Photo Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105 animate-bgPulse"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')` }}
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
            Agency & Enterprise <br />
            <span className="text-[#E5981A]">Administrative Platforms</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Custom administrative software suites configured specifically to manage trade unions, labor associations, ministries, and complex municipal authorities requiring secure multi-tiered permission management.
          </p>
        </div>
      </section>

      {/* 2. CORE PRESENTATION GRID OVERLAY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Content Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between group hover:border-[#E5981A]/40 transition-all duration-300 transform hover:-translate-y-1 min-h-[340px] text-left">
            <div className="space-y-4">
              <div className="h-2 w-2 rounded-full bg-[#E5981A]" />
              <h3 className="text-2xl font-bold text-[#0A2540] tracking-tight group-hover:text-[#A62626] transition-colors">
                Tailored Enterprise Architecture
              </h3>
              <p className="text-slate-600 text-sm font-normal leading-relaxed">
                Every major public agency or industrial association operates under distinct statutory mandates. Our system maps secure permission management structures directly around your existing regulatory guidelines to protect operational continuity.
              </p>
            </div>
            
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#0A2540] font-bold tracking-tight border-t border-slate-100 pt-6">
              <li className="flex items-center gap-2">
                <span className="text-[#E5981A] text-sm">✓</span> Multi-User Access Management
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E5981A] text-sm">✓</span> Automated Dues Assessment
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E5981A] text-sm">✓</span> Multi-Tier Approval Workflows
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E5981A] text-sm">✓</span> Audit Trail Logging Channels
              </li>
            </ul>
          </div>
          
          {/* Side Conversion Action Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between group hover:border-[#E5981A]/40 transition-all duration-300 shadow-xl transform hover:-translate-y-1 min-h-[340px] text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-[#E5981A] tracking-widest uppercase block">
                Platform Access Protocol
              </span>
              <h4 className="text-xl font-bold text-[#0A2540]">
                Request an Institutional Consultation
              </h4>
              <p className="text-slate-600 text-xs font-normal leading-relaxed">
                Connect with our systems engineering team to securely map out your enterprise modernization roadmap and establish robust administrative pipelines.
              </p>
            </div>
            
            <div className="mt-8 border-t border-slate-100 pt-6">
              <Link 
                href="/contact" 
                className="w-full text-center bg-[#0A2540] hover:bg-[#A62626] text-white text-xs font-mono font-bold uppercase tracking-widest py-4 rounded-xl transition-all block shadow-md hover:shadow-lg active:scale-95 duration-150"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. HIGH-TECH INSTITUTIONAL ACTION PANEL */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mb-12">
        <div className="p-8 md:p-16 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group text-center space-y-6">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <span className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[#E5981A] font-bold uppercase">
            Enterprise Interoperability Matrix
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Streamline Structural Operations?
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Bring high-velocity automation, multi-tiered credential checks, and structural transparency to your association or ministry. Connect with our engineering group to analyze your operational needs.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Link 
              href="/contact" 
              className="bg-[#A62626] hover:bg-[#A62626]/90 text-white text-center font-bold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md w-full active:scale-95 duration-150"
            >
              Deploy Institutional Platform
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}