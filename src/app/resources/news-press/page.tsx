// src/app/resources/news-press/page.tsx
import Link from "next/link";

export default function NewsPressPage() {
  const articles = [
    {
      type: "Promotional Article",
      date: "2025",
      title: "ERS Digital Revenue Infrastructure: Unlocking Sustainable Revenue Growth Across Africa",
      content: (
        <>
          <p>
            Africa stands at a critical turning point in its economic development journey. While governments at the federal, state, and local levels continue to face increasing demands for infrastructure, education, healthcare, security, and social services, many still struggle with one persistent challenge: inadequate internally generated revenue (IGR).
          </p>
          <p>
            Across the continent, billions of dollars in potential revenue are lost annually due to fragmented collection systems, manual processes, revenue leakages, poor accountability, limited taxpayer visibility, and weak enforcement mechanisms. These challenges have significantly reduced the capacity of governments and institutions to finance development independently.
          </p>
          <p>
            ERS Technologies Limited was established to address this challenge through the deployment of a comprehensive Digital Revenue Infrastructure designed specifically for Africa.
          </p>
          <p>
            ERS Digital Revenue Infrastructure is not merely a revenue collection platform. It is a complete revenue ecosystem that enables governments, institutions, and organizations to identify, assess, collect, monitor, reconcile, secure, and optimize revenues through a centralized digital framework.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Revenue Administration and Management Systems</li>
            <li>Digital Taxpayer Registration and Enumeration</li>
            <li>Revenue Collection and Payment Gateways</li>
            <li>Real-Time Monitoring and Reporting Dashboards</li>
            <li>Revenue Intelligence and Analytics</li>
            <li>Compliance and Enforcement Tools</li>
            <li>Electronic Receipting and Verification Systems</li>
            <li>Transportation Revenue Management Solutions</li>
            <li>Property and Asset-Based Revenue Systems</li>
            <li>Digital Identity and Revenue Profiling</li>
            <li>Automated Reconciliation and Audit Trails</li>
          </ul>
          <p>
            By leveraging technology, data intelligence, automation, and transparency, ERS helps governments eliminate leakages, expand the tax net, improve compliance, increase efficiency, and significantly boost internally generated revenue.
          </p>
          <p>
            The impact extends beyond revenue collection. When governments have access to accurate, predictable, and sustainable revenue streams, they can invest more confidently in roads, schools, healthcare facilities, agriculture, transportation systems, digital infrastructure, and job creation initiatives.
          </p>
          <p>
            For local governments, ERS provides an opportunity to modernize revenue administration and become financially self-sustaining. For state governments, it offers a scalable platform capable of integrating all Ministries, Departments, and Agencies into one transparent revenue ecosystem. For national governments, it provides the foundation for a modern digital economy powered by accurate revenue intelligence.
          </p>
          <p>
            The future of governance is digital. The future of revenue administration is integrated. The future of Africa’s economic sustainability depends on efficient revenue infrastructure.
          </p>
          <p>
            ERS Technologies Limited is committed to building that future.
          </p>
          <p className="font-bold text-[#1C1F61]">
            Together, we can create transparent, accountable, technology-driven revenue systems that empower governments, strengthen institutions, and accelerate Africa’s development.
          </p>
          <p className="text-sm font-semibold text-[#F48B25]">
            ERS Technologies Limited<br />
            Building Africa’s Digital Revenue Infrastructure.
          </p>
        </>
      ),
    },
    {
      type: "Press Release",
      date: "Abuja, Nigeria",
      title: "ERS Technologies Limited Invites Governments and Institutions to Increase Revenue Through Digital Revenue Infrastructure",
      content: (
        <>
          <p>
            ERS Technologies Limited is pleased to announce the availability of its innovative Digital Revenue Infrastructure Platform designed to help Local Governments, State Governments, Federal Agencies, Educational Institutions, Transportation Unions, Regulatory Authorities, and other revenue-generating organizations significantly improve revenue collection, accountability, transparency, and operational efficiency.
          </p>
          <p>
            As governments and institutions seek sustainable alternatives for economic growth and financial independence, the need for modern revenue administration systems has become more urgent than ever.
          </p>
          <p>
            ERS Digital Revenue Infrastructure provides a comprehensive technology-driven framework that enables organizations to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Increase Internally Generated Revenue (IGR)</li>
            <li>Eliminate Revenue Leakages</li>
            <li>Digitize Revenue Collection Processes</li>
            <li>Improve Compliance and Accountability</li>
            <li>Monitor Revenue Performance in Real Time</li>
            <li>Automate Reporting and Reconciliation</li>
            <li>Enhance Transparency and Governance</li>
            <li>Strengthen Revenue Enforcement Mechanisms</li>
            <li>Generate Actionable Revenue Intelligence</li>
          </ul>
          <p>Our platform is designed to support:</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Local Government Councils</li>
            <li>State Governments</li>
            <li>Federal Ministries, Departments and Agencies</li>
            <li>Revenue Authorities</li>
            <li>Educational Institutions</li>
            <li>Transportation Unions and Associations</li>
            <li>Market Management Authorities</li>
            <li>Regulatory Agencies</li>
            <li>Public and Private Sector Organizations</li>
          </ul>
          <p>
            ERS Technologies Limited invites interested governments, institutions, agencies, organizations, development partners, and investors to engage with us for demonstrations, consultations, pilot deployments, and strategic partnerships.
          </p>
          <p>
            Organizations seeking to improve revenue performance and build sustainable digital revenue systems are encouraged to contact us.
          </p>
          <div className="mt-4 p-4 bg-[#F8FAFC] border border-slate-200 rounded-xl text-sm space-y-1">
            <p className="font-bold text-[#1C1F61]">Contact Information</p>
            <p>ERS Technologies Limited</p>
            <p>Digital Revenue Infrastructure for Africa</p>
            <p>Email: <a href="mailto:erstechnologies7@gmail.com" className="text-[#1C1F61] hover:text-[#F48B25] underline">erstechnologies7@gmail.com</a></p>
            <p>Website: <a href="https://www.erstech.com" className="text-[#1C1F61] hover:text-[#F48B25] underline">www.erstech.com</a></p>
            <p>Phone: +234 7049079078 / 09010912788</p>
            <p>Address: Abuja, Nigeria</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section – lighter overlay, brand colours */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[50vh] sm:min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168d6c?q=80&w=2070"
            alt="Newsroom and press"
            className="w-full h-full object-cover object-center"
          />
          {/* Lighter overlays to show background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F61]/75 via-[#1C1F61]/80 to-[#1C1F61]/75 sm:bg-gradient-to-r sm:from-[#1C1F61]/85 sm:via-[#1C1F61]/60 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F61]/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 backdrop-blur-[1px]">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-1.5 border border-[#F48B25]/40 bg-[#F48B25]/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.15em] text-[#F48B25] uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48B25] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F48B25]"></span>
              </span>
              Official Communications
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              News & Press Releases
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Official announcements, media updates, and thought leadership from ERS Technologies — Building Africa’s Digital Revenue Infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Articles & Press Releases */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="space-y-16">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="border-b border-slate-100 px-6 py-5 md:px-8 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F48B25] mb-1 block">
                    {article.type}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1C1F61] leading-tight">
                    {article.title}
                  </h2>
                </div>
                <span className="text-xs font-medium text-slate-500 bg-[#F8FAFC] px-3 py-1 rounded-full border border-slate-200 whitespace-nowrap">
                  {article.date}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 py-5 md:px-8 md:py-6 text-slate-600 text-sm md:text-base leading-relaxed space-y-4">
                {article.content}
              </div>

              {/* Footer (for article) */}
              {article.type === "Promotional Article" && (
                <div className="px-6 py-4 md:px-8 bg-[#F8FAFC] border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Published by ERS Technologies Limited</span>
                  <Link
                    href="/contact"
                    className="font-semibold text-[#1C1F61] hover:text-[#F48B25] transition-colors underline underline-offset-2"
                  >
                    Get in Touch →
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Back to Resources */}
        <div className="mt-16 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1C1F61] hover:text-[#F48B25] transition-colors border-b-2 border-transparent hover:border-[#F48B25] pb-1"
          >
            ← Back to Resources
          </Link>
        </div>
      </section>
    </main>
  );
}