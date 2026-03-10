"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动，添加背景模糊效果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 切换深色/浅色模式
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 px-6 md:px-12 py-4 flex justify-end items-center gap-8 transition-all duration-300 ${
        scrolled ? "bg-[var(--bg)]/80 backdrop-blur-md" : ""
      }`}
    >
      {/* 导航链接 */}
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300 text-sm font-medium"
            >
              {link.name}
            </a>
          </li>
        ))}
        {/* Resume 下载 */}
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#800020] hover:text-[#800020] visited:text-[#800020] transition-colors duration-300 text-sm font-medium"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* 深色/浅色切换按钮 */}
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] transition-colors duration-300 text-[var(--text)]"
        aria-label="Toggle theme"
      >
        {isDark ? <FiMoon size={18} /> : <FiSun size={18} />}
      </button>
    </nav>
  );
}
