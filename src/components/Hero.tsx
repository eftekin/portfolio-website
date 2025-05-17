"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ScrollArrow } from "./ui/scroll-arrow";
import { motion } from "framer-motion";

function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/eftekin" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/eftekin" },
    { icon: FaXTwitter, href: "https://x.com/eftekindev" },
    { icon: MdEmail, href: "mailto:mustafa@eftekin.com" },
  ];

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-[85vh] text-center gap-8 px-4 py-12 mt-4 md:mt-0 relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-full border-4 border-neutral-700/50 shadow-xl hover:border-neutral-600/50 transition-colors duration-300"
      >
        <Image
          src="/profile.jpeg"
          fill
          className="object-cover"
          alt="Mustafa Eftekin"
          priority={true}
          quality={90}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-5 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">Mustafa Eftekin</h1>
        <p className="text-lg md:text-xl text-neutral-300">
          Building intelligent solutions with AI and code.
          <span className="block mt-2 text-neutral-400">
            Full Stack Developer & AI Enthusiast
          </span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-8"
      >
        {socialLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              <Icon size={28} />
            </a>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-[1px] rounded-full cursor-pointer group"
      >
        <a
          href="#projects"
          onClick={handleScroll}
          className="block px-8 py-3 rounded-full bg-neutral-900 text-white relative transition-all duration-300 group-hover:bg-neutral-800"
        >
          View Projects
        </a>
      </motion.div>
      <ScrollArrow />
    </div>
  );
}

export default Hero;
