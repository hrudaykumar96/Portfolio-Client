"use client";

import ImageRender from "@/components/ImageRender";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const skills: {
    name: string;
    logo: string;
  }[] = [
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/profile.png" },
    { name: "JavaScript", logo: "/profile.png" },
    { name: "React", logo: "/profile.png" },
    { name: "Next.js", logo: "/profile.png" },
    { name: "Tailwind", logo: "/profile.png" },
  ];

  return (
    <section className="min-h-[90vh] py-10 skills">
      <h2 className="flex items-center justify-center gap-3 text-3xl sm:text-4xl font-bold text-(--text-color)">
        <FaLaptopCode /> Skills
      </h2>

      <div className="container grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4  gap-5 mt-10">
        {skills?.length < 1 ? (
          <p className="text-center col-span-5 font-semibold text-(--link-text)">
            No Skills Found
          </p>
        ) : (
          skills?.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="bar flex flex-col items-center justify-center rounded-xl p-3 bg-(--card-background)
              shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_18px_rgba(0,2,68,0.8)]
              cursor-pointer transition-all duration-200"
            >
              <div className="relative w-full h-24 md:h-28 sm:h-32">
                <ImageRender
                  src={skill.logo}
                  alt={`${skill.name}`}
                  className="rounded-md"
                />
              </div>

              <motion.p className="text-lg font-bold tracking-wide text-(--button-background) my-1">
                {skill.name}
              </motion.p>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Skills;
