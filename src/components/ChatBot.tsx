"use client";

import { useState, KeyboardEvent, ChangeEvent } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

type Message = {
  type: "user" | "bot";
  text: string;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { type: "user", text: input };
    const botMessage: Message = { type: "bot", text: "Hello! I am your bot." };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 left-5 bg-(--button-backgroundColor) hover:bg-(--button-backgroundColor-hover) transition text-(--button-color) w-12 h-12 flex items-center justify-center
          rounded-full shadow-lg cursor-pointer z-50"
          aria-label="Open ChatBot"
        >
          <FiMessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-96 h-[500px] bg-white shadow-xl rounded-lg flex flex-col overflow-hidden relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              aria-label="Close ChatBot"
            >
              <FiX size={20} />
            </button>

            <div className="bg-blue-500 text-white p-3 font-semibold text-center">
              ChatBot
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded max-w-[70%] ${
                    msg.type === "user"
                      ? "bg-blue-200 text-right self-end"
                      : "bg-gray-200 text-left self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="p-2 border-t flex">
              <input
                type="text"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="flex-1 border rounded px-2 py-1 mr-2"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
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
