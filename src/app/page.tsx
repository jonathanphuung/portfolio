"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

type Project = {
  title: string;
  subtitle: string;
  blurb: string;
  stack: string[];
  highlights: string[];
  links?: { github?: string; demo?: string };
  images?: string[];
};

export default function Portfolio() {
  const PROJECTS: Project[] = [
    {
      title: "Order Fulfillment Dashboard",
      subtitle: "Next.js · React · Tailwind CSS · Supabase",
      blurb:
          "Full-stack order management dashboard with server-side rendering and real-time tracking for high-volume fulfillment.",
      stack: ["Next.js", "React", "TailwindCSS", "Supabase"],
      highlights: [
        "SSR for fast load times; responsive, interactive UI components",
        "Supabase integration for backend data and real-time order updates",
        "Clean setup docs and environment configuration",
      ],
      links: {
        github: "https://github.com/jonathanphuung/order-fulfillment-dashboard",
      },
      images: ["/ff1.png", "/ff2.png"],
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
  ];

  const SKILLS = [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Git",
    "GitHub",
    "VS Code",
    "Visual Studio",
    "IntelliJ",
    "Supabase",
  ];

  // ---------- Lightbox state ----------
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = useCallback((images: string[], startIndex: number, title: string) => {
    setLightboxImages(images);
    setLightboxIndex(startIndex);
    setLightboxTitle(title);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
    setLightboxTitle("");
  }, []);

  const nextLightbox = useCallback(() => {
    if (!lightboxImages.length) return;
    setLightboxIndex((i) => (i + 1) % lightboxImages.length);
  }, [lightboxImages]);

  const prevLightbox = useCallback(() => {
    if (!lightboxImages.length) return;
    setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length);
  }, [lightboxImages]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, nextLightbox, prevLightbox]);

  return (
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
        {/* Header */}
        <header className="mx-auto max-w-6xl px-6 pt-12 pb-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Jonathan Phung</h1>
              <p className="mt-2 text-lg text-slate-600">
                Computer Science Student · Building useful, reliable software
              </p>
            </div>
            <nav className="flex gap-3 text-sm">
              <a className="px-4 py-2 rounded-full bg-slate-900 text-white hover:opacity-90" href="#projects">Projects</a>
              <a className="px-4 py-2 rounded-full bg-slate-200 hover:bg-slate-300" href="#skills">Skills</a>
              <a className="px-4 py-2 rounded-full bg-slate-200 hover:bg-slate-300" href="#about">About</a>
              <a className="px-4 py-2 rounded-full bg-slate-200 hover:bg-slate-300" href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-4">
          <div className="rounded-2xl border bg-white p-6 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
            <p className="mt-2 text-slate-600">
              A curated set of projects that show breadth (frontend, backend, low-level)
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
                <ProjectCard
                    key={p.title}
                    project={p}
                    onOpenLightbox={(idx) => openLightbox(p.images ?? [], idx, p.title)}
                />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-6">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <p className="mt-2 text-slate-600 text-sm">Core tools and languages I use regularly.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full bg-slate-100 border">{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-6">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-2 text-slate-700 leading-7">
              I’m a Computer Science student at San Francisco State University (B.S., expected May 2027) currently learning AWS to expand my cloud skills. Recent work includes a Next.js/Supabase order fulfillment dashboard and an AI-powered study summarizer using FastAPI and transformers. In my role as a Fulfillment Expert Team Captain at Target, I lead a high-performing team that achieved the #1 store ranking in our district. I use data-driven improvements to streamline operations, consistently meet tight deadlines, and cultivate strong communication and collaboration in a high-pressure environments. These experiences have strengthened my leadership, teamwork, and problem-solving abilities, which I carry into every technical project.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pt-2 pb-12">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a className="px-3 py-1.5 rounded-full bg-slate-900 text-white hover:opacity-90" href="mailto:jonathanphuung@gmail.com">Email</a>
              <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href="https://www.linkedin.com/in/jonathanphung1/" target="_blank">LinkedIn</a>
              <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href="https://github.com/jonathanphuung" target="_blank">GitHub</a>
              <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href="/Resume.pdf" target="_blank">Resume (PDF)</a>
            </div>
          </div>
        </section>

        <Lightbox
            open={lightboxOpen}
            images={lightboxImages}
            index={lightboxIndex}
            title={lightboxTitle}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
        />
      </main>
  );
}

