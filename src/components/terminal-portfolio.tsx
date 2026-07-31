"use client";

import { FormEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ProjectGallery } from "@/components/project-gallery";
import { EXPERIENCE, PROFILE, type Project } from "@/data/portfolio";

type OutputKind =
  | "welcome"
  | "help"
  | "about"
  | "projects"
  | "project"
  | "experience"
  | "skills"
  | "contact"
  | "resume"
  | "all"
  | "error";

type CommandResult = {
  kind: OutputKind;
  projectIndex?: number;
  message?: string;
};

type TerminalEntry = {
  id: number;
  command: string | null;
  result: CommandResult;
};

const QUICK_COMMANDS = [
  { command: "about", label: "About", index: "01" },
  { command: "projects", label: "Projects", index: "02" },
  { command: "experience", label: "Experience", index: "03" },
  { command: "skills", label: "Skills", index: "04" },
  { command: "contact", label: "Contact", index: "05" },
  { command: "resume", label: "Resume", index: "06" },
];

const BASE_COMMANDS = ["help", "about", "projects", "experience", "skills", "contact", "resume", "all", "clear"];
const externalProps = { target: "_blank", rel: "noreferrer" } as const;

function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function resolveCommand(rawCommand: string, projects: Project[]): CommandResult {
  const normalized = rawCommand.trim().toLowerCase();
  const aliases: Record<string, string> = {
    whoami: "about",
    work: "projects",
    ls: "projects",
    cv: "resume",
    mail: "contact",
  };
  const command = aliases[normalized] ?? normalized;

  if (BASE_COMMANDS.includes(command)) {
    return { kind: command === "clear" ? "welcome" : command as OutputKind };
  }

  const projectQuery = command.startsWith("project ")
    ? command.slice("project ".length).trim()
    : command.startsWith("open ")
      ? command.slice("open ".length).trim()
      : "";

  if (projectQuery) {
    const numericIndex = Number(projectQuery) - 1;
    const projectIndex = Number.isInteger(numericIndex) && projects[numericIndex]
      ? numericIndex
      : projects.findIndex((project) => {
          const slug = slugify(project.title);
          return slug === projectQuery || slug.includes(projectQuery.replace(/\s+/g, "-"));
        });

    if (projectIndex >= 0) return { kind: "project", projectIndex };
    return { kind: "error", message: `Project not found: ${projectQuery}` };
  }

  return { kind: "error", message: `Command not found: ${rawCommand}` };
}

