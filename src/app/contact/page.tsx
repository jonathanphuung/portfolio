export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="content-panel reveal">
        <p className="eyebrow">Contact</p>
        <h1 className="hero-title">Let&apos;s Build Something Great</h1>
        <p className="hero-subtitle max-w-2xl">
          I am actively seeking software engineering internship opportunities and
          would love to connect.
        </p>
      </section>

      <section className="content-panel reveal">
        <div className="surface-card p-6">
          <h2 className="section-title">Reach Out</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-primary" href="mailto:jonathanphuung@gmail.com">
              Email
            </a>
            <a
              className="btn-secondary"
              href="https://www.linkedin.com/in/jonathanphung1/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn-secondary"
              href="https://github.com/jonathanphuung"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="btn-secondary" href="/Resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
