"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.52,
    },
  },
};

const panelMotion = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: "blur(8px)",
    transition: {
      duration: 0.26,
    },
  },
};

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  return (
    <section id="projects" className="portfolio-tabs-section py-20 px-6 md:px-20 lg:px-32">
      <motion.div
        className="text-center mb-12"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] italic mb-4">
          Portfolio Showcase
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          Explore my journey through projects, experience, and technical expertise.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center mb-12"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ delay: 0.12 }}
      >
        <div className="portfolio-tabs-shell inline-flex rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`portfolio-tab-btn relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium ${
                  isActive ? "is-active" : ""
                }`}
                aria-pressed={isActive}
              >
                {isActive ? (
                  <motion.span
                    layoutId="portfolio-active-tab"
                    className="absolute inset-0 rounded-xl"
                    transition={{ type: "spring", bounce: 0.16, duration: 0.46 }}
                  />
                ) : null}
                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon className="portfolio-tab-icon" size={18} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      <div className="portfolio-tab-body relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            className="portfolio-tab-panel"
            variants={panelMotion}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {activeTab === "projects" ? <Projects /> : null}
            {activeTab === "experience" ? <Experience /> : null}
            {activeTab === "skills" ? <Skills /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
