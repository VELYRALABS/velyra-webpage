"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldAlert, Stethoscope, Pill, UserRound, ArrowRight } from "lucide-react";

export function ArchitectureFlow() {
  const [activeWord, setActiveWord] = useState(0);
  const words = ["FHIR", "DICOM", "AI", "EHR", "Rx"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-foreground overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4"
          >
            THE ARCHITECTURE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold text-background"
          >
            How It All Connects
          </motion.h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto hidden md:block" style={{ height: '500px' }}>
          {/* Animated Connecting Lines (SVG) - Updated to Orange stroke */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
             <path id="line1" d="M 250 100 Q 400 100 500 250" fill="none" stroke="rgba(255,92,0,0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
             <path id="line2" d="M 250 250 L 500 250" fill="none" stroke="rgba(255,92,0,0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
             <path id="line3" d="M 250 400 Q 400 400 500 250" fill="none" stroke="rgba(255,92,0,0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
             <path id="line4" d="M 500 250 Q 600 250 750 250" fill="none" stroke="rgba(255,92,0,0.3)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
             
             {/* Traveling dots - Updated to Orange #FF5C00 */}
             <circle r="4" fill="#FF5C00" className="shadow-[0_0_10px_#FF5C00]">
               <animateMotion dur="3s" repeatCount="indefinite" path="M 250 100 Q 400 100 500 250" />
             </circle>
             <circle r="4" fill="#FF5C00" className="shadow-[0_0_10px_#FF5C00]">
               <animateMotion dur="2.5s" repeatCount="indefinite" path="M 250 250 L 500 250" />
             </circle>
             <circle r="4" fill="#FF5C00" className="shadow-[0_0_10px_#FF5C00]">
               <animateMotion dur="3.5s" repeatCount="indefinite" path="M 250 400 Q 400 400 500 250" />
             </circle>
             <circle r="4" fill="#FF5C00" className="shadow-[0_0_10px_#FF5C00]">
               <animateMotion dur="2s" repeatCount="indefinite" path="M 500 250 Q 600 250 750 250" />
             </circle>
          </svg>

          {/* Left Column Nodes */}
          <div className="absolute left-0 top-0 bottom-0 w-[250px] flex flex-col justify-between py-12 z-10">
            <NodeCard title="Admin Portal" desc="uploads diagnostics, views analytics" link="/platform/admin" icon={<ShieldAlert className="w-4 h-4 text-primary" />} />
            <NodeCard title="Doctor Portal" desc="manages appointments, reviews scans, uses AI assistant" link="/platform/ai-assistant" icon={<Stethoscope className="w-4 h-4 text-primary" />} />
            <NodeCard title="Pharmacy Portal" desc="prescription scanning, sales, alerts" link="/platform/smart-pharmacy" icon={<Pill className="w-4 h-4 text-primary" />} />
          </div>

          {/* Center Node */}
          <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full border border-primary/30 border-dashed shadow-[0_0_20px_rgba(255,92,0,0.15)]"
            />
            <Link href="/platform">
              <div className="w-40 h-40 bg-zinc-950 rounded-full shadow-[0_0_40px_rgba(255,92,0,0.3)] flex flex-col items-center justify-center border-2 border-primary relative cursor-pointer hover:scale-105 transition-transform group">
                 <span className="text-white text-xs font-semibold uppercase tracking-widest text-center leading-tight mb-2 group-hover:text-primary transition-colors">
                   PROJECT LYRA<br/>Platform
                 </span>
                 <div className="text-primary font-mono text-sm h-5 overflow-hidden">
                   <motion.div
                     key={activeWord}
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     exit={{ y: -20, opacity: 0 }}
                     className="font-bold"
                   >
                     {words[activeWord]}
                   </motion.div>
                 </div>
              </div>
            </Link>
          </div>

          {/* Right Column Nodes */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] z-10">
             <NodeCard title="Patient Portal" desc="books appointments, views health records" link="/platform/ehr" icon={<UserRound className="w-4 h-4 text-primary" />} />
             <div className="mt-8 flex items-center justify-center gap-2 text-sm text-background/50 font-mono">
               📱 Mobile App API
             </div>
          </div>
        </div>

        {/* Mobile Layout (Vertical Stack) */}
        <div className="md:hidden flex flex-col gap-6 items-center">
            <NodeCard title="Admin Portal" desc="uploads diagnostics, views analytics" link="/platform/admin" icon={<ShieldAlert className="w-4 h-4 text-primary" />} />
            <NodeCard title="Doctor Portal" desc="manages appointments, reviews scans, uses AI assistant" link="/platform/ai-assistant" icon={<Stethoscope className="w-4 h-4 text-primary" />} />
            <NodeCard title="Pharmacy Portal" desc="prescription scanning, sales, alerts" link="/platform/smart-pharmacy" icon={<Pill className="w-4 h-4 text-primary" />} />
            <div className="w-1 px-px h-10 bg-primary/30" />
            <Link href="/platform">
              <div className="w-40 h-40 bg-zinc-950 rounded-full flex flex-col items-center justify-center border-2 border-primary shadow-[0_0_30px_rgba(255,92,0,0.3)] cursor-pointer">
                 <span className="text-white text-xs font-semibold uppercase tracking-widest text-center leading-tight mb-2">
                   PROJECT LYRA<br/>Platform
                 </span>
                 <div className="text-primary font-mono text-sm">{words[activeWord]}</div>
              </div>
            </Link>
            <div className="w-1 px-px h-10 bg-primary/30" />
            <NodeCard title="Patient Portal" desc="books appointments, views health records" link="/platform/ehr" icon={<UserRound className="w-4 h-4 text-primary" />} />
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-4">
           <span className="bg-background/5 border border-background/10 text-background text-xs font-mono px-4 py-2 rounded-full shadow-sm">Cloud FHIR</span>
           <span className="bg-background/5 border border-background/10 text-background text-xs font-mono px-4 py-2 rounded-full shadow-sm">DICOM Store</span>
           <span className="bg-background/5 border border-background/10 text-background text-xs font-mono px-4 py-2 rounded-full shadow-sm">On Prem Vision</span>
        </div>
      </div>
    </section>
  );
}

function NodeCard({ title, desc, link, icon }: { title: string, desc: string, link: string, icon: React.ReactNode }) {
  return (
    <Link href={link}>
      <motion.div 
        whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.05)" }}
        className="bg-background/5 border border-background/10 rounded-xl p-4 shadow-lg w-full relative group transition-all cursor-pointer hover:border-primary/50"
      >
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <div className="font-semibold text-background group-hover:text-primary transition-colors">{title}</div>
        </div>
        <div className="text-xs text-background/60 mb-3">{desc}</div>
        <div className="text-[10px] text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
          Explore <ArrowRight className="w-3 h-3" />
        </div>
      </motion.div>
    </Link>
  );
}