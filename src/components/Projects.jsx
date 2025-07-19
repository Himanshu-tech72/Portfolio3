import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/himanshu-tech72/repos") 
      .then(res => res.json())
      .then(data => {
        const simplified = data.map(repo => ({
          name: repo.name,
          description: repo.description,
          url: repo.html_url
        }));
        setProjects(simplified);
      })
      .catch(err => console.error("Error fetching GitHub repos:", err));
  }, []);

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
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="mb-2 text-sm text-gray-600">{project.description || "No description"}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              View Repository →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
