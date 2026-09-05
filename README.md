# eftekin.com

Personal site of Mustafa Eftekin — backend and platform engineer in Istanbul.

A single static page: a name block, a year-by-year timeline, and a project
index. Project rows with a preview show it in a cursor-following panel that
mounts only on hover.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · `next/font` (Space Grotesk,
JetBrains Mono). Bun for installs and scripts, Biome for formatting and
linting. No runtime dependencies beyond React and Vercel Analytics.

## Development

```bash
bun install
bun run dev       # http://localhost:3000
bun run build
bun run format    # biome format --write
bun run lint      # biome lint
bun run check     # format + lint + import sorting, applied
```

## Layout

```
src/app/          route, layout, global stylesheet
src/components/   Header · Timeline · Projects · Footer
src/lib/          page content (copy, photos, previews)
public/           timeline photos (.webp) and project previews (.mp4)
```

Design tokens — the warm off-white ground, the accent purple, the hairline
rules and the 820px breakpoint — live in `tailwind.config.ts` under `paper`.
