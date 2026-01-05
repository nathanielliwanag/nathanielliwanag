// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { personal } from "../data";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";

const CodeBlock = () => (
  <pre className="text-left text-sm sm:text-base font-mono overflow-x-hidden text-gray-300">
    <code>
      <span className="text-pink-500">const</span>{" "}
      <span className="text-blue-400">coder</span> = {"{\n"}
      <span className="text-sky-300">name</span>:{" "}
      <span className="text-yellow-400">'Nathaniel L Liwanag'</span>,<br />
      <span className="text-sky-300">skills</span>: [
      <span className="text-yellow-400">'React'</span>,{" "}
      <span className="text-yellow-400">'NextJS'</span>,{" "}
      <span className="text-yellow-400">'VueJS'</span>,{" "}
      <span className="text-yellow-400">'Express'</span>,{" "}
      <span className="text-yellow-400">'Angular'</span>,<br />
      <span className="text-yellow-400">'MySQL'</span>,{" "}
      <span className="text-yellow-400">'Firebase'</span>,{" "}
      <span className="text-yellow-400">'Docker'</span>, <br />
      <span className="text-sky-300">Diligent</span>:{" "}
      <span className="text-blue-400">true</span>,<br />
      <span className="text-sky-300">Fast Learner</span>:{" "}
      <span className="text-blue-400">true</span>,<br />
      <span className="text-sky-300">Problem Solver</span>:{" "}
      <span className="text-blue-400">true</span>,<br />
      <span className="text-sky-300">hireable</span>:{" "}
      <span className="text-pink-500">function</span>() {"{\n"}
      {"    "}
      <span className="text-pink-500">return</span> (<br />
      {"      "}
      <span className="text-purple-400">this</span>.
      <span className="text-sky-300">hardworker</span>{" "}
      <span className="text-pink-500">&amp;&amp;</span>
      <br />
      {"      "}
      <span className="text-purple-400">this</span>.
      <span className="text-sky-300">problemSolver</span>{" "}
      <span className="text-pink-500">&amp;&amp;</span>
      <br />
      {"      "}
      <span className="text-purple-400">this</span>.
      <span className="text-sky-300">skills</span>.
      <span className="text-sky-300">length</span>{" "}
      <span className="text-pink-500">&gt;=</span>{" "}
      <span className="text-orange-400">10</span>
      <br />
      {"    "});
      <br />
      {"  "}
      {"}\n"}
      {"};"}
    </code>
  </pre>
);

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 }); // 👈 triggers when 30% visible

  // Mouse tilt
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!sectionRef.current) return;
      const { left, top, width, height } =
        sectionRef.current.getBoundingClientRect();
      const x = event.clientX - left - width / 2;
      const y = event.clientY - top - height / 2;
      rotateX.set(-y / 60);
      rotateY.set(x / 60);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY]);

  // Glow animation
  const glowY = useMotionValue(0);
  const glowOpacity = useTransform(glowY, [0, 100], [0.2, 0.6]);
  useEffect(() => {
    const interval = setInterval(() => {
      glowY.set(Math.random() * 100);
    }, 3000);
    return () => clearInterval(interval);
  }, [glowY]);

  // Motion variants
  const flyInLeft = {
    hidden: { opacity: 0, x: -100, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const flyInRight = {
    hidden: { opacity: 0, x: 100, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a0f1e] relative p-6 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,15,30,0.85), rgba(10,15,30,0.9)), url('/src/assets/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[120px] -z-10"
        style={{ top: "20%", left: "60%", opacity: glowOpacity }}
        animate={{ y: [0, 20, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="z-20 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* LEFT TEXT SECTION */}
        <motion.div
          variants={flyInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // 👈 animate only when in view
          className="text-left space-y-8"
        >
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Hello, <br />
            This is{" "}
            <motion.span
              className="font-extrabold text-white uppercase hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Nathaniel
            </motion.span>
            , I'm a <br />
            <motion.span
              className="text-green-400 hover:text-green-300 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Developer.
            </motion.span>
          </motion.h1>

          {/* SOCIAL ICONS */}
          {/* <motion.div
            className="flex items-center space-x-6"
            variants={flyInLeft}
            animate={isInView ? "visible" : "hidden"}
          >
            {[FaGithub, FaLinkedin, FaFacebookF, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  boxShadow: "0 0 25px rgba(236,72,153,0.5)",
                }}
                className="text-pink-500 hover:text-pink-300 transition-all duration-300 p-3 rounded-full hover:bg-white/10"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div> */}

          {/* BUTTONS */}
          <motion.div
            className="flex items-center gap-5"
            variants={flyInLeft}
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.a
              href="#contact"
              className="px-6 py-2.5 rounded-md border border-gray-400 text-white font-semibold hover:bg-white/10 transition-all duration-300 uppercase tracking-wider"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1V-wtjgdeoGuEY8mRmZ_RYDNrfZ77UvS7/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 px-6 py-2.5 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg uppercase tracking-wider"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 35px rgba(192,132,252,0.6)",
              }}
            >
              Get Resume <FaDownload />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT CODE CARD */}
        <motion.div
          style={{ rotateX, rotateY }}
          variants={flyInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // 👈 triggers on scroll
          className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl shadow-2xl shadow-purple-900/20 
            hover:shadow-[0_0_40px_rgba(192,132,252,0.3)] hover:border-purple-500/50 
            transition-all duration-500 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 p-4 border-b border-gray-800">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="p-6 sm:p-8">
            <CodeBlock />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
