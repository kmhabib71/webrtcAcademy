import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const CourseHeroSection = () => {
  return (
    <motion.div
      className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      {/* Text Content */}
      <motion.div
        className="lg:w-2/3 space-y-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <motion.h1
          className="text-4xl lg:text-5xl font-bold leading-snug text-gray-900"
          whileHover={{ scale: 1.05 }}>
          Master WebRTC: Complete Guide
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl text-gray-700 leading-relaxed"
          whileHover={{ scale: 1.05 }}>
          Become a WebRTC expert with this comprehensive course.
        </motion.p>
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-gray-300" />
          </div>
          <span className="text-gray-600">(4.8) 120 Reviews</span>
        </motion.div>
        <motion.div className="flex space-x-4">
          <motion.button
            className="px-6 py-3 bg-red-500 text-white rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Enroll Now - $199
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-white text-red-500 border border-red-500 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Preview Course
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Course Image/Video */}
      <motion.div
        className="lg:w-1/3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <img
          src="/images/course-hero.jpg"
          alt="Course Hero"
          className="w-full h-auto rounded-md shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default CourseHeroSection;
