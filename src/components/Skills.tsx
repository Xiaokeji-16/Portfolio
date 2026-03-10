"use client";

import { 
  SiJavascript, 
  SiTypescript, 
  SiPython,
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss,
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiSupabase,
  SiGit, 
  SiDocker, 
  SiVercel, 
  SiFigma, 
  SiUnity,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Unity", icon: SiUnity, color: "#FFFFFF" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category) => (
        <div key={category.title}>
          <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-full hover:border-[var(--accent)] transition-colors duration-300"
              >
                <skill.icon size={18} style={{ color: skill.color }} />
                <span className="text-sm text-[var(--text)]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
