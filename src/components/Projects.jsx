import React from 'react'
import { motion } from "framer-motion"; // Ensure you have framer-motion installed

function Projects() {
  
//     const projects = [
//     { title: "Portfolio Website", description: "A modern portfolio built with React and Tailwind CSS." },
//     { title: "Job Portal", description: "Get real-time Job updates using Jobify API." }
//   ];

//   return (
//     <section id="projects" className="p-8 bg-gray-100">
//       <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((project, index) => (
//           <div key={index} className="p-4 bg-white shadow rounded-lg">
//             <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>

const projects = [
    { title: "Portfolio Website", description: "A modern portfolio built with React and Tailwind CSS." },
    { title: "Job Portal", description: "Get real-time Job updates using Jobify API." }
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;