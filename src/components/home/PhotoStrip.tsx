"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/home-content";

const THUMBNAIL_CLASS =
  "relative block h-[148px] w-[112px] shrink-0 bg-paper-placeholder transition-transform duration-240 ease-ease hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const CONTROL_CLASS = "hover:text-paper-accent";

type FigureProps = {
  photos: Photo[];
  index: number;
  onStep: (delta: number) => void;
  onClose: () => void;
};

function LightboxFigure({ photos, index, onStep, onClose }: FigureProps) {
  const photo = photos[index];

  return (
    <figure className="m-0 flex flex-col items-start gap-3">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="90vw"
        priority
        className="max-h-[82vh] w-auto max-w-[90vw] object-contain"
      />
      <figcaption className="flex w-full flex-wrap items-baseline justify-between gap-4 font-mono text-[12px] text-paper-placeholder">
        <span>
          {photos.length > 1 && `${index + 1} / ${photos.length} · `}
          {photo.alt}
        </span>
        <span className="flex gap-4">
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onStep(-1)}
                className={CONTROL_CLASS}
              >
                prev
              </button>
              <button
                type="button"
                onClick={() => onStep(1)}
                className={CONTROL_CLASS}
              >
                next
              </button>
            </>
          )}
          <button type="button" onClick={onClose} className={CONTROL_CLASS}>
            close
          </button>
        </span>
      </figcaption>
    </figure>
  );
}

export function PhotoStrip({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // The native dialog supplies the focus trap, Esc handling and focus return.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index === null) {
      if (dialog.open) dialog.close();
    } else if (!dialog.open) {
      dialog.showModal();
    }
  }, [index]);

  const close = useCallback(() => setIndex(null), []);

  const step = useCallback(
    (delta: number) =>
      setIndex((current) =>
        current === null
          ? current
          : (current + delta + photos.length) % photos.length,
      ),
    [photos.length],
  );

  return (
    <>
      <div className="mt-[18px] flex flex-wrap gap-[5px] phone:-mx-5 phone:flex-nowrap phone:overflow-x-auto phone:px-5">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={THUMBNAIL_CLASS}
            onClick={() => setIndex(i)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="112px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onClose={close}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="max-h-none max-w-none bg-transparent p-8 backdrop:bg-[oklch(0.2_0.012_80_/_0.82)]"
      >
        {index !== null && (
          <LightboxFigure
            photos={photos}
            index={index}
            onStep={step}
            onClose={close}
          />
        )}
      </dialog>
    </>
  );
}
