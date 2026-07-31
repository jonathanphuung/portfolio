import { TerminalPortfolio } from "@/components/terminal-portfolio";
import { PROJECTS, SKILLS } from "@/data/portfolio";

export default function ContactPage() {
  return <TerminalPortfolio projects={PROJECTS} skills={SKILLS} initialCommand="contact" />;
}
