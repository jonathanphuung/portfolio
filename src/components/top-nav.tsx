import Link from "next/link";

export function TopNav() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <nav className="nav-wrap" aria-label="Main navigation">
        <Link href="/" className="wordmark" aria-label="Jonathan Phung, home">
          JP
        </Link>
        <div className="nav-links">
          <Link href="/#work" data-nav-link="work">Work</Link>
          <Link href="/#about" data-nav-link="about">About</Link>
          <Link href="/#contact" data-nav-link="contact">Contact</Link>
          <a className="nav-resume" href="/Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
        <a className="mobile-contact" href="mailto:jonathanphuung@gmail.com">
          Contact
        </a>
      </nav>
    </header>
  );
}
