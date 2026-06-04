// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ERS Technologies | Africa's Digital Revenue Infrastructure",
  description: "Intelligent technology systems enabling governments, transport institutions, and enterprises to automate, monitor, secure, and optimize revenue generation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#F8FAFC] text-[#1C1F61]`}>
        
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        {/* Full-Width Comprehensive Footer - Brand Colors */}
        <footer className="bg-[#1C1F61] text-slate-300 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
            
            {/* Top Section: 4 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Column 1: Brand */}
              <div className="space-y-4">
                <div>
                  <span className="text-2xl font-black tracking-tight text-white leading-none">ERS</span>
                  <span className="text-[10px] font-bold text-[#F48B25] uppercase tracking-[0.2em] block mt-1">Technologies Ltd</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Africa's emerging Digital Revenue Infrastructure company, providing intelligent technology systems for governments, transport institutions, unions, enterprises, and communities.
                </p>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#F48B25] flex items-center justify-center transition-all hover:scale-110">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#F48B25] flex items-center justify-center transition-all hover:scale-110">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.967-12.09c0-.166-.006-.332-.013-.498A9.985 9.985 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#F48B25] flex items-center justify-center transition-all hover:scale-110">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.206 0 22.225 0z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#F48B25] flex items-center justify-center transition-all hover:scale-110">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
                  </a>
                </div>
              </div>

              {/* Column 2: Company (standalone pages) */}
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/" className="hover:text-[#F48B25] transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-[#F48B25] transition-colors">About ERS</Link></li>
                  <li><Link href="/projects" className="hover:text-[#F48B25] transition-colors">Projects</Link></li>
                  <li><Link href="/partnerships" className="hover:text-[#F48B25] transition-colors">Partnerships</Link></li>
                  <li><Link href="/contact" className="hover:text-[#F48B25] transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Column 3: Resources */}
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Resources</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/resources" className="hover:text-[#F48B25] transition-colors">Resource Center</Link></li>
                  <li><Link href="/news" className="hover:text-[#F48B25] transition-colors">News & Updates</Link></li>
                  <li><Link href="/careers" className="hover:text-[#F48B25] transition-colors">Careers</Link></li>
                  <li><Link href="/faq" className="hover:text-[#F48B25] transition-colors">FAQs</Link></li>
                  <li><Link href="/developer" className="hover:text-[#F48B25] transition-colors">Developer Portal</Link></li>
                </ul>
              </div>

              {/* Column 4: Contact & Offices */}
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-white mb-1">Headquarters</p>
                    <p className="text-slate-400 leading-relaxed">
                      Flat 2, Plot 901 Katempe, Abuja
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">Regional Office</p>
                    <p className="text-slate-400 leading-relaxed">
                      No 4 Okezie Close, off Umudukwu Road<br />
                      Ehere, Ogbor Hill Aba
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">
                      <span className="text-white">Phone:</span> 07049079078 / 09010912788
                    </p>
                  </div>
                  <div>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[#F48B25] hover:text-[#f59b3a] transition-colors font-medium">
                      Send Inquiry <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Portal Access Strip */}
            <div className="border-t border-slate-800 pt-8 mb-8">
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/portal/merchant" className="px-5 py-2.5 bg-slate-800/50 hover:bg-[#F48B25] hover:text-[#1C1F61] rounded-lg text-xs font-semibold text-slate-300 transition-all">Merchant Portal</Link>
                <Link href="/portal/government" className="px-5 py-2.5 bg-slate-800/50 hover:bg-[#F48B25] hover:text-[#1C1F61] rounded-lg text-xs font-semibold text-slate-300 transition-all">Government Dashboard</Link>
                <Link href="/portal/transport" className="px-5 py-2.5 bg-slate-800/50 hover:bg-[#F48B25] hover:text-[#1C1F61] rounded-lg text-xs font-semibold text-slate-300 transition-all">Transport Portal</Link>
                <Link href="/portal/partner" className="px-5 py-2.5 bg-slate-800/50 hover:bg-[#F48B25] hover:text-[#1C1F61] rounded-lg text-xs font-semibold text-slate-300 transition-all">Partner Login</Link>
                <Link href="/support" className="px-5 py-2.5 bg-slate-800/50 hover:bg-[#F48B25] hover:text-[#1C1F61] rounded-lg text-xs font-semibold text-slate-300 transition-all">Support Center</Link>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
              <div className="text-slate-500">
                &copy; {new Date().getFullYear()} Ethical Recovery System Technologies Ltd (ERS). All rights reserved.
              </div>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy</Link>
                <Link href="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">Terms</Link>
                <Link href="/compliance" className="text-slate-500 hover:text-slate-300 transition-colors">Compliance</Link>
              </div>
            </div>
          </div>

          {/* Mission Bar */}
          <div className="bg-[#0A1C2E] py-3 text-center">
            <p className="text-[10px] text-slate-600 tracking-wider font-medium">
              MODERNIZING REVENUE ADMINISTRATION • IMPROVING ACCOUNTABILITY • STRENGTHENING TRANSPARENCY
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}