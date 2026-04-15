"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";

export default function SmartPharmacy() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A2E] text-white pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 01</div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">Smart Pharmacy</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              End the chaos of handwritten prescriptions. Automated OCR, intelligent inventory mapping, and voice-assisted shelf retrieval.
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden h-80 flex flex-col justify-center items-center shadow-2xl">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00E5C3_1px,_transparent_1px)] bg-[size:20px_20px] opacity-10" />
             {/* Demo visual */}
             <div className="bg-[#1A1A2E] border border-white/20 p-4 rounded-lg w-full max-w-xs shadow-xl z-10 relative">
               <div className="text-xs text-white/50 mb-2">Processing Rx...</div>
               <div className="space-y-2 mb-4">
                 <div className="h-4 bg-primary/20 w-3/4 rounded animate-pulse" />
                 <div className="h-4 bg-primary/20 w-1/2 rounded animate-pulse delay-75" />
               </div>
               <div className="border-t border-white/10 pt-3">
                 <div className="flex justify-between items-center font-mono text-sm">
                   <span className="text-white">Deplatt D</span>
                   <span className="text-primary">Shelf A2</span>
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
              { num: "01", title: "Scan & Digitize", desc: "Pharmacist scans the handwritten Rx. High-accuracy OCR translates text to digital entities." },
              { num: "02", title: "Inventory Check", desc: "System instantly checks stock levels, FEFO (First Expire First Out) status, and calculates pricing." },
              { num: "03", title: "Shelf Retrieval", desc: "Voice system announces shelf codes (e.g., 'Shelf A2') while physical indicators light up the aisle." }
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
              <div className="font-mono text-4xl text-primary font-medium mb-2">-40%</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Wait Times</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">0</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Dispensing Errors</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">+15%</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Inventory Turnover</div>
            </div>
          </div>

          <div className="bg-[#1A1A2E] p-8 md:p-12 rounded-2xl text-white shadow-xl">
            <h3 className="font-display text-2xl font-semibold mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
              <div className="space-y-4">
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">OCR Engine</span> Custom-trained ResNet</div>
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Processing Time</span> &lt; 2000ms</div>
              </div>
              <div className="space-y-4">
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Drug Database</span> CIMS / RxNorm Mapped</div>
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Hardware Required</span> Standard Barcode Scanner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}