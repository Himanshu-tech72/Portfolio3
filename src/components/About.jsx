import React from 'react'
import { motion } from "framer-motion"; // Ensure you have framer-motion installed

const About = () => {
  return (
     <motion.section
      id="about"
      className="p-8 max-w-4xl mx-auto text-center bg-black"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p>I am a passionate frontend developer with experience in building responsive and interactive 
         web applications using React and Tailwind CSS.</p>
    </motion.section>
  );
};

export default About
