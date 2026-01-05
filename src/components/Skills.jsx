import React, { useRef, useEffect, useState } from "react";
import {
  FaPython,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaLaravel,
  FaCode,
  FaCog,
  FaWrench,
  FaDatabase,
  FaTasks,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiCodeigniter,
  SiSymfony,
  SiCakephp,
  SiComposer,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiFlask,
} from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";

const categorizedSkills = [
  {
    title: "Languages",
    icon: <FaCode />,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "PHP",
      "HTML",
      "CSS",
      "Java",
    ],
  },
  {
    title: "Frameworks & Runtime",
    icon: <FaTasks />,
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Node.js",
      "Laravel",
      "Symfony",
      "CodeIgniter",
      "Flask",
      "Capacitor.js",
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & UI",
    icon: <FaWrench />,
    skills: ["Tailwind", "Bootstrap", "jQuery"],
  },
  {
    title: "General/DevOps",
    icon: <FaCog />,
    skills: ["Git", "Docker", "Tailscale", "CI/CD"],
  },
];

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaLaravel />, name: "Laravel" },
  { icon: <SiCodeigniter />, name: "CodeIgniter" },
  { icon: <SiSymfony />, name: "Symfony" },
  { icon: <SiCakephp />, name: "CakePHP" },
  { icon: <SiComposer />, name: "Composer" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiVuedotjs />, name: "Vue.js" },
  { icon: <SiAngular />, name: "Angular" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiJquery />, name: "jQuery" },
  { icon: <SiFlask />, name: "Flask" },
];

const floatingIcons = [
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  SiJquery,
  SiTailwindcss,
  FaPhp,
  SiNextdotjs,
  SiVuedotjs,
  SiBootstrap,
];

// --- Animation Variants ---
const flyUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

// --- Skill Card Grid (with fly-in on scroll + re-trigger) ---
const SkillCardGrid = () => (
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {categorizedSkills.map((category, idx) => (
        <SkillCategoryCard key={idx} category={category} index={idx} />
      ))}
    </div>
  </div>
);

const SkillCategoryCard = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={flyUpVariant}
      initial="hidden"
      animate={controls}
      className="
        p-6 bg-gray-900/80 backdrop-blur-md rounded-2xl 
        shadow-2xl border border-gray-800
        hover:shadow-teal-500/30 hover:shadow-xl hover:border-teal-500 
        transition duration-300 transform hover:scale-[1.02]
        relative
      "
    >
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-700/50 pb-3">
        <div className="text-blue-400">{category.icon}</div>
        <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIdx) => (
          <motion.span
            key={skillIdx}
            className="
              px-3 py-1 text-sm font-medium rounded-full 
              bg-indigo-600/20 text-indigo-300 border border-indigo-500/50 
              cursor-default
            "
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(99, 102, 241, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

// --- Marquee Section ---
const SkillMarquee = ({ isHovered, setIsHovered }) => (
  <div className="relative w-full overflow-x-hidden">
    <motion.div
      className="flex items-center space-x-14 whitespace-nowrap py-10"
      animate={isHovered ? {} : { x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
    >
      {[...skills, ...skills].map((skill, idx) => (
        <div key={idx} className="overflow-visible">
          <motion.div
            className="flex flex-col items-center justify-center bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl px-8 py-6 text-2xl text-gray-300 shadow-md relative z-50 cursor-pointer"
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 25px 8px rgba(59,130,246,0.7)",
              borderColor: "#3b82f6",
              translateY: -8,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="text-6xl mb-2 text-blue-400 drop-shadow-xl">
              {skill.icon}
            </div>
            <p className="text-sm font-semibold">{skill.name}</p>
          </motion.div>
        </div>
      ))}
    </motion.div>
  </div>
);

// --- Main Skills Component ---
export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);
  const [displayMode, setDisplayMode] = useState("card");
  const isMarquee = displayMode === "marquee";

  return (
    <section
      id="skills"
      className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-x-hidden"
      style={{ overflowY: "visible", isolation: "isolate" }}
    >
      {/* Floating background icons */}
      <div className="absolute inset-0 pointer-events-none opacity-10 -z-10">
        {floatingIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-[5rem] text-blue-400"
            style={{
              top: `${(i * 15) % 90}%`,
              left: `${(i * 20) % 90}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      <motion.h2
        variants={flyUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="title-text text-center text-4xl sm:text-5xl font-extrabold mb-12"
      >
        Technical{" "}
        <span className="title-me text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
          Skills
        </span>
      </motion.h2>

      {isMarquee ? (
        <SkillMarquee isHovered={isHovered} setIsHovered={setIsHovered} />
      ) : (
        <SkillCardGrid />
      )}
    </section>
  );
}
