import { TerminalPortfolio } from "@/components/terminal-portfolio";
import { PROJECTS, SKILLS } from "@/data/portfolio";

export default function HomePage() {
  return <TerminalPortfolio projects={PROJECTS} skills={SKILLS} />;
}
