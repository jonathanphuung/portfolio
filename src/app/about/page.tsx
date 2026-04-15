import { TIMELINE_ITEMS } from "@/data/portfolio";

export default function AboutPage() {
  const aboutTimelineItems = TIMELINE_ITEMS.filter((item) => item.type !== "project");

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
          {aboutTimelineItems.map((item) => (
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
        <h2 className="section-title">Internship Experience</h2>
        <article className="surface-card mt-6 p-5 md:p-6">
          <p className="eyebrow">Dementia Aide</p>
          <h3 className="mt-2 text-xl font-semibold">Website rebuild and AI caregiver assistant</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
            I rebuilt the entire website and developed an AI model based on the founder's published work.
            The system helps caregivers get answers to their questions and recommends helpful YouTube
            videos and Amazon items for the topic they are asking about.
          </p>
        </article>
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
