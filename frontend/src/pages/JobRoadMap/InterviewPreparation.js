import React from "react";
import { motion } from "framer-motion";

const InterviewPreparation = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Interview Preparation
      </h2>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-bold mb-2">
            WebRTC Interview Questions
          </h3>
          <p className="text-gray-600 mb-4">
            Prepare for your WebRTC developer interview with our comprehensive
            list of common questions and answers.
          </p>
          <a
            href="/interview-questions"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            Explore Interview Questions
          </a>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <h3 className="text-2xl font-bold mb-2">
            Resume and LinkedIn Review
          </h3>
          <p className="text-gray-600 mb-4">
            Optimize your resume and LinkedIn profile with our expert tips and
            templates designed for WebRTC developers.
          </p>
          <a
            href="/resume-linkedin-review"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InterviewPreparation;
