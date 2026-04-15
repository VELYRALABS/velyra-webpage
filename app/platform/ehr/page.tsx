"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";

export default function EHR() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A2E] text-white pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 02</div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">Electronic Health Records</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              A unified, timeline-based view of patient history. Built on FHIR R4 for absolute interoperability.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 shadow-[0_0_15px_rgba(0,229,195,0.3)]">See this in your hospital →</Button>
              </Link>
              <Link href="/platform">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-6">Back to Platform</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0F0F1A] border border-white/10 rounded-2xl p-6 relative overflow-hidden h-80 flex flex-col shadow-2xl">
             {/* Demo visual */}
             <div className="flex justify-between items-end mb-6">
               <div>
                 <div className="text-2xl font-semibold text-white">Arjun Mehta</div>
                 <div className="text-sm text-white/50">ID: <span className="font-mono">PT-9824</span></div>
               </div>
               <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">Type 2 Diabetes</div>
             </div>
             <div className="flex-1 border-l-2 border-white/10 ml-4 pl-6 space-y-6">
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[31px] top-1" />
                  <div className="text-xs text-white/40 font-mono mb-1">Today</div>
                  <div className="text-sm text-white">Cardiology Consult - Dr. Sharma</div>
                </div>
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-primary/50 rounded-full -left-[31px] top-1" />
                  <div className="text-xs text-white/40 font-mono mb-1">2 Months Ago</div>
                  <div className="text-sm text-white">HbA1c Lab Report - <span className="font-mono text-primary">6.8%</span></div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-white border-b border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1A1A2E]">How it works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Ingestion", desc: "Data from labs, vitals monitors, and previous visits is ingested in real-time." },
              { num: "02", title: "Normalization", desc: "All data is mapped to FHIR R4 resources, ensuring strict structural compliance." },
              { num: "03", title: "Presentation", desc: "Doctors see a clean, chronological timeline highlighting actionable insights instantly." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="font-mono text-4xl text-black/5 font-bold mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">{step.title}</h3>
                <p className="text-[#64748B]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">100%</div>
              <div className="text-sm font-medium text-[#1A1A2E]">FHIR R4 Native</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">&lt; 1s</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Query Latency</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">256-bit</div>
              <div className="text-sm font-medium text-[#1A1A2E]">AES Encryption</div>
            </div>
          </div>

          <div className="bg-[#1A1A2E] p-8 md:p-12 rounded-2xl text-white shadow-xl">
            <h3 className="font-display text-2xl font-semibold mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
              <div className="space-y-4">
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Data Model</span> HL7 FHIR Release 4</div>
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">API Paradigm</span> RESTful JSON API</div>
              </div>
              <div className="space-y-4">
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Search</span> GraphQL / ElasticSearch</div>
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Audit Trail</span> Blockchain-backed immutable logs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}