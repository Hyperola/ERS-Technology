import Link from 'next/link';

export default function BecomeAPartnerPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(135deg,#FFFFFF_2px,transparent_2px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            ECOSYSTEM ONBOARDING
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Join the Network & <br />
            <span className="text-[#E5981A]">Build Africa's Rails</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Submit your application details to integrate into ERS’s digital revenue ecosystems and open new market channels.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-8">
          
          {/* Main Context Panel */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">Seamless Engagement Channels</span>
              <h2 className="text-3xl font-bold tracking-tight">Partnership Onboarding Window</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Whether you control critical physical transaction networks, manage banking switch APIs, or represent local trade committees, our teams are structured to onboard you quickly. Let's align resources to build transparent, reliable fiscal platforms.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a href="#onboarding-form" className="inline-block bg-[#A62626] hover:bg-[#b82d2d] text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all">
                Open Engagement Portal
              </a>
            </div>
          </div>

          {/* Interactive Form Panel */}
          <div id="onboarding-form" className="bg-white border border-slate-200 p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto space-y-6 text-left">
            <h3 className="font-bold text-2xl text-[#0A2540]">Ecosystem Profile Submission</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Complete this brief overview and our regional alliance directors will follow up within two business cycles.
            </p>
            
            <form className="space-y-4 text-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-bold text-xs uppercase text-slate-600">Organization Name</label>
                  <input type="text" className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg p-3 text-[#0A2540] focus:outline-none focus:border-[#E5981A]" placeholder="e.g., Global Switch Ltd" />
                </div>
                <div className="space-y-1">
                  <label className="block font-bold text-xs uppercase text-slate-600">Partnership Category</label>
                  <select className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg p-3 text-[#0A2540] focus:outline-none focus:border-[#E5981A]">
                    <option>Financial Institution / Fintech</option>
                    <option>Telecom Operator (MNO)</option>
                    <option>Government Agency / MDA</option>
                    <option>Transport Union / Logistics</option>
                    <option>Technology Provider / Hardware OEM</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="block font-bold text-xs uppercase text-slate-600">Primary Contact Email</label>
                <input type="email" className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg p-3 text-[#0A2540] focus:outline-none focus:border-[#E5981A]" placeholder="alliances@organization.com" />
              </div>

              <div className="space-y-1">
                <label className="block font-bold text-xs uppercase text-slate-600">Brief Operational Scope Description</label>
                <textarea rows={4} className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg p-3 text-[#0A2540] focus:outline-none focus:border-[#E5981A]" placeholder="Describe your operational footprints, geographic focus, and system integration interests..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0A2540] hover:bg-slate-900 text-white font-bold text-xs uppercase p-4 rounded-xl shadow-md transition-all">
                Submit Profile to Alliance Review Board
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}