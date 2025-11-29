"use client";
import ImageRender from "@/components/ImageRender";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import Qualification from "./Qualification";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaFolderOpen,
} from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { icon: <FaGraduationCap className="text-xl" />, name: "Qualification" },
  { icon: <PiCertificateFill className="text-xl" />, name: "Certification" },
  { icon: <FaBriefcase className="text-xl" />, name: "Experience" },
  { icon: <FaLaptopCode className="text-xl" />, name: "Skills" },
  { icon: <FaFolderOpen className="text-xl" />, name: "Projects" },
];

const AboutPage = () => {
  const [selectedTab, setSelectedTab] = useState<string>(
    tabs.find((tab) => tab.name === "Qualification")!.name
  );

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Qualification":
        return <Qualification />;
      case "Certification":
        return <Certifications />;
      case "Experience":
        return <Experience />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      default:
        return <Qualification />;
    }
  };

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-10">
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-(--background-color)/95 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
        <motion.div
          className="relative w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-60 lg:h-64 mx-auto md:mx-0 rounded overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ImageRender src="/profile.png" alt="profile" className="" />
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col gap-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h5 className="text-3xl font-semibold text-(--link-text) text-center lg:text-left">
            I{"'"}m Hruday Kumar
          </h5>
          <p className="text-(--link-text) capitalize font-semibold text-lg text-center lg:text-left">
            full stack developer
          </p>
          <p className="text-(--link-text) text-xs sm:text-sm md:text-base text-justify leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, dolore sequi labore consectetur nesciunt quis quaerat
            temporibus laborum veritatis facere deleniti, ducimus ut
            consequuntur, eum sapiente non sit reprehenderit aliquam vitae
            placeat et. Sequi nemo, dolores a hic dolorum, totam quas veniam
            reiciendis error voluptatem, repellendus nobis facilis ullam
            consequuntur?
          </p>

          <Button
            type="button"
            name="download resume"
            icon={<FiDownload className="w-5 h-5" />}
          />
        </motion.div>
      </section>

      <section className="mt-8 bg-(--background-color)/95">
        <div>
          <div className="grid grid-cols-1 sm:hidden">
            <select
              value={selectedTab}
              onChange={(e) => setSelectedTab(e.target.value)}
              aria-label="Select a tab"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            >
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.name}>
                  {tab.name}
                </option>
              ))}
            </select>
            <IoChevronDown
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
            />
          </div>

          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav aria-label="Tabs" className="-mb-px flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setSelectedTab(tab.name)}
                    className={classNames(
                      selectedTab === tab.name
                        ? "border-(--text-color) text-(--text-color)"
                        : "border-transparent text-(--link-text) hover:border-(--link-text-hover) hover:text-(--link-text-hover)",
                      "w-1/4 border-b-2 px-1 py-4 text-center text-base font-medium flex items-center gap-3 justify-center"
                    )}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
