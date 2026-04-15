"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";

export default function Platform() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A2E] text-white pt-32 pb-24 md:pt-40 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#1A1A2E] to-[#1A1A2E]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-6"
          >
            The Platform
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-semibold tracking-tight mb-6"
          >
            Intelligence at the speed of care.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Five interconnected modules. One unified platform. Zero compromise on clinical precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
             <Button 
                onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,229,195,0.3)] h-12 px-8 rounded-lg text-base"
              >
                Explore Modules ↓
              </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-black/5 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/5">
          <div className="text-center">
            <div className="font-mono text-4xl text-[#1A1A2E] font-medium mb-2">&lt; 2s</div>
            <div className="text-sm text-[#64748B]">Prescription processing time</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-4xl text-[#1A1A2E] font-medium mb-2">99.7%</div>
            <div className="text-sm text-[#64748B]">OCR accuracy</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-4xl text-[#1A1A2E] font-medium mb-2">87%+</div>
            <div className="text-sm text-[#64748B]">Diagnostic confidence threshold</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-4xl text-[#1A1A2E] font-medium mb-2">24/7</div>
            <div className="text-sm text-[#64748B]">Platform uptime SLA</div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Smart Pharmacy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 01</div>
              <h2 className="font-display text-4xl text-[#1A1A2E] font-semibold mb-4">Smart Pharmacy</h2>
              <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
                Automated prescription processing, inventory management, and shelf-level tracking. Reduce wait times and dispensing errors.
              </p>
              <div className="bg-[#1A1A2E] text-white p-6 rounded-xl border border-black/10 font-mono text-sm space-y-3 mb-8 shadow-xl">
                <div className="flex justify-between"><span>Integration:</span><span className="text-primary">REST API, Webhook</span></div>
                <div className="flex justify-between"><span>Throughput:</span><span className="text-primary">10k Rx/hour</span></div>
                <div className="flex justify-between"><span>Supported Rx:</span><span className="text-primary">Handwritten, Digital</span></div>
              </div>
              <Link href="/platform/smart-pharmacy">
                <Button variant="outline" className="h-12 px-6">Explore Smart Pharmacy →</Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <img src="/images/smart-pharmacy.png" alt="Smart Pharmacy" className="w-full rounded-2xl shadow-2xl" />
            </motion.div>
          </div>

          {/* EHR */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1">
               <img src="/images/ehr.png" alt="EHR" className="w-full rounded-2xl shadow-2xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 02</div>
              <h2 className="font-display text-4xl text-[#1A1A2E] font-semibold mb-4">Electronic Health Records</h2>
              <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
                A unified, timeline-based view of patient history. FHIR-native, universally compatible, and instantly accessible.
              </p>
              <div className="bg-[#1A1A2E] text-white p-6 rounded-xl border border-black/10 font-mono text-sm space-y-3 mb-8 shadow-xl">
                <div className="flex justify-between"><span>Standard:</span><span className="text-primary">HL7 FHIR R4</span></div>
                <div className="flex justify-between"><span>Sync:</span><span className="text-primary">Real-time bidirectional</span></div>
                <div className="flex justify-between"><span>Security:</span><span className="text-primary">AES-256 Encryption</span></div>
              </div>
              <Link href="/platform/ehr">
                <Button variant="outline" className="h-12 px-6">Explore EHR →</Button>
              </Link>
            </motion.div>
          </div>

          {/* Diagnostic AI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 03</div>
              <h2 className="font-display text-4xl text-[#1A1A2E] font-semibold mb-4">Diagnostic AI</h2>
              <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
                Vision AI models trained on millions of scans to highlight anomalies, prioritize critical cases, and draft preliminary reports.
              </p>
              <div className="bg-[#1A1A2E] text-white p-6 rounded-xl border border-black/10 font-mono text-sm space-y-3 mb-8 shadow-xl">
                <div className="flex justify-between"><span>Format:</span><span className="text-primary">DICOM 3.0</span></div>
                <div className="flex justify-between"><span>Latency:</span><span className="text-primary">&lt; 5s per scan</span></div>
                <div className="flex justify-between"><span>Model:</span><span className="text-primary">Vision Transformer</span></div>
              </div>
              <Link href="/platform/diagnostic">
                <Button variant="outline" className="h-12 px-6">Explore Diagnostic AI →</Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <img src="/images/diagnostic-ai.png" alt="Diagnostic AI" className="w-full rounded-2xl shadow-2xl" />
            </motion.div>
          </div>

          {/* Doctor AI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-2 lg:order-1">
               <img src="/images/doctor-ai.png" alt="Doctor AI" className="w-full rounded-2xl shadow-2xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 04</div>
              <h2 className="font-display text-4xl text-[#1A1A2E] font-semibold mb-4">AI Research Assistant</h2>
              <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
                A clinically grounded LLM that cross-references patient data against the latest medical literature and guidelines.
              </p>
              <div className="bg-[#1A1A2E] text-white p-6 rounded-xl border border-black/10 font-mono text-sm space-y-3 mb-8 shadow-xl">
                <div className="flex justify-between"><span>Knowledge Base:</span><span className="text-primary">PubMed, Guidelines</span></div>
                <div className="flex justify-between"><span>Context:</span><span className="text-primary">Full Patient History</span></div>
                <div className="flex justify-between"><span>Engine:</span><span className="text-primary">Custom RAG</span></div>
              </div>
              <Link href="/platform/ai-assistant">
                <Button variant="outline" className="h-12 px-6">Explore AI Assistant →</Button>
              </Link>
            </motion.div>
          </div>

          {/* Admin */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 05</div>
              <h2 className="font-display text-4xl text-[#1A1A2E] font-semibold mb-4">Hospital Intelligence</h2>
              <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
                Real-time operational dashboard for administrators. Track capacity, predict bottlenecks, and optimize resource allocation.
              </p>
              <div className="bg-[#1A1A2E] text-white p-6 rounded-xl border border-black/10 font-mono text-sm space-y-3 mb-8 shadow-xl">
                <div className="flex justify-between"><span>Updates:</span><span className="text-primary">Real-time WebSocket</span></div>
                <div className="flex justify-between"><span>Analytics:</span><span className="text-primary">Predictive & Descriptive</span></div>
                <div className="flex justify-between"><span>Exports:</span><span className="text-primary">CSV, PDF, API</span></div>
              </div>
              <Link href="/platform/admin">
                <Button variant="outline" className="h-12 px-6">Explore Admin Portal →</Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <img src="/images/admin.png" alt="Admin Portal" className="w-full rounded-2xl shadow-2xl" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Integrations & Security */}
      <section className="bg-[#1A1A2E] text-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
             <h3 className="font-display text-3xl font-semibold mb-8">Enterprise Integrations</h3>
             <p className="text-white/70 mb-8">Seamlessly plug into your existing infrastructure with standard protocols.</p>
             <div className="grid grid-cols-2 gap-4">
               {['HL7 FHIR R4', 'DICOM 3.0', 'Google Cloud Healthcare API', 'Gemini Vision API'].map(tech => (
                 <div key={tech} className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-center text-center">
                   <span className="font-mono text-sm">{tech}</span>
                 </div>
               ))}
             </div>
          </div>
          <div>
             <h3 className="font-display text-3xl font-semibold mb-8">Security & Compliance</h3>
             <p className="text-white/70 mb-8">Built to the highest standards of data protection and patient privacy.</p>
             <div className="space-y-4">
               {['HIPAA', 'SOC 2', 'GDPR', 'ISO 27001'].map(cert => (
                 <div key={cert} className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between">
                   <span className="font-medium">{cert}</span>
                   <div className="flex items-center gap-4">
                     <span className="text-xs text-white/50 uppercase tracking-widest">In Process</span>
                     <div className="w-24 h-2 bg-black/40 rounded-full overflow-hidden">
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