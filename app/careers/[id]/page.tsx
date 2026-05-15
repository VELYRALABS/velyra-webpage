"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";
import { useToast } from "@/hooks/use-toast";
import type { Job } from "@/lib/careers";

const TYPE_COLORS: Record<string, string> = {
  "Internship":  "bg-primary/10 text-primary",
  "Full-time":   "bg-green-500/10 text-green-500",
  "Part-time":   "bg-blue-500/10 text-blue-500",
  "Contract":    "bg-purple-500/10 text-purple-500",
};

const inputClass =
  "w-full bg-background border border-border rounded-lg h-12 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground";

const textareaClass =
  "w-full bg-background border border-border rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-foreground placeholder:text-muted-foreground";

function normalizeJobId(value: string) {
  try {
    return decodeURIComponent(value).trim();
  } catch {
    return value.trim();
  }
}

export default function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = React.use(params);
  const id = normalizeJobId(rawId);
  const { toast } = useToast();

  const [job, setJob]               = useState<Job | null>(null);
  const [loading, setLoading]       = useState(true);
  const [notFound, setNotFound]     = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [resumeMode, setResumeMode] = useState<"upload" | "link">("upload");
  const [fileError, setFileError]   = useState("");

  useEffect(() => {
    fetch("/api/careers/jobs")
      .then((res) => res.json())
      .then((data: Job[]) => {
        const found = Array.isArray(data)
          ? data.find((j) => normalizeJobId(j.id) === id)
          : null;
        if (found) setJob(found);
        else setNotFound(true);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!job) return;
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("jobId", job.id);
    formData.set("jobName", job.title);

    const file = formData.get("resume") as File | null;
    if (resumeMode === "upload" && (!file || file.size === 0)) {
      toast({ variant: "destructive", title: "Please upload your resume." });
      setSubmitting(false);
      return;
    }
    if (resumeMode === "link" && !formData.get("resumeLink")) {
      toast({ variant: "destructive", title: "Please paste your resume link." });
      setSubmitting(false);
      return;
    }
    if (resumeMode === "link") {
      formData.delete("resume");
    } else {
      formData.delete("resumeLink");
    }

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        throw new Error(data.error || "Failed");
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground text-sm">Loading...</div>
      </div>
    );
  }

  if (notFound || !job) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-display text-3xl font-semibold text-foreground">Position not found.</p>
        <p className="text-muted-foreground">This role may have been filled or removed.</p>
        <Link href="/careers">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2">
            ← View open roles
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <Link href="/careers">
            <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              ← Back to all roles
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Job Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${TYPE_COLORS[job.type] ?? "bg-muted text-muted-foreground"}`}>
                  {job.type}
                </span>
                <span className="text-xs text-muted-foreground">{job.location}</span>
                {job.timing && (
                  <>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{job.timing}</span>
                  </>
                )}
                {job.deadline && (
                  <>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">
                      Apply by{" "}
                      {new Date(job.deadline).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </>
                )}
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                {job.title}
              </h1>
            </div>

            <div className="h-[1px] w-full bg-border mb-8" />

            {/* Sections */}
            <div className="space-y-8">
              {job.about && (
                <div>
                  <h2 className="font-display text-base font-semibold text-foreground mb-3">About Us</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{job.about}</p>
                </div>
              )}

              {job.responsibilities && (
                <div>
                  <h2 className="font-display text-base font-semibold text-foreground mb-3">Key Responsibilities</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{job.responsibilities}</p>
                </div>
              )}

              {job.qualifications && (
                <div>
                  <h2 className="font-display text-base font-semibold text-foreground mb-3">Qualifications</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{job.qualifications}</p>
                </div>
              )}

              {job.idealCandidate && (
                <div>
                  <h2 className="font-display text-base font-semibold text-foreground mb-3">Ideal Candidate</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{job.idealCandidate}</p>
                </div>
              )}

              {job.compensation && (
                <div>
                  <h2 className="font-display text-base font-semibold text-foreground mb-3">Compensation</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{job.compensation}</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Apply Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Application submitted!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We&apos;ll review your profile and get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                    Apply for this role
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input name="name" type="text" required className={inputClass} placeholder="Jane Doe" />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input name="email" type="email" required className={inputClass} placeholder="jane@example.com" />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        LinkedIn URL <span className="text-primary">*</span>
                      </label>
                      <input
                        name="linkedin"
                        type="url"
                        required
                        className={inputClass}
                        placeholder="https://linkedin.com/in/jane"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        GitHub URL <span className="text-primary">*</span>
                      </label>
                      <input
                        name="github"
                        type="url"
                        required
                        className={inputClass}
                        placeholder="https://github.com/jane"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Phone <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <input name="phone" type="tel" className={inputClass} placeholder="+91 98765 43210" />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Portfolio URL <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <input name="portfolio" type="url" className={inputClass} placeholder="https://yourportfolio.com" />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Other Links <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <textarea
                        name="otherLinks"
                        rows={2}
                        className={textareaClass}
                        placeholder="Behance, Dribbble, personal blog..."
                      />
                    </div>

                    {/* Resume toggle */}
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Resume <span className="text-primary">*</span>
                      </label>
                      <div className="flex gap-2 mb-3">
                        {(["upload", "link"] as const).map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => { setResumeMode(mode); setFileError(""); }}
                            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                              resumeMode === mode
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background border-border text-muted-foreground hover:border-primary/40"
                            }`}
                          >
                            {mode === "upload" ? "Upload PDF / DOCX" : "Paste a link"}
                          </button>
                        ))}
                      </div>

                      {resumeMode === "upload" ? (
                        <>
                          <input
                            name="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file && file.size > 5 * 1024 * 1024) {
                                setFileError("File exceeds 5MB limit.");
                                e.target.value = "";
                              } else {
                                setFileError("");
                              }
                            }}
                            className="w-full text-xs text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:bg-primary/10 file:text-primary cursor-pointer"
                          />
                          {fileError && (
                            <p className="text-xs text-red-500 mt-1">{fileError}</p>
                          )}
                        </>
                      ) : (
                        <input
                          name="resumeLink"
                          type="url"
                          className={inputClass}
                          placeholder="https://drive.google.com/file/..."
                        />
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-sm font-semibold shadow-[0_0_20px_rgba(255,92,0,0.3)] mt-2"
                    >
                      {submitting ? "Submitting..." : "Submit Application →"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
