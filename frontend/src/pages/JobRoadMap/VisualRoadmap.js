import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    title: "Introduction",
    description: "Getting started with WebRTC",
    link: "/courses/introduction",
  },
  {
    title: "Intermediate",
    description: "Building on WebRTC fundamentals",
    link: "/courses/intermediate",
  },
  {
    title: "Advanced",
    description: "Advanced WebRTC techniques",
    link: "/courses/advanced",
  },
  {
    title: "Projects",
    description: "Real-world WebRTC projects",
    link: "/courses/projects",
  },
  {
    title: "Interview Prep",
    description: "Prepare for job interviews",
    link: "/courses/interview-prep",
  },
];

const VisualRoadmap = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Your WebRTC Developer Journey
      </h2>
      <div className="flex flex-col items-center space-y-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-2/3 flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}>
            <div className="flex-shrink-0 bg-blue-500 h-16 w-16 flex items-center justify-center rounded-full text-white font-bold text-xl">
              {index + 1}
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VisualRoadmap;
