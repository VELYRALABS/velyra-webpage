"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";
import type { Job } from "@/lib/careers";

const TYPE_COLORS: Record<string, string> = {
  "Internship":  "bg-primary/10 text-primary",
  "Full-time":   "bg-green-500/10 text-green-500",
  "Part-time":   "bg-blue-500/10 text-blue-500",
  "Contract":    "bg-purple-500/10 text-purple-500",
};

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/careers/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(Array.isArray(data) ? data : []))
      .catch(() => setJobs([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-background min-h-screen transition-colors duration-500">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-primary text-[11px] font-medium tracking-[3px] uppercase mb-4">
            Careers at VeLYRA
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
            Build the future<br />of healthcare.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join a team on a mission to transform clinical intelligence in India. We&apos;re looking for builders, thinkers, and people who care.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-[1px] w-full bg-border" />
      </div>

      {/* Listings */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        {loading ? (
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 animate-pulse">
                <div className="h-4 bg-border rounded w-1/4 mb-3" />
                <div className="h-6 bg-border rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : jobs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-2xl font-display font-semibold text-foreground mb-3">
              No open positions right now.
            </p>
            <p className="text-muted-foreground">
              We&apos;re growing fast — check back soon.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={`/careers/${encodeURIComponent(job.id.trim())}`}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,92,0,0.06)] transition-all cursor-pointer group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${TYPE_COLORS[job.type] ?? "bg-muted text-muted-foreground"}`}>
                            {job.type}
                          </span>
                          <span className="text-xs text-muted-foreground">{job.location}</span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        {job.deadline && (
                          <div className="text-right hidden sm:block">
                            <p className="text-xs text-muted-foreground">Apply by</p>
                            <p className="text-sm font-medium text-foreground">
                              {new Date(job.deadline).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        )}
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-9 px-5 rounded-lg text-sm shadow-[0_0_15px_rgba(255,92,0,0.2)]">
                          Apply →
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
