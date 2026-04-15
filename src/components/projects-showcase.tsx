"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Project } from "@/data/portfolio";

export function ProjectsShowcase({ projects }: { projects: Project[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = useCallback(
    (images: string[], startIndex: number, title: string) => {
      setLightboxImages(images);
      setLightboxIndex(startIndex);
      setLightboxTitle(title);
      setLightboxOpen(true);
    },
    [],
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
    setLightboxTitle("");
  }, []);

  const nextLightbox = useCallback(() => {
    if (!lightboxImages.length) return;
    setLightboxIndex((i) => (i + 1) % lightboxImages.length);
  }, [lightboxImages]);

  const prevLightbox = useCallback(() => {
    if (!lightboxImages.length) return;
    setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length);
  }, [lightboxImages]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, nextLightbox, prevLightbox]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpenLightbox={(idx) =>
              openLightbox(project.images ?? [], idx, project.title)
            }
          />
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        images={lightboxImages}
        index={lightboxIndex}
        title={lightboxTitle}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />
    </>
  );
}

function ProjectCard({
  project,
  onOpenLightbox,
}: {
  project: Project;
  onOpenLightbox: (index: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const imgs = project.images ?? [];

  return (
    <article className="surface-card group p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {imgs.length > 0 && (
        <div className="relative mb-4 overflow-hidden rounded-2xl">
          <button
            aria-label="Previous image"
            onClick={() =>
              setIdx((i) => (i - 1 + Math.max(imgs.length, 1)) % Math.max(imgs.length, 1))
            }
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/60 bg-white/80 px-2 py-1 text-xs shadow"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={() => setIdx((i) => (i + 1) % Math.max(imgs.length, 1))}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/60 bg-white/80 px-2 py-1 text-xs shadow"
          >
            ›
          </button>
          <Image
            src={imgs[idx]}
            alt={`${project.title} screenshot ${idx + 1} of ${imgs.length}`}
            width={1200}
            height={700}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          <button
            type="button"
            onClick={() => onOpenLightbox(idx)}
            title="Open image in fullscreen"
            className="absolute inset-0 z-10 cursor-zoom-in"
            aria-label="Open image in fullscreen"
          />
        </div>
      )}

      {project.links?.github ? (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block"
        >
          <h3 className="text-2xl font-semibold tracking-tight underline-offset-4 group-hover:underline">
            {project.title}
          </h3>
        </a>
      ) : (
        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
      )}

      <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.subtitle}</p>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{project.blurb}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--text-secondary)]">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  );
}

function Lightbox({
  open,
  images,
  index,
  title,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  if (!open || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm text-white md:text-base">{title}</h3>
          <button
            aria-label="Close"
            className="rounded-md bg-white/10 px-3 py-1 text-white hover:bg-white/20"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/20">
          <button
            aria-label="Previous"
            onClick={onPrev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-black"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={onNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-black"
          >
            ›
          </button>
          <Image
            src={images[index]}
            alt={`${title} fullscreen ${index + 1} of ${images.length}`}
            width={1600}
            height={900}
            className="h-[70vh] w-full bg-black object-contain"
          />
        </div>
      </div>
    </div>
  );
}
