import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

interface ProjectCardProps {
  title: string;
  description: string;
  isFeatured?: boolean;
  imageUrl?: string; // Make optional
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  gradientColors?: {
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
  };
}

function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  technologies,
  isFeatured = false,
  gradientColors = {
    firstColor: "18, 113, 255",
    secondColor: "221, 74, 255",
    thirdColor: "100, 220, 255",
  },
}: ProjectCardProps) {
  return (
    <div
      className={`${
        isFeatured
          ? "relative p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-lg"
          : ""
      }`}
    >
      <div
        className={`rounded-lg ${
          isFeatured
            ? "bg-neutral-900/90"
            : "border border-neutral-800 hover:border-neutral-700"
        } bg-neutral-900/50 backdrop-blur-sm text-white shadow-lg w-full h-[400px] md:h-[420px] flex flex-col group transition-all duration-300 ${
          isFeatured ? "hover:shadow-lg" : ""
        } relative overflow-hidden`}
      >
        {isFeatured && (
          <div className="absolute top-0 right-0 z-20 w-32 h-32 overflow-hidden">
            <div className="absolute top-[22px] right-[-30px] bg-black/60 backdrop-blur-sm text-white px-0 py-1 text-xs font-medium tracking-wide rotate-45 w-32 text-center border-t border-b border-white/20">
              Featured
            </div>
          </div>
        )}
        <div className="relative h-36 md:h-44 w-full shrink-0 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              loading="eager"
              quality={60}
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover rounded-t-lg transition-transform duration-300"
            />
          ) : (
            <BackgroundGradientAnimation
              containerClassName="rounded-t-lg"
              gradientBackgroundStart="rgb(17, 17, 17)"
              firstColor={isFeatured ? "130, 80, 255" : gradientColors.firstColor}
              secondColor={isFeatured ? "255, 100, 200" : gradientColors.secondColor}
              thirdColor={isFeatured ? "100, 150, 255" : gradientColors.thirdColor}
              size="100%"
              key={`gradient-${title}-${Math.random()}`}
              className={`opacity-90 ${isFeatured ? "animate-gradient-shift" : ""}`}
            />
          )}
        </div>

        <div className="p-4 md:p-5 flex flex-col flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h3
            className={`${
              isFeatured ? "text-xl md:text-2xl" : "text-lg md:text-xl"
            } font-semibold ${
              isFeatured
                ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
                : "text-white"
            } line-clamp-1 relative z-10`}
          >
            {title}
          </h3>
          <p
            className={`text-sm ${
              isFeatured ? "text-neutral-300" : "text-neutral-400"
            } mt-2 ${isFeatured ? "line-clamp-4" : "line-clamp-3"} relative z-10`}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3 relative z-10">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`px-2 py-0.5 ${
                  isFeatured
                    ? "bg-purple-900/40 text-purple-200"
                    : "bg-neutral-800 text-neutral-300"
                } text-xs rounded-full transition-colors duration-300`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-auto pt-4 relative z-10">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm ${
                  isFeatured
                    ? "text-neutral-300 hover:text-purple-300"
                    : "text-neutral-400 hover:text-white"
                } transition-colors duration-300`}
              >
                <FaGithub size={20} />
                Source Code
              </a>
            )}
            {liveUrl && liveUrl !== "#" && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm ${
                  isFeatured
                    ? "text-neutral-300 hover:text-purple-300"
                    : "text-neutral-400 hover:text-white"
                } transition-colors duration-300`}
              >
                <FaExternalLinkAlt size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      {!isFeatured && <div />}
    </div>
  );
}

export default ProjectCard;
