"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";

export default function Diagnostic() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-500">
      {/* Hero */}
      <section className="bg-foreground text-background pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 03</div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">Diagnostic AI</h1>
            <p className="opacity-70 text-lg leading-relaxed mb-8">
              Medical vision AI that analyzes X-Rays, CTs, and MRIs in seconds. Flag critical findings before the radiologist even opens the scan.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 shadow-[0_0_20px_rgba(255,92,0,0.3)]">See this in your hospital →</Button>
              </Link>
              <Link href="/platform">
                <Button variant="outline" className="border-background/20 text-background hover:bg-background/10 h-12 px-6">Back to Platform</Button>
              </Link>
            </div>
          </motion.div>

          {/* Demo Visual - HARDCODED COLORS TO STAY THE SAME IN ALL MODES */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0F0F1A] border border-white/10 rounded-2xl relative overflow-hidden h-80 flex shadow-2xl">
             <div className="w-1/2 h-full bg-black/40 flex items-center justify-center relative p-4">
                <div className="w-full h-full border border-white/10 bg-white/5 relative">
                   <div className="absolute top-1/4 right-1/4 w-12 h-12 border border-primary bg-primary/20 shadow-[0_0_15px_#FF5C00] animate-pulse" />
                </div>
             </div>
             <div className="w-1/2 h-full p-6 border-l border-white/10 flex flex-col justify-center bg-[#1A1A2E]">
                <div className="text-[10px] text-white/50 uppercase tracking-widest mb-4">AI Analysis Complete</div>
                <div className="bg-destructive/10 border border-destructive/30 rounded p-3 mb-4">
                   <div className="text-destructive font-mono text-sm mb-1">⚠ Anomaly Detected</div>
                   <div className="text-white/60 text-xs">Confidence: <span className="font-mono text-white">87.4%</span></div>
                </div>
                <div className="text-xs text-white/40">Report <span className="font-mono">#DR-2047</span> generated.</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">How it works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "DICOM Upload", desc: "Scans are automatically pulled from PACS or uploaded manually via the portal." },
              { num: "02", title: "Vision Inference", desc: "Proprietary Vision Transformer models analyze slices for over 100+ known pathologies." },
              { num: "03", title: "Triage & Draft", desc: "Critical cases are pushed to the top of the radiologist's queue with a pre-drafted report." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="font-mono text-4xl text-foreground/5 font-bold mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">3x</div>
              <div className="text-sm font-medium text-foreground">Faster Turnaround</div>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">99.2%</div>
              <div className="text-sm font-medium text-foreground">Sensitivity</div>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">-80%</div>
              <div className="text-sm font-medium text-foreground">Missed Incidental Findings</div>
            </div>
          </div>

          <div className="bg-foreground p-8 md:p-12 rounded-2xl text-background shadow-xl">
            <h3 className="font-display text-2xl font-semibold mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
              <div className="space-y-4">
                 <div className="border-b border-background/10 pb-2"><span className="opacity-50 block mb-1">Supported Modalities</span> X-Ray, CT, MRI</div>
                 <div className="border-b border-background/10 pb-2"><span className="opacity-50 block mb-1">Standard</span> DICOM 3.0</div>
              </div>
              <div className="space-y-4">
                 <div className="border-b border-background/10 pb-2"><span className="opacity-50 block mb-1">Model Architecture</span> Vision Transformer (ViT)</div>
                 <div className="border-b border-background/10 pb-2"><span className="opacity-50 block mb-1">Compute</span> NVIDIA A100 Cluster (Cloud)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}