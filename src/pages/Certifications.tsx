"use client";

import { PiCertificateFill } from "react-icons/pi";
import { motion } from "framer-motion";
import ImageRender from "@/components/ImageRender";

const certifications: {
  name: string;
  issuer: string;
  date: string;
  logo: string;
}[] = [
  {
    name: "Full Stack Web Development",
    issuer: "Coursera",
    date: "June 2022",
    logo: "/profile.png",
  },
  {
    name: "React Developer Certification",
    issuer: "Udemy",
    date: "Dec 2021",
    logo: "/profile.png",
  },
];

const Certifications = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 flex flex-col gap-6">
      <h2 className="flex items-center justify-center gap-3 text-3xl sm:text-4xl font-bold text-(--text-color) mb-8">
        <PiCertificateFill /> Certifications
      </h2>

      {certifications?.length < 1 ? (
        <p className="text-center font-semibold text-(--link-text)">
          No Certification Found
        </p>
      ) : (
        certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-(--card-background) rounded-lg shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 hover:shadow-2xl transition w-full"
          >
            {cert.logo && (
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-sm overflow-hidden">
                <ImageRender
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-full h-full"
                />
              </div>
            )}

            <div className="flex flex-col gap-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-(--button-background)">
                  {cert.name}
                </h3>
              </div>
              <p className="text-(--link-text) font-medium">{cert.issuer}</p>
              <p className="text-(--link-text)">{cert.date}</p>
            </div>
          </motion.div>
        ))
      )}
    </section>
  );
};

export default Certifications;
