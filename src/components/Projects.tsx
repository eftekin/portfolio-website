"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Floratrix",
    description:
      "An AI-powered plant care system that collects sensor data, predicts watering needs, and analyzes plant health through images.",
    imageUrl: "/floratrix.gif",
    isFeatured: true,
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
    title: "Exam Genius",
    description:
      "A Python app serving 3000+ Halic University students to access exam dates and classroom info.",
    imageUrl: "/examgenius.gif",
    githubUrl: "https://github.com/eftekin/halic-exam-genius",
    liveUrl: "https://halicexamgenius.streamlit.app",
    technologies: ["Python", "Streamlit", "Pandas", "Matplotlib"],
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Rick and Morty API"],
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
          Here are some of the projects I&rsquo;ve worked on. Each project demonstrates
          different skills and technologies I&#39;ve mastered.
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
