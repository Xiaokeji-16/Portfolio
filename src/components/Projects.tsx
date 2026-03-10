"use client";

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

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300"
        >
          {/* 项目截图 */}
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

          {/* 项目信息 */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* 技术标签 */}
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

            {/* 按钮 */}
            <div className="flex items-center justify-between">
              
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[var(--accent)] text-sm hover:underline"
              >
                Live Demo
                <FiExternalLink size={14} />
              </a>
              
                href={project.detailsUrl}
                className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text)] text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Details
                <FiArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}