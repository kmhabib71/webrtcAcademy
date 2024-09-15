import React from "react";
import { motion } from "framer-motion";

const CoursesHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          Explore Our WebRTC Courses
        </motion.h1>
        <motion.p
          className="mt-4 text-lg lg:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}>
          Whether you're a beginner or looking to advance your skills, we have a
          course for you.
        </motion.p>
        <motion.div
          className="mt-8 space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-md shadow-md">
            Browse All Courses
          </button>
          <button className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md">
            Start Learning
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesHero;
