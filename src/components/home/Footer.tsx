import { LINK_CLASS } from "./styles";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-baseline justify-between gap-6 pt-[72px] phone:pt-[48px] font-mono text-[11.5px] text-paper-label">
      <span>© 2026</span>
      <a
        href="mailto:mustafa@eftekin.dev"
        className={`${LINK_CLASS} text-paper-accent`}
      >
        mustafa@eftekin.dev
      </a>
    </footer>
  );
}
