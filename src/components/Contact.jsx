import React, { useState, useRef } from "react";
import { personal } from "../data";
import { FaThumbtack, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col space-y-4 p-8 bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 shadow-2xl"
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formState.name}
        onChange={handleChange}
        required
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formState.email}
        onChange={handleChange}
        required
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
      />
      <textarea
        name="message"
        placeholder="Your message..."
        rows="5"
        value={formState.message}
        onChange={handleChange}
        required
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition duration-200"
      ></textarea>

      <button
        type="submit"
        className="mt-4 flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-lg text-white transition duration-300 transform 
                   bg-gradient-to-r from-cyan-500 to-indigo-600 
                   hover:from-cyan-400 hover:to-indigo-500 
                   shadow-lg hover:shadow-xl shadow-indigo-500/30"
      >
        <FaPaperPlane />
        <span>Send Message</span>
      </button>
    </motion.form>
  );
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  const flyInVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    },
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-32 bg-gray-950 text-white px-4"
    >
      <motion.div
        variants={flyInVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={flyInVariants(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-12 text-white"
        >
          Get in{" "}
          <span className="title-me text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Touch
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <motion.h3
              variants={flyInVariants(0.2)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl font-bold text-gray-100 mb-4"
            >
              Let's Connect
            </motion.h3>

            <motion.p
              variants={flyInVariants(0.3)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-gray-300 leading-relaxed max-w-lg"
            >
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </motion.p>

            <motion.div
              variants={flyInVariants(0.4)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center space-x-4 p-4 bg-gray-900/80 rounded-xl border border-gray-800 hover:border-blue-500 transition duration-300 cursor-pointer w-full max-w-md"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg text-white bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base font-semibold text-gray-100 hover:text-blue-400 transition"
                >
                  {personal.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={flyInVariants(0.5)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center space-x-4 p-4 bg-gray-900/80 rounded-xl border border-gray-800 hover:border-teal-500 transition duration-300 w-full max-w-md"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg text-white bg-gradient-to-br from-teal-500 to-indigo-600 shadow-lg shadow-teal-500/30">
                <FaPhone />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">
                  Phone Number
                </p>
                <p className="text-base font-semibold text-gray-100">
                  {personal.phone}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={flyInVariants(0.6)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center space-x-4 p-4 bg-gray-900/80 rounded-xl border border-gray-800 hover:border-purple-500 transition duration-300 w-full max-w-md"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/30">
                <FaThumbtack />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">Location</p>
                <p className="text-base font-semibold text-gray-100">
                  {personal.location}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={flyInVariants(0.7)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:mt-0"
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
