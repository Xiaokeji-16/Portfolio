"use client";

import { useState } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Xiaoke's AI assistant. Ask me anything about his skills, experience, or projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // TODO: 接入 OpenAI API
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "This is a placeholder response. We'll connect OpenAI next!" },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Siri 风格边缘光晕效果 */}
      {isOpen && (
        <div className="fixed inset-0 pointer-events-none z-[60]">
          <div className="siri-frost-overlay" />
          <div className="siri-edge-overlay">
            <div className="siri-edge siri-edge-top" />
            <div className="siri-edge siri-edge-right" />
            <div className="siri-edge siri-edge-bottom" />
            <div className="siri-edge siri-edge-left" />
          </div>
        </div>
      )}

      {/* 聊天气泡按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 z-[70]"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      {/* 聊天窗口 */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[70]">
          {/* 头部 */}
          <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--bg)]">
            <h3 className="font-semibold text-[var(--text)]">Chat with AI</h3>
            <p className="text-xs text-[var(--muted)]">Ask me about Xiaoke</p>
          </div>

          {/* 消息区域 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-[var(--accent)] text-white rounded-br-sm"
                      : "bg-[var(--bg)] text-[var(--text)] rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[var(--bg)] text-[var(--muted)] px-4 py-2 rounded-2xl rounded-bl-sm text-sm">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* 输入区域 */}
          <div className="p-4 border-t border-[var(--border)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                <FiSend size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
