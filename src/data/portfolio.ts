export type Project = {
  title: string;
  year: string;
  summary: string;
  impact: string;
  role: string;
  roleLabel: string;
  built: string[];
  implementation: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  images?: { src: string; alt: string; caption: string }[];
  links: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "FulfillFlow",
    year: "2026",
    summary:
      "A warehouse fulfillment API that reserves inventory safely and turns orders into asynchronous picking work.",
    impact: "Keeps stock counts accurate during concurrent orders and prevents committed work from being lost when services fail.",
    role: "I designed and built the API, database transactions, event pipeline, security model, caching, observability, and automated test workflow.",
    roleLabel: "Backend engineering project",
    built: ["Inventory locking", "Async order processing", "JWT roles", "Full-stack CI"],
    implementation: [
      "Used PostgreSQL transactions and row locks to reserve inventory without overselling under concurrent requests.",
      "Implemented a transactional outbox that reliably publishes committed order events to RabbitMQ for asynchronous fulfillment.",
      "Added Redis catalog caching, JWT role-based access, Flyway migrations, and Prometheus application metrics.",
      "Built integration and smoke tests that exercise the API with real PostgreSQL, RabbitMQ, and Redis services in GitHub Actions.",
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "RabbitMQ", "Redis", "Docker"],
    image: "/fulfillflow-swagger.png",
    imageAlt: "FulfillFlow Swagger API documentation",
    imageCaption: "Interactive API documentation",
    images: [
      { src: "/fulfillflow-swagger.png", alt: "FulfillFlow Swagger API documentation showing seven controller groups", caption: "Interactive API documentation" },
      { src: "/fulfillflow-products.png", alt: "FulfillFlow product API response with seeded warehouse inventory", caption: "Seeded product inventory" },
      { src: "/fulfillflow-tasks.png", alt: "FulfillFlow API response showing three asynchronous fulfillment tasks", caption: "Asynchronous fulfillment tasks" },
      { src: "/fulfillflow-rabbitmq.png", alt: "RabbitMQ dashboard showing FulfillFlow processing and dead-letter queues", caption: "RabbitMQ processing queues" },
    ],
    links: [
      { label: "Source code", href: "https://github.com/jonathanphuung/fulfillflow" },
    ],
  },
  {
    title: "Dementia Care Support Platform",
    year: "2026",
    summary:
      "Caregivers type what is happening, like nighttime wandering or refusing food, and the app gives practical next steps.",
    impact: "Helps caregivers get useful guidance without digging through long articles or guessing what to search.",
    role: "I built the search flow, the answer logic, the resource matching, the safety checks, and the Shopify checkout connection.",
    roleLabel: "Software engineering intern",
    built: ["Search", "Answer logic", "Safety checks", "Shopify checkout"],
    implementation: [
      "Turned caregiver questions into categories the app can understand, such as wandering, food refusal, falls, and medication issues.",
      "Matched more than 25 care scenarios to clear guidance and related resources.",
      "Added safety checks for emergencies, including stroke symptoms, missing-person situations, medication risks, and falls.",
      "Connected product cards to Shopify so users can add items and check out through Shop Pay.",
    ],
    stack: ["Next.js", "TypeScript", "Search ranking", "Shopify GraphQL"],
    image: "/caregiver-site-1.png",
    imageAlt: "Dementia care support platform home screen",
    imageCaption: "Caregiver guidance assistant",
    links: [
      { label: "Live site ↗ ", href: "https://dementia-aide.vercel.app/" },
      { label: "Source code ↗ ", href: "https://github.com/jonathanphuung/DementiaAide" },
    ],
  },
  {
    title: "Application Tracker & Resume Fit Analyzer",
    year: "2025",
    summary:
      "Job seekers upload a resume, paste a job post, and get a clear fit score while tracking each application.",
    impact: "Gives job seekers a clearer way to track applications and see what their resume is missing.",
    role: "I built the resume parser, the job matching logic, the application tracker, Google sign-in, and the Supabase database setup.",
    roleLabel: "Software engineering project",
    built: ["PDF parsing", "Fit scoring", "Google sign-in", "Supabase database"],
    implementation: [
      "Built a PDF upload route that checks file type and size, extracts resume text, and gives useful errors when a file cannot be read.",
      "Created a scoring system that shows matched skills, missing skills, and specific ways to improve the resume.",
      "Let signed-out users save applications in the browser, then move that data into Supabase after Google sign-in.",
      "Set up the Postgres tables, indexes, status rules, update trigger, and row-level security policies.",
    ],
    stack: ["Next.js", "TypeScript", "PDF parsing", "Supabase/PostgreSQL"],
    image: "/ApplicationTracker1.png",
    imageAlt: "Application tracker dashboard with job cards and progress metrics",
    imageCaption: "Application tracker & Resume fit analyzer",
    links: [
      {
        label: "Live site ↗ ",
        href: "https://applicationtrackerforeveryone.vercel.app/",
      },
      {
        label: "Source code ↗ ",
        href: "https://github.com/jonathanphuung/InternshipTracker",
      },
    ],
  },
  {
    title: "Sleep Research Data Collection Platform",
    year: "2025",
    summary:
      "A survey app for collecting consistent student sleep data without messy free-form responses.",
    impact: "Helps researchers collect cleaner sleep data that is easier to review and analyze later.",
    role: "I built the survey flow, validation, submission API, and database structure.",
    roleLabel: "Software engineering project",
    built: ["Survey flow", "Validation", "API routes", "Database design"],
    implementation: [
      "Designed a step-by-step survey for sleep habits and school context.",
      "Used Zod to catch missing or invalid answers before they reach the database.",
      "Created Next.js API routes that validate submissions and save clean records to Supabase.",
      "Separated survey answers from identity fields and used row-level security to protect the dataset.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Zod"],
    image: "/project-screenshot-1.png",
    imageAlt: "Sleep research platform landing page",
    imageCaption: "Sleep research data collection platform",
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
