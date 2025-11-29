"use client";

import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import ImageRender from "@/components/ImageRender";

const qualifications: {
  name: string;
  institute: string;
  stream: string;
  from: number;
  to: number;
  logo: string;
}[] = [
  {
    name: "Bachelor of Technology",
    institute: "Andhra University",
    stream: "Mechanical Engineering",
    from: 2015,
    to: 2019,
    logo: "/profile.png",
  },
  {
    name: "Senior Secondary School",
    institute: "XYZ High School",
    stream: "Science",
    from: 2013,
    to: 2015,
    logo: "/profile.png",
  },
];

const Qualification = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 flex flex-col gap-6">
      <h2 className="flex items-center justify-center gap-3 text-3xl sm:text-4xl font-bold text-(--text-color) mb-8">
        <FaGraduationCap /> Qualification
      </h2>

      {qualifications?.length < 1 ? (
        <p className="text-center font-semibold text-(--link-text)">
          No Qualification Found
        </p>
      ) : (
        qualifications.map((q, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-(--card-background) rounded-lg shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 hover:shadow-2xl transition w-full"
          >
            {q.logo && (
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-sm overflow-hidden">
                <ImageRender
                  src={q.logo}
                  alt={`${q.institute} logo`}
                  className="w-full h-full"
                />
              </div>
            )}

            <div className="flex flex-col gap-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-(--button-background)">
                  {q.name}
                </h3>
              </div>
              <p className="text-(--link-text) font-medium">{q.institute}</p>
              <p className="text-(--link-text)">{q.stream}</p>
              <p className="text-(--link-text) mt-1">
                {q.from} - {q.to}
              </p>
            </div>
          </motion.div>
        ))
      )}
    </section>
  );
};

export default Qualification;
