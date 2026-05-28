// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // Imports our high-security navbar component
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
      <body className={`${inter.variable} font-sans antialiased bg-ers-bg text-ers-text-dark`}>
        
        {/* Our Modular Header Dropdown Integration */}
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        {/* Global Footer Container */}
        <footer className="bg-ers-army text-slate-400 py-12 text-center text-sm border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 space-y-2">
            <div className="font-bold text-white tracking-wide">Ethical Recovery System Technologies Ltd</div>
            <div className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} ERS Technologies. All Rights Reserved. Institutional Infrastructure Deployment Framework.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}