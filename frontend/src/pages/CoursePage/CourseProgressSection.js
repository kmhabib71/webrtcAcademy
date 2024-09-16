import React from "react";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid"; // Adjusted Icon

const CourseProgressSection = ({ progress, badges }) => {
  return (
    <section className="max-w-7xl mx-auto p-4 lg:p-8">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-xl font-bold">Course Progress</h2>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}></div>
          </div>
          <p className="mt-2 text-gray-600">{progress}% Complete</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Achievements & Badges</h2>
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-lg p-4 text-center shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <CheckBadgeIcon className="h-12 w-12 mx-auto text-green-500" />
                <h3 className="mt-2 font-medium">{badge.name}</h3>
                <p className="text-sm text-gray-500">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CourseProgressSection;
