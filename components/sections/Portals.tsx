"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Patient", "Doctor", "Admin", "Pharmacy"];

export function Portals() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-background transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">
            PORTALS
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Four Ways In
          </h2>
          
          <div className="flex overflow-x-auto pb-4 md:pb-0 justify-start md:justify-center gap-2 max-w-full no-scrollbar">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
                  ${activeTab === idx 
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,92,0,0.3)]' 
                    : 'bg-background text-muted-foreground hover:bg-foreground/5 border border-border'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Browser Window - Hardcoded Dark for Dashboard Preview */}
        <div className="bg-[#0A0A0A] rounded-xl border-t-8 border-t-black/40 border border-white/10 shadow-2xl overflow-hidden max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/9] relative">
          <div className="h-10 bg-black/40 flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
            <div className="mx-auto bg-black/20 px-4 py-1 rounded text-[10px] text-white/30 font-mono">
              portal.lyra.health / {tabs[activeTab].toLowerCase()}
            </div>
          </div>
          
          <div className="w-full h-[calc(100%-40px)] relative bg-[#050505]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full p-6 md:p-8"
              >
                {activeTab === 0 && <PatientMockup />}
                {activeTab === 1 && <DoctorMockup />}
                {activeTab === 2 && <AdminMockup />}
                {activeTab === 3 && <PharmacyMockup />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function PatientMockup() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-white text-xl">Book Appointment</h3>
        <div className="text-primary text-sm font-bold">Step 1 of 3</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/20 rounded-full mb-3 flex items-center justify-center text-primary text-xl">👤</div>
            <div className="text-white text-sm font-medium">Dr. Sharma</div>
            <div className="text-white/50 text-xs">Cardiology</div>
            <div className="mt-4 text-xs text-primary font-bold">Next available: Tomorrow</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DoctorMockup() {
  return (
    <div className="flex h-full gap-6">
      <div className="w-1/3 bg-white/5 rounded-lg border border-white/10 flex flex-col hidden md:flex">
        <div className="p-4 border-b border-white/10 text-white/80 font-medium">Patient Queue</div>
        <div className="flex-1 p-2 space-y-2">
          <div className="bg-primary/20 border border-primary/30 p-3 rounded text-sm text-white font-medium">Arjun Mehta (10:30)</div>
          <div className="hover:bg-white/5 p-3 rounded text-sm text-white/60 transition-colors">Priya Patel (11:00)</div>
          <div className="hover:bg-white/5 p-3 rounded text-sm text-white/60 transition-colors">Rohan Singh (11:30)</div>
        </div>
      </div>
      <div className="flex-1 bg-white/5 rounded-lg border border-white/10 p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] px-2 py-1 rounded font-bold">1 Pending Scan Review</div>
        <div className="text-2xl text-white font-semibold mb-2">Arjun Mehta</div>
        <div className="text-white/50 text-sm mb-6">34M · Hypertension · T2D</div>
        <div className="flex-1 border border-white/10 rounded bg-black p-4 text-white/80 font-mono text-sm overflow-hidden leading-relaxed">
          Chief Complaint: Persistent headaches, blurry vision.
          <br/><br/>
          BP: 150/95
          <br/>
          HR: 88
          <br/><br/>
          <span className="text-primary font-bold">✨ AI suggests ordering an ECG based on recent history...</span>
        </div>
      </div>
    </div>
  );
}

function AdminMockup() {
  return (
    <div className="flex flex-col h-full gap-6">
      <div className="grid grid-cols-4 gap-4">
        {[
          {l: 'Occupancy', v: '87%'}, 
          {l: 'ER Wait Time', v: '14m'}, 
          {l: 'Discharges Today', v: '42'}, 
          {l: 'Scan Backlog', v: '8'}
        ].map((s, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="text-white/50 text-xs mb-2 uppercase tracking-tighter">{s.l}</div>
            <div className="text-white text-xl font-bold">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-white/5 rounded-lg border border-white/10 p-4">
         <div className="text-white/80 mb-4 font-medium">Resource Allocation</div>
         <div className="space-y-3">
           {[60, 85, 40].map((w, i) => (
             <div key={i} className="h-6 w-full bg-black rounded overflow-hidden relative">
               <div className={`absolute top-0 left-0 bottom-0 ${i === 1 ? 'bg-red-500/60' : 'bg-primary/60'}`} style={{ width: `${w}%` }} />
             </div>
           ))}
         </div>
      </div>
    </div>
  );
}

function PharmacyMockup() {
  return (
    <div className="flex h-full gap-6">
      <div className="w-1/2 border border-white/10 rounded-lg border-dashed flex flex-col items-center justify-center text-white/40 hover:border-primary/50 transition-colors cursor-pointer">
        <span className="text-4xl mb-4">📄</span>
        <p className="font-mono text-sm">Drop Rx Scan Here</p>
      </div>
      <div className="w-1/2 bg-white/5 rounded-lg border border-white/10 p-6 flex flex-col">
        <h4 className="text-white mb-4 font-medium border-b border-white/10 pb-2">Current Cart</h4>
        <div className="flex-1 flex flex-col items-center justify-center text-white/20 text-sm">
          <div className="animate-pulse mb-2 text-2xl">🔍</div>
          <span className="font-mono">Awaiting Scan</span>
        </div>
        <div className="pt-4 border-t border-white/10">
          <div className="flex justify-between text-white font-bold">
            <span className="opacity-60">Total</span>
            <span className="text-primary font-mono">₹0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}