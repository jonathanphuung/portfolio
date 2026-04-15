import Link from "next/link";
import { SiGithub, SiIntellijidea, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { HERO_ROTATING_TEXT } from "@/data/portfolio";

const CORE_TOOLS = [
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "IntelliJ IDEA", Icon: SiIntellijidea, color: "#000000" },
];
const MARQUEE_TOOLS = [...CORE_TOOLS, ...CORE_TOOLS];

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
        <div className="logo-carousel mt-6" aria-label="Rotating core skills carousel">
          <div className="logo-carousel-viewport">
            <div className="logo-carousel-track">
              {MARQUEE_TOOLS.map(({ name, Icon, color }, index) => (
                <div key={`${name}-${index}`} className="logo-carousel-tile">
                  <div className="logo-carousel-card">
                    <div className="logo-carousel-glow" style={{ ["--logo-color" as string]: color }} />
                    <Icon className="logo-icon" aria-hidden="true" style={{ color }} />
                    <span className="sr-only">{name}</span>
                    <span className="logo-label">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}