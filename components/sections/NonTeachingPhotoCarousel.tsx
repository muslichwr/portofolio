"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type ActivityPhoto = {
  src: string;
  alt: string;
  caption: string;
  activity: string;
  credit?: { label: string; href: string };
};

export function NonTeachingPhotoCarousel({
  photos,
  label = "Foto kegiatan nonmengajar",
  emptyMessage = "Foto kegiatan nonmengajar belum tersedia.",
}: {
  photos: readonly ActivityPhoto[];
  label?: string;
  emptyMessage?: string;
}) {
  const trackId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const photo = photos[activeIndex];

  if (!photo) {
    return <p className="text-sm leading-relaxed text-zinc-400">{emptyMessage}</p>;
  }

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: index * track.clientWidth, behavior: reducedMotion ? "instant" : "smooth" });
  }

  const buttonClass = "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-zinc-700 px-3 text-sm text-zinc-200 hover:border-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300 disabled:cursor-default disabled:opacity-40";

  return (
    <figure className="min-w-0" role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        id={trackId}
        ref={trackRef}
        data-lenis-prevent
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(event) => {
          const track = event.currentTarget;
          setActiveIndex(Math.max(0, Math.min(photos.length - 1, Math.round(track.scrollLeft / track.clientWidth))));
        }}
      >
        {photos.map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${photos.length}`}
            aria-hidden={index !== activeIndex}
            className="relative aspect-[3/2] w-full shrink-0 snap-center snap-always bg-zinc-950/50"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 767px) calc(100vw - 48px), 856px"
              className="object-contain"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      <figcaption className="mt-4 space-y-2 break-words" aria-live="polite" aria-atomic="true">
        <p className="font-mono text-xs text-zinc-400">
          <span aria-label={`Foto ${activeIndex + 1} dari ${photos.length}`}>
            {String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </span>
        </p>
        <p className="text-sm font-medium text-zinc-200">{photo.activity}</p>
        <p className="text-sm leading-relaxed text-zinc-400">{photo.caption}</p>
        {photo.credit && (
          <a href={photo.credit.href} target="_blank" rel="noopener noreferrer" className="inline-block rounded-sm text-sm text-zinc-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">
            {photo.credit.label}
          </a>
        )}
      </figcaption>
      {photos.length > 1 && (
        <div className="mt-5 flex justify-between gap-4">
          <button type="button" aria-label="Foto sebelumnya" aria-controls={trackId} disabled={activeIndex === 0} className={buttonClass} onClick={() => goTo(activeIndex - 1)}>
            <ArrowLeft size={16} aria-hidden="true" /> Previous
          </button>
          <button type="button" aria-label="Foto berikutnya" aria-controls={trackId} disabled={activeIndex === photos.length - 1} className={buttonClass} onClick={() => goTo(activeIndex + 1)}>
            Next <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      )}
    </figure>
  );
}
