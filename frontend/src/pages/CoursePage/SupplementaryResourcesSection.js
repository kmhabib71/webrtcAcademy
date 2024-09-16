import React from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon, LinkIcon } from "@heroicons/react/24/solid";

const SupplementaryResourcesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold">Supplementary Resources</h2>
        <p className="mt-4 text-lg text-gray-700">
          Access additional materials that complement the course content.
        </p>
      </motion.div>

      {/* Resources Section */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <h3 className="text-2xl font-semibold mb-4">Resource Downloads</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">
            <ArrowDownTrayIcon className="inline h-5 w-5 text-blue-600 mr-2" />
            <a
              href="/path/to/resource.pdf"
              className="underline hover:text-blue-800">
              Download PDF: WebRTC Basics
            </a>
          </li>
          <li className="mb-2">
            <ArrowDownTrayIcon className="inline h-5 w-5 text-blue-600 mr-2" />
            <a
              href="/path/to/resource.zip"
              className="underline hover:text-blue-800">
              Download Source Code: WebRTC Project
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Related Content Section */}
      <motion.div
        className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <h3 className="text-2xl font-semibold mb-4">Related Content</h3>
        <p className="text-gray-700">
          Explore additional resources and courses that complement this course.
        </p>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition">
          View Related Courses
        </button>
      </motion.div>
    </section>
  );
};

export default SupplementaryResourcesSection;
