import { TIMELINE_ITEMS } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="content-panel reveal">
        <p className="eyebrow">About Me</p>
        <h1 className="hero-title">Building Software with Purpose</h1>
        <p className="hero-subtitle max-w-3xl">
          I am a Computer Science student at San Francisco State University who
          enjoys building software that balances technical reliability and human
          usability.
        </p>
      </section>

      <section className="content-panel reveal">
        <h2 className="section-title">Timeline</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {TIMELINE_ITEMS.map((item) => (
            <article key={item.title} className="surface-card p-5">
              <p className="eyebrow">{item.type}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.period}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-panel reveal">
        <h2 className="section-title">What I am Looking For</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>SWE internship where I can ship meaningful product features.</li>
          <li>Mentorship-oriented engineering team and code review culture.</li>
          <li>Opportunities to work across frontend and backend systems.</li>
        </ul>
      </section>
    </main>
  );
}
