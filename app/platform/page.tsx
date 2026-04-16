"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";

export default function Platform() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-500">
      {/* Hero - Changed from Navy to Black/Foreground */}
      <section className="bg-foreground text-background pt-32 pb-24 md:pt-40 md:pb-32 px-6 relative overflow-hidden">
        {/* Glow updated to Orange */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-foreground to-foreground" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-6">
            The Platform
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            Intelligence at the speed of care.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-background/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Five interconnected modules. One unified platform. Zero compromise on clinical precision.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
             <Button 
                onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_25px_rgba(255,92,0,0.4)] h-12 px-8 rounded-lg text-base"
              >
                Explore Modules ↓
              </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background border-y border-border py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
          {[
            { val: "< 2s", label: "Prescription processing time" },
            { val: "99.7%", label: "OCR accuracy" },
            { val: "87%+", label: "Diagnostic confidence threshold" },
            { val: "24/7", label: "Platform uptime SLA" }
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="font-mono text-4xl text-foreground font-medium mb-2">{stat.val}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {[
            {
              id: "01",
              title: "Smart Pharmacy",
              desc: "Automated prescription processing, inventory management, and shelf-level tracking. Reduce wait times and dispensing errors.",
              img: "/images/smart-pharmacy.png",
              href: "/platform/smart-pharmacy",
              stats: [["Integration", "REST API, Webhook"], ["Throughput", "10k Rx/hour"], ["Supported Rx", "Handwritten, Digital"]]
            },
            {
              id: "02",
              title: "Electronic Health Records",
              desc: "A unified, timeline-based view of patient history. FHIR-native, universally compatible, and instantly accessible.",
              img: "/images/ehr.png",
              href: "/platform/ehr",
              reverse: true,
              stats: [["Standard", "HL7 FHIR R4"], ["Sync", "Real-time bidirectional"], ["Security", "AES-256 Encryption"]]
            },
            {
              id: "03",
              title: "Diagnostic AI",
              desc: "Vision AI models trained on millions of scans to highlight anomalies, prioritize critical cases, and draft preliminary reports.",
              img: "/images/diagnostic-ai.png",
              href: "/platform/diagnostic",
              stats: [["Format", "DICOM 3.0"], ["Latency", "< 5s per scan"], ["Model", "Vision Transformer"]]
            },
            {
                id: "04",
                title: "AI Research Assistant",
                desc: "A clinically grounded LLM that cross-references patient data against the latest medical literature and guidelines.",
                img: "/images/doctor-ai.png",
                href: "/platform/ai-assistant",
                reverse: true,
                stats: [["Knowledge Base", "PubMed, Guidelines"], ["Context", "Full Patient History"], ["Engine", "Custom RAG"]]
            },
            {
                id: "05",
                title: "Hospital Intelligence",
                desc: "Real-time operational dashboard for administrators. Track capacity, predict bottlenecks, and optimize resource allocation.",
                img: "/images/admin.png",
                href: "/platform/admin",
                stats: [["Updates", "Real-time WebSocket"], ["Analytics", "Predictive & Descriptive"], ["Exports", "CSV, PDF, API"]]
            }
          ].map((m) => (
            <div key={m.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div className={m.reverse ? "order-1 lg:order-2" : ""} initial={{ opacity: 0, x: m.reverse ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module {m.id}</div>
                <h2 className="font-display text-4xl text-foreground font-semibold mb-4">{m.title}</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{m.desc}</p>
                <div className="bg-card text-foreground p-6 rounded-xl border border-border font-mono text-sm space-y-3 mb-8 shadow-sm">
                  {m.stats.map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="opacity-60">{k}:</span>
                      <span className="text-primary font-bold">{v}</span>
                    </div>
                  ))}
                </div>
                <Link href={m.href}>
                  <Button variant="outline" className="h-12 px-6 border-foreground/20 hover:bg-foreground hover:text-background transition-all">
                    Explore {m.title} →
                  </Button>
                </Link>
              </motion.div>
              <motion.div className={m.reverse ? "order-2 lg:order-1" : ""} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                 <img src={m.img} alt={m.title} className="w-full rounded-2xl shadow-2xl dark:opacity-90 transition-opacity border border-border" />
              </motion.div>
            </div>
          ))}

        </div>
      </section>

      {/* Enterprise Sections - Changed from Navy to Black */}
      <section className="bg-foreground text-background py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
             <h3 className="font-display text-3xl font-semibold mb-8">Enterprise Integrations</h3>
             <p className="opacity-70 mb-8">Seamlessly plug into your existing infrastructure with standard protocols.</p>
             <div className="grid grid-cols-2 gap-4">
               {['HL7 FHIR R4', 'DICOM 3.0', 'Google Cloud Healthcare API', 'Gemini Vision API'].map(tech => (
                 <div key={tech} className="bg-background/5 border border-background/10 p-4 rounded-lg flex items-center justify-center text-center">
                   <span className="font-mono text-sm">{tech}</span>
                 </div>
               ))}
             </div>
          </div>
          <div>
             <h3 className="font-display text-3xl font-semibold mb-8">Security & Compliance</h3>
             <p className="opacity-70 mb-8">Built to the highest standards of data protection and patient privacy.</p>
             <div className="space-y-4">
               {['HIPAA', 'SOC 2', 'GDPR', 'ISO 27001'].map(cert => (
                 <div key={cert} className="bg-background/5 border border-background/10 p-4 rounded-lg flex items-center justify-between">
                   <span className="font-medium">{cert}</span>
                   <div className="flex items-center gap-4">
                     <span className="text-xs opacity-50 uppercase tracking-widest">In Process</span>
                     <div className="w-24 h-2 bg-background/10 rounded-full overflow-hidden">
                       <div className="h-full bg-primary w-[40%]" />
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}