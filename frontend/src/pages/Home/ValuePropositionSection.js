import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  UsersIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

// Define Framer Motion variants for the section items
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

const ValuePropositionSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          Why Choose WebRTC Academy?
        </motion.h2>
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {/* Benefit 1 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={itemVariants}
            whileHover="hover">
            <AcademicCapIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Hands-On Projects
            </h3>
            <p className="text-gray-700 mt-2">
              Gain practical experience by working on real-world projects that
              prepare you for the industry.
            </p>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={itemVariants}
            whileHover="hover">
            <CheckBadgeIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Industry-Recognized Certification
            </h3>
            <p className="text-gray-700 mt-2">
              Earn certifications that are recognized by top companies and
              enhance your career prospects.
            </p>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={itemVariants}
            whileHover="hover">
            <UsersIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Expert Mentorship
            </h3>
            <p className="text-gray-700 mt-2">
              Learn from industry experts who guide you through every step of
              your learning journey.
            </p>
          </motion.div>

          {/* Benefit 4 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={itemVariants}
            whileHover="hover">
            <ClockIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Lifetime Access
            </h3>
            <p className="text-gray-700 mt-2">
              Get lifetime access to all course materials, so you can learn at
              your own pace.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ValuePropositionSection;
