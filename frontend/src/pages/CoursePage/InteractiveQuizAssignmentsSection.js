import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const InteractiveQuizAssignmentsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold">
          Interactive Quizzes & Assignments
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Test your knowledge with quizzes and apply what you've learned through
          practical assignments.
        </p>
      </motion.div>

      {/* Quizzes Section */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <h3 className="text-2xl font-semibold mb-4">Lecture Quizzes</h3>
        <p className="text-gray-700">
          Take quizzes after lectures to reinforce learning.
        </p>
        {/* Example quiz content */}
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
          Start Quiz
        </button>
      </motion.div>

      {/* Assignments Section */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <h3 className="text-2xl font-semibold mb-4">Assignments</h3>
        <p className="text-gray-700">
          Submit assignments based on lecture content. Receive feedback and
          improve your skills.
        </p>
        {/* Example assignment submission */}
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition">
          Submit Assignment
        </button>
      </motion.div>
    </section>
  );
};

export default InteractiveQuizAssignmentsSection;
