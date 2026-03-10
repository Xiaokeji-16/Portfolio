"use client";

import { useState } from "react";
import { FiCode, FiBriefcase, FiLayers } from "react-icons/fi";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import ScrollReveal from "./ScrollReveal";

type TabType = "projects" | "experience" | "skills";

const tabs = [
  { id: "projects" as TabType, label: "Projects", icon: FiCode },
  { id: "experience" as TabType, label: "Experience", icon: FiBriefcase },
  { id: "skills" as TabType, label: "Tech Stack", icon: FiLayers },
];

const tabOrder: TabType[] = ["projects", "experience", "skills"];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const activeIndex = tabOrder.indexOf(activeTab);

  const handleTabChange = (nextTab: TabType) => {
    if (nextTab === activeTab) return;
    setActiveTab(nextTab);
  };

  const renderTabPanel = (tabId: TabType) => {
    if (tabId === "projects") return <Projects />;
    if (tabId === "experience") return <Experience />;
    return <Skills />;
  };

  return (
    <section id="projects" className="portfolio-tabs-section py-20 px-6 md:px-20 lg:px-32">
      {/* 标题 */}
      <ScrollReveal delay={40} y={30}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] italic mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            Explore my journey through projects, experience, and technical expertise.
          </p>
        </div>
      </ScrollReveal>

      {/* Tab 切换按钮 */}
      <ScrollReveal delay={120} y={18}>
        <div className="flex justify-center mb-12">
          <div className="portfolio-tabs-shell inline-flex rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`portfolio-tab-btn flex items-center gap-2 px-6 py-3 rounded-xl font-medium ${
                    isActive ? "is-active" : ""
                  }`}
                  aria-pressed={isActive}
                >
                  <tab.icon className="portfolio-tab-icon" size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Tab 内容 */}
      <ScrollReveal delay={180} y={20}>
        <div className="portfolio-tab-body relative overflow-hidden">
          <div
            className="portfolio-tab-track"
            style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
          >
            {tabOrder.map((tabId) => (
              <div
                key={tabId}
                className={`portfolio-tab-slide ${activeTab === tabId ? "is-active" : ""}`}
                aria-hidden={activeTab !== tabId}
              >
                <div className="portfolio-slide-inner">{renderTabPanel(tabId)}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
