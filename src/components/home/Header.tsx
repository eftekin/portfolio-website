import { LINKS } from "@/lib/home-content";
import { LINK_CLASS } from "./styles";

export function Header() {
  return (
    <header className="pb-[92px] pt-[124px] phone:pb-[56px] phone:pt-[72px]">
      <h1 className="text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.1] tracking-[-0.035em]">
        Mustafa Eftekin
      </h1>
      <p className="mt-[10px] font-mono text-[14px] tracking-[-0.01em] text-paper-muted">
        backend &amp; platform engineer, Istanbul
      </p>
      <p className="mt-[26px] flex flex-wrap gap-5 font-mono text-[13px]">
        {LINKS.map(({ label, href }) => {
          const external = !href.startsWith("mailto:");
          return (
            <a
              key={label}
              href={href}
              className={LINK_CLASS}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {label}
            </a>
          );
        })}
      </p>
    </header>
  );
}
