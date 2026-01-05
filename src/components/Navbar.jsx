import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Signature.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <motion.div
          animate={{ scale: isScrolled ? 0.7 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center space-x-3"
        >
          <img
            src={logo}
            alt="Nathaniel Signature"
            className={`transition-all duration-300 object-contain ${
              isScrolled ? "h-12 w-auto" : "h-20 w-auto"
            } `}
          />
        </motion.div>

        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
