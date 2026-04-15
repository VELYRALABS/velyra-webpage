"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";

export default function AIAssistant() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A2E] text-white pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 04</div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">AI Research Assistant</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Your clinical co-pilot. Grounded in medical literature, aware of the patient's full context, and built to augment physician expertise.
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0F0F1A] border border-white/10 rounded-2xl p-6 relative overflow-hidden h-80 shadow-2xl flex flex-col">
             <div className="flex-1 overflow-y-auto pr-2 space-y-4 no-scrollbar">
                <div className="bg-white/5 rounded-lg p-3 text-sm text-white/80 self-end ml-auto w-[85%] rounded-tr-none">
                  Alternative antiplatelet therapy for patient PT-9824 given recent eGFR drop?
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded bg-primary/20 text-primary flex items-center justify-center shrink-0 text-xs mt-1">✨</div>
                  <div className="bg-primary/10 rounded-lg p-4 text-sm text-white border border-primary/20 rounded-tl-none leading-relaxed">
                    Based on the patient's recent eGFR of <span className="font-mono text-primary">38 ml/min</span>, Clopidogrel monotherapy is preferred. Ticagrelor carries elevated bleeding risk...
                    <div className="mt-3 flex gap-2">
                       <span className="text-[10px] bg-black/40 px-2 py-1 rounded text-white/50 border border-white/10">Reference: KDIGO 2023</span>
                    </div>
                  </div>
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
              { num: "01", title: "Context Loading", desc: "The AI automatically loads the active patient's EHR profile into its working memory." },
              { num: "02", title: "RAG Retrieval", desc: "Queries trigger vector searches against PubMed, clinical guidelines, and hospital protocols." },
              { num: "03", title: "Synthesis", desc: "The LLM synthesizes the patient data with the literature to generate safe, cited recommendations." }
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
              <div className="font-mono text-4xl text-primary font-medium mb-2">0</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Hallucinations (Strict Grounding)</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">30M+</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Indexed Papers</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">-2h</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Saved per Physician/Day</div>
            </div>
          </div>

          <div className="bg-[#1A1A2E] p-8 md:p-12 rounded-2xl text-white shadow-xl">
            <h3 className="font-display text-2xl font-semibold mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
              <div className="space-y-4">
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Architecture</span> Retrieval-Augmented Gen (RAG)</div>
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Base Model</span> Fine-tuned Llama 3 / Medical</div>
              </div>
              <div className="space-y-4">
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Context Window</span> 128k tokens</div>
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Privacy</span> Zero data retention for training</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}