import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { projects } from "../data";

const fadeFlyUp = {
  hidden: { opacity: 0, y: 80 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const ProjectCard = ({ proj, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  const type = proj.type || "Web App";
  const tagColor =
    type === "AI"
      ? "bg-indigo-600"
      : type === "System"
      ? "bg-blue-600"
      : "bg-green-600";
  const tagText =
    type === "AI" ? "AI" : type === "System" ? "System" : "Web App";

  const subtitle =
    proj.subtitle ||
    (proj.title.includes(" - ") ? proj.title.split(" - ")[1] : "Application");

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeFlyUp}
      initial="hidden"
      animate={controls}
      className="
        bg-gray-800 rounded-xl shadow-2xl overflow-hidden 
        border border-gray-700 
        hover:shadow-indigo-500/30 hover:shadow-xl hover:border-indigo-500 
        transition duration-300 transform hover:scale-[1.02]
        relative
      "
    >
      <div className="flex justify-between items-center p-4 text-xs font-semibold text-gray-300">
        <span className={`${tagColor} px-3 py-1 rounded-full text-white`}>
          {tagText}
        </span>
        <span className="text-gray-400">{proj.year}</span>
      </div>

      <div className="p-5 pt-0">
        <h3 className="text-xl font-bold text-gray-100 hover:text-indigo-400 transition-colors duration-200">
          {proj.title}
        </h3>
        <p className="text-sm font-semibold mb-3 text-indigo-400">{subtitle}</p>

        <p className="text-gray-400 text-sm mb-4 line-clamp-4">{proj.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(proj.tech || "")
            .split(",")
            .filter((t) => t.trim())
            .map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-md bg-gray-700 text-cyan-400"
              >
                {tech.trim()}
              </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const augmentedProjects = projects.map((p) => ({
    ...p,
    subtitle: p.subtitle || p.title.split(" - ")[1] || "Web Application",
    type:
      p.type ||
      (p.title.includes("AI") || p.title.includes("Facial") ? "AI" : "Web App"),
    tech: Array.isArray(p.tech) ? p.tech.join(", ") : p.tech,
    live: p.live || "#",
    code: p.code || "#",
  }));

  return (
    <motion.section
      ref={sectionRef}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      initial="hidden"
      animate={controls}
      id="projects"
      className="py-20 bg-gray-950 px-6 min-h-screen"
    >
      <motion.h2
        variants={fadeFlyUp}
        initial="hidden"
        animate={controls}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-12 text-white"
      >
        Featured{" "}
        <span className="title-me text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Projects
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {augmentedProjects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} index={idx} />
        ))}
      </div>
    </motion.section>
  );
}
