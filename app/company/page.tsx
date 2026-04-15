"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Hospital, Cloud, Microscope } from "lucide-react";
import { Footer } from "@/components/sections/Footer";

export default function Company() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A2E] pt-32 pb-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-6"
          >
            VeLYRA LABS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white mb-12"
          >
            Built in India.<br />Built for the world.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[21/9]"
          >
            <img src="/images/company-hero.png" alt="Company Vision" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent opacity-60" />
          </motion.div>
        </div>
      </section>
      {/* Mission */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif italic text-[#1A1A2E] leading-tight"
          >
            "Let Your Reality Analysed."
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#64748B] leading-relaxed"
          >
            We believe that healthcare intelligence shouldn't be a luxury. Our mission is to democratize advanced clinical AI, creating tools that integrate seamlessly into the chaos of real-world hospitals. We are researchers, engineers, and product builders obsessed with patient outcomes.
          </motion.div>
        </div>
      </section>
      {/* What We Do */}
      <section className="bg-white py-24 px-6 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1A1A2E]">What drives us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Brain, title: "Vision & Generative AI", desc: "Training specialized models on diverse clinical datasets to assist, not replace, medical professionals." },
              { icon: Hospital, title: "Healthcare-Native Architecture", desc: "Building systems that understand FHIR and DICOM out of the box, speaking the language of modern medicine." },
              { icon: Cloud, title: "Cloud & Edge Deployments", desc: "Ensuring our intelligence works whether you have gigabit fiber or an intermittent satellite connection." },
              { icon: Microscope, title: "Research-First Development", desc: "Grounding every feature in rigorous clinical research and peer-reviewed literature." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAF9F6] p-8 rounded-xl border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-semibold text-xl text-[#1A1A2E] mb-3">{feature.title}</h3>
                <p className="text-[#64748B]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* DPIIT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/10 border border-primary/20 p-10 rounded-2xl text-center"
          >
            <div className="inline-block bg-primary text-primary-foreground font-medium px-4 py-1.5 rounded-full text-sm mb-6">
              DPIIT Recognised Startup
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#1A1A2E] mb-4">
              Recognized by the Government of India
            </h3>
            <p className="text-[#64748B] text-lg">
              VeLYRA LABS is officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT) for our innovative contributions to healthcare technology.
            </p>
          </motion.div>
        </div>
      </section>
      {/* The Vision */}
      <section className="bg-[#1A1A2E] text-white py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 leading-none mb-8"
          >2027</motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-white/80 font-display max-w-2xl mx-auto"
          >
            The year we aim to be powering intelligence in 500+ hospitals across India and Southeast Asia.
          </motion.p>
        </div>
      </section>
      {/* Culture */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1A1A2E]">Our Culture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Research First", desc: "We don't build hype. We read papers, conduct trials, and build scientifically grounded products." },
              { title: "India-Scale", desc: "If it works for the volume and complexity of an Indian public hospital, it works anywhere." },
              { title: "Patient-Centred", desc: "Every line of code is written with the understanding that a human life sits at the end of the workflow." }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl border border-black/5 text-center shadow-sm"
              >
                <h3 className="font-semibold text-lg text-[#1A1A2E] mb-4">{val.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}