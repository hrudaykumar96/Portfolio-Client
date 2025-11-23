"use client";

import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BacktoTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 bg-(--button-backgroundColor) hover:bg-(--button-backgroundColor-hover) transition text-(--button-color) w-10 h-10 flex items-center justify-center
        rounded-full shadow-lg ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <button
        type="button"
        className="text-xl font-bold"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default BacktoTop;
