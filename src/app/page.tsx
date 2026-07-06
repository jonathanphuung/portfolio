import Image from "next/image";
import { PROJECTS, SKILLS } from "@/data/portfolio";

const externalProps = { target: "_blank", rel: "noreferrer" } as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero section-wrap" aria-labelledby="intro-heading">
        <div className="availability">San Francisco Bay Area · Open to SWE internships</div>
        <p className="intro-label">Hi, I&apos;m Jonathan.</p>
        <h1 id="intro-heading">
          Full-stack engineer building useful software.
        </h1>
        <p className="hero-copy">
          I&apos;m a computer science student at San Francisco State University with
          hands-on software engineering experience. I build accessible web products
          with React, Next.js, TypeScript, and PostgreSQL.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            See my work
          </a>
          <a className="button" href="/Resume.pdf" {...externalProps}>
            Resume <span aria-hidden="true">↗</span>
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
          <p>The problem, the data flow, and the engineering decisions behind each product.</p>
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
              </div>
              <div className="project-copy">
                <div className="project-number">0{index + 1} / {project.year}</div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
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
                        {link.label} <span aria-hidden="true">↗</span>
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
              I turn Figma designs into a caregiver support app, build recommendation
              features, and connect the product to Shopify&apos;s storefront tools.
            </p>
          </article>
          <article>
            <p className="experience-date">Computer Science</p>
            <h3>San Francisco State University</h3>
            <p className="experience-company">B.S. candidate</p>
            <p>
              Building a practical foundation in software engineering, data structures,
              databases, and full-stack product development.
            </p>
          </article>
          <article>
            <p className="experience-date">Dec 2022 - present</p>
            <h3>Fulfillment Expert Team Captain</h3>
            <p className="experience-company">Target</p>
            <p>
              I coordinate teams of 7 to 20 people, set daily priorities, and help
              the team solve problems when plans change.
            </p>
          </article>
        </div>
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
        <h2 id="contact-heading">Have an internship or a project in mind?</h2>
        <p>I&apos;d be glad to hear about it.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:jonathanphuung@gmail.com">
            Email Jonathan
          </a>
          <a className="text-link" href="https://www.linkedin.com/in/jonathanphuung" {...externalProps}>
            LinkedIn ↗
          </a>
          <a className="text-link" href="https://github.com/jonathanphuung" {...externalProps}>
            GitHub ↗
          </a>
        </div>
      </section>
    </main>
  );
}
