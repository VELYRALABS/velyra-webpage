"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";

const beats = [
  {
    overline: "SMART PHARMACY",
    title: "AI-Powered Smart Pharmacy",
    body: "A handwritten prescription walks in. In seconds, the cart is populated, shelf locations are announced, and medicines are retrieved.",
    pills: [
      { text: "Handwritten Rx OCR", link: "/platform/smart-pharmacy" },
      { text: "FEFO Dispensing", link: "/platform/smart-pharmacy" },
      { text: "Shelf Announcement", link: "/platform/smart-pharmacy" }
    ],
  },
  {
    overline: "ELECTRONIC HEALTH RECORDS",
    title: "Complete Clinical History",
    body: "Every patient's complete clinical history — FHIR-native, DICOM-ready, always current.",
    pills: [
      { text: "FHIR R4", link: "/platform/ehr" },
      { text: "DICOM-ready", link: "/platform/ehr" }
    ],
  },
  {
    overline: "DIAGNOSTIC AI",
    title: "Scan-Specific Vision AI",
    body: "Upload a chest X-ray, CT, or MRI. Our diagnostic AI analyses it, flags findings, and routes to the attending doctor — before they even open the file.",
    pills: [
      { text: "Vision Transformer", link: "/platform/diagnostic" },
      { text: "Anomaly Detection", link: "/platform/diagnostic" }
    ],
  },
  {
    overline: "AI RESEARCH ASSISTANT",
    title: "A Co-Physician, Not a Chatbot",
    body: "Research-first AI assistant grounded in real patient context, drug trial data, and clinical literature.",
    pills: [
      { text: "Grounded in clinical literature", link: "/platform/ai-assistant" },
      { text: "Patient-context aware", link: "/platform/ai-assistant" }
    ],
  },
  {
    overline: "HOSPITAL INTELLIGENCE",
    title: "Real-Time Visibility",
    body: "From bed occupancy to diagnostic backlogs — real-time visibility for administrators who don't have time to wait.",
    pills: [
      { text: "Predictive Analytics", link: "/platform/admin" },
      { text: "Real-time Dashboards", link: "/platform/admin" }
    ],
  }
];

function SmartPharmacyDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="stepA"
            initial={{ opacity: 0, rotate: -2 }}
            animate={{ opacity: 1, rotate: -2 }}
            exit={{ opacity: 0 }}
            className="relative bg-[#FFFBF2] p-8 rounded shadow-md w-64 h-80 overflow-hidden font-serif italic text-sm text-black/80"
          >
            <div className="mb-4 font-bold text-lg text-black">Rx</div>
            <ol className="list-decimal pl-4 space-y-4">
              <li>Deplatt D — <span className="font-mono">1</span> tab daily for <span className="font-mono">2</span> weeks</li>
              <li>Astorvas — <span className="font-mono">1</span> tab nightly for <span className="font-mono">8</span> days</li>
            </ol>
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
              className="absolute left-0 right-0 h-[2px] bg-primary shadow-[0_0_12px_#FF5C00] z-10"
            />
          </motion.div>
        )}
        {step === 1 && (
          <motion.div
            key="stepB"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="w-80 bg-zinc-950 border border-primary/30 shadow-[0_0_30px_rgba(255,92,0,0.15)] rounded-xl p-6 text-white text-sm"
          >
            <div className="border-b border-white/10 pb-2 mb-4 font-medium opacity-60 uppercase tracking-widest text-[10px]">Processing Cart</div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-between mb-2"
            >
              <span className="font-medium">✓ Deplatt D × <span className="font-mono">14</span></span>
              <span className="text-white/40 font-mono">₹588.00</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-between mb-4"
            >
              <span className="font-medium">✓ Astorvas × <span className="font-mono">8</span></span>
              <span className="text-white/40 font-mono">₹944.00</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="border-t border-white/10 pt-3 mt-2 flex justify-between items-center"
            >
              <span className="font-semibold text-white/80">Total</span>
              <span className="text-primary font-mono text-lg font-bold">₹1,532.00</span>
            </motion.div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="stepC"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-sm"
          >
            <div className="grid grid-cols-4 gap-2 mb-6 p-4 bg-zinc-950 rounded-xl border border-white/5 shadow-2xl">
              {Array.from({ length: 24 }).map((_, i) => {
                const isDeplatt = i === 1;
                const isAstorvas = i === 15;
                return (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-md border flex items-center justify-center font-mono text-[10px] transition-all duration-500
                      ${isDeplatt || isAstorvas ? 'bg-primary/20 border-primary shadow-[0_0_12px_rgba(255,92,0,0.5)] text-primary font-bold' : 'bg-white/5 border-white/10 text-transparent'}
                    `}
                  >
                    {isDeplatt ? 'A2' : isAstorvas ? 'D4' : ''}
                  </div>
                );
              })}
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 text-sm text-white/80 bg-zinc-950 p-4 rounded-lg border border-white/10 shadow-lg"
            >
              <span className="text-lg">🔊</span>
              <span className="font-mono text-xs">Deplatt D — <span className="text-primary">Shelf A2</span>. Astorvas — <span className="text-primary">Shelf D4</span>.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EHRDemo() {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="bg-zinc-950 w-80 rounded-xl p-6 border-l-4 border-l-primary shadow-2xl relative overflow-hidden transition-colors"
    >
      <div className="mb-6">
        <h4 className="text-white text-lg font-semibold">Arjun Mehta, <span className="font-mono text-base opacity-50">34M</span></h4>
        <div className="flex gap-2 mt-2">
          <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">Hypertension</span>
          <span className="bg-white/10 text-white/60 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">Type 2 Diabetes</span>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        {['BP', 'HbA1c', 'Heart Rate'].map((label) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-xs text-white/40 w-20">{label}</span>
            <div className="flex-1 h-6 relative overflow-hidden">
              <svg viewBox="0 0 100 24" className="w-full h-full stroke-primary fill-none opacity-40" strokeWidth="2">
                <motion.path 
                  d="M0 12 Q25 24 50 12 T100 12" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4 border-t border-white/10 text-[11px] text-white/30 font-mono">
        Last seen: Dr. Priya Sharma · <span className="opacity-60">3 days ago</span>
      </div>
    </motion.div>
  );
}

function DiagnosticAIDemo() {
  return (
    <div className="relative w-full max-w-md h-80 bg-zinc-950 rounded-xl overflow-hidden border border-white/10 flex shadow-2xl">
      <div className="w-2/3 h-full relative p-4 flex items-center justify-center opacity-70 bg-black/40">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white/5">
          <path d="M30 20 C20 40 25 80 40 85 C45 85 45 60 45 40 C45 20 35 15 30 20 Z M70 20 C80 40 75 80 60 85 C55 85 55 60 55 40 C55 20 65 15 70 20 Z"/>
        </svg>
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute right-[30%] bottom-[30%] w-12 h-16 border-2 border-primary bg-primary/20 shadow-[0_0_15px_rgba(255,92,0,0.6)] animate-pulse"
        />
      </div>
      
      <motion.div 
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
        className="w-1/3 h-full bg-zinc-900 border-l border-white/10 p-4 flex flex-col justify-center"
      >
        <h5 className="text-[10px] font-bold tracking-widest uppercase mb-4 text-primary">AI Findings</h5>
        <div className="bg-red-500/20 text-red-500 text-[10px] p-2 rounded mb-2 font-mono font-bold">
          ⚠ Anomaly
        </div>
        <div className="text-[10px] text-white/40 mb-1">Confidence: <span className="font-mono text-white font-bold">87%</span></div>
        <div className="text-[10px] text-white/40 mb-4">Status: <span className="text-primary">Queued</span></div>
      </motion.div>
      
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded text-[10px] shadow-lg font-mono font-bold"
      >
        DR-2047 Generated
      </motion.div>
    </div>
  );
}

function DoctorAIDemo() {
  return (
    <div className="w-full max-w-sm bg-zinc-950 rounded-xl border border-white/10 p-5 shadow-2xl">
      <div className="bg-white/5 rounded-lg p-3 mb-4 text-xs text-white/70 self-end ml-auto w-[85%] rounded-tr-none border border-white/5">
        Alternative therapy for antiplatelet in CKD stage <span className="font-mono">3</span>?
      </div>
      
      <div className="flex gap-2 mb-2 items-end">
        <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,92,0,0.4)]">
          <span className="text-[10px]">✨</span>
        </div>
        <div className="bg-primary/10 rounded-lg p-3 text-xs text-white/90 leading-relaxed rounded-tl-none w-[90%] border border-primary/20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Based on KDIGO <span className="font-mono">2023</span>: Clopidogrel <span className="font-mono">75mg</span> monotherapy is preferred. Ticagrelor carries elevated risk at eGFR <span className="font-mono">38</span>...
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1.5 h-3 ml-1 bg-primary align-middle"
            />
          </motion.span>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="mt-3 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-[10px] text-white/50 font-mono"
      >
        <span>📎 Ref: #DR-2047</span>
      </motion.div>
    </div>
  );
}

function AdminIntelligenceDemo() {
  return (
    <div className="w-full max-w-md grid grid-cols-2 gap-4">
      <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 shadow-lg">
        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-mono font-bold">Appointments</div>
        <div className="text-2xl font-mono text-white mb-2 font-bold">247</div>
        <div className="flex items-end gap-1 h-8 mt-2">
          {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 shadow-lg flex flex-col justify-between">
        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-mono font-bold">Pending</div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-mono text-white font-bold">12</span>
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_red]" />
        </div>
      </div>
      <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 shadow-lg flex flex-col justify-between">
        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-mono font-bold">Staff Active</div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-mono text-white font-bold">31</span>
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 shadow-lg flex flex-col justify-between relative overflow-hidden">
        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-mono font-bold">Inventory</div>
        <div className="flex items-center justify-between relative z-10">
          <span className="text-2xl font-mono text-white font-bold">Low</span>
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#FF5C00] animate-pulse" />
        </div>
      </div>
      <div className="col-span-2 bg-zinc-950 p-3 rounded-xl border border-white/5">
         <div className="w-full flex gap-1 h-2 rounded-full overflow-hidden">
           <div className="bg-primary/60 w-1/4" />
           <div className="bg-white/20 w-1/3" />
           <div className="bg-white/5 w-1/6" />
           <div className="bg-red-500/40 w-1/4" />
         </div>
      </div>
    </div>
  );
}

const demos = [
  <SmartPharmacyDemo key="0" />,
  <EHRDemo key="1" />,
  <DiagnosticAIDemo key="2" />,
  <DoctorAIDemo key="3" />,
  <AdminIntelligenceDemo key="4" />
];

export function ProductStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeBeat, setActiveBeat] = useState(0);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const beatIndex = Math.floor(v * beats.length);
      setActiveBeat(Math.min(beatIndex, beats.length - 1));
    });
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative bg-background transition-colors duration-500" style={{ height: `${beats.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden relative">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center px-8 md:px-20 lg:px-32 bg-background relative border-r border-border/50">
          
          {/* Progress Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-foreground/5">
            <motion.div 
              className="absolute left-0 top-0 w-full bg-primary shadow-[0_0_10px_rgba(255,92,0,0.5)]"
              style={{ height: progressHeight }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeBeat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-lg pl-6 md:pl-0"
            >
              <div className="text-primary text-[11px] font-bold tracking-[3px] uppercase mb-4">
                {beats[activeBeat].overline}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 flex overflow-hidden">
                {beats[activeBeat].title.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.3 }}
                    className={char === ' ' ? 'mr-2' : ''}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                {beats[activeBeat].body}
              </p>
              <div className="flex flex-wrap gap-2">
                {beats[activeBeat].pills.map((pill) => (
                  <Link key={pill.text} href={pill.link}>
                    <span className="bg-foreground/5 border border-foreground/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-pointer text-xs px-3 py-1.5 rounded-full inline-block font-medium">
                      {pill.text}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-card/30 p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #FF5C00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBeat}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center z-10"
            >
              {demos[activeBeat]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}