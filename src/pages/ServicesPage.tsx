"use client";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { SiReact } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: <SiReact size={32} />,
    title: "Frontend Development",
    desc: "Building responsive, fast and interactive UI using React, Next.js and modern web technologies.",
  },
  {
    icon: <FaServer size={32} />,
    title: "Backend Development",
    desc: "Developing robust, scalable APIs and server logic using Node.js & Express.",
  },
  {
    icon: <FaLaptopCode size={32} />,
    title: "Full Stack Development",
    desc: "Complete end-to-end application development including frontend, backend & database.",
  },
  {
    icon: <FaDatabase size={32} />,
    title: "Database Management",
    desc: "Database design & optimization using MongoDB, MySQL & Firebase.",
  },
  {
    icon: <FaCloudUploadAlt size={32} />,
    title: "Deployment & Hosting",
    desc: "Secure deployment & monitoring on cloud platforms like Vercel, AWS & DigitalOcean.",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "Mobile Development",
    desc: "Cross-platform mobile applications using React Native.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-10 py-12 flex justify-center">
      <section className="w-full max-w-6xl bg-(--background-color)/95 rounded-3xl shadow-xl p-8 sm:p-10 flex flex-col gap-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-(--text-color)">
            My Services
          </h1>
          <p className="mt-2 text-(--text-color)/70 text-lg max-w-2xl mx-auto">
            I build scalable, modern and high-performance digital applications
            designed for real-world use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="bg-(--card-background) p-6 rounded-2xl shadow-lg border border-(--button-background)/30 transition flex flex-col items-center text-center gap-3"
            >
              <div className="text-(--button-background)">{service.icon}</div>
              <h3 className="text-xl font-bold text-(--text-color)">
                {service.title}
              </h3>
              <p className="text-(--text-color)/70 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6 flex gap-6 justify-center">
          <Link
            href="/contact"
            className="px-6 py-3 bg-(--button-background) text-white rounded-xl font-semibold hover:bg-(--button-background-hover) transition"
          >
            Contact Me
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-(--button-background) text-(--button-background) rounded-xl font-semibold hover:bg-(--button-background)/10 transition"
          >
            About Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
