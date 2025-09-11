export default function Portfolio() {
  const PROJECTS = [

    {
      title: "Order Fulfillment Dashboard",
      subtitle: "Next.js · React · Tailwind CSS · Supabase",
      blurb:
        "Full‑stack order management dashboard with server‑side rendering and real‑time tracking for high‑volume fulfillment.",
      stack: ["Next.js", "React", "TailwindCSS", "Supabase"],
      highlights: [
        "SSR for fast load times; responsive, interactive UI components",
        "Supabase integration for backend data and real‑time order updates",
        "Clean setup docs and environment configuration"
      ],
      links: {
        github: "https://github.com/jonathanphuung/order-fulfillment-dashboard"
      }
    },
    {
      title: "AI‑Enhanced Smart Study Summarizer",
      subtitle: "Python · FastAPI · JavaScript · HTML/CSS · REST APIs",
      blurb:
        "Web app that generates concise summaries from academic text to speed up studying using transformer‑based NLP.",
      stack: ["Python", "FastAPI", "JavaScript", "HTML", "CSS"],
      highlights: [
        "Hugging Face Transformers (BART) for abstractive summarization",
        "FastAPI backend with a simple, accessible frontend",
        "REST API integration and clear usage documentation"
      ],
      links: {
        github: "https://github.com/jonathanphuung/smart-study-summarizer"
      }
    }
  ];

  const SKILLS = [
    "Java", "JavaScript", "HTML", "CSS", "React", "Next.js", "Node.js", "TailwindCSS",
    "Git", "GitHub", "VS Code", "Visual Studio", "IntelliJ", "Supabase"
  ];

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
              I’m a Computer Science student at San Francisco State University (B.S., expected May 2027). Recent work includes a
              Next.js/Supabase order fulfillment dashboard and an AI‑powered study summarizer using FastAPI and transformers. I’ve
              completed CodePath’s Technical Interview Prep (Aug 2025) and Coursera certificates in Introduction to Software Development
              and Programming with Java. I also lead high‑volume operations as a Fulfillment Expert Team Captain at Target, where I focus
              on data‑driven process improvements, speed, and accuracy.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pt-2 pb-12">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a className="px-3 py-1.5 rounded-full bg-slate-900 text-white hover:opacity-90" href="mailto:jphung@sfsu.edu">Email</a>
              <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href="https://www.linkedin.com/in/jonathanphung1/" target="_blank">LinkedIn</a>
              <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href="https://github.com/jonathanphuung" target="_blank">GitHub</a>
              <a className="px-3 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300" href="/Resume.pdf" target="_blank">Resume (PDF)</a>
            </div>
          </div>
        </section>
      </main>
  );
}
