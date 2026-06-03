import Link from "next/link";

export default function IotSmartDevicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      <section className="relative bg-[#0A2540] text-white h-[100dvh] w-full max-h-[750px] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 relative z-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-[#E5981A] uppercase tracking-widest border border-[#E5981A]/30 px-3 py-1 rounded-full bg-white/5">6. TECHNOLOGY MODULE</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">IoT & Smart Devices</h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Connected smart hardware and digital operational tools.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[#A62626] hover:bg-[#b82d2d] text-white font-bold text-xs md:text-sm px-8 py-4 rounded-xl shadow-lg transition-all mb-2 sm:mb-0">
                Inspect Hardware
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}