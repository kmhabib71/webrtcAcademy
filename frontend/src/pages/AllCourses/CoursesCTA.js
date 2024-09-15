import React from "react";
import { motion } from "framer-motion";

const CoursesCTA = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          Join Our WebRTC Academy Today
        </motion.h2>
        <p className="mt-4 text-lg">
          Get access to all our WebRTC courses, and start building your skills
          today.
        </p>
        <motion.div
          className="mt-8 space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-md shadow-md">
            Get Started
          </button>
          <button className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md">
            View All Courses
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesCTA;
