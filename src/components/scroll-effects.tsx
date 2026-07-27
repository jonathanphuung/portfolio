"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const sectionIds = ["work", "about", "contact"];
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const galleryFrames = Array.from(document.querySelectorAll<HTMLElement>(".project-image-wrap"));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const navLinks = new Map(
      sectionIds.map((id) => [id, document.querySelector<HTMLElement>('[data-nav-link="' + id + '"]')]),
    );

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

    const updateActiveNav = () => {
      const checkpoint = window.innerHeight * 0.38;
      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= checkpoint && rect.bottom > checkpoint;
      });

      navLinks.forEach((link, id) => {
        if (link) link.classList.toggle("is-active", id === activeSection?.id);
      });
    };

    let animationFrame = 0;
    const updateScrollState = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateProgress();
        updateActiveNav();
        if (!prefersReducedMotion) updateGalleryMotion();
      });
    };

    let revealObserver: IntersectionObserver | undefined;

    if (!prefersReducedMotion) {
      root.classList.add("motion-ready");

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );

      document.querySelectorAll("[data-reveal]").forEach((element) => {
        revealObserver?.observe(element);
      });
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      revealObserver?.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <span className="scroll-effects-sentinel" aria-hidden="true" hidden />;
}
