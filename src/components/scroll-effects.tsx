const scrollEffectsScript = `
(() => {
  const init = () => {
    const sectionIds = ["work", "about", "contact"];
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const galleryFrames = Array.from(document.querySelectorAll(".project-image-wrap"));

    const updateProgress = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", String(Math.min(Math.max(progress, 0), 1)));
    };

    const updateGalleryMotion = () => {
      galleryFrames.forEach((frame) => {
        const rect = frame.getBoundingClientRect();
        const frameCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = (viewportCenter - frameCenter) / window.innerHeight;
        const shift = Math.max(Math.min(distance * 22, 18), -18);
        frame.style.setProperty("--image-shift", shift + "px");
      });
    };

    let animationFrame = 0;
    const updateScrollState = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateProgress();
        if (!prefersReducedMotion) updateGalleryMotion();
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    if (!prefersReducedMotion) {
      root.classList.add("motion-ready");

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );

      document.querySelectorAll("[data-reveal]").forEach((element) => {
        revealObserver.observe(element);
      });
    }

    const navLinks = new Map(
      sectionIds.map((id) => [id, document.querySelector('[data-nav-link="' + id + '"]')]),
    );

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link, id) => {
          if (link) link.classList.toggle("is-active", id === visible.target.id);
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) activeObserver.observe(section);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
`;

export function ScrollEffects() {
  return (
    <>
      <span className="scroll-effects-sentinel" aria-hidden="true" hidden />
      <script id="portfolio-scroll-effects" dangerouslySetInnerHTML={{ __html: scrollEffectsScript }} />
    </>
  );
}
