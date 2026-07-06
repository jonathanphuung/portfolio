export type Project = {
  title: string;
  year: string;
  summary: string;
  contribution: string;
  stack: string[];
  image: string;
  imageAlt: string;
  links: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Dementia Care Support Platform",
    year: "2026",
    summary:
      "A web app that gives dementia caregivers clear, situation-specific guidance and useful resources.",
    contribution:
      "I built the Next.js and TypeScript app, created an advice engine for 13+ caregiving situations, and added searchable videos and product recommendations.",
    stack: ["Next.js", "TypeScript", "NLP", "Shopify API"],
    image: "/caregiver-site-1.png",
    imageAlt: "Dementia care support platform home screen",
    links: [{ label: "Live site", href: "https://dementia-aide.vercel.app/" }],
  },
  {
    title: "Application Tracker & Resume Fit Analyzer",
    year: "2025",
    summary:
      "A full-stack tool for tracking internship applications and comparing a resume with a job description.",
    contribution:
      "I built resume PDF upload, skill matching, application metrics, Google sign-in, and per-user data storage with Supabase row-level security.",
    stack: ["Next.js", "TypeScript", "Supabase", "Google OAuth"],
    image: "/ApplicationTracker1.png",
    imageAlt: "Application tracker dashboard with job cards and progress metrics",
    links: [
      {
        label: "Live site",
        href: "https://applicationtrackerforeveryone.vercel.app/",
      },
    ],
  },
  {
    title: "Sleep Research Data Collection Platform",
    year: "2025",
    summary:
      "A research platform that collects anonymized student sleep surveys and stores structured responses for analysis.",
    contribution:
      "I built the survey flow, validated submissions with Zod, created secure API routes, and designed the PostgreSQL data model with Supabase row-level security.",
    stack: ["Next.js", "TypeScript", "Supabase", "Zod"],
    image: "/project-screenshot-1.png",
    imageAlt: "Sleep research platform landing page",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jonathanphuung/sleep-research",
      },
    ],
  },
];

export const SKILLS = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Git",
];
