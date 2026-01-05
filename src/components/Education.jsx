import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Education() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
          } else {
            controls.start({ opacity: 0, y: 50 });
          }
        });
      },
      { threshold: 0.3 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, [controls]);

  return (
    <section
      id="education"
      className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
            Education & Training
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-gray-700/70 pl-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12 relative"
            >
              <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-green-400 shadow-md shadow-teal-400/30"></div>
              <div className="p-6 bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-xl hover:shadow-teal-500/10 transition duration-300 text-left">
                <h3 className="text-2xl font-semibold text-white">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-gray-400 mt-1 text-sm uppercase tracking-wide">
                  Tarlac State University • 2012 – 2016
                </p>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  Specialized in full-stack development and information systems.
                  Built several academic web projects focused on user
                  experience, database design, and scalable backend
                  architectures.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mb-12 relative"
            >
              <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md shadow-cyan-400/30"></div>
              <div className="p-6 bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-xl hover:shadow-cyan-500/10 transition duration-300 text-left">
                <h3 className="text-2xl font-semibold text-white">
                  Cybersecurity Incident Response Team Training
                </h3>
                <p className="text-gray-400 mt-1 text-sm uppercase tracking-wide">
                  The Signal School, Army Signal Regiment, Philippine Army •
                  Aug–Oct 2022
                </p>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  Gained hands-on experience in incident detection, digital
                  forensics, malware analysis, and response coordination under
                  the Philippine Army’s cybersecurity framework.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 shadow-md shadow-purple-400/30"></div>
              <div className="p-6 bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-xl hover:shadow-purple-500/10 transition duration-300 text-left">
                <h3 className="text-2xl font-semibold text-white">
                  Ethical Hacking and Pentesting Workshop
                </h3>
                <p className="text-gray-400 mt-1 text-sm uppercase tracking-wide">
                  MST Connect Educational Consultancy • Sept 27–28, 2025
                </p>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  Acquired practical knowledge in penetration testing,
                  vulnerability assessment, and ethical hacking techniques using
                  industry-grade tools and methodologies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
