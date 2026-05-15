"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import type { Job, JobType } from "@/lib/careers";

const JOB_TYPES: JobType[] = ["Full-time", "Part-time", "Internship", "Contract"];

const STATUS_STYLES: Record<string, string> = {
  active:      "bg-green-500/10 text-green-500 border border-green-500/20",
  deactivated: "bg-border text-muted-foreground border border-border",
};

const inputClass =
  "w-full bg-background border border-border rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground";
const textareaClass =
  "w-full bg-background border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-foreground";

type FormState = {
  title: string;
  type: JobType;
  location: string;
  timing: string;
  about: string;
  responsibilities: string;
  qualifications: string;
  idealCandidate: string;
  compensation: string;
  deadline: string;
};

const EMPTY_FORM: FormState = {
  title: "",
  type: "Internship",
  location: "Remote",
  timing: "",
  about: "",
  responsibilities: "",
  qualifications: "",
  idealCandidate: "",
  compensation: "",
  deadline: "",
};

export default function AdminDashboard() {
  const router = useRouter();
  const { toast } = useToast();

  const [jobs, setJobs]             = useState<Job[]>([]);
  const [loading, setLoading]       = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm]             = useState<FormState>(EMPTY_FORM);
  const [posting, setPosting]       = useState(false);
  const [toggling, setToggling]     = useState<string | null>(null);

  async function fetchJobs() {
    try {
      const res = await fetch("/api/careers/jobs?admin=true");
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch {
      toast({ variant: "destructive", title: "Failed to load jobs." });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchJobs(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handlePrefill() {
    if (jobs.length === 0) return;
    const last = [...jobs].sort(
      (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    )[0];
    setForm({
      title:           last.title,
      type:            last.type,
      location:        last.location,
      timing:          last.timing,
      about:           last.about,
      responsibilities:last.responsibilities,
      qualifications:  last.qualifications,
      idealCandidate:  last.idealCandidate,
      compensation:    last.compensation,
      deadline:        "",
    });
  }

  async function handlePostJob(e: React.FormEvent) {
    e.preventDefault();
    setPosting(true);
    try {
      const res = await fetch("/api/careers/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Job posted successfully." });
        setDialogOpen(false);
        setForm(EMPTY_FORM);
        fetchJobs();
      } else {
        throw new Error(data.error || "Failed");
      }
    } catch {
      toast({ variant: "destructive", title: "Failed to post job." });
    } finally {
      setPosting(false);
    }
  }

  async function handleToggleStatus(job: Job) {
    const newStatus = job.status === "active" ? "deactivated" : "active";
    setToggling(job.id);
    try {
      const res = await fetch(`/api/careers/jobs/${job.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setJobs((prev) =>
          prev.map((j) => (j.id === job.id ? { ...j, status: newStatus } : j))
        );
      } else {
        throw new Error();
      }
    } catch {
      toast({ variant: "destructive", title: "Failed to update status." });
    } finally {
      setToggling(null);
    }
  }

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`/api/careers/jobs/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setJobs((prev) => prev.filter((j) => j.id !== id));
        toast({ title: "Job deleted." });
      } else {
        throw new Error();
      }
    } catch {
      toast({ variant: "destructive", title: "Failed to delete job." });
    }
  }

  async function handleLogout() {
    await fetch("/api/careers/admin/logout", { method: "POST" });
    router.push("/careers/admin/login");
  }

  return (
    <div className="bg-background min-h-screen transition-colors duration-500">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-semibold text-foreground">Careers Admin</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-[10px] text-primary font-medium tracking-wide uppercase">VeLYRA</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setForm(EMPTY_FORM); setDialogOpen(true); }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold h-8 px-4 rounded-lg shadow-[0_0_15px_rgba(255,92,0,0.2)] transition-all"
            >
              + Post New Job
            </button>
            <button
              onClick={handleLogout}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Log out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Postings", value: jobs.length },
            { label: "Active",         value: jobs.filter((j) => j.status === "active").length },
            { label: "Deactivated",    value: jobs.filter((j) => j.status === "deactivated").length },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-4">
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="font-display text-2xl font-semibold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 animate-pulse">
                <div className="h-4 bg-border rounded w-1/3 mb-2" />
                <div className="h-3 bg-border rounded w-1/4" />
              </div>
            ))}
          </div>
        ) : jobs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 border border-dashed border-border rounded-2xl"
          >
            <p className="font-display text-xl font-semibold text-foreground mb-2">No jobs posted yet.</p>
            <p className="text-muted-foreground text-sm mb-6">Click &quot;Post New Job&quot; to get started.</p>
            <button
              onClick={() => { setForm(EMPTY_FORM); setDialogOpen(true); }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold h-10 px-6 rounded-lg shadow-[0_0_15px_rgba(255,92,0,0.2)] transition-all"
            >
              Post New Job
            </button>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${STATUS_STYLES[job.status]}`}>
                      {job.status === "active" ? "Active" : "Deactivated"}
                    </span>
                    <span className="text-xs text-muted-foreground">{job.type}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{job.location}</span>
                  </div>
                  <p className="font-display text-base font-semibold text-foreground truncate">{job.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Deadline: {new Date(job.deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    {" · "}
                    Posted: {new Date(job.postedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleToggleStatus(job)}
                    disabled={toggling === job.id}
                    className={`text-xs h-8 px-3 rounded-lg border transition-all ${
                      job.status === "active"
                        ? "border-border text-muted-foreground hover:border-red-500/40 hover:text-red-500"
                        : "border-green-500/30 text-green-500 hover:bg-green-500/10"
                    }`}
                  >
                    {toggling === job.id ? "..." : job.status === "active" ? "Deactivate" : "Activate"}
                  </button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="text-xs h-8 px-3 rounded-lg border border-border text-muted-foreground hover:border-red-500/40 hover:text-red-500 transition-all">
                        Delete
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete this job posting?</AlertDialogTitle>
                        <AlertDialogDescription>
                          &quot;{job.title}&quot; will be permanently removed. This cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(job.id)}
                          className="bg-red-500 hover:bg-red-600 text-white"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Post New Job Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Post New Job</DialogTitle>
          </DialogHeader>

          <form onSubmit={handlePostJob} className="space-y-4 pt-2">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handlePrefill}
                disabled={jobs.length === 0}
                className="text-xs text-primary hover:text-primary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ↑ Prefill from last posting
              </button>
            </div>

            {/* Row 1: Position + Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Position <span className="text-primary">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className={inputClass}
                  placeholder="Generative AI Intern"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Type <span className="text-primary">*</span>
                </label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value as JobType })}
                  className={inputClass}
                >
                  {JOB_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: Location + Timing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Location <span className="text-primary">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className={inputClass}
                  placeholder="Remote"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Timing
                </label>
                <input
                  type="text"
                  value={form.timing}
                  onChange={(e) => setForm({ ...form, timing: e.target.value })}
                  className={inputClass}
                  placeholder="08:00 AM – 04:00 PM IST"
                />
              </div>
            </div>

            {/* About Us */}
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                About Us <span className="text-primary">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={form.about}
                onChange={(e) => setForm({ ...form, about: e.target.value })}
                className={textareaClass}
                placeholder="Brief description of the company and mission..."
              />
            </div>

            {/* Key Responsibilities */}
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Key Responsibilities <span className="text-primary">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={form.responsibilities}
                onChange={(e) => setForm({ ...form, responsibilities: e.target.value })}
                className={textareaClass}
                placeholder="List responsibilities, one per line..."
              />
            </div>

            {/* Qualifications */}
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Qualifications <span className="text-primary">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={form.qualifications}
                onChange={(e) => setForm({ ...form, qualifications: e.target.value })}
                className={textareaClass}
                placeholder="Required skills and experience..."
              />
            </div>

            {/* Ideal Candidate */}
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Ideal Candidate
              </label>
              <textarea
                rows={3}
                value={form.idealCandidate}
                onChange={(e) => setForm({ ...form, idealCandidate: e.target.value })}
                className={textareaClass}
                placeholder="Who you're looking for beyond the hard skills..."
              />
            </div>

            {/* Compensation */}
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Compensation
              </label>
              <textarea
                rows={2}
                value={form.compensation}
                onChange={(e) => setForm({ ...form, compensation: e.target.value })}
                className={textareaClass}
                placeholder="e.g. Unpaid for 4 months, then ₹20,000–₹25,000/month based on performance..."
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Application Deadline <span className="text-primary">*</span>
              </label>
              <input
                required
                type="date"
                value={form.deadline}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className={inputClass}
              />
            </div>

            <DialogFooter className="pt-2">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="border-border">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={posting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(255,92,0,0.2)]"
              >
                {posting ? "Posting..." : "Post Job →"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
