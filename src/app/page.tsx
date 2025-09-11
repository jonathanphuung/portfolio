export default function Portfolio() {
  const PROJECTS = [
    {
      title: "Google Calendar Clone",
      subtitle: "Full‑stack scheduling app",
      blurb:
          "A modern calendar with month/week/day views, recurring events, drag‑n‑drop, and auth. Built to mirror real‑world product quality.",
      stack: ["React", "Next.js", "TailwindCSS", "Spring Boot", "Java", "PostgreSQL", "Supabase"],
      highlights: [
        "REST API with JWT auth; CRUD for events and recurring rules",
        "Server‑side rendering and ISR for fast loads",
        "E2E tests + CI (GitHub Actions)"
      ],
      links: {
        github: "https://github.com/your-username/calendar-clone",
        demo: "https://calendar-demo.vercel.app"
      }
    },
    {
      title: "ZombieAttack (ARMv8 Assembly)",
      subtitle: "Low‑level game logic",
      blurb:
          "Implements core mechanics (movement, collision, score) in ARMv8 with tight loops and register‑level optimization.",
      stack: ["ARMv8", "Assembly", "Raspberry Pi", "gdb"],
      highlights: [
        "Branchless hot path for 20% fewer cycles in critical loop",
        "Memory‑safe buffer ops; deterministic RNG",
        "Unit tests for routines (memcmp, memcpy, sprite ops)"
      ],
      links: {
        github: "https://github.com/your-username/zombieattack-armv8"
      }
    },
    {
      title: "Zoo Upgrade (Java OOP)",
      subtitle: "Data‑structures & patterns",
      blurb:
          "Refactors a legacy console app using SOLID, Strategy, and Factory patterns. Adds tests and profiling.",
      stack: ["Java", "JUnit", "Maven"],
      highlights: [
        "Replaced nested if‑else with polymorphism; 40% code reduction",
        "HashMap/Set‑backed index for O(1) lookups",
        ">90% line coverage"
      ],
      links: {
        github: "https://github.com/your-username/zoo-upgrade"
      }
    },
    {
      title: "TikTok Video Processor",
      subtitle: "Automation for shorts",
      blurb:
          "CLI + UI tool that slices YouTube videos into 1‑min clips, autogenerates captions, and exports 9:16.",
      stack: ["TypeScript", "Node.js", "FFmpeg", "Whisper"],
      highlights: [
        "Parallelized transcodes; ~3× throughput on M‑series Macs",
        "SRT → burned captions with style presets",
        "Pluggable pipeline for effects"
      ],
      links: {
        github: "https://github.com/your-username/tiktok-clipper"
      }
    }
  ];

  const SKILLS = [
    "Java", "C++", "TypeScript", "JavaScript", "React", "Next.js", "Spring Boot", "SQL",
    "PostgreSQL", "Supabase", "TailwindCSS", "Node.js", "Git", "ARMv8 Assembly", "JUnit", "FFmpeg"
  ];

  return (
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
        {/* Header */}
        <header className="mx-auto max-w-6xl px-6 pt-12 pb-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Jonathan Phung</h1>
              <p className="mt-2 text-lg text-slate-600">
                BSN Nurse & Computer Science Student · Building useful, reliable software
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
              A curated set of projects that show breadth (frontend, backend, low‑level) and depth (tests, performance, deployment).
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
                <article key={p.title} className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
                      <p className="text-sm text-slate-500">{p.subtitle}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{p.blurb}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                        <li key={s} className="text-xs px-2 py-1 rounded-full bg-slate-100 border">{s}</li>
                    ))}
                  </ul>
                  <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
                    {p.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-3 text-sm">
                    {p.links?.demo && (
                        <a className="px-3 py-1.5 rounded-full bg-slate-900 text-white hover:opacity-90" href={p.links.demo} target="_blank">Live Demo</a>
                    )}
                    {p.links?.github && (
                        <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href={p.links.github} target="_blank">GitHub</a>
                    )}
                  </div>
                </article>
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
              I’m a BSN nurse and CS student who builds practical tools that make everyday tasks easier. Recent focus areas: full‑stack
              web apps with Spring Boot backends, performance‑minded Java/TypeScript, and low‑level ARM on Raspberry Pi. I like clean
              APIs, thoughtful UI, and tests that catch bugs before users do.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pt-2 pb-12">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a className="px-3 py-1.5 rounded-full bg-slate-900 text-white hover:opacity-90" href="mailto:your.email@example.com">Email</a>
              <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href="https://linkedin.com/in/your-link" target="_blank">LinkedIn</a>
              <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href="https://github.com/your-username" target="_blank">GitHub</a>
              <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href="/resume.pdf" target="_blank">Resume (PDF)</a>
            </div>
          </div>
        </section>
      </main>
  );
}
