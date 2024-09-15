import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Video Chat Application",
    description: "Build a real-time video chat app using WebRTC.",
    image: "/images/video-chat.png",
  },
  {
    title: "Screen Sharing Tool",
    description: "Develop a screen sharing tool using WebRTC.",
    image: "/images/screen-sharing.png",
  },
];

const CapstoneProjects = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Capstone Projects
      </h2>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}>
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CapstoneProjects;
