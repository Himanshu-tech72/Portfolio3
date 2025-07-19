import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import AnimatedBackground from './components/AnimatedBackground';
import { motion } from "motion/react"
import { Home as HomeIcon, User, Folder, Mail } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-black w-full">
      <AnimatedBackground />
      <BrowserRouter>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex p-4 shadow-md bg-violet-50 justify-center"
        >
          <div className="flex space-x-6 mt-0 w-full justify-center">
            <Link to="/" className="flex items-center space-x-1 hover:underline">
              <HomeIcon size={18} /> <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:underline">
              <User size={18} /> <span>About</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-1 hover:underline">
              <Folder size={18} /> <span>Projects</span>
            </Link>
            <Link to="/footer" className="flex items-center space-x-1 hover:underline">
              <Mail size={18} /> <span>Contact</span>
            </Link>
          </div>
        </motion.nav>
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;