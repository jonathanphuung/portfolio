export type Project = {
  title: string;
  subtitle: string;
  blurb: string;
  stack: string[];
  highlights: string[];
  links?: { github?: string; demo?: string };
  images?: string[];
};

export type TimelineItem = {
  title: string;
  period: string;
  detail: string;
  type: "education" | "experience" | "project";
};

export const HERO_ROTATING_TEXT = [
  "Building full-stack web apps",
  "Exploring AI-powered products",
  "Seeking SWE internship opportunities",
];

export const PROJECTS: Project[] = [
  {
    title: "AI Caregiver Support Website",
    subtitle:
      "Internship Project · Next.js · AI Assistance · Resource Recommendations",
    blurb:
      "Support platform for caregivers with practical guidance for elderly care, including AI-powered responses plus recommended YouTube videos and Amazon items.",
    stack: ["Next.js", "React", "JavaScript", "AI Integration", "Web Development"],
    highlights: [
      "Built an accessible Q&A experience to help caregivers handle common elderly-care scenarios",
      "Integrated AI responses to provide context-aware support and next-step suggestions",
      "Added recommendation sections for helpful YouTube videos and relevant Amazon products",
    ],
    images: ["/caregiver-site-1.png", "/caregiver-site-2.png", "/caregiver-site-3.png"],
  },
  {
    title: "AI-Enhanced Smart Study Summarizer",
    subtitle: "Python · FastAPI · JavaScript · HTML/CSS · REST APIs",
    blurb:
      "Web app that generates concise summaries from academic text to speed up studying using transformer-based NLP.",
    stack: ["Python", "FastAPI", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Hugging Face Transformers (BART) for abstractive summarization",
      "FastAPI backend with a simple, accessible frontend",
      "REST API integration and clear usage documentation",
    ],
    links: {
      github: "https://github.com/jonathanphuung/smartStudy",
    },
    images: ["/ss.png"],
  },
  {
    title: "Sleep Research Survey Platform",
    subtitle: "Web App · JavaScript · Supabase · Data Collection",
    blurb:
      "Research website where students complete a guided sleep habits survey and receive personalized feedback, while responses are stored in Supabase for analysis.",
    stack: ["JavaScript", "Web Development", "Supabase", "UX", "Data Analysis"],
    highlights: [
      "Built a complete participant flow: study landing page, consent/disclaimer, and structured survey form",
      "Captured student responses and persisted records in Supabase for research review",
      "Generated personalized sleep analysis cards based on survey inputs",
      "Designed an accessible, student-friendly interface for quick completion",
    ],
    links: {
      github: "https://github.com/jonathanphuung/sleep-research",
    },
    images: ["/project-screenshot-1.png", "/project-screenshot-2.png", "/project-screenshot-3.png"],
  },
];

export const SKILLS = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Supabase",
  "TailwindCSS",
  "Git/GitHub",
  "VS Code",
  "IntelliJ",
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    title: "San Francisco State University",
    period: "2023 - 2027 (Expected)",
    detail:
      "B.S. in Computer Science with emphasis on software engineering, data structures, systems, and real-world product development.",
    type: "education",
  },
  {
    title: "Dementia Aide Internship",
    period: "Internship",
    detail:
      "Rebuilt the company's website end to end and created an AI model based on the founder's published work to answer caregiver questions and recommend relevant YouTube videos and Amazon items.",
    type: "experience",
  },
  {
    title: "Fulfillment Expert Team Captain @ Target",
    period: "Current",
    detail:
      "Led high-performing operations teams to district-leading outcomes through clear communication, process improvement, and high-pressure execution.",
    type: "experience",
  },
  {
    title: "AI-Enhanced Smart Study Summarizer",
    period: "Project",
    detail:
      "Built a FastAPI + NLP web app that turns dense study material into concise summaries to improve learning speed.",
    type: "project",
  },
  {
    title: "Caregiver Support Platform",
    period: "Project",
    detail:
      "Developed a Next.js support product with AI-assisted guidance and curated educational recommendations for caregivers.",
    type: "project",
  },
];
