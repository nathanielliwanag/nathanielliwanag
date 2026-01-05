import React from "react";
import { motion } from "framer-motion";
import { personal } from "../data";
import { FaDownload } from "react-icons/fa";
import profile from "../assets/Profile.png";
import "../assets/style.css";

const mockPersonal = {
  location: "Capas, Central Luzon, Philippines",
  email: "contact@nathaniel.dev",
  profileImage: "../assets/Profile.png",
};

export default function About() {
  const data = personal || mockPersonal;

  return (
    <section
      id="about"
      className="about-section py-20 px-6 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="title-text text-center text-4xl sm:text-5xl font-extrabold mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About{" "}
          <span className="title-me text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
            Me
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <motion.div
            className="image-card w-full lg:w-1/3 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative z-10 w-full aspect-square overflow-hidden rounded-xl border border-gray-700 transition duration-300 group"
              style={{
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
                border: "1px solid rgba(168, 85, 247, 0.5)",
                cursor: "pointer",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(168, 85, 247, 1.0)",
                borderColor: "rgba(59, 130, 246, 0.8)",
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="description-card p-6 rounded-lg mb-8 bg-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                  Dedicated <strong>Full Stack Developer</strong> with a proven
                  track record in designing dynamic, responsive, and
                  high-performance web applications. Committed to building and
                  maintaining reliable systems through expertise in both{" "}
                  <strong>front-end and back-end development</strong>.
                </p>
                <p>
                  Skilled in a wide range of programming languages and
                  frameworks, enabling efficient and scalable solution
                  development. Proficient in{" "}
                  <strong>
                    UI/UX design, database management, and API integration
                  </strong>
                  , ensuring seamless user experiences and optimized application
                  performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-cv-button flex-grow inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md text-white font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.8)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.97 }}
              >
                <FaDownload /> Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
