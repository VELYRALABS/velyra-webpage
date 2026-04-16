"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      hospital: formData.get("hospital"),
      email: formData.get("email"),
      phone: formData.get("phone") || "N/A",
      role: formData.get("role"),
      message: formData.get("message"),
      source: formData.get("source"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok) {
        toast({
          title: "Success!",
          description: "Your request has been sent to the VeLYRA team.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(responseData?.error || "Failed to send");
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: err instanceof Error ? err.message : "Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-12"
        >
          Request Access
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-sm max-w-lg mx-auto text-left"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Name</label>
              <input name="name" required type="text" className="w-full bg-background border border-border rounded-lg h-10 px-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none text-foreground placeholder:text-muted-foreground/50" placeholder="Dr. Jane Doe" />
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Hospital / Organisation</label>
              <input name="hospital" required type="text" className="w-full bg-background border border-border rounded-lg h-10 px-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none text-foreground placeholder:text-muted-foreground/50" placeholder="City General Hospital" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Email</label>
                <input name="email" required type="email" className="w-full bg-background border border-border rounded-lg h-10 px-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none text-foreground placeholder:text-muted-foreground/50" placeholder="jane@hospital.org" />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Phone (Optional)</label>
                <input name="phone" type="tel" className="w-full bg-background border border-border rounded-lg h-10 px-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none text-foreground placeholder:text-muted-foreground/50" placeholder="+91 ..." />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">Role</label>
              <select name="role" className="w-full bg-background border border-border rounded-lg h-10 px-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none text-foreground">
                <option>Doctor</option>
                <option>Administrator</option>
                <option>Pharmacist</option>
                <option>Investor</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">How can we help?</label>
              <textarea name="message" required rows={3} className="w-full bg-background border border-border rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none resize-none text-foreground placeholder:text-muted-foreground/50" placeholder="Tell us about your requirements..." />
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5 uppercase tracking-wider">How did you hear about us?</label>
              <input name="source" type="text" className="w-full bg-background border border-border rounded-lg h-10 px-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none text-foreground placeholder:text-muted-foreground/50" placeholder="LinkedIn, News, Event..." />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            >
              {loading ? "Sending..." : "Send Request →"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}