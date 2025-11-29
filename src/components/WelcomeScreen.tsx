"use client";

import { useEffect, useState } from "react";

const WelcomeScreen = ({ apiPercentage }: { apiPercentage: number }) => {
  const message = "Welcome to My Portfolio";
  const [displayed, setDisplayed] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(message.slice(0, index + 1));
      index++;
      if (index === message.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(apiPercentage);
  }, [apiPercentage]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-[#1F2937] px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#6366F1] via-[#14B8A6] to-white text-center tracking-wider drop-shadow-lg">
        {displayed}
      </h1>

      <div className="mt-8 w-full max-w-md bg-gray-700 h-4 rounded-full overflow-hidden">
        <div
          className="h-4 rounded-full bg-linear-to-r from-[#6366F1] via-[#14B8A6] to-white transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mt-2 text-white font-medium">{progress}%</div>
    </div>
  );
};

export default WelcomeScreen;
