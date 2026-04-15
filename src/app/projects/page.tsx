import { ProjectsShowcase } from "@/components/projects-showcase";
import { PROJECTS } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="content-panel reveal">
        <p className="eyebrow">Selected Work</p>
        <h1 className="hero-title">Projects</h1>
        <p className="hero-subtitle max-w-3xl">
          A project showcase focused on applied software engineering, practical AI,
          and user-centered web experiences.
        </p>
      </section>

      <section className="content-panel reveal">
        <ProjectsShowcase projects={PROJECTS} />
      </section>
    </main>
  );
}
