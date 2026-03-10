"use client";

import { motion } from "framer-motion";
import { FiFileText, FiCode } from "react-icons/fi";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 lg:px-32">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-8"
        >
          About Me
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg text-[var(--muted)] leading-relaxed mb-8">
          Hello, I&apos;m <span className="text-[var(--text)] font-semibold">Xiaoke Chen</span>,
          passionate about building smart and scalable web & mobile applications.
          I&apos;ve completed a full-stack development course and constantly explore
          new technologies to refine my skills. Focused on continuous learning,
          I aim to create innovative digital experiences and contribute to
          meaningful projects in the tech industry.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
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
        </motion.div>
      </motion.div>
    </section>
  );
}