/** ---------- Project Card with Slider ---------- */
function ProjectCard({
                       project,
                       onOpenLightbox,
                     }: {
  project: Project;
  onOpenLightbox: (index: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const imgs = project.images ?? [];

  const next = () => setIdx((i) => (i + 1) % Math.max(imgs.length, 1));
  const prev = () => setIdx((i) => (i - 1 + Math.max(imgs.length, 1)) % Math.max(imgs.length, 1));
  const goTo = (i: number) => setIdx(i);

  return (
      <article className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
        {imgs.length > 0 && (
            <div className="relative mb-3 overflow-hidden rounded-lg">
              {/* Arrows always on top */}
              <button
                  aria-label="Previous image"
                  onClick={prev}
                  className="absolute z-20 left-2 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 px-2 py-1 text-xs shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                  aria-label="Next image"
                  onClick={next}
                  className="absolute z-20 right-2 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 px-2 py-1 text-xs shadow hover:bg-white"
              >
                ›
              </button>

              {/* Image */}
              <div className="relative z-0">
                <Image
                    src={imgs[idx]}
                    alt={`${project.title} screenshot ${idx + 1} of ${imgs.length}`}
                    width={800}
                    height={450}
                    className="w-full h-44 md:h-40 lg:h-36 object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    priority={true}
                />
              </div>

              {/* Click overlay to open fullscreen */}
              <button
                  type="button"
                  onClick={() => onOpenLightbox(idx)}
                  title="Click to view fullscreen"
                  className="absolute inset-0 z-10 cursor-zoom-in"
                  aria-label="Open image in fullscreen"
              />

              {/* Dots */}
              <div className="absolute z-10 bottom-2 left-0 right-0 flex items-center justify-center gap-1.5">
                {imgs.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to image ${i + 1}`}
                        onClick={() => goTo(i)}
                        className={`h-1.5 w-3 rounded-full transition ${
                            i === idx ? "bg-white shadow ring-1 ring-black/10" : "bg-white/60 hover:bg-white"
                        }`}
                    />
                ))}
              </div>
            </div>
        )}

        <div className="flex items-start justify-between gap-3">
          <div>
            {project.links?.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                title="Open GitHub repository"
                className="block"
              >
                <h3 className="text-xl font-semibold group-hover:underline underline-offset-4 cursor-pointer">
                  {project.title}
                </h3>
              </a>
            ) : (
              <h3 className="text-xl font-semibold">{project.title}</h3>
            )}
            <p className="text-sm text-slate-500">{project.subtitle}</p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-700">{project.blurb}</p>

        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((s) => (
              <li key={s} className="text-xs px-2 py-1 rounded-full bg-slate-100 border">
                {s}
              </li>
          ))}
        </ul>

        <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
          {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="mt-4 flex gap-3 text-sm">
          {project.links?.demo && (
              <a
                  className="px-3 py-1.5 rounded-full bg-slate-900 text-white hover:opacity-90"
                  href={project.links.demo}
                  target="_blank"
              >
                Live Demo
              </a>
          )}
        </div>
      </article>
  );
}

/** ---------- Fullscreen Lightbox ---------- */
function Lightbox({
                    open,
                    images,
                    index,
                    title,
                    onClose,
                    onPrev,
                    onNext,
                  }: {
  open: boolean;
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  if (!open || images.length === 0) return null;

  return (
      <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
      >
        <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
        >
          {/* Title + Close */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white text-sm md:text-base">{title}</h3>
            <button
                aria-label="Close"
                className="rounded-md bg-white/10 px-3 py-1 text-white hover:bg-white/20"
                onClick={onClose}
            >
              ✕
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-lg border border-white/20">
            <button
                aria-label="Previous"
                onClick={onPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 px-3 py-2 text-black hover:bg-white"
            >
              ‹
            </button>

            <button
                aria-label="Next"
                onClick={onNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 px-3 py-2 text-black hover:bg-white"
            >
              ›
            </button>

            <Image
                src={images[index]}
                alt={`${title} fullscreen ${index + 1} of ${images.length}`}
                width={1600}
                height={900}
                className="w-full h-[70vh] object-contain bg-black"
                priority={true}
            />
          </div>

          {/* Dots */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {images.map((_, i) => (
                <span
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                        i === index ? "bg-white" : "bg-white/50"
                    }`}
                />
            ))}
          </div>

          <p className="mt-2 text-center text-xs text-white/70">
            Press Esc to close • ←/→ to navigate
          </p>
        </div>
      </div>
  );
}