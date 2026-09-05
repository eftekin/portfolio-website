/** Home page content. One line per year; see the redesign handoff README. */

/** A run of copy: plain text, or an external link. */
export type TextPart = string | { label: string; href: string };

export type Photo = {
  src: string;
  alt: string;
  /** Intrinsic size, so the lightbox sizes to the image instead of letterboxing. */
  width: number;
  height: number;
};

export type TimelineEntry = {
  id: string;
  year: string;
  season?: string;
  /** Renders the year column in the accent color. */
  accent?: boolean;
  headline: string | TextPart[];
  detail?: TextPart[];
  photos?: Photo[];
};

export type Project = {
  name: string;
  descriptor?: string;
  /** Renders the descriptor in the accent color instead of muted. */
  descriptorAccent?: boolean;
  stack: string;
  action: "live" | "code";
  href: string;
  /** Rows without one show no hover preview. */
  preview?: { src: string; width: number; height: number };
};

export const LINKS = [
  { label: "mail", href: "mailto:mustafa@eftekin.dev" },
  { label: "github", href: "https://github.com/eftekin" },
  { label: "linkedin", href: "https://linkedin.com/in/eftekin" },
  { label: "x", href: "https://x.com/eftekindev" },
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: "work-and-travel",
    year: "2025",
    season: "summer",
    headline:
      "Three months in North Carolina on Work and Travel, then across the US.",
    detail: [
      "Outer Banks",
      "Los Angeles",
      "San Francisco",
      "Cupertino",
      "New York",
    ],
    photos: [
      { src: "/wat-1.webp", alt: "Team pizza", width: 4284, height: 5712 },
      { src: "/wat-2.webp", alt: "U.S flag", width: 3024, height: 4032 },
      { src: "/wat-3.webp", alt: "With friends", width: 3024, height: 4032 },
      { src: "/wat-5.webp", alt: "Apple Park", width: 3024, height: 4032 },
      { src: "/wat-6.webp", alt: "Googleplex", width: 4284, height: 5712 },
      { src: "/wat-4.webp", alt: "With friends", width: 4284, height: 5712 },
    ],
  },
  {
    id: "gdg",
    year: "2024",
    headline: "Core team member and project team lead at GDG on Campus Haliç.",
    detail: [
      {
        label: "Python101",
        href: "https://www.youtube.com/watch?v=jDuRw_1Cdc8",
      },
      "GitHub101",
      "DevFest",
    ],
    photos: [
      { src: "/gdg-3.webp", alt: "Python101", width: 5184, height: 3456 },
      { src: "/gdg-2.webp", alt: "DevFest 2024", width: 4032, height: 3024 },
      { src: "/gdg-6.webp", alt: "GitHub101", width: 3024, height: 4032 },
      { src: "/gdg-1.webp", alt: "First GDG event", width: 3024, height: 4032 },
    ],
  },
  {
    id: "wincoi",
    year: "2023",
    headline: [
      "React Native developer at ",
      { label: "Wincoi", href: "https://wincoi.com/" },
      ", six months.",
    ],
    detail: ["teamwork", "git and GitHub", "production code"],
    photos: [
      { src: "/wincoi-1.webp", alt: "Wincoi", width: 4032, height: 3024 },
      { src: "/wincoi-2.webp", alt: "Wincoi", width: 1536, height: 2048 },
    ],
  },
  {
    id: "codecademy",
    year: "2022",
    headline: "Codecademy courses alongside university.",
    detail: ["mostly data science and AI"],
    photos: [
      { src: "/2022-1.webp", alt: "Studying", width: 4032, height: 3024 },
      { src: "/2022-3.webp", alt: "Studying", width: 1200, height: 1600 },
      { src: "/2022-4.webp", alt: "Course progress", width: 609, height: 916 },
    ],
  },
  {
    id: "istanbul",
    year: "2021",
    headline:
      "Moved to Istanbul, started software engineering at Haliç University.",
    photos: [
      { src: "/2021-2.webp", alt: "First setup", width: 4032, height: 3024 },
      { src: "/2021-1.webp", alt: "Istanbul", width: 4032, height: 3024 },
      {
        src: "/2021-3.webp",
        alt: "Coding with a friend",
        width: 4032,
        height: 3024,
      },
      { src: "/2021-4.webp", alt: "University", width: 3024, height: 4032 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Haliç Exam Genius Pro",
    descriptor: "· 4,000+ users",
    descriptorAccent: true,
    stack: "FastAPI, Postgres",
    action: "live",
    href: "https://halicexamgenius.app",
    preview: { src: "/examgeniuspro.mp4", width: 800, height: 406 },
  },
  {
    name: "IoT Pitwall",
    descriptor: "· F1 track status on smart bulbs",
    stack: "Python, AsyncIO",
    action: "code",
    href: "https://github.com/eftekin/iot-pitwall",
    preview: { src: "/iot-pitwall.mp4", width: 800, height: 450 },
  },
  {
    name: "since17",
    descriptor: "· relive F1 seasons from 2017",
    stack: "Go, CLI",
    action: "code",
    href: "https://github.com/eftekin/homebrew-since17",
  },
  {
    name: "Floratrix",
    descriptor: "· sensor-driven plant care",
    stack: "ESP32, FastAPI",
    action: "live",
    href: "https://floratrix.vercel.app",
    preview: { src: "/floratrix.mp4", width: 800, height: 450 },
  },
  {
    name: "Ricklepedia",
    stack: "Next.js, TS",
    action: "live",
    href: "https://ricklepedia.com",
    preview: { src: "/ricklepedia.mp4", width: 800, height: 450 },
  },
];
