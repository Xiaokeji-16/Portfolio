"use client";

import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import ScrollReveal from "@/components/ScrollReveal";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Your Company Name",
    location: "Adelaide, Australia",
    period: "01/2025 – Present",
    type: "Internship",
    description: "Brief description of your role and responsibilities.",
    achievements: [
      "Achievement 1: Describe what you built or improved",
      "Achievement 2: Mention metrics or impact if possible",
      "Achievement 3: Highlight technologies or skills used",
    ],
    skills: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  // 如果有更多实习经历，可以在这里添加
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 lg:px-32">
      {/* 标题 */}
      <ScrollReveal delay={40}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] text-sm mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Professional Experience
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            A timeline of my growth and contributions in the tech industry
          </p>
        </div>
      </ScrollReveal>

      {/* 时间线 */}
      <div className="relative">
        {/* 竖线 */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--border)] md:left-12" />

        {experiences.map((exp, index) => (
          <ScrollReveal key={index} delay={index * 120}>
            <div className="relative pl-16 md:pl-24 pb-12">
              {/* 时间线圆点 */}
              <div className="absolute left-4 md:left-10 w-5 h-5 rounded-full bg-[var(--accent)] border-4 border-[var(--bg)]" />
              
              {/* 图标 */}
              <div className="absolute left-0 md:left-4 w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] -translate-x-1">
                <FiBriefcase size={20} />
              </div>

              {/* 卡片 */}
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                {/* 头部 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--accent)]">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-[var(--muted)]">
                      <span className="flex items-center gap-1">
                        <FiBriefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm">
                      <FiCalendar size={14} />
                      {exp.period}
                    </span>
                    <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] text-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* 描述 */}
                <p className="text-[var(--muted)] mb-4">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                    <span>✦</span> Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                        <span className="text-[var(--accent)] mt-1">→</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
