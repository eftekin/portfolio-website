import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Alpha is baked into hairline/underline: Tailwind v3 cannot apply an
        // opacity modifier to a raw oklch() value.
        paper: {
          DEFAULT: "oklch(0.964 0.006 95)",
          ink: "oklch(0.2 0.012 80)",
          dim: "oklch(0.5 0.015 80)",
          label: "oklch(0.54 0.015 80)",
          muted: "oklch(0.46 0.015 80)",
          season: "oklch(0.6 0.015 80)",
          action: "oklch(0.52 0.015 80)",
          accent: "oklch(0.5 0.19 305)",
          hairline: "oklch(0.2 0.012 80 / 0.14)",
          underline: "oklch(0.2 0.012 80 / 0.28)",
          placeholder: "oklch(0.925 0.008 95)",
        },
      },
      screens: {
        // `raw` so it compiles to exactly (max-width: 820px); the built-in
        // max-[820px]: shorthand excludes 820px itself.
        narrow: { raw: "(max-width: 820px)" },
        phone: { raw: "(max-width: 520px)" },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Helvetica Neue", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      transitionDuration: {
        240: "240ms",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
    },
  },
  plugins: [],
} satisfies Config;
