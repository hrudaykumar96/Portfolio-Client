"use client";

import { useState, KeyboardEvent, ChangeEvent, useEffect, useRef } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";

type Message = {
  type: "user" | "bot";
  text: string;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        type: "bot",
        text: "Hello! How can I assist you today?",
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const closeChatBot = () => {
    setMessages([]);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 left-5 bg-(--button-background) hover:bg-(--button-background-hover) w-12 h-12 rounded-full shadow-xl flex items-center justify-center z-50 transition text-white"
          aria-label="Open ChatBot"
        >
          <FiMessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeChatBot}
          ></div>
          <div className="relative w-96 h-[500px] bg-(--card-background) shadow-2xl rounded-2xl flex flex-col overflow-hidden z-50">
            <div className="flex items-center justify-between bg-(--button-background) text-white px-4 py-3 font-semibold text-lg">
              ChatBot
              <button
                onClick={closeChatBot}
                className="hover:text-gray-200 transition"
                aria-label="Close ChatBot"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
              {messages?.length < 1 ? (
                <p className="text-(--text-color)/60 text-center mt-10">
                  No messages yet. Start the conversation!
                </p>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[75%] px-3 py-2 rounded-lg wrap-break-words ${
                      msg.type === "user"
                        ? "bg-(--button-background)/20 self-end text-right text-(--text-color)"
                        : "bg-(--button-background)/10 self-start text-left text-(--text-color)/90"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))
              )}
              {loading && (
                <div className="self-start bg-(--button-background)/10 text-(--text-color)/90 px-3 py-2 rounded-lg animate-pulse text-xs">
                  Bot is typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center p-3 border-t border-(--button-background)/20">
              <input
                type="text"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded-lg border border-(--button-background)/30 focus:outline-none focus:ring-2 focus:ring-(--button-background)/50 transition bg-(--background-color)/80 text-(--text-color)"
              />
              <button
                onClick={handleSend}
                className="ml-2 px-4 py-2 rounded-lg bg-(--button-background) text-white hover:bg-(--button-background-hover) transition flex items-center gap-1"
              >
                <IoIosSend className="text-lg" />
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
