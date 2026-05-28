// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  // Mobile accordion state toggle tracker
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);

  const toggleMobileSection = (title: string) => {
    if (mobileOpenSection === title) {
      setMobileOpenSection(null);
    } else {
      setMobileOpenSection(title);
    }
  };

  const navigationMatrix = [
    {
      title: "Capabilities & Engine",
      desc: "Discover ERS's digital solutions and the advanced operational frameworks powering automated revenue administration across Africa[cite: 1].",
      blocks: [
        {
          heading: "SOLUTIONS",
          links: [
            { name: "Revenue Collection Systems", desc: "Taxes, levies, fees, and municipal tracking blocks[cite: 1].", href: "/solutions/revenue-collection" },
            { name: "Digital Ticketing Solutions", href: "/solutions/digital-ticketing" },
            { name: "Payment Infrastructure", desc: "POS, QR, wallets, and settlement routing[cite: 1].", href: "/solutions/payment-infrastructure" },
            { name: "Revenue Monitoring & Verification", href: "/solutions/monitoring-verification" },
            { name: "Agency & Enterprise Platforms", href: "/solutions/agency-enterprise" },
            { name: "Smart Remittance Systems", href: "/solutions/smart-remittance" },
            { name: "Identity & Verification Systems", href: "/solutions/identity-verification" },
            { name: "Financial Analytics Systems", href: "/solutions/financial-analytics" }
          ]
        },
        {
          heading: "TECHNOLOGY",
          links: [
            { name: "Cloud Infrastructure", href: "/technology/cloud-infrastructure" },
            { name: "System Management Architecture", desc: "Data frameworks and reporting verification models[cite: 1].", href: "/technology/system-management" },
            { name: "Core Data & Analytics", href: "/technology/core-data-analytics" },
            { name: "Security Infrastructure", href: "/technology/security-infrastructure" },
            { name: "API Infrastructure", href: "/technology/api-infrastructure" },
            { name: "Mobile Technology Systems", href: "/technology/mobile-technology" },
            { name: "Transactional Field Devices", href: "/technology/field-devices" },
            { name: "Development Hub", href: "/technology/development-hub" }
          ]
        }
      ]
    },
    {
      title: "Ecosystem & Sectors",
      desc: "Explore our interconnected network structures and customized deployment frameworks designed for the unique operational realities of African industries[cite: 1].",
      blocks: [
        {
          heading: "ECOSYSTEM",
          links: [
            { name: "Digital Revenue Ecosystem", href: "/ecosystem/digital-revenue" },
            { name: "Transport Ecosystem", desc: "Connecting vehicle fleets and transit union networks[cite: 1].", href: "/ecosystem/transport-ecosystem" },
            { name: "Government Revenue Ecosystem", href: "/ecosystem/government-revenue" },
            { name: "Merchant & Agent Network", href: "/ecosystem/merchant-agent" },
            { name: "Banking & Fintech Integration", href: "/ecosystem/banking-fintech" },
            { name: "Data Intelligence Ecosystem", href: "/ecosystem/data-intelligence" },
            { name: "Compliance & Audit Layer", href: "/ecosystem/compliance-audit" },
            { name: "API Connectivity Framework", href: "/ecosystem/api-connectivity" }
          ]
        },
        {
          heading: "INDUSTRIES",
          links: [
            { name: "Government & Public Sector", href: "/industries/government-public" },
            { name: "Transportation & Mobility", href: "/industries/transportation-mobility" },
            { name: "Markets & Trade Associations", desc: "Fee reporting frameworks for micro-vendors[cite: 1].", href: "/industries/markets-trade" },
            { name: "Education Institutions", href: "/industries/education-institutions" },
            { name: "Religious Organizations", href: "/industries/religious-organizations" },
            { name: "SMEs & Enterprises", href: "/industries/smes-enterprises" },
            { name: "Cooperatives & Associations", href: "/industries/cooperatives-associations" },
            { name: "Informal Sector Networks", href: "/industries/informal-sector" }
          ]
        }
      ]
    },
    {
      title: "Deployments & Trust",
      desc: "Review our ongoing verification exercises, strategic joint ventures, deployment resources, and institutional transparency profiles[cite: 1].",
      blocks: [
        {
          heading: "PARTNERSHIPS",
          links: [
            { name: "Government Partnerships", href: "/partnerships/government" },
            { name: "Financial Institutions", href: "/partnerships/financial-institutions" },
            { name: "Telecom Partnerships", href: "/partnerships/telecom" },
            { name: "Transport Union Partnerships", href: "/partnerships/transport-union" },
            { name: "Technology Partners", href: "/partnerships/technology" },
            { name: "Strategic Alliances", href: "/partnerships/strategic-alliances" },
            { name: "Development Partners", href: "/partnerships/development-partners" },
            { name: "Become a Partner", href: "/partnerships/become-partner" }
          ]
        },
        {
          heading: "PROJECTS & RESOURCES",
          links: [
            { name: "Featured Projects", href: "/projects/featured" },
            { name: "Government Projects", href: "/projects/government" },
            { name: "Case Studies & Reports", href: "/resources/case-studies" },
            { name: "News & Announcements", href: "/resources/news" },
            { name: "System Integration Guide", href: "/resources/integration-guide" },
            { name: "Deployment Roadmap", href: "/projects/roadmap" },
            { name: "Impact Reports", href: "/projects/impact-reports" },
            { name: "FAQs & Knowledge Base", href: "/resources/faqs" }
          ]
        }
      ]
    }
  ];

  return (
    <header className="w-full bg-white text-ers-text-dark border-b border-slate-200 sticky top-0 z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-opacity-95 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Brand Architecture Identity Anchor */}
        <Link href="/" className="font-black text-2xl tracking-tighter text-ers-blue hover:opacity-90 flex items-center gap-0.5 group">
          ERS<span className="text-ers-gold transition-transform duration-300 group-hover:scale-125">.</span>
        </Link>

        {/* Desktop Navigation Link Array */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="text-[11px] font-extrabold uppercase tracking-widest text-ers-text-dark hover:text-ers-blue transition-colors py-2 border-b-2 border-transparent hover:border-ers-blue">
            Home
          </Link>

          <Link href="/about" className="text-[11px] font-extrabold uppercase tracking-widest text-ers-text-dark hover:text-ers-blue transition-colors py-2 border-b-2 border-transparent hover:border-ers-blue">
            About ERS
          </Link>

          {navigationMatrix.map((menu) => (
            <div 
              key={menu.title} 
              className="static"
              onMouseEnter={() => setActiveMenu(menu.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-[11px] font-extrabold uppercase tracking-widest text-ers-text-dark hover:text-ers-blue transition-colors flex items-center gap-1.5 cursor-pointer py-2 border-b-2 border-transparent relative">
                {menu.title}
                <span className={`text-[7px] text-ers-gold transition-transform duration-300 ${activeMenu === menu.title ? 'rotate-180 text-ers-blue' : ''}`}>▼</span>
              </button>

              {/* Mega-Panel Container Grid */}
              <div className={`absolute top-full left-0 right-0 mt-[17px] w-full bg-white border border-slate-200 shadow-2xl p-8 lg:p-10 grid grid-cols-12 gap-8 lg:gap-10 z-50 transition-all duration-300 rounded-b-3xl origin-top ${
                activeMenu === menu.title ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95 pointer-events-none'
              }`}>
                {/* Visual Explainer Text Block */}
                <div className="col-span-4 border-r border-slate-200 pr-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono font-black text-ers-gold uppercase tracking-widest block">System Vector</span>
                    <h4 className="text-xl font-black text-ers-blue tracking-tight leading-tight">{menu.title}</h4>
                    <p className="text-ers-text-muted text-xs font-light leading-relaxed">{menu.desc}</p>
                  </div>
                  <div className="bg-ers-bg-alt border border-slate-200 rounded-xl p-4 mt-6">
                    <span className="text-[9px] font-bold text-ers-blue tracking-widest block uppercase mb-1">Architecture Note</span>
                    <p className="text-[11px] text-ers-text-muted font-light leading-normal">Integrated processing & structural transparency pathways[cite: 1].</p>
                  </div>
                </div>

                {/* Data Nodes Columns */}
                <div className="col-span-8 grid grid-cols-2 gap-8">
                  {menu.blocks.map((block, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="text-[10px] font-black text-ers-blue tracking-widest uppercase border-b border-slate-200 pb-2 flex items-center justify-between">
                        <span>{block.heading}</span>
                        <span className="h-1 w-1 rounded-full bg-ers-gold" />
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {block.links.map((link) => (
                          <Link 
                            key={link.name} 
                            href={link.href}
                            className="group p-2.5 rounded-xl hover:bg-ers-bg-alt border border-transparent hover:border-slate-200 transition-all flex flex-col gap-0.5 duration-200 -ml-2"
                          >
                            <span className="text-ers-text-dark text-xs font-bold group-hover:text-ers-blue transition-colors flex items-center gap-1">
                              {link.name}
                            </span>
                            {link.desc && (
                              <span className="text-ers-text-muted text-[11px] font-light transition-colors leading-tight">
                                {link.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </nav>

        {/* Contact Desk Conversion Component */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contact" className="border-2 border-ers-blue text-ers-blue hover:bg-ers-blue hover:text-white font-black text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 duration-150">
            Contact Desk
          </Link>
        </div>

        {/* Mobile View Burger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ers-blue font-bold p-2 cursor-pointer text-2xl transition-transform duration-200 active:scale-90"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "≡"}
        </button>

        {/* Mobile Flyout Drawer */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 max-h-[85vh] overflow-y-auto flex flex-col gap-4 md:hidden z-50 animate-fadeIn">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-xs font-black uppercase tracking-widest text-ers-text-dark border-b border-slate-200 pb-3 block">
              Home
            </Link>
            
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-xs font-black uppercase tracking-widest text-ers-text-dark border-b border-slate-200 pb-3 block">
              About ERS
            </Link>

            {navigationMatrix.map((menu) => {
              const isSectionOpen = mobileOpenSection === menu.title;
              return (
                <div key={menu.title} className="bg-ers-bg-alt border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
                  {/* Dynamic Trigger Header */}
                  <button 
                    onClick={() => toggleMobileSection(menu.title)}
                    className="w-full text-left flex justify-between items-center p-4 text-xs font-black uppercase tracking-widest text-ers-text-dark bg-slate-50"
                  >
                    <span>{menu.title}</span>
                    <span className={`text-[9px] text-ers-gold transition-transform duration-300 ${isSectionOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  
                  {/* Collapsible Panel Content */}
                  <div className={`transition-all duration-300 origin-top ${isSectionOpen ? 'max-h-[1000px] opacity-100 p-4 border-t border-slate-200 space-y-4' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    {menu.blocks.map((block, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="text-[10px] font-black text-ers-blue tracking-wider uppercase opacity-80">{block.heading}</div>
                        <div className="pl-3 space-y-2 border-l-2 border-slate-200">
                          {block.links.map((link) => (
                            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xs text-ers-text-dark hover:text-ers-blue block py-1 font-light">
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            
            <div className="pt-2">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-ers-blue hover:bg-ers-blue-hover text-white text-center font-black text-xs uppercase tracking-widest py-4 rounded-xl block shadow-xl">
                Contact Desk
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}