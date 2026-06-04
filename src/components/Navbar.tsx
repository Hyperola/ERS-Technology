// src/components/Navbar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  const toggleMobileSection = (title: string) => {
    setMobileOpenSection(mobileOpenSection === title ? null : title);
  };

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const closeDropdown = () => {
    clearCloseTimeout();
    setActiveMenu(null);
  };

  const handleMenuEnter = (title: string) => {
    clearCloseTimeout();
    setActiveMenu(title);
  };

  const handleMenuLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
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
        closeDropdown();
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
    <header className="w-full bg-white text-[#1C1F61] border-b border-slate-200 sticky top-0 z-50 py-3 sm:py-4 px-6 md:px-12 backdrop-blur-md bg-opacity-95 transition-all duration-300 font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity" onClick={closeDropdown}>
          <Image 
            src="/logo.jpeg" 
            alt="ERS Technologies Logo" 
            width={48} 
            height={48} 
            className="object-contain w-auto h-10 sm:h-12 md:h-14"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 lg:gap-10">
          <Link 
            href="/" 
            onClick={closeDropdown}
            className={`text-sm font-bold uppercase tracking-wide transition-colors py-2 border-b-2 ${
              isActive('/') 
                ? 'text-[#CF1B1B] border-[#CF1B1B]' 
                : 'text-[#1C1F61] border-transparent hover:text-[#CF1B1B] hover:border-[#CF1B1B]'
            }`}
          >
            Home
          </Link>

          <Link 
            href="/about" 
            onClick={closeDropdown}
            className={`text-sm font-bold uppercase tracking-wide transition-colors py-2 border-b-2 ${
              isActive('/about') 
                ? 'text-[#CF1B1B] border-[#CF1B1B]' 
                : 'text-[#1C1F61] border-transparent hover:text-[#CF1B1B] hover:border-[#CF1B1B]'
            }`}
          >
            About ERS
          </Link>

          {navigationMatrix.map((menu) => (
            <div 
              key={menu.title} 
              className="static"
              onMouseEnter={() => handleMenuEnter(menu.title)}
              onMouseLeave={handleMenuLeave}
            >
              <button 
                className="text-sm font-bold uppercase tracking-wide text-[#1C1F61] hover:text-[#CF1B1B] transition-colors flex items-center gap-2 cursor-pointer py-2 border-b-2 border-transparent relative"
                aria-expanded={activeMenu === menu.title}
              >
                {menu.title}
                <span className={`text-[9px] text-[#F48B25] transition-transform duration-300 ${activeMenu === menu.title ? 'rotate-180 text-[#CF1B1B]' : ''}`}>▼</span>
              </button>

              {/* Mega Dropdown */}
              <div 
                className={`absolute top-full left-0 right-0 mt-[21px] w-full bg-white border border-slate-200 shadow-2xl p-10 grid grid-cols-12 gap-8 z-50 transition-all duration-300 rounded-b-3xl origin-top ${
                  activeMenu === menu.title ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95 pointer-events-none'
                }`}
              >
                <div className="col-span-3 border-r border-slate-200 pr-8 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-[#F48B25] uppercase tracking-wide block">Core Infrastructure Vector</span>
                    <h4 className="text-xl font-bold text-[#1C1F61] tracking-tight leading-tight">{menu.title}</h4>
                    <p className="text-slate-500 text-sm font-normal leading-relaxed">{menu.desc}</p>
                  </div>
                  <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 mt-6">
                    <span className="text-xs font-bold text-[#1C1F61] tracking-wide block uppercase mb-1.5">Ecosystem Standard</span>
                    <p className="text-xs text-slate-500 font-normal leading-normal">Optimizing secure collection and institutional remittance.</p>
                  </div>
                </div>

                <div className={`col-span-9 grid ${menu.blocks.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-8 text-left`}>
                  {menu.blocks.map((block, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="text-xs font-bold text-[#1C1F61] tracking-wide uppercase border-b border-slate-200 pb-2.5 flex items-center justify-between">
                        <span>{block.heading}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F48B25]" />
                      </div>
                      <div className="flex flex-col gap-1 max-h-[420px] overflow-y-auto pr-1">
                        {block.links.map((link) => {
                          const isLinkActive = isActive(link.href);
                          return (
                            <Link 
                              key={link.name} 
                              href={link.href}
                              onClick={() => {
                                closeDropdown();
                              }}
                              className={`group p-2.5 rounded-xl border transition-all flex flex-col duration-150 ${
                                isLinkActive
                                  ? 'bg-[#F8FAFC] border-[#F48B25]/60 text-[#CF1B1B]'
                                  : 'hover:bg-[#F8FAFC] border-transparent hover:border-slate-200/60'
                              }`}
                            >
                              <span className={`text-sm font-bold transition-colors ${isLinkActive ? 'text-[#CF1B1B]' : 'text-[#1C1F61] group-hover:text-[#CF1B1B]'}`}>
                                {link.name}
                              </span>
                              {link.desc && (
                                <span className={`text-xs font-normal leading-normal mt-1 ${isLinkActive ? 'text-slate-500' : 'text-slate-400 group-hover:text-slate-500'}`}>
                                  {link.desc}
                                </span>
                              )}
                            </Link>
                          );
                        })}
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
          <Link 
            href="/contact" 
            onClick={closeDropdown}
            className={`border-2 font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 duration-150 ${
              isActive('/contact')
                ? 'bg-[#1C1F61] text-white border-[#1C1F61]'
                : 'border-[#1C1F61] text-[#1C1F61] hover:bg-[#1C1F61] hover:text-white'
            }`}
          >
            Contact Desk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          ref={mobileButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-[#1C1F61] font-bold p-2 cursor-pointer text-3xl transition-transform duration-200 active:scale-90"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "≡"}
        </button>

        {/* Mobile Drawer */}
        {isOpen && (
          <div 
            ref={mobileMenuRef}
            className="absolute top-full left-0 right-0 mt-5 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto overscroll-contain xl:hidden z-50"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <Link 
              href="/" 
              onClick={() => {
                setIsOpen(false);
                closeDropdown();
              }} 
              className={`text-left text-sm font-bold uppercase tracking-wide pb-3 block border-b border-slate-100 ${
                isActive('/') ? 'text-[#CF1B1B]' : 'text-[#1C1F61] hover:text-[#CF1B1B]'
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              onClick={() => {
                setIsOpen(false);
                closeDropdown();
              }} 
              className={`text-left text-sm font-bold uppercase tracking-wide pb-3 block border-b border-slate-100 mt-3 ${
                isActive('/about') ? 'text-[#CF1B1B]' : 'text-[#1C1F61] hover:text-[#CF1B1B]'
              }`}
            >
              About ERS
            </Link>

            {navigationMatrix.map((menu) => {
              const isSectionOpen = mobileOpenSection === menu.title;
              return (
                <div key={menu.title} className="bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden mt-3">
                  <button 
                    type="button"
                    onClick={() => toggleMobileSection(menu.title)}
                    className="w-full text-left flex justify-between items-center p-4 text-sm font-bold uppercase tracking-wide text-[#1C1F61] bg-slate-50/50"
                    aria-expanded={isSectionOpen}
                  >
                    <span>{menu.title}</span>
                    <span className={`text-xs text-[#F48B25] transition-transform duration-300 ${isSectionOpen ? 'rotate-180 text-[#CF1B1B]' : ''}`}>▼</span>
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${isSectionOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 border-t border-slate-200 space-y-5">
                      {menu.blocks.map((block, idx) => (
                        <div key={idx} className="space-y-2 text-left">
                          <div className="text-xs font-bold text-[#CF1B1B] tracking-wide uppercase opacity-90 pl-1">{block.heading}</div>
                          <div className="pl-3 space-y-2 border-l-2 border-slate-200">
                            {block.links.map((link) => {
                              const isLinkActive = isActive(link.href);
                              return (
                                <Link 
                                  key={link.name} 
                                  href={link.href} 
                                  onClick={() => {
                                    setIsOpen(false);
                                    closeDropdown();
                                  }} 
                                  className={`text-sm block py-1.5 font-normal transition-colors ${
                                    isLinkActive ? 'text-[#CF1B1B] font-semibold' : 'text-slate-700 hover:text-[#CF1B1B]'
                                  }`}
                                >
                                  {link.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            
            <div className="pt-4">
              <Link 
                href="/contact" 
                onClick={() => {
                  setIsOpen(false);
                  closeDropdown();
                }} 
                className={`block text-center font-bold text-sm uppercase tracking-wide py-4 rounded-xl transition-colors ${
                  isActive('/contact')
                    ? 'bg-[#1C1F61] text-white'
                    : 'bg-[#CF1B1B] hover:bg-[#CF1B1B]/90 text-white shadow-lg'
                }`}
              >
                Contact Desk
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}