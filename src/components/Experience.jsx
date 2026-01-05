import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { experiences } from "../data";
import Lottie from "lottie-react";
import "../assets/style.css";
import animationData from "../assets/ProgrammingAnimation.json";

const fadeFlyUp = {
  hidden: { opacity: 0, y: 80 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const fadeFlyRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ExperienceIllustration = ({ trigger }) => {
  const controls = useAnimation();
  useEffect(() => {
    if (trigger) controls.start("visible");
  }, [trigger, controls]);

  return (
    <motion.div
      variants={fadeFlyRight}
      initial="hidden"
      animate={controls}
      className="hidden lg:flex justify-center items-center relative h-full min-h-[300px]"
    >
      <div
        className="absolute inset-0 bg-fuchsia-600/30 dark:bg-purple-600/20"
        style={{
          clipPath: "polygon(15% 5%, 85% 15%, 85% 85%, 15% 95%)",
          filter: "blur(70px)",
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      <div className="relative z-10 w-full max-w-lg">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeFlyUp}
      initial="hidden"
      animate={controls}
      className="
        relative p-6 lg:p-8 
        bg-black/30 rounded-xl 
        border border-purple-500/30 
        shadow-2xl shadow-purple-900/30
        transition duration-300 
        hover:border-cyan-400/50 hover:shadow-cyan-700/40
      "
    >
      <p className="absolute -top-6 right-0 text-sm font-mono text-cyan-400">
        {exp.date}
      </p>
      <div className="mb-3">
        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
        {exp.organization && (
          <p className="text-base font-medium text-purple-400">
            {exp.organization}
          </p>
        )}
        {exp.details?.length > 0 && (
          <p className="text-sm text-gray-400 mt-2 italic">{exp.details[0]}</p>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const sectionControls = useAnimation();

  useEffect(() => {
    if (isInView) sectionControls.start("visible");
  }, [isInView, sectionControls]);

  return (
    <motion.section
      ref={sectionRef}
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      initial="hidden"
      animate={sectionControls}
      id="experience"
      className="py-16 lg:py-24 bg-[#0a0f1e] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1a0a2e 1px, transparent 1px),
              linear-gradient(to bottom, #1a0a2e 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 80%)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeFlyUp}
          initial="hidden"
          animate={sectionControls}
          className="title-text text-center text-4xl sm:text-5xl font-extrabold mb-12"
        >
          Work{" "}
          <span className="title-me text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Experience
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-16 order-2 lg:order-1 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <ExperienceCard exp={exp} index={index} />
                {index < experiences.length - 1 && (
                  <>
                    <div className="absolute top-[50%] left-0 w-[2px] h-full bg-purple-500/50 transform -translate-x-1/2 hidden lg:block" />
                    <div className="absolute top-[50%] left-0 w-3 h-3 rounded-full bg-cyan-400 border-2 border-purple-500 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block" />
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-10 order-1 lg:order-2 h-full">
            <ExperienceIllustration trigger={isInView} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
