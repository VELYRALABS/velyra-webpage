"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Company() {
  return (
    <section className="py-24 md:py-32 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">
              VeLYRA LABS
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              VeLYRA LABS
            </h2>
            <p className="text-2xl text-foreground font-serif italic mb-6">
              "Let Your Reality Analysed."
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              We are a next-generation AI innovator turning visual data into clinical intelligence. Research-first. Product-obsessed. Built in India for hospitals everywhere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3 items-start">
                <span className="text-xl">🧠</span>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Vision AI & Generative AI</h4>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xl">🏥</span>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Healthcare-native Architecture</h4>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xl">☁️</span>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Cloud + Edge Deployments</h4>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xl">🔬</span>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Research-first Development</h4>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // Hardcoded Black Background + White Shadow for Dark Mode
            className="bg-[#0A0A0A] rounded-2xl aspect-square flex items-center justify-center border border-white/10 shadow-2xl dark:shadow-[0_0_40px_rgba(255,255,255,0.07)] overflow-hidden relative group hover:shadow-[0_20px_50px_rgba(255,92,0,0.2)] transition-all duration-700"
          >
            <Image 
              src="/images/favicon.png"
              alt="VeLYRA Labs"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />
          </motion.div>

        </div>
      </div>
        
      {/* Quote section stays strictly black as requested */}
      <div className="w-full bg-foreground py-32 px-6 mt-12 border-y border-border">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <p className="font-serif italic text-[40px] md:text-[56px] text-background leading-tight opacity-95">
            "We didn't build software for hospitals. We built intelligence that hospitals grow around."
          </p>
        </motion.div>
      </div>
    </section>
  );
}