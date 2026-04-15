"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-2xl">VeLYRA LABS</h3>
            <p className="text-white/60 font-serif italic">Let Your Reality Analysed.</p>
            <div className="inline-block mt-4 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-primary font-medium tracking-wide">
              ✦ DPIIT Recognised
            </div>
          </div>
          
          <div>
            <h4 className="text-white/40 text-[11px] uppercase tracking-[2px] font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/platform" className="text-white/70 hover:text-primary transition-colors text-sm cursor-pointer">Platform</Link></li>
              <li><Link href="/platform" className="text-white/70 hover:text-primary transition-colors text-sm cursor-pointer">Features</Link></li>
              <li><Link href="/company" className="text-white/70 hover:text-primary transition-colors text-sm cursor-pointer">Company</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-primary transition-colors text-sm cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/40 text-[11px] uppercase tracking-[2px] font-medium mb-4 font-mono">Compliance</h4>
            <div className="flex flex-wrap gap-2">
              {['HIPAA', 'SOC 2', 'GDPR', 'ISO 27001'].map(cert => (
                <span key={cert} className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1.5 rounded-full font-mono">
                  {cert} <span className="text-white/30 ml-1">In Process</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>
            © 2025 VeLYRA LABS Pvt. Ltd. · Built in India 🇮🇳
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
