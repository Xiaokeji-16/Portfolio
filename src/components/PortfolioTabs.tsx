"use client";

import { useState } from "react";
import { FiCode, FiBriefcase, FiLayers } from "react-icons/fi";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

type TabType = "projects" | "experience" | "skills";

const tabs = [
  { id: "projects" as TabType, label: "Projects", icon: FiCode },
  { id: "experience" as TabType, label: "Experience", icon: FiBriefcase },
  { id: "skills" as TabType, label: "Tech Stack", icon: FiLayers },
];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  return (
    <section id="portfolio" className="py-20 px-6 md:px-20 lg:px-32">
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] italic mb-4">
          Portfolio Showcase
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          Explore my journey through projects, experience, and technical expertise.
        </p>
      </div>

      {/* Tab 切换按钮 */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[var(--accent)] text-white"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 内容 */}
      <div>
        {activeTab === "projects" && <Projects />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "skills" && <Skills />}
      </div>
    </section>
  );
}