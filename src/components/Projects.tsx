"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    title: "Project Name 1",
    description: "A brief description of your project. What problem does it solve? What technologies did you use?",
    image: "/projects/project1.png",
    liveUrl: "https://your-project-url.com",
    detailsUrl: "#",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Project Name 2",
    description: "Another project description. Highlight the key features and your role in building it.",
    image: "/projects/project2.png",
    liveUrl: "https://your-project-url.com",
    detailsUrl: "#",
    tags: ["React Native", "Firebase", "Node.js"],
  },
];

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.42,
    },
  },
};

export default function Projects() {
  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.18 }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300"
        >
          <div className="relative h-48 overflow-hidden bg-[var(--bg)]">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[var(--muted)]">
                No Image
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">{project.title}</h3>
            <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-md bg-[var(--bg)] text-[var(--muted)] text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[var(--accent)] text-sm hover:underline"
              >
                Live Demo
                <FiExternalLink size={14} />
              </a>
              <a
                href={project.detailsUrl}
                className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text)] text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Details
                <FiArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