function PromptLine({ command, typing = false }: { command: string; typing?: boolean }) {
  return (
    <div className="prompt-line">
      <span className="prompt-user">jonathan@portfolio</span>
      <span className="prompt-separator">:</span>
      <span className="prompt-path">~</span>
      <span className="prompt-symbol">$</span>
      <span>{command}</span>
      {typing && <span className="terminal-cursor" aria-hidden="true" />}
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <div className="output-label">{children}</div>;
}

function ProjectsOutput({ projects, onCommand }: { projects: Project[]; onCommand: (command: string) => void }) {
  return (
    <div className="terminal-output">
      <SectionLabel>projects/</SectionLabel>
      <p className="output-intro">Four shipped projects spanning backend systems, product engineering, and data collection.</p>
      <div className="project-index">
        {projects.map((project, index) => (
          <button key={project.title} type="button" onClick={() => onCommand(`project ${index + 1}`)}>
            <span className="project-index-number">0{index + 1}</span>
            <span className="project-index-main">
              <strong>{project.title}</strong>
              <span>{project.summary}</span>
            </span>
            <span className="project-index-year">{project.year}</span>
          </button>
        ))}
      </div>
      <p className="command-hint">Run <code>project 1</code> or select a row to inspect a project.</p>
    </div>
  );
}

function ProjectOutput({ project, index }: { project: Project; index: number }) {
  const images = project.images ?? [{ src: project.image, alt: project.imageAlt, caption: project.imageCaption }];

  return (
    <div className="terminal-output project-output">
      <SectionLabel>{`projects/0${index + 1}`}</SectionLabel>
      <div className="project-output-heading">
        <div>
          <p>{project.roleLabel} / {project.year}</p>
          <h2>{project.title}</h2>
        </div>
        <span className="project-status">shipped</span>
      </div>
      <p className="project-output-summary">{project.summary}</p>
      <p className="project-output-impact">Outcome: {project.impact}</p>
      <div className="project-terminal-grid">
        <ProjectGallery images={images} />
        <div>
          <dl className="terminal-facts">
            <div><dt>Role</dt><dd>{project.roleLabel}</dd></div>
            <div><dt>Built</dt><dd>{project.built.join(" · ")}</dd></div>
            <div><dt>Stack</dt><dd>{project.stack.join(" · ")}</dd></div>
          </dl>
          <div className="ownership-block">
            <h3>Ownership</h3>
            <p>{project.role}</p>
          </div>
        </div>
      </div>
      <ol className="implementation-list">
        {project.implementation.map((detail) => <li key={detail}>{detail}</li>)}
      </ol>
      {project.links.length > 0 && (
        <div className="terminal-links">
          {project.links.map((link) => <a key={link.href} href={link.href} {...externalProps}>[{link.label}]</a>)}
        </div>
      )}
    </div>
  );
}

function AboutOutput() {
  return (
    <div className="terminal-output">
      <SectionLabel>about.txt</SectionLabel>
      <div className="about-grid">
        <dl>
          <div><dt>Name</dt><dd>{PROFILE.name}</dd></div>
          <div><dt>Location</dt><dd>{PROFILE.location}</dd></div>
          <div><dt>Status</dt><dd className="status-value">{PROFILE.availability}</dd></div>
        </dl>
        <div>
          <h2>{PROFILE.headline}</h2>
          <p>{PROFILE.summary}</p>
        </div>
      </div>
    </div>
  );
}

function ExperienceOutput() {
  return (
    <div className="terminal-output">
      <SectionLabel>experience.log</SectionLabel>
      <div className="timeline-list">
        {EXPERIENCE.map((item) => (
          <article key={`${item.role}-${item.organization}`}>
            <p>{item.period}</p>
            <h2>{item.role}</h2>
            <strong>{item.organization}</strong>
            <span>{item.description}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

function SkillsOutput({ skills }: { skills: string[] }) {
  const groups = [
    { label: "languages", values: skills.filter((skill) => ["Java", "Python", "JavaScript", "TypeScript"].includes(skill)) },
    { label: "frontend", values: skills.filter((skill) => ["React", "Next.js"].includes(skill)) },
    { label: "backend/data", values: skills.filter((skill) => ["Node.js", "Supabase", "PostgreSQL"].includes(skill)) },
    { label: "workflow", values: skills.filter((skill) => skill === "Git") },
  ];

  return (
    <div className="terminal-output">
      <SectionLabel>skills.json</SectionLabel>
      <div className="skills-table">
        {groups.map((group) => (
          <div key={group.label}>
            <span>{group.label}</span>
            <ul>{group.values.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactOutput() {
  return (
    <div className="terminal-output">
      <SectionLabel>contact.sh</SectionLabel>
      <h2>Let&apos;s build something useful.</h2>
      <p className="output-intro">I&apos;m currently looking for software engineering internships and teams that value mentorship, collaboration, and thoughtful engineering.</p>
      <div className="terminal-links contact-links">
        <a href={`mailto:${PROFILE.email}`}>[email]</a>
        <a href={PROFILE.linkedin} {...externalProps}>[linkedin]</a>
        <a href={PROFILE.github} {...externalProps}>[github]</a>
      </div>
    </div>
  );
}

function HelpOutput({ projects }: { projects: Project[] }) {
  return (
    <div className="terminal-output">
      <SectionLabel>available commands</SectionLabel>
      <dl className="help-list">
        {[
          ["about", "Profile and availability"],
          ["projects", "List all shipped work"],
          ["project <1-4>", "Open a detailed project view"],
          ["experience", "Work and education history"],
          ["skills", "Technical toolkit"],
          ["contact", "Email and social links"],
          ["resume", "Open the current résumé"],
          ["all", "Print the complete portfolio"],
          ["clear", "Clear terminal output"],
        ].map(([command, description]) => <div key={command}><dt>{command}</dt><dd>{description}</dd></div>)}
      </dl>
      <p className="command-hint">Project names also work: <code>open {slugify(projects[0].title)}</code></p>
    </div>
  );
}

function ResumeOutput() {
  return (
    <div className="terminal-output">
      <SectionLabel>resume.pdf</SectionLabel>
      <p className="output-intro">Résumé located. Open it in a new tab or download it for later.</p>
      <div className="terminal-links"><a href="/Resume.pdf" {...externalProps}>[open resume.pdf]</a></div>
    </div>
  );
}

function WelcomeOutput() {
  return (
    <div className="terminal-output welcome-output">
      <p className="boot-line">Session initialized successfully.</p>
      <h1>Jonathan Phung</h1>
      <p>Software engineering portfolio / San Francisco Bay Area</p>
      <p className="welcome-copy">Explore with the command buttons or type directly into the prompt.</p>
      <p className="command-hint">Start with <code>help</code>, <code>projects</code>, or <code>all</code>.</p>
    </div>
  );
}

function CommandOutput({ result, projects, skills, onCommand }: { result: CommandResult; projects: Project[]; skills: string[]; onCommand: (command: string) => void }) {
  if (result.kind === "welcome") return <WelcomeOutput />;
  if (result.kind === "help") return <HelpOutput projects={projects} />;
  if (result.kind === "about") return <AboutOutput />;
  if (result.kind === "projects") return <ProjectsOutput projects={projects} onCommand={onCommand} />;
  if (result.kind === "project" && result.projectIndex !== undefined) return <ProjectOutput project={projects[result.projectIndex]} index={result.projectIndex} />;
  if (result.kind === "experience") return <ExperienceOutput />;
  if (result.kind === "skills") return <SkillsOutput skills={skills} />;
  if (result.kind === "contact") return <ContactOutput />;
  if (result.kind === "resume") return <ResumeOutput />;
  if (result.kind === "all") {
    return <div className="all-output"><AboutOutput /><ProjectsOutput projects={projects} onCommand={onCommand} /><ExperienceOutput /><SkillsOutput skills={skills} /><ContactOutput /></div>;
  }
  return <div className="terminal-output error-output"><p>{result.message}</p><p>Run <code>help</code> to see valid commands.</p></div>;
}

export function TerminalPortfolio({ projects, skills, initialCommand }: { projects: Project[]; skills: string[]; initialCommand?: string }) {
  const [entries, setEntries] = useState<TerminalEntry[]>(() => {
    const welcomeEntry: TerminalEntry = { id: 0, command: null, result: { kind: "welcome" } };
    return initialCommand
      ? [welcomeEntry, { id: 1, command: initialCommand, result: resolveCommand(initialCommand, projects) }]
      : [welcomeEntry];
  });
  const [input, setInput] = useState("");
  const [pendingCommand, setPendingCommand] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [announcement, setAnnouncement] = useState("Portfolio terminal ready");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const entryIdRef = useRef(initialCommand ? 2 : 1);
  const typingTimerRef = useRef<number | null>(null);
  const projectCommands = useMemo(() => projects.map((project) => `open ${slugify(project.title)}`), [projects]);
  const autocompleteCommands = useMemo(() => [...BASE_COMMANDS, ...projectCommands], [projectCommands]);

  useEffect(() => () => {
    if (typingTimerRef.current) window.clearInterval(typingTimerRef.current);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [entries, pendingCommand]);

  const executeCommand = useCallback((rawCommand: string) => {
    const command = rawCommand.trim();
    if (!command || isTyping) return;

    setInput("");
    setHistoryIndex(-1);
    setCommandHistory((current) => [command, ...current.filter((item) => item !== command)].slice(0, 20));
    setIsTyping(true);
    setPendingCommand("");

    const complete = () => {
      if (command.toLowerCase() === "clear") {
        setEntries([]);
        setAnnouncement("Terminal cleared");
      } else {
        const result = resolveCommand(command, projects);
        setEntries((current) => [...current, { id: entryIdRef.current++, command, result }]);
        setAnnouncement(`${command} command completed`);
      }
      setPendingCommand(null);
      setIsTyping(false);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPendingCommand(command);
      complete();
      return;
    }

    let characterIndex = 0;
    typingTimerRef.current = window.setInterval(() => {
      characterIndex += 1;
      setPendingCommand(command.slice(0, characterIndex));
      if (characterIndex >= command.length) {
        if (typingTimerRef.current) window.clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
        window.setTimeout(complete, 90);
      }
    }, 24);
  }, [isTyping, projects]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    executeCommand(input);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setInput(nextIndex >= 0 ? commandHistory[nextIndex] : "");
    } else if (event.key === "Tab") {
      const matches = autocompleteCommands.filter((command) => command.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        event.preventDefault();
        setInput(matches[0]);
      }
    }
  };

  return (
    <main className="terminal-page">
      <div className="terminal-shell">
        <header className="terminal-header">
          <div>
            <span className="terminal-brand">JP/PORTFOLIO</span>
            <span className="terminal-session">jonathan.dev — interactive shell</span>
          </div>
          <div className="terminal-status"><span aria-hidden="true" /> online</div>
        </header>

        <div className="terminal-layout">
          <nav className="command-menu" aria-label="Portfolio commands">
            <div className="command-menu-heading">
              <span>commands</span>
              <button type="button" onClick={() => executeCommand("help")} disabled={isTyping}>help</button>
            </div>
            <div className="command-menu-list">
              {QUICK_COMMANDS.map((item) => (
                <button key={item.command} type="button" onClick={() => executeCommand(item.command)} disabled={isTyping}>
                  <span>{item.index}</span>
                  <strong>{item.label}</strong>
                  <code>{item.command}</code>
                </button>
              ))}
            </div>
            <button className="print-all-button" type="button" onClick={() => executeCommand("all")} disabled={isTyping}>
              print complete portfolio
            </button>
          </nav>

          <section className="terminal-window" aria-label="Interactive portfolio terminal">
            <div className="terminal-toolbar">
              <span>zsh</span>
              <span>UTF-8</span>
              <span>interactive</span>
            </div>
            <div className="terminal-transcript" onClick={() => inputRef.current?.focus()}>
              {entries.map((entry) => (
                <div className="terminal-entry" key={entry.id}>
                  {entry.command && <PromptLine command={entry.command} />}
                  <CommandOutput result={entry.result} projects={projects} skills={skills} onCommand={executeCommand} />
                </div>
              ))}
              {pendingCommand !== null && <PromptLine command={pendingCommand} typing />}
              <div ref={terminalEndRef} />
            </div>
            <form className="terminal-input-row" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="terminal-command">Enter a portfolio command</label>
              <span className="prompt-user">jonathan@portfolio</span>
              <span className="prompt-separator">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <input
                ref={inputRef}
                id="terminal-command"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleInputKeyDown}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
                disabled={isTyping}
                aria-describedby="terminal-input-hint"
              />
              <button type="submit" disabled={isTyping || !input.trim()}>run</button>
            </form>
            <p className="terminal-input-hint" id="terminal-input-hint">Enter to run · ↑↓ history · Tab autocomplete</p>
          </section>
        </div>
      </div>
      <div className="sr-only" aria-live="polite">{announcement}</div>
    </main>
  );
}
