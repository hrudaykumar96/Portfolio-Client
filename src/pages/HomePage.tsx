"use client";

import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import ImageRender from "@/components/ImageRender";

const HomePage: React.FC = () => {
  const [typedReady, setTypedReady] = useState(false);
  const [nameColor, setNameColor] = useState("text-white");

  useEffect(() => {
    Promise.resolve().then(() => setTypedReady(true));

    const rainbowColors = [
      "text-red-500",
      "text-orange-500",
      "text-yellow-500",
      "text-green-500",
      "text-blue-500",
      "text-indigo-500",
      "text-violet-500",
    ];

    let colorIndex = 0;
    const colorChangeInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % rainbowColors.length;
      setNameColor(rainbowColors[colorIndex]);
    }, 1000);

    return () => clearInterval(colorChangeInterval);
  }, []);

  const socialLinks: { name: string; href: string; icon: React.ReactNode }[] = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <FaFacebook className="h-8 w-8 text-(--link-text) hover:text-(--link-text-hover) transition-all duration-300" />
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <FaLinkedin className="h-8 w-8 text-(--link-text) hover:text-(--link-text-hover) transition-all duration-300" />
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <FaInstagram className="h-8 w-8 text-(--link-text) hover:text-(--link-text-hover) transition-all duration-300" />
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        <FaGithub className="h-8 w-8 text-(--link-text) hover:text-(--link-text-hover) transition-all duration-300" />
      ),
    },
    {
      name: "Telegram",
      href: "#",
      icon: (
        <FaTelegram className="h-8 w-8 text-(--link-text) hover:text-(--link-text-hover) transition-all duration-300" />
      ),
    },
    {
      name: "Whatsapp",
      href: "#",
      icon: (
        <IoLogoWhatsapp className="h-8 w-8 text-(--link-text) hover:text-(--link-text-hover) transition-all duration-300" />
      ),
    },
  ];

  const techSkills = [
    "full stack developer",
    "frontend developer",
    "backend developer",
    "django developer",
    "reactjs developer",
    "nextjs developer",
    "react native developer",
  ];

  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-20 px-10 sm:px-16 lg:px-20">
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl space-y-8 md:space-y-0 md:space-x-12 gap-5"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center md:text-left text-(--link-text) space-y-6 md:space-y-8">
          <h4 className="text-lg sm:text-xl font-semibold uppercase tracking-wider">
            Hello, I{"'"}m
          </h4>

          <motion.p
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${nameColor}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            Hruday Kumar
          </motion.p>

          {typedReady && (
            <motion.div
              className="relative overflow-hidden text-xl sm:text-2xl md:text-3xl font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              I{"'"}m a{" "}
              <ReactTyped
                strings={techSkills}
                typeSpeed={100}
                backSpeed={50}
                backDelay={1000}
                loop
                showCursor
                className="capitalize font-semibold"
              />
            </motion.div>
          )}


          <motion.div
            className="flex space-x-6 mt-8 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                aria-label={link.name}
                className="transition duration-300 transform hover:scale-110"
              >
                {link.icon}
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-8 md:mb-0"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="rounded-full overflow-hidden w-full h-full border-4 border-(--background-color) bg-(--background-color)">
            <ImageRender
              src="/profile.png"
              alt="Profile"
              className="rounded-full overflow-hidden w-full h-full border-4 border-(--background-color) bg-(--background-color)"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
