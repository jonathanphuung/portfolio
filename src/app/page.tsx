import Link from "next/link";
import { HERO_ROTATING_TEXT, SKILLS } from "@/data/portfolio";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-panel reveal">
        <p className="eyebrow">Software Engineering Portfolio</p>
        <h1 className="hero-title">Jonathan Phung</h1>
        <p className="hero-subtitle">
          Computer Science student at San Francisco State University seeking a
          Software Engineering Internship.
        </p>
        <p className="hero-rotator">{HERO_ROTATING_TEXT.join(" • ")}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="btn-primary">
            View Projects
          </Link>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
            Download Resume
          </a>
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </section>

      <section className="content-panel reveal">
        <h2 className="section-title">What I Bring</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="surface-card p-5">
            <h3 className="text-lg font-semibold">Engineering Fundamentals</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Strong foundation in software construction, APIs, and practical
              product thinking.
            </p>
          </article>
          <article className="surface-card p-5">
            <h3 className="text-lg font-semibold">Leadership</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Experience leading high-performing teams with communication and
              execution under pressure.
            </p>
          </article>
          <article className="surface-card p-5">
            <h3 className="text-lg font-semibold">Product Focus</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              I enjoy building software that solves real user problems with
              clear UX and measurable impact.
            </p>
          </article>
        </div>
      </section>

      <section className="content-panel reveal">
        <h2 className="section-title">Core Skills</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}