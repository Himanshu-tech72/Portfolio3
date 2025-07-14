import React from 'react';
import { motion } from "framer-motion";
import heroImage from '../assets/images/hero.jpg'; 
import heroBackground from '../assets/images/hero-bg.jpg';

function Home() {
    return(
       <motion.section
      id="home"
      className="h-screen relative flex flex-col md:flex-row justify-center items-center text-center md:text-left p-8 gap-8 overflow-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      {/* Static background image without animation */}
      <img
        src={heroBackground}
        alt="Background"
        className="absolute  w-full h-full "
        style={{ opacity: 1 }}
      />

      <div className="flex-1 z-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Hi, I'm Himanshu</h1>
        <p className="text-xl mt-4 text-white drop-shadow-lg">I help founders turn their ideas into seamless digital experiences.</p>
      </div>

      <motion.div
        className="flex-1 max-w-sm w-full z-10"
        // initial={{ x: 100, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img
          src={heroImage}
          alt="Hero"
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />
      </motion.div>
    </motion.section>
    )
}

export default Home;