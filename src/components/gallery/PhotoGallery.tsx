"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CloseIcon, ChevronLeft, ChevronRight } from "@/components/ui/icons";

export type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
};

export default function PhotoGallery({ images }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const show = useCallback(
    (next: number) => setActive((next + images.length) % images.length),
    [images.length],
  );

  // Keyboard controls + body scroll lock while the lightbox is open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") setActive((c) => (c === null ? c : (c + 1) % images.length));
      else if (e.key === "ArrowLeft")
        setActive((c) => (c === null ? c : (c - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, images.length]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
        {images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
              aria-label={`View image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-brand-navy/0 transition-colors duration-300 group-hover:bg-brand-navy/30" />
            </button>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-red"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(active - 1);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-red md:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[4/3] max-h-[80vh] w-full">
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {images[active].alt} · {active + 1} / {images.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(active + 1);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-red md:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </>
  );
}
