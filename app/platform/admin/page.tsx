"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";

export default function Admin() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A2E] text-white pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">Module 05</div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">Hospital Intelligence</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              The nerve center of your hospital. Real-time operational visibility, predictive capacity planning, and resource optimization.
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0F0F1A] border border-white/10 rounded-2xl p-6 relative overflow-hidden h-80 shadow-2xl">
             <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-white/5 rounded border border-white/10 p-4 flex flex-col">
                  <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1">ICU Capacity</span>
                  <span className="font-mono text-3xl text-white mb-2">92%</span>
                  <div className="mt-auto h-2 bg-black/40 rounded overflow-hidden">
                    <div className="h-full bg-destructive w-[92%]" />
                  </div>
                </div>
                <div className="bg-white/5 rounded border border-white/10 p-4 flex flex-col">
                  <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1">ER Wait Time</span>
                  <span className="font-mono text-3xl text-white mb-2">14m</span>
                  <div className="mt-auto h-2 bg-black/40 rounded overflow-hidden">
                    <div className="h-full bg-primary w-[30%]" />
                  </div>
                </div>
                <div className="col-span-2 bg-white/5 rounded border border-white/10 p-4 flex flex-col justify-center">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-xs text-white/70">Radiology Backlog</span>
                     <span className="font-mono text-primary text-sm">Clear</span>
                   </div>
                   <div className="flex gap-1 h-6">
                     {[30,40,20,50,80,40,20].map((h, i) => (
                       <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%`, marginTop: 'auto' }} />
                     ))}
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
              { num: "01", title: "Data Aggregation", desc: "Pulls live data from admissions, pharmacy, diagnostic queues, and billing." },
              { num: "02", title: "Predictive Modeling", desc: "Machine learning models forecast bed shortages and inventory depletion days in advance." },
              { num: "03", title: "Actionable Dashboards", desc: "Admins receive automated alerts and view live metrics to make instant resource decisions." }
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
              <div className="font-mono text-4xl text-primary font-medium mb-2">Live</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Update Frequency</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">-15%</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Operational Costs</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm text-center">
              <div className="font-mono text-4xl text-primary font-medium mb-2">+20%</div>
              <div className="text-sm font-medium text-[#1A1A2E]">Resource Utilization</div>
            </div>
          </div>

          <div className="bg-[#1A1A2E] p-8 md:p-12 rounded-2xl text-white shadow-xl">
            <h3 className="font-display text-2xl font-semibold mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
              <div className="space-y-4">
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Architecture</span> Event-Driven WebSocket</div>
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Data Warehouse</span> Snowflake / BigQuery Compatible</div>
              </div>
              <div className="space-y-4">
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Reporting</span> Auto-generated PDF/CSV</div>
                 <div className="border-b border-white/10 pb-2"><span className="text-white/50 block mb-1">Access Control</span> Fine-grained RBAC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}