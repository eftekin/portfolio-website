import { Fragment } from "react";
import { TIMELINE } from "@/lib/home-content";
import { PhotoStrip } from "./PhotoStrip";
import { LINK_CLASS, SECTION_LABEL_CLASS } from "./styles";

/** `showPhotos={false}` renders the text-only variant. */
export function Timeline({ showPhotos = true }: { showPhotos?: boolean }) {
  return (
    <section id="timeline">
      <p className={SECTION_LABEL_CLASS}>Year by year</p>
      <div>
        {TIMELINE.map((entry) => (
          <div
            key={entry.id}
            className="grid grid-cols-[92px_minmax(0,1fr)] gap-x-8 gap-y-8 border-t border-paper-hairline py-[26px] last:border-b narrow:grid-cols-1 narrow:gap-x-[10px] narrow:gap-y-[10px]"
          >
            <p
              className={`font-mono text-[13px] ${
                entry.accent ? "text-paper-accent" : "text-paper-dim"
              }`}
            >
              {entry.year}
              {entry.season && (
                <span className="mt-[2px] block text-paper-season phone:ml-2 phone:mt-0 phone:inline">
                  {entry.season}
                </span>
              )}
            </p>
            <div>
              <p className="text-[17px] tracking-[-0.015em]">
                {typeof entry.headline === "string"
                  ? entry.headline
                  : entry.headline.map((part) =>
                      typeof part === "string" ? (
                        <Fragment key={part}>{part}</Fragment>
                      ) : (
                        <a
                          key={part.href}
                          href={part.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={LINK_CLASS}
                        >
                          {part.label}
                        </a>
                      ),
                    )}
              </p>
              {entry.detail && (
                <p className="mt-[6px] font-mono text-[12.5px] text-paper-dim">
                  {entry.detail.map((part, i) => (
                    <Fragment key={typeof part === "string" ? part : part.href}>
                      {/* Non-breaking space keeps the separator off a line start. */}
                      {i > 0 && "\u00a0· "}
                      {typeof part === "string" ? (
                        part
                      ) : (
                        <a
                          href={part.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-paper-accent"
                        >
                          {part.label}
                          {"\u200a↗"}
                        </a>
                      )}
                    </Fragment>
                  ))}
                </p>
              )}
              {showPhotos && entry.photos && (
                <PhotoStrip photos={entry.photos} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
