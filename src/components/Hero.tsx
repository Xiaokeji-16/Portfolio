"use client";

import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Web Developer",
  "Indie Game Developer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = !isDeleting && text === currentRole ? 1500 : isDeleting ? 45 : 90;

    const timer = window.setTimeout(() => {
      if (!isDeleting && text.length < currentRole.length) {
        setText(currentRole.slice(0, text.length + 1));
        return;
      }
      if (!isDeleting && text === currentRole) {
        setIsDeleting(true);
        return;
      }
      if (isDeleting && text.length > 0) {
        setText(currentRole.slice(0, text.length - 1));
        return;
      }
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, timeout);

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24 pb-16 md:px-20 lg:px-32"
    >
      <div className="max-w-3xl">
        <p className="text-sm md:text-base tracking-[0.2em] uppercase text-[var(--muted)]">
          Portfolio
        </p>
        <h1 className="mt-3 text-5xl md:text-7xl font-bold text-[var(--text)] leading-tight">
          Xiaoke Chen
        </h1>
        <div className="mt-6 text-xl md:text-3xl font-medium h-[2.75rem] md:h-[3.25rem] overflow-hidden">
          <span className="text-[var(--text)]">I build as a </span>
          <span className="inline-block min-w-[20ch]">
            <span className="relative inline-flex">
              <span className="text-[var(--accent)] whitespace-nowrap">{text}</span>
              <span className="text-[var(--accent)] animate-pulse">|</span>
              <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[var(--highlight)]/70" />
            </span>
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex h-11 w-36 flex-shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-sm font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Projects
            <FiArrowUpRight
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              size={16}
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex h-11 w-36 flex-shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 text-sm font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Contact
            <FiMail className="transition-transform duration-300 group-hover:scale-105" size={16} />
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="text-[var(--muted)] text-sm">Connect:</span>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-[var(--text)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-[var(--text)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
