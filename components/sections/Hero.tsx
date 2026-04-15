"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setPhase(2), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#FAF9F6]">
      {/* Background Particles for Phase 2 */}
      {phase === 2 && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           {Array.from({ length: 40 }).map((_, i) => (
             <motion.div
               key={i}
               initial={{ 
                 x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                 y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                 opacity: Math.random() * 0.5 + 0.1
               }}
               animate={{ 
                 y: [null, Math.random() * -100 - 50],
                 opacity: [null, Math.random() * 0.8 + 0.2, 0]
               }}
               transition={{ 
                 duration: Math.random() * 10 + 10,
                 repeat: Infinity,
                 ease: "linear"
               }}
               className="absolute rounded-full bg-primary"
               style={{
                 width: Math.random() * 3 + 1 + 'px',
                 height: Math.random() * 3 + 1 + 'px'
               }}
             />
           ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {phase === 1 && (
          <motion.div
            key="phase1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="z-10 max-w-3xl px-6 text-center"
          >
            <p className="font-serif text-2xl md:text-3xl italic leading-relaxed" style={{ color: '#2D2D3D' }}>
              "Somewhere right now, a doctor is waiting for a scan result. A pharmacist is misreading a handwritten prescription. A patient doesn't know their own history."
            </p>
          </motion.div>
        )}

        {phase === 2 && (
          <motion.div
            key="phase2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="z-10 flex flex-col items-center justify-center text-center px-6"
          >
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Replace font-display with font-['Wensley']
            className="font-['Wensley'] text-[40px] md:text-[68px] font-semibold tracking-[-1px] text-[#1A1A2E] leading-none"
          >
            PROJECT LYRA
          </motion.h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-[1px] w-[120px] bg-primary my-4 origin-center"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#00B8A0] text-[11px] font-medium tracking-[3px] uppercase mb-8"
            >
              VeLYRA Healthcare
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#64748B] text-lg md:text-[22px] max-w-2xl mb-10 leading-snug"
            >
              Next-generation healthcare intelligence. Built in India. Built for the world.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link href="/platform">
                <Button 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,229,195,0.3)] h-12 px-8 rounded-lg transition-all text-base"
                  data-testid="button-experience"
                >
                  Experience the Platform
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 h-12 px-8 rounded-lg transition-all text-base"
                  data-testid="button-request-access"
                >
                  Request Access
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-2 text-xs text-[#64748B]"
            >
              <div className="bg-[#1A1A2E]/5 px-3 py-1 rounded-full border border-black/5 font-mono">HIPAA — In Process</div>
              <div className="bg-[#1A1A2E]/5 px-3 py-1 rounded-full border border-black/5 font-mono">SOC 2 — In Process</div>
              <div className="bg-[#1A1A2E]/5 px-3 py-1 rounded-full border border-black/5 font-mono">GDPR — In Process</div>
              <div className="bg-[#1A1A2E]/5 px-3 py-1 rounded-full border border-black/5 font-mono">ISO 27001 — In Process</div>
              <div className="bg-[#1A1A2E]/5 px-3 py-1 rounded-full border border-black/5 font-medium text-primary">✦ DPIIT Recognised</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: [0, 5, 0] }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
            >
              ↓
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
