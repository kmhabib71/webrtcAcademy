import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

const CourseOverviewSection = () => {
  return (
    <motion.div
      className="container mx-auto px-6 py-12 space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      {/* Course Description */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Course Overview
        </h2>
        <p className="text-md lg:text-md text-gray-700 leading-relaxed">
          This course provides a comprehensive understanding of WebRTC, from
          basic principles to advanced techniques. Whether you're a beginner or
          an experienced developer, this course will equip you with the skills
          to master WebRTC and apply it in real-world projects.
        </p>
      </motion.div>

      {/* Learning Objectives */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}>
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Learning Objectives
        </h3>
        <ul className="list-disc list-inside space-y-2 text-md lg:text-md text-gray-700">
          <li>Understand the core principles of WebRTC technology.</li>
          <li>Develop real-time communication applications using WebRTC.</li>
          <li>Implement WebRTC in various environments and platforms.</li>
          <li>Gain hands-on experience with peer-to-peer communication.</li>
          <li>Learn how to troubleshoot and optimize WebRTC performance.</li>
        </ul>
      </motion.div>

      {/* Key Features */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}>
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Key Features
        </h3>
        <ul className="space-y-2 text-md lg:text-md text-gray-700">
          <li className="flex items-center">
            <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
            Downloadable resources for continued learning.
          </li>
          <li className="flex items-center">
            <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
            Lifetime access to all course materials.
          </li>
          <li className="flex items-center">
            <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
            Certificate of completion.
          </li>
          <li className="flex items-center">
            <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
            Expert-led instruction with real-world examples.
          </li>
          <li className="flex items-center">
            <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
            Regular updates with the latest WebRTC developments.
          </li>
        </ul>
      </motion.div>

      {/* Course Requirements */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}>
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Course Requirements
        </h3>
        <ul className="list-disc list-inside space-y-2 text-md lg:text-md text-gray-700">
          <li>Basic understanding of JavaScript and web development.</li>
          <li>Familiarity with HTML, CSS, and modern JavaScript frameworks.</li>
          <li>
            A computer with an internet connection and a modern web browser.
          </li>
          <li>No prior WebRTC experience is required, but it is helpful.</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default CourseOverviewSection;
