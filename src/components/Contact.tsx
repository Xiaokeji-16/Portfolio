"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 接入表单提交服务
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 lg:px-32">
      {/* 标题 */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] text-sm mb-4">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-[var(--muted)] max-w-xl mx-auto">
          Ready to bring your ideas to life? I&apos;m here to help you build something amazing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* 左侧 - 联系信息 */}
        <div>
          <h3 className="text-xl font-semibold text-[var(--text)] mb-6">
            Contact Information
          </h3>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                <FiMail size={20} />
              </div>
              <div>
                <p className="font-medium text-[var(--text)]">Email</p>
                <p className="text-sm text-[var(--muted)]">xiaoke@example.com</p>
                <p className="text-xs text-[var(--muted)]">Send me an email anytime</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                <FiPhone size={20} />
              </div>
              <div>
                <p className="font-medium text-[var(--text)]">Phone</p>
                <p className="text-sm text-[var(--muted)]">+61 XXX XXX XXX</p>
                <p className="text-xs text-[var(--muted)]">Available for calls</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                <FiMapPin size={20} />
              </div>
              <div>
                <p className="font-medium text-[var(--text)]">Location</p>
                <p className="text-sm text-[var(--muted)]">Adelaide, Australia</p>
                <p className="text-xs text-[var(--muted)]">Open to remote opportunities</p>
              </div>
            </div>
          </div>

          {/* Follow Me */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-[var(--text)] mb-4">Follow Me</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Available for work */}
          <div className="mt-8 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 font-medium">Available for work</span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              I&apos;m currently accepting new projects and would love to hear about yours.
            </p>
          </div>
        </div>

        {/* 右侧 - 表单 */}
        <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-6">
            Send me a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[var(--text)] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text)] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[var(--text)] mb-2">Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--text)] mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Tell me about your project, ideas, or just say hello..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[var(--accent)] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <FiSend size={18} />
              Send Message
            </button>

            <div className="flex justify-between text-xs text-[var(--muted)] mt-4">
              <span>✓ Usually responds within 24 hours</span>
              <span>✓ Free consultation available</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
