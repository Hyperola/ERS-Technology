// src/app/resources/faqs/page.tsx
import Link from "next/link";

const faqs = [
  {
    question: "What exactly is ERS Digital Revenue Infrastructure?",
    answer:
      "ERS Digital Revenue Infrastructure is a comprehensive, integrated ecosystem of technology solutions that enables governments, institutions, and organizations to digitize, automate, monitor, and secure their entire revenue lifecycle. It covers taxpayer registration, collection gateways, real‑time dashboards, compliance tools, and automated reconciliation, all built into one unified platform.",
  },
  {
    question: "Who can use the ERS platform?",
    answer:
      "The platform is designed for local governments, state governments, federal agencies, revenue authorities, educational institutions, transport unions, market authorities, regulatory agencies, and even large private enterprises that require robust revenue administration systems.",
  },
  {
    question: "How does ERS eliminate revenue leakages?",
    answer:
      "By replacing manual, opaque collection points with digital, auditable transactions. Every payment, receipt, and remittance is recorded in real time on a secure, immutable ledger. Automated anomaly detection and live dashboards flag discrepancies instantly, allowing institutions to act before revenue is lost.",
  },
  {
    question: "Is ERS compliant with Nigerian and international data protection laws?",
    answer:
      "Yes. ERS operates under strict corporate governance and regulatory compliance frameworks, including the Nigeria Data Protection Regulation (NDPR). Our security architecture includes encryption at rest and in transit, role‑based access control, and full audit trails. We are also aligned with global standards for financial data security.",
  },
  {
    question: "What kind of technical support does ERS provide?",
    answer:
      "We offer 24/7 enterprise‑grade support to all government and institutional partners. This includes dedicated account managers, on‑ground field engineers, real‑time system monitoring, and rapid incident response. Non‑enterprise users can access our help center and community resources.",
  },
  {
    question: "Can ERS integrate with existing government or banking systems?",
    answer:
      "Absolutely. ERS is built on an open API framework that allows seamless interoperability with existing payment gateways, bank cores, government financial management systems, and external databases. Our engineering team works directly with your IT department to ensure a smooth integration.",
  },
  {
    question: "How long does it take to deploy ERS for a local government?",
    answer:
      "A typical pilot deployment for a local government council can be rolled out in as little as 4–8 weeks, depending on the readiness of the existing infrastructure and the scope of services. Full‑scale state or federal deployments are phased, with clear timelines agreed during the project scoping stage.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "ERS operates on a partnership model tailored to the scale and needs of each institution. We do not publish fixed public pricing because every deployment is customized. For a detailed quotation or to discuss a pilot, please contact our engagement desk.",
  },
  {
    question: "Does ERS work in rural or low‑connectivity areas?",
    answer:
      "Yes. Our field‑tested mobile technology operates effectively in areas with limited internet. Offline data capture synchronizes automatically when connectivity is restored. Our hardware and mobile‑first solutions are designed for Africa’s diverse infrastructural realities.",
  },
  {
    question: "How can I become an ERS partner or agent?",
    answer:
      "We welcome partnership inquiries from financial institutions, technology firms, transport unions, and development organizations. Visit our Become a Partner page or contact us directly through the partnership inquiry form.",
  },
];

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[50vh] sm:min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1457369804613-9c61b7e89b24?q=80&w=2070"
            alt="Support and questions"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F61]/75 via-[#1C1F61]/80 to-[#1C1F61]/75 sm:bg-gradient-to-r sm:from-[#1C1F61]/85 sm:via-[#1C1F61]/55 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F61]/45 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 backdrop-blur-[1px]">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-1.5 border border-[#F48B25]/40 bg-[#F48B25]/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.15em] text-[#F48B25] uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48B25] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F48B25]"></span>
              </span>
              Support Hub
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Quick answers to common questions about ERS Digital Revenue Infrastructure, deployment, integration, compliance, and partnership.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources"
                className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                ← Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2 border-l-4 border-[#F48B25] pl-5">
            <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Instant Answers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">
              Common Questions
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-base font-bold text-[#1C1F61] group-hover:text-[#CF1B1B] transition-colors pr-4">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 text-[#F48B25] text-lg transition-transform duration-300 group-open:rotate-45">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-slate-200 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center space-y-6 relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute -right-16 -bottom-16 w-40 h-40 rounded-full border border-white/10 animate-pulse" />
            <div className="absolute -left-16 -top-16 w-40 h-40 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#F48B25]/5 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-5">
              <span className="inline-block text-[10px] sm:text-xs text-[#F48B25] tracking-widest uppercase border border-[#F48B25]/40 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F48B25]/10 font-bold backdrop-blur-sm">
                Still Have Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                We’re Ready to Help
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                If you didn’t find the answer you were looking for, reach out to our support team for a personalized response.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}