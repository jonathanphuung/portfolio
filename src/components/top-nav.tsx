import Link from "next/link";

export function TopNav() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="nav-wrap" aria-label="Main navigation">
        <Link href="/" className="wordmark" aria-label="Jonathan Phung, home">
          JP<span>.</span>
        </Link>
        <div className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
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
