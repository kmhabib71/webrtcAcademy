import React from "react";
import { motion } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/solid";

const RoadmapOverview = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Overview Video */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          <div className="relative group">
            <img
              src="/images/overview-thumbnail.jpg"
              alt="Overview Video"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-50 transition-all duration-300">
              <PlayIcon className="h-14 w-14 text-white" />
            </button>
          </div>
        </motion.div>

        {/* Text Summary */}
        <motion.div
          className="mt-10 lg:mt-0 lg:ml-16 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            WebRTC Developer Job Roadmap
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed">
            The WebRTC Developer Job Roadmap is crafted to transition you from a
            novice to a job-ready WebRTC developer, with a clear structure that
            covers essential stages like Introduction, Intermediate, Advanced,
            Projects, and Interview Preparation.
          </p>
          <ul className="mt-8 space-y-4 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-gray-900">Introduction:</span>{" "}
              Get started with the basics of WebRTC.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Intermediate:</span>{" "}
              Dive deeper into WebRTC concepts.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Advanced:</span>{" "}
              Master advanced WebRTC techniques.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Projects:</span>{" "}
              Work on real-world projects.
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Interview Prep:
              </span>{" "}
              Prepare for your WebRTC developer interview.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapOverview;
