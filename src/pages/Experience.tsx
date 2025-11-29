"use client";

import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import ImageRender from "@/components/ImageRender";

const experiences: {
  role: string;
  company: string;
  duration: string;
  location: string;
  tech: string;
  description: string[];
  logo: string;
}[] = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Pvt Ltd",
    duration: "Jan 2020 - Present",
    location: "Hyderabad, India",
    tech: "React, Node.js, Tailwind CSS, MongoDB",
    description: [
      "Developed web applications using React, Node.js, and Tailwind CSS",
      "Implemented REST APIs and integrated with databases",
      "Collaborated with design team to build responsive UI",
    ],
    logo: "/profile.png",
  },
  {
    role: "Frontend Developer",
    company: "WebWorks Inc",
    duration: "Jun 2019 - Dec 2019",
    location: "Bangalore, India",
    tech: "React, Next.js, JavaScript, CSS",
    description: [
      "Built responsive front-end interfaces with React and Next.js",
      "Optimized performance and accessibility of web pages",
    ],
    logo: "/profile.png",
  },
];

const Experience = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 flex flex-col gap-8">
      <h2 className="flex items-center justify-center gap-3 text-3xl sm:text-4xl font-bold text-(--text-color)">
        <FaBriefcase /> Experience
      </h2>

      {experiences?.length < 1 ? (
        <p className="text-center font-semibold text-(--link-text)">
          No Experience Found
        </p>
      ) : (
        experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-(--card-background) rounded-xl p-4 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 w-full"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 w-full">
              {exp.logo && (
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-md overflow-hidden shadow-md shrink-0 mx-auto sm:mx-0">
                  <ImageRender
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col gap-1 text-center sm:text-left w-full">
                <h3 className="text-lg sm:text-xl font-semibold text-(--button-background)">
                  {exp.role}
                </h3>

                <p className="text-(--link-text) font-medium">{exp.company}</p>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 justify-center sm:justify-start text-(--link-text)">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>

                <p className="text-(--link-text) text-sm sm:text-base font-light mt-1">
                  {exp.tech}
                </p>
              </div>
            </div>

            <ul className="text-(--link-text) mt-4 list-disc list-outside pl-5 text-sm sm:text-base space-y-1 text-left">
              {exp?.description?.length > 0 &&
                exp.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
            </ul>
          </motion.div>
        ))
      )}
    </section>
  );
};

export default Experience;
