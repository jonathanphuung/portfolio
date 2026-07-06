export type Project = {
  title: string;
  year: string;
  summary: string;
  role: string;
  implementation: string[];
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
      "Caregivers describe a real situation in plain language—such as nighttime wandering or refusing food—and receive practical next steps instead of a generic chat response.",
    role: "I owned the caregiver search experience, response engine, resource ranking, safety handling, and commerce integration in a production Next.js application.",
    implementation: [
      "Built a deterministic TypeScript pipeline that tokenizes each query, expands caregiving synonyms, and classifies it into a specific care scenario and category.",
      "Mapped 25+ scenarios to structured guidance, then ranked curated resources by keyword overlap, category, and scenario so every answer includes relevant, trusted follow-up material.",
      "Added emergency phrase detection for stroke symptoms, missing-person events, medication risks, falls, and immediate safety threats, returning prominent action steps and authoritative sources.",
      "Connected cart items to Shopify variant IDs and used the Storefront GraphQL API to create a cart and send users into Shop Pay checkout.",
    ],
    stack: ["Next.js", "TypeScript", "Search ranking", "Shopify GraphQL"],
    image: "/caregiver-site-1.png",
    imageAlt: "Dementia care support platform home screen",
    links: [
      { label: "Live site", href: "https://dementia-aide.vercel.app/" },
      { label: "Source code", href: "https://github.com/jonathanphuung/DementiaAide" },
    ],
  },
  {
    title: "Application Tracker & Resume Fit Analyzer",
    year: "2025",
    summary:
      "Job seekers upload a résumé, paste a job description, and get an explainable fit score while managing every application from saved through offer or rejection.",
    role: "I designed and built the parsing APIs, matching algorithm, application pipeline, authentication flow, and local-to-cloud data synchronization.",
    implementation: [
      "Created a PDF upload route that validates file type and a 4 MB limit, extracts text with pdf-parse, removes noisy contact data, and returns actionable errors for unreadable files.",
      "Implemented an explainable scoring algorithm that normalizes skill aliases, separates matched and missing requirements, detects role signals such as ownership and testing, and generates targeted résumé recommendations.",
      "Built a hybrid persistence layer: signed-out users save to localStorage, then existing applications are assigned UUIDs and migrated into Supabase after Google OAuth sign-in.",
      "Designed the Postgres applications table, status constraints, indexes, update trigger, and row-level security policies that restrict CRUD operations to the authenticated user's rows.",
    ],
    stack: ["Next.js", "TypeScript", "PDF parsing", "Supabase/PostgreSQL"],
    image: "/ApplicationTracker1.png",
    imageAlt: "Application tracker dashboard with job cards and progress metrics",
    links: [
      {
        label: "Live site",
        href: "https://applicationtrackerforeveryone.vercel.app/",
      },
      {
        label: "Source code",
        href: "https://github.com/jonathanphuung/InternshipTracker",
      },
    ],
  },
  {
    title: "Sleep Research Data Collection Platform",
    year: "2025",
    summary:
      "A structured survey system for collecting consistent, anonymized student sleep data that researchers can analyze without relying on loosely formatted form responses.",
    role: "I built the participant survey, validation boundary, submission API, and relational data model for secure research-data collection.",
    implementation: [
      "Designed a guided survey flow that converts sleep habits and academic context into a consistent payload instead of free-form responses.",
      "Used shared Zod schemas to reject incomplete or malformed answers before they reach the database, with field-level feedback for participants.",
      "Created Next.js route handlers that validate submissions server-side and write normalized records to Supabase PostgreSQL.",
      "Separated survey responses from direct identity fields and applied row-level security so public participants can submit data without receiving access to the research dataset.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Zod"],
    image: "/project-screenshot-1.png",
    imageAlt: "Sleep research platform landing page",
    links: [],
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
