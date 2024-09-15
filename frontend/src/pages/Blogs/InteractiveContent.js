import React from "react";
import { motion } from "framer-motion";

const InteractiveContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Interactive Content
        </h2>
        <div className="space-y-12">
          <motion.div
            className="bg-gray-50 shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-semibold mb-4">
              WebRTC Knowledge Quiz: Test Your Skills
            </h3>
            <p className="text-gray-600 mb-4">
              Take this interactive quiz to test your WebRTC knowledge and see
              where you stand.
            </p>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg inline-block">
              Take the Quiz
            </a>
          </motion.div>

          <motion.div
            className="bg-gray-50 shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-semibold mb-4">
              Interactive WebRTC Project Walkthrough
            </h3>
            <p className="text-gray-600 mb-4">
              Follow along with this interactive walkthrough to build your first
              WebRTC project.
            </p>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg inline-block">
              Start the Walkthrough
            </a>
          </motion.div>

          <motion.div
            className="bg-gray-50 shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-semibold mb-4">
              WebRTC Toolkits and Resources: A Free Download for Subscribers
            </h3>
            <p className="text-gray-600 mb-4">
              Download our free WebRTC toolkits and resources by subscribing to
              our newsletter.
            </p>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg inline-block">
              Subscribe and Download
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContent;
