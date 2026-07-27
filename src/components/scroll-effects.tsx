"use client";

import { useEffect } from "react";

const SECTION_IDS = ["work", "about", "contact"];

export function ScrollEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const galleryFrames = Array.from(document.querySelectorAll<HTMLElement>(".project-image-wrap"));

    const updateProgress = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", `${Math.min(Math.max(progress, 0), 1)}`);
    };

    const updateGalleryMotion = () => {
      galleryFrames.forEach((frame) => {
        const rect = frame.getBoundingClientRect();
        const frameCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = (viewportCenter - frameCenter) / window.innerHeight;
        const shift = Math.max(Math.min(distance * 22, 18), -18);
        frame.style.setProperty("--image-shift", `${shift}px`);
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

      return () => {
        window.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        revealObserver.disconnect();
        root.classList.remove("motion-ready");
        root.style.removeProperty("--scroll-progress");
        galleryFrames.forEach((frame) => frame.style.removeProperty("--image-shift"));
      };
    }

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      root.style.removeProperty("--scroll-progress");
      galleryFrames.forEach((frame) => frame.style.removeProperty("--image-shift"));
    };
  }, []);

  useEffect(() => {
    const navLinks = new Map(
      SECTION_IDS.map((id) => [
        id,
        document.querySelector<HTMLAnchorElement>(`[data-nav-link="${id}"]`),
      ]),
    );

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link, id) => {
          link?.classList.toggle("is-active", id === visible.target.id);
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) activeObserver.observe(section);
    });

    return () => activeObserver.disconnect();
  }, []);

  return null;
}
