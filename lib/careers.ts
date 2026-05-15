export type JobStatus = "active" | "deactivated";
export type JobType = "Full-time" | "Part-time" | "Internship" | "Contract";

export interface Job {
  id: string;
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
  status: JobStatus;
  postedAt: string;
}
