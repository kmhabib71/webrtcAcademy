import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const AdvancedCoursesCTASection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold">Next Steps</h2>
        <p className="mt-4 text-lg text-gray-700">
          Take your skills to the next level by enrolling in advanced courses.
        </p>
      </motion.div>

      {/* Advanced Courses CTA */}
      <motion.div
        className="bg-blue-600 p-6 rounded-lg shadow-md flex items-center justify-between text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Ready to Dive Deeper?</h3>
          <p>Explore our advanced courses and master WebRTC.</p>
        </div>
        <button className="mt-4 bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition">
          <ArrowRightIcon className="inline h-5 w-5 mr-2" />
          Explore Advanced Courses
        </button>
      </motion.div>
    </section>
  );
};

export default AdvancedCoursesCTASection;
