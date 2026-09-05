"use client";

import { useCallback, useEffect, useState } from "react";
import { PROJECTS, type Project } from "@/lib/home-content";
import { SECTION_LABEL_CLASS } from "./styles";

const PREVIEW_WIDTH = 340;
const CURSOR_OFFSET_X = 24;
const CURSOR_OFFSET_Y = 110;
const VIEWPORT_INSET = 20;
const TOP_INSET = 16;

type Preview = { project: Project; left: number; top: number };

function place(clientX: number, clientY: number) {
  return {
    left: Math.min(
      clientX + CURSOR_OFFSET_X,
      window.innerWidth - PREVIEW_WIDTH - VIEWPORT_INSET,
    ),
    top: Math.max(TOP_INSET, clientY - CURSOR_OFFSET_Y),
  };
}

export function Projects() {
  const [preview, setPreview] = useState<Preview | null>(null);
  const [previewAllowed, setPreviewAllowed] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      const allowed = canHover.matches && !reducedMotion.matches;
      setPreviewAllowed(allowed);
      if (!allowed) setPreview(null);
    };

    sync();
    canHover.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);
    return () => {
      canHover.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, []);

  const open = useCallback(
    (project: Project, event: React.MouseEvent) => {
      if (!previewAllowed) return;
      setPreview({ project, ...place(event.clientX, event.clientY) });
    },
    [previewAllowed],
  );

  const track = useCallback((event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setPreview((current) =>
      current ? { ...current, ...place(clientX, clientY) } : current,
    );
  }, []);

  const close = useCallback(() => setPreview(null), []);

  return (
    <section id="projects" className="pt-[76px] phone:pt-[56px]">
      <p className={SECTION_LABEL_CLASS}>Projects</p>
      <div>
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[minmax(0,1fr)_168px_84px] items-baseline gap-x-6 gap-y-6 border-t border-paper-hairline py-[17px] last:border-b narrow:grid-cols-[1fr_auto] narrow:gap-x-4 narrow:gap-y-2"
            {...(project.preview && {
              onMouseEnter: (event: React.MouseEvent) => open(project, event),
              onMouseMove: track,
              onMouseLeave: close,
            })}
          >
            <span className="text-[17px] tracking-[-0.015em] group-hover:text-paper-accent">
              {project.name}
              {project.descriptor && (
                <span
                  className={
                    project.descriptorAccent
                      ? "text-paper-accent"
                      : "text-paper-dim"
                  }
                >
                  {" "}
                  {project.descriptor}
                </span>
              )}
            </span>
            <span className="font-mono text-[12.5px] text-paper-dim narrow:col-start-1">
              {project.stack}
            </span>
            <span className="text-right font-mono text-[12px] text-paper-action narrow:col-start-2 narrow:row-start-1">
              {project.action}
              {" ↗"}
            </span>
          </a>
        ))}
      </div>

      {/* Mounted on hover only, so nothing is fetched on page load. */}
      {preview?.project.preview && (
        <div
          aria-hidden
          className="pointer-events-none fixed z-40 w-[340px] bg-paper-placeholder shadow-[0_18px_40px_oklch(0.2_0.012_80_/_0.18)]"
          style={{ left: preview.left, top: preview.top }}
        >
          <video
            key={preview.project.preview.src}
            src={preview.project.preview.src}
            width={preview.project.preview.width}
            height={preview.project.preview.height}
            autoPlay
            muted
            loop
            playsInline
            className="block h-auto w-full"
          />
        </div>
      )}
    </section>
  );
}
