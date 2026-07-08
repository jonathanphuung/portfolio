import Image from "next/image";
import { PROJECTS, SKILLS } from "@/data/portfolio";

const externalProps = { target: "_blank", rel: "noreferrer" } as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero section-wrap" aria-labelledby="intro-heading">
        <div className="availability">San Francisco Bay Area / open to SWE internships</div>
        <p className="intro-label">Hi, I&apos;m Jonathan.</p>
        <h1 id="intro-heading">
          CS student building web apps end-to-end.
        </h1>
        <p className="hero-copy">
          Most of the projects I build start with a simple question: how can I make this easier for someone? Whether it&apos;s a tool for caregivers or an app to organize a job search, I enjoy taking an idea and turning it into something people can use.
        </p>
        <div className="proof-bar" aria-label="Portfolio highlights">
          <div>
            <strong>3</strong>
            <span>shipped web app projects</span>
          </div>
          <div>
            <strong>SWE intern</strong>
            <span>Dementia Aide</span>
          </div>
          <div>
            <strong>UI, APIs, and data</strong>
            <span>React, Next.js, Supabase, PostgreSQL</span>
          </div>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            See my work
          </a>
          <a className="button" href="/Resume.pdf" {...externalProps}>
            Resume
          </a>
          <a className="text-link" href="mailto:jonathanphuung@gmail.com">
            Email me
          </a>
        </div>
      </section>

      <section className="section-wrap" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="work-heading">Three things I&apos;ve built</h2>
          </div>
          <p>What each app does, what I built, and why it matters.</p>
        </div>

        <div className="project-list">
          {PROJECTS.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1200}
                  height={700}
                  priority={index === 0}
                  className="project-image"
                />
                <p className="image-caption">{project.imageCaption}</p>
              </div>
              <div className="project-copy">
                <div className="project-number">0{index + 1} / {project.year}</div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-impact">{project.impact}</p>
                <dl className="project-facts" aria-label={`${project.title} quick facts`}>
                  <div>
                    <dt>Role</dt>
                    <dd>{project.roleLabel}</dd>
                  </div>
                  <div>
                    <dt>Built</dt>
                    <dd>{project.built.join(", ")}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>{project.stack.join(", ")}</dd>
                  </div>
                </dl>
                <div className="project-detail">
                  <span>My ownership</span>
                  <p>{project.role}</p>
                </div>
                <div className="project-implementation">
                  <span>How it works</span>
                  <ol aria-label={`${project.title} implementation details`}>
                    {project.implementation.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ol>
                </div>
                <ul className="skill-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} {...externalProps}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap experience" id="about" aria-labelledby="experience-heading">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 id="experience-heading">Experience &amp; education</h2>
          </div>
        </div>
        <div className="experience-grid">
          <article>
            <p className="experience-date">Sep 2025 - present</p>
            <h3>Software Engineering Intern</h3>
            <p className="experience-company">Dementia Aide</p>
            <p>
              I built a caregiver guidance assistant that helps families of people with dementia find the right care and support from the ground up. I built the search ranking, the Next.js frontend, and connected the app to Shopify for product recommendations and checkout.
            </p>
          </article>
          <article>
            <p className="experience-date">Computer Science</p>
            <h3>San Francisco State University</h3>
            <p className="experience-company">B.S. candidate</p>
            <p>
              Studying software engineering, data structures, databases, and how to
              build web apps from idea to release.
            </p>
          </article>
          <article>
            <p className="experience-date">Dec 2022 - present</p>
            <h3>Fulfillment Expert Team Captain</h3>
            <p className="experience-company">Target</p>
            <p>
              I lead teams of 7 to 20 people, set priorities for the day, and
              coordinate with other teams to meet strict deadlines.
            </p>
          </article>
        </div>
      </section>

      <section className="section-wrap looking" aria-labelledby="looking-heading">
        <div>
          <p className="section-kicker">Currently looking for</p>
          <h2 id="looking-heading">Software engineering internships</h2>
        </div>
        <p>
          I&apos;m looking for a team where I can continue building real features, collaborate closely with other engineers, and grow through mentorship and thoughtful code reviews.
        </p>
      </section>

      <section className="section-wrap skills" aria-labelledby="skills-heading">
        <p className="section-kicker">Tools I use</p>
        <h2 id="skills-heading">The short version</h2>
        <ul className="skill-list skill-list-large">
          {SKILLS.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </section>

      <section className="contact section-wrap" id="contact" aria-labelledby="contact-heading">
        <p className="section-kicker">Get in touch</p>
        <h2 id="contact-heading">Looking for a software engineering intern?</h2>
        <p>I&apos;d be happy to talk about frontend, product engineering, or web platform internship opportunities.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:jonathanphuung@gmail.com">
            Email Jonathan
          </a>
          <a className="text-link" href="https://www.linkedin.com/in/jonathanphuung" {...externalProps}>
            LinkedIn
          </a>
          <a className="text-link" href="https://github.com/jonathanphuung" {...externalProps}>
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
