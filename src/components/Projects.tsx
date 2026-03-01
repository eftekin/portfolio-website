"use client";

import ProjectCard from "./ProjectCard";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Haliç Exam Genius Pro",
    description: (
      <span>
        Rebuilt from a{" "}
        <a
          href="https://github.com/eftekin/halic-exam-genius"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 opacity-60 hover:opacity-100 transition-opacity"
        >
          legacy prototype
          <FaGithub size={12} />
        </a>{" "}
        to scale with its 4,000+ users, Haliç Exam Genius Pro is a
        high-performance production platform featuring automated data sync and
        high-availability deployment.
      </span>
    ),
    imageUrl: "/examgeniuspro.gif",
    isFeatured: true,
    githubUrl: "https://github.com/eftekin/halic-exam-genius-pro",
    liveUrl: "https://halicexamgenius.app",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "Docker",
      "Nginx",
      "DigitalOcean",
    ],
    gradientColors: {
      firstColor: "255, 65, 108",
      secondColor: "255, 75, 43",
      thirdColor: "255, 169, 61",
    },
  },
  {
    title: "Floratrix",
    description:
      "An AI-powered plant care system that collects sensor data, predicts watering needs, and analyzes plant health through images.",
    imageUrl: "/floratrix.gif",
    liveUrl: "https://floratrix.vercel.app",
    technologies: [
      "ESP32",
      "FastAPI",
      "Supabase",
      "Gemini API",
      "Next.js",
      "Tailwind CSS",
    ],
    gradientColors: {
      firstColor: "255, 65, 108",
      secondColor: "255, 75, 43",
      thirdColor: "255, 169, 61",
    },
  },
  {
    title: "Ricklepedia",
    description:
      "A web app to explore Rick and Morty characters, episodes, and locations.",
    imageUrl: "/ricklepedia.gif",
    githubUrl: "https://github.com/eftekin/ricklepedia",
    liveUrl: "https://ricklepedia.com",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Rick and Morty API",
    ],
    gradientColors: {
      firstColor: "255, 65, 108",
      secondColor: "255, 75, 43",
      thirdColor: "255, 169, 61",
    },
  },
  {
    title: "Talkzilla",
    description: "A chatbot that roars with fun conversations!",
    imageUrl: "/talkzilla.gif",
    githubUrl: "https://github.com/eftekin/talkzilla",
    liveUrl: "https://talkzilla.streamlit.app",
    technologies: ["Python", "Streamlit", "OpenAI"],
    gradientColors: {
      firstColor: "67, 233, 123",
      secondColor: "56, 249, 215",
      thirdColor: "46, 232, 187",
    },
  },
  {
    title: "AI-EngVentures",
    description:
      "A repository showcasing AI and machine learning projects and implementations.",
    imageUrl: "/aieng.gif",
    githubUrl: "https://github.com/eftekin/AI-EngVentures",
    liveUrl: "https://aiengventures.streamlit.app", // There isn't a live URL for this repository
    technologies: ["Python", "TensorFlow", "OpenCV", "Pandas", "Scikit-learn"],
    gradientColors: {
      firstColor: "88, 85, 255",
      secondColor: "150, 110, 255",
      thirdColor: "255, 107, 237",
    },
  },
  {
    title: "Data Science Adventures",
    description:
      "A collection of data science projects exploring data cleaning, visualization, and analysis.",
    githubUrl: "https://github.com/eftekin/data-science-adventures",
    liveUrl: "#", // No live URL available
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    gradientColors: {
      firstColor: "255, 154, 0",
      secondColor: "255, 81, 47",
      thirdColor: "240, 33, 86",
    },
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
          My Projects
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto px-4">
          Here are some of the projects I&rsquo;ve worked on. Each project
          demonstrates different skills and technologies I&#39;ve mastered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
