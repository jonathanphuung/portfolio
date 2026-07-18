"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = { src: string; alt: string; caption: string };

export function ProjectGallery({ images, priority }: { images: GalleryImage[]; priority?: boolean }) {
  const [active, setActive] = useState(0);
  const image = images[active];

  return (
    <div className="project-image-wrap">
      <Image src={image.src} alt={image.alt} width={1920} height={1080} priority={priority} className="project-image" />
      <p className="image-caption">{image.caption}</p>
      {images.length > 1 && (
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
      )}
    </div>
  );
}
