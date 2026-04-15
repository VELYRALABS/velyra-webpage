"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
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
      console.log("Submitting form data:", data);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({
          title: "Success!",
          description: "Your request has been sent to the VeLYRA team.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-6xl font-semibold text-[#1A1A2E] mb-6"
        >
          Let's build together.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#64748B] text-lg max-w-2xl mx-auto"
        >
          Whether you're looking to deploy PROJECT LYRA in your hospital, or just want to learn more about our capabilities.
        </motion.p>
      </section>
      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm mb-8">
            <h3 className="font-display text-2xl font-semibold text-[#1A1A2E] mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-black/5 pb-4">
                <span className="text-[#64748B]">Email</span>
                <span className="font-medium text-[#1A1A2E]">operations@ve-lyra.com</span>
              </div>
              <div className="flex justify-between items-center border-b border-black/5 pb-4">
                <span className="text-[#64748B]">Location</span>
                <span className="font-medium text-[#1A1A2E]">India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#64748B]">Response Time</span>
                <span className="font-medium text-primary">&lt; 24 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A2E] text-white p-8 rounded-2xl shadow-xl">
            <h3 className="font-display text-xl font-semibold mb-6">What happens next?</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-3.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent before:left-0">
              {[
                { title: "Review", desc: "Our team reviews your requirements." },
                { title: "Schedule Call", desc: "We setup a quick 15-min discovery call." },
                { title: "Custom Demo", desc: "We show you the platform using your data types." },
                { title: "Onboarding", desc: "Seamless deployment within weeks." }
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-primary bg-[#1A1A2E] text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-white/10 bg-white/5">
                    <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                    <p className="text-white/60 text-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-black/5 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Name</label>
                  <input name="name" type="text" required className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg h-12 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Dr. Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Hospital</label>
                  <input name="hospital" type="text" required className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg h-12 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="City General" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Email</label>
                  <input name="email" type="email" required className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg h-12 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="jane@hospital.org" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Phone (Optional)</label>
                  <input name="phone" type="tel" className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg h-12 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Role</label>
                <select name="role" className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg h-12 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-[#1A1A2E]">
                  <option>Doctor</option>
                  <option>Hospital Administrator</option>
                  <option>Pharmacist</option>
                  <option>Investor</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-2">How can we help?</label>
                <textarea name="message" rows={4} required className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Tell us about your needs..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-2">How did you hear about us?</label>
                <input name="source" type="text" className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg h-12 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="LinkedIn, Referral, etc." />
              </div>
              
              <Button type="submit" disabled={loading} className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg rounded-xl shadow-[0_0_20px_rgba(0,229,195,0.2)]">
                {loading ? "Sending..." : "Send Request"}
              </Button>
            </form>
          </div>
        </motion.div>

      </section>
      {/* FAQ */}
      <section className="py-24 px-6 border-t border-black/5 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-[#1A1A2E]">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-black/5 py-2">
              <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors">Do you integrate with existing EHRs?</AccordionTrigger>
              <AccordionContent className="text-[#64748B] text-base leading-relaxed">
                Yes. Our platform is built on HL7 FHIR R4 standards and can integrate bidirectionally with most modern EHR systems (Epic, Cerner, etc.) via standard APIs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-black/5 py-2">
              <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors">How secure is the patient data?</AccordionTrigger>
              <AccordionContent className="text-[#64748B] text-base leading-relaxed">
                Security is our top priority. We use AES-256 encryption at rest and TLS 1.3 in transit. We are currently undergoing HIPAA and SOC 2 Type II compliance audits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-black/5 py-2">
              <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors">Do we need new hardware to run Diagnostic AI?</AccordionTrigger>
              <AccordionContent className="text-[#64748B] text-base leading-relaxed">
                No. Our AI runs in the cloud (or via an edge server we provide if you prefer local processing). It integrates directly with your existing PACS via DICOM 3.0.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-black/5 py-2">
              <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors">How long does onboarding take?</AccordionTrigger>
              <AccordionContent className="text-[#64748B] text-base leading-relaxed">
                A typical pilot deployment takes 2-4 weeks, depending on the complexity of your existing IT infrastructure and the modules you choose to deploy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  );
}