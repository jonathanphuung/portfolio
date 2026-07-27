"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = { src: string; alt: string; caption: string };

export function ProjectGallery({ images, priority }: { images: GalleryImage[]; priority?: boolean }) {
  const [active, setActive] = useState(0);
  const image = images[active];
  const hasMultipleImages = images.length > 1;

  const showPrevious = () => {
    setActive((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNext = () => {
    setActive((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="project-image-wrap">
      <Image
        key={image.src}
        src={image.src}
        alt={image.alt}
        width={1920}
        height={1080}
        priority={priority}
        className="project-image"
      />
      <p className="image-caption">{image.caption}</p>
      {hasMultipleImages && (
        <>
          <button
            type="button"
            className="gallery-arrow gallery-arrow-prev"
            aria-label="Show previous screenshot"
            onClick={showPrevious}
          >
            Prev
          </button>
          <button
            type="button"
            className="gallery-arrow gallery-arrow-next"
            aria-label="Show next screenshot"
            onClick={showNext}
          >
            Next
          </button>
          <div className="gallery-controls" aria-label="Project screenshots">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={index === active ? "active" : ""}
              aria-label={`Show screenshot ${index + 1}: ${item.caption}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            />
          ))}
          </div>
        </>
      )}
    </div>
  );
}
