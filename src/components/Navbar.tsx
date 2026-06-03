// src/components/Navbar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface NavigationLink {
  name: string;
  href: string;
  desc?: string;
}

interface NavigationBlock {
  heading: string;
  links: NavigationLink[];
}

interface NavigationMenu {
  title: string;
  desc: string;
  blocks: NavigationBlock[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileSection = (title: string) => {
    setMobileOpenSection(mobileOpenSection === title ? null : title);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileButtonRef.current &&
        !mobileButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveMenu(null);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navigationMatrix: NavigationMenu[] = [
    {
      title: "Capabilities & Engine",
      desc: "Discover ERS's intelligent digital solutions and the advanced operational technologies powering automated revenue administration across Africa.",
      blocks: [
        {
          heading: "3. SOLUTIONS",
          links: [
            { name: "Revenue Collection Systems", desc: "Digital systems for taxes, levies, fees, dues, and collections.", href: "/solutions/revenue-collection" },
            { name: "Digital Ticketing Solutions", desc: "Electronic ticketing for transport and event ecosystems.", href: "/solutions/digital-ticketing" },
            { name: "Payment Infrastructure", desc: "Integrated systems for banks, fintechs, POS, QR, and wallets.", href: "/solutions/payment-infrastructure" },
            { name: "Revenue Monitoring & Enforcement", desc: "Real-time compliance monitoring and revenue enforcement.", href: "/solutions/monitoring-enforcement" },
            { name: "Agency & Enterprise Platforms", desc: "Custom platforms for agencies, unions, and enterprises.", href: "/solutions/agency-enterprise" },
            { name: "Smart Remittance Systems", desc: "Automated reconciliation and remittance infrastructure.", href: "/solutions/smart-remittance" },
            { name: "Identity & Verification Systems", desc: "Digital registration, KYC, and operator authentication.", href: "/solutions/identity-verification" },
            { name: "Financial Analytics Systems", desc: "Revenue intelligence dashboards and predictive tools.", href: "/solutions/financial-analytics" }
          ]
        },
        {
          heading: "6. TECHNOLOGY",
          links: [
            { name: "Cloud Infrastructure", href: "/technology/cloud-infrastructure" },
            { name: "Artificial Intelligence", href: "/technology/artificial-intelligence" },
            { name: "Big Data & Analytics", href: "/technology/big-data-analytics" },
            { name: "Cybersecurity Framework", href: "/technology/cybersecurity-framework" },
            { name: "API Infrastructure", href: "/technology/api-infrastructure" },
            { name: "Mobile Technology", href: "/technology/mobile-technology" },
            { name: "IoT & Smart Devices", href: "/technology/iot-smart-devices" },
            { name: "Innovation Lab", href: "/technology/innovation-lab" }
          ]
        }
      ]
    },
    {
      title: "Ecosystem & Sectors",
      desc: "Explore our interconnected network structures and customized deployment frameworks designed for the unique realities of African industries.",
      blocks: [
        {
          heading: "4. ECOSYSTEM",
          links: [
            { name: "Digital Revenue Ecosystem", href: "/ecosystem/digital-revenue" },
            { name: "Transport Ecosystem", href: "/ecosystem/transport" },
            { name: "Government Revenue Ecosystem", href: "/ecosystem/government-revenue" },
            { name: "Merchant & Agent Network", href: "/ecosystem/merchant-agent" },
            { name: "Banking & Fintech Integration", href: "/ecosystem/banking-fintech" },
            { name: "Data Intelligence Ecosystem", href: "/ecosystem/data-intelligence" },
            { name: "Compliance & Enforcement Layer", href: "/ecosystem/compliance-enforcement" },
            { name: "API & Connectivity Framework", href: "/ecosystem/api-connectivity" }
          ]
        },
        {
          heading: "5. INDUSTRIES",
          links: [
            { name: "Government & Public Sector", href: "/industries/government-public" },
            { name: "Transportation & Mobility", href: "/industries/transportation-mobility" },
            { name: "Markets & Trade Associations", href: "/industries/markets-trade" },
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
      desc: "Review our ongoing verification exercises, strategic joint ventures, deployment resources, and institutional transparency profiles.",
      blocks: [
        {
          heading: "7. PARTNERSHIPS",
          links: [
            { name: "Government Partnerships", href: "/partnerships/government" },
            { name: "Financial Institutions", href: "/partnerships/financial-institutions" },
            { name: "Telecom Partnerships", href: "/partnerships/telecom" },
            { name: "Transport Union Partnerships", href: "/partnerships/transport-union" },
            { name: "Technology Partners", href: "/partnerships/technology" },
            { name: "Strategic Alliances", href: "/partnerships/strategic-alliances" },
            { name: "International Development Partners", href: "/partnerships/international-development" },
            { name: "Become a Partner", href: "/partnerships/become-partner" }
          ]
        },
        {
          heading: "8. PROJECTS",
          links: [
            { name: "Featured Projects", href: "/projects/featured" },
            { name: "Government Projects", href: "/projects/government" },
            { name: "Transport Infrastructure Projects", href: "/projects/transport" },
            { name: "Pilot Programs", href: "/projects/pilot-programs" },
            { name: "Case Studies", href: "/projects/case-studies" },
            { name: "Project Gallery", href: "/projects/gallery" },
            { name: "Deployment Roadmap", href: "/projects/roadmap" },
            { name: "Impact Reports", href: "/projects/impact-reports" }
          ]
        },
        {
          heading: "9. RESOURCES",
          links: [
            { name: "News & Press Releases", href: "/resources/news-press" },
            { name: "Articles & Insights", href: "/resources/articles-insights" },
            { name: "Research & White Papers", href: "/resources/white-papers" },
            { name: "Downloads", href: "/resources/downloads" },
            { name: "Video Library", href: "/resources/video-library" },
            { name: "Events & Conferences", href: "/resources/events" },
            { name: "FAQs", href: "/resources/faqs" },
            { name: "Developer Documentation", href: "/resources/developer-docs" }
          ]
        }
      ]
    }
  ];

  return (
    <header className="w-full bg-white text-[#0A2540] border-b border-slate-200 sticky top-0 z-50 py-5 px-6 md:px-12 backdrop-blur-md bg-opacity-95 transition-all duration-300 font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Brand Logo */}
        <Link href="/" className="font-bold text-2xl tracking-tighter text-[#0A2540] hover:opacity-90 flex items-center gap-0.5 group">
          ERS<span className="text-[#E5981A] transition-transform duration-300 group-hover:scale-125">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 lg:gap-10">
          <Link href="/" className="text-sm font-bold uppercase tracking-wide text-[#0A2540] hover:text-[#A62626] transition-colors py-2 border-b-2 border-transparent hover:border-[#A62626]">
            Home
          </Link>

          <Link href="/about" className="text-sm font-bold uppercase tracking-wide text-[#0A2540] hover:text-[#A62626] transition-colors py-2 border-b-2 border-transparent hover:border-[#A62626]">
            About ERS
          </Link>

          {navigationMatrix.map((menu) => (
            <div 
              key={menu.title} 
              className="static"
              onMouseEnter={() => setActiveMenu(menu.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="text-sm font-bold uppercase tracking-wide text-[#0A2540] hover:text-[#A62626] transition-colors flex items-center gap-2 cursor-pointer py-2 border-b-2 border-transparent relative"
                aria-expanded={activeMenu === menu.title}
              >
                {menu.title}
                <span className={`text-[9px] text-[#E5981A] transition-transform duration-300 ${activeMenu === menu.title ? 'rotate-180 text-[#A62626]' : ''}`}>▼</span>
              </button>

              {/* Mega Dropdown */}
              <div 
                className={`absolute top-full left-0 right-0 mt-[21px] w-full bg-white border border-slate-200 shadow-2xl p-10 grid grid-cols-12 gap-8 z-50 transition-all duration-300 rounded-b-3xl origin-top ${
                  activeMenu === menu.title ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95 pointer-events-none'
                }`}
              >
                <div className="col-span-3 border-r border-slate-200 pr-8 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-[#E5981A] uppercase tracking-wide block">Core Infrastructure Vector</span>
                    <h4 className="text-xl font-bold text-[#0A2540] tracking-tight leading-tight">{menu.title}</h4>
                    <p className="text-slate-500 text-sm font-normal leading-relaxed">{menu.desc}</p>
                  </div>
                  <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 mt-6">
                    <span className="text-xs font-bold text-[#0A2540] tracking-wide block uppercase mb-1.5">Ecosystem Standard</span>
                    <p className="text-xs text-slate-500 font-normal leading-normal">Optimizing secure collection and institutional remittance.</p>
                  </div>
                </div>

                <div className={`col-span-9 grid ${menu.blocks.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-8 text-left`}>
                  {menu.blocks.map((block, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="text-xs font-bold text-[#0A2540] tracking-wide uppercase border-b border-slate-200 pb-2.5 flex items-center justify-between">
                        <span>{block.heading}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E5981A]" />
                      </div>
                      <div className="flex flex-col gap-1 max-h-[420px] overflow-y-auto pr-1">
                        {block.links.map((link) => (
                          <Link 
                            key={link.name} 
                            href={link.href}
                            className="group p-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-slate-200/60 transition-all flex flex-col duration-150"
                          >
                            <span className="text-[#0A2540] text-sm font-bold group-hover:text-[#A62626] transition-colors">
                              {link.name}
                            </span>
                            {link.desc && (
                              <span className="text-slate-400 text-xs font-normal leading-normal mt-1 group-hover:text-slate-500">
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

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <Link href="/contact" className="border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 duration-150">
            Contact Desk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          ref={mobileButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-[#0A2540] font-bold p-2 cursor-pointer text-3xl transition-transform duration-200 active:scale-90"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "≡"}
        </button>

        {/* Mobile Drawer - FIXED SCROLLING */}
        {isOpen && (
          <div 
            ref={mobileMenuRef}
            className="absolute top-full left-0 right-0 mt-5 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto overscroll-contain xl:hidden z-50"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="text-left text-sm font-bold uppercase tracking-wide text-[#0A2540] border-b border-slate-100 pb-3 block hover:text-[#A62626]">
              Home
            </Link>
            
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-left text-sm font-bold uppercase tracking-wide text-[#0A2540] border-b border-slate-100 pb-3 block hover:text-[#A62626]">
              About ERS
            </Link>

            {navigationMatrix.map((menu) => {
              const isSectionOpen = mobileOpenSection === menu.title;
              return (
                <div key={menu.title} className="bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden">
                  <button 
                    type="button"
                    onClick={() => toggleMobileSection(menu.title)}
                    className="w-full text-left flex justify-between items-center p-4 text-sm font-bold uppercase tracking-wide text-[#0A2540] bg-slate-50/50"
                    aria-expanded={isSectionOpen}
                  >
                    <span>{menu.title}</span>
                    <span className={`text-xs text-[#E5981A] transition-transform duration-300 ${isSectionOpen ? 'rotate-180 text-[#A62626]' : ''}`}>▼</span>
                  </button>
                  
                  {/* Fixed: removed pointer-events-none, content hides naturally */}
                  <div className={`transition-all duration-300 overflow-hidden ${isSectionOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 border-t border-slate-200 space-y-5">
                      {menu.blocks.map((block, idx) => (
                        <div key={idx} className="space-y-2 text-left">
                          <div className="text-xs font-bold text-[#A62626] tracking-wide uppercase opacity-90 pl-1">{block.heading}</div>
                          <div className="pl-3 space-y-2 border-l-2 border-slate-200">
                            {block.links.map((link) => (
                              <Link 
                                key={link.name} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} 
                                className="text-sm text-slate-700 hover:text-[#A62626] block py-1.5 font-normal transition-colors border-b border-slate-100/50 last:border-0"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            
            <div className="pt-2">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-[#A62626] hover:bg-[#A62626]/90 text-white text-center font-bold text-sm uppercase tracking-wide py-4 rounded-xl block shadow-lg transition-colors">
                Contact Desk
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}