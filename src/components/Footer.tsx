"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] pt-16 pb-8 px-6 md:px-20 lg:px-32">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* 个人简介 */}
        <ScrollReveal delay={40}>
          <div>
            <h3 className="text-xl font-bold text-[var(--accent)] mb-4">Xiaoke Chen</h3>
            <p className="text-[var(--muted)] text-sm mb-6">
              Passionate full-stack developer creating innovative solutions and exceptional digital experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="mailto:xiaoke@example.com"
                className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Quick Links */}
        <ScrollReveal delay={120}>
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Services */}
        <ScrollReveal delay={200}>
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Game Development"].map((service) => (
                <li key={service}>
                  <span className="text-[var(--muted)] text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* 底部 */}
      <ScrollReveal delay={80}>
        <div className="flex justify-between items-center pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--muted)] text-sm">
            © 2026 Xiaoke Chen
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--text)] transition-all text-sm"
          >
            Back to top
            <FiArrowUp size={16} />
          </button>
        </div>
      </ScrollReveal>
    </footer>
  );
}
