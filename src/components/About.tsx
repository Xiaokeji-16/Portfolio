"use client";

import { FiFileText, FiCode } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 lg:px-32">
      <div className="max-w-3xl mx-auto text-center">
        {/* 标题 */}
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-8">
          About Me
        </h2>

        {/* 介绍文字 */}
        <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
          Hello, I&apos;m <span className="text-[var(--text)] font-semibold">Xiaoke Chen</span>, 
          passionate about building smart and scalable web & mobile applications. 
          I&apos;ve completed a full-stack development course and constantly explore 
          new technologies to refine my skills. Focused on continuous learning, 
          I aim to create innovative digital experiences and contribute to 
          meaningful projects in the tech industry.
        </p>

        {/* 按钮 */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            <FiFileText size={18} />
            Download CV
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium hover:bg-[var(--accent)]/10 transition-colors"
          >
            <FiCode size={18} />
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
