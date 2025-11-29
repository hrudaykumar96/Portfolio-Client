"use client";

import { FaFolderOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import ImageRender from "@/components/ImageRender";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const projects: {
  title: string;
  company: string;
  tech: string;
  description: string[];
  logo: string;
  live: string;
  github: string;
}[] = [
  {
    title: "Portfolio Website",
    company: "Self Project",
    tech: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
    description: [
      "Developed a fully responsive personal portfolio",
      "Integrated smooth animations using Framer Motion",
      "Implemented clean UI with reusable components",
    ],
    logo: "/profile.png",
    live: "https://myportfolio.com",
    github: "https://github.com/hruday/portfolio",
  },
  {
    title: "E-Commerce Platform",
    company: "Team Project",
    tech: "React, Redux, Node.js, MongoDB",
    description: [
      "Developed end-to-end e-commerce platform",
      "Implemented cart, checkout, and admin dashboard",
    ],
    logo: "/profile.png",
    live: "",
    github: "https://github.com/hruday/ecommerce",
  },
  {
    title: "Task Manager App",
    company: "Self Project",
    tech: "React, Firebase, Tailwind",
    description: [
      "Implemented real-time task syncing",
      "Added authentication & cloud database",
    ],
    logo: "/profile.png",
    live: "",
    github: "https://github.com/hruday/tasks",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="flex items-center justify-center gap-3 text-2xl sm:text-4xl font-bold text-(--text-color) mb-10">
        <FaFolderOpen /> Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects?.length < 1 ? (
          <p className="text-center font-semibold col-span-3 text-(--link-text)">
            No Projects Found
          </p>
        ) : (
          projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-(--card-background) rounded-lg shadow-lg hover:shadow-2xl transition p-5 flex flex-col"
            >
              {project.logo && (
                <div className="relative w-full h-40 sm:h-44 lg:h-48 rounded-md overflow-hidden mb-4">
                  <ImageRender
                    src={project.logo}
                    alt="logo"
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              <div className="flex-1">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-(--button-background)">
                    {project.title}
                  </h3>
                  <p className="text-(--link-text) font-medium">
                    {project.company}
                  </p>
                  <p className="text-(--link-text) text-sm font-light">
                    {project.tech}
                  </p>
                </div>

                <ul className="text-(--link-text) mt-3 list-disc list-outside text-sm space-y-1 text-left pl-5">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-auto pt-5">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-(--button-background) text-white px-4 py-2 rounded-md hover:bg-(--button-background-hover) transition"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                  </Link>
                )}

                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 border border-(--button-background) text-(--button-background) px-4 py-2 rounded-md hover:bg-(--button-background) hover:text-white transition"
                >
                  <FaGithub className="w-4 h-4" /> GitHub
                </Link>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
