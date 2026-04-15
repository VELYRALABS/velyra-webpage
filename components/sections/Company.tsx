"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Company() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-[#00B8A0] text-[11px] font-medium tracking-[3px] uppercase mb-4">
              VeLYRA LABS
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A2E] mb-4">
              VeLYRA LABS
            </h2>
            <p className="text-2xl text-[#1A1A2E] font-serif italic mb-6">
              "Let Your Reality Analysed."
            </p>
            <p className="text-[#64748B] text-lg leading-relaxed mb-10">
              We are a next-generation AI innovator turning visual data into clinical intelligence. Research-first. Product-obsessed. Built in India for hospitals everywhere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3 items-start">
                <span className="text-xl">🧠</span>
                <div>
                  <h4 className="font-medium text-[#1A1A2E] text-sm">Vision AI & Generative AI</h4>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xl">🏥</span>
                <div>
                  <h4 className="font-medium text-[#1A1A2E] text-sm">Healthcare-native Architecture</h4>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xl">☁️</span>
                <div>
                  <h4 className="font-medium text-[#1A1A2E] text-sm">Cloud + Edge Deployments</h4>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xl">🔬</span>
                <div>
                  <h4 className="font-medium text-[#1A1A2E] text-sm">Research-first Development</h4>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1A1A2E] rounded-2xl aspect-square flex items-center justify-center border border-black/10 shadow-2xl overflow-hidden relative group hover:shadow-[0_20px_50px_rgba(0,229,195,0.2)] transition-shadow duration-700"
          >
            <Image 
              src="/images/favicon.png" // Make sure this file exists in /public/images/
              alt="VeLYRA Labs"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />
          </motion.div>

        </div>
      </div>
        
      <div className="w-full bg-[#1A1A2E] py-32 px-6 mt-12 border-y border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <p className="font-serif italic text-[40px] md:text-[56px] text-white leading-tight opacity-95">
            "We didn't build software for hospitals. We built intelligence that hospitals grow around."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
