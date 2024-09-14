import React from "react";
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  CubeIcon,
  TagIcon,
  BriefcaseIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const CoursesOverviewSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-red-200 via-pink-200 to-blue-200 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          Explore Our WebRTC Courses
        </motion.h2>

        {/* Featured Courses */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}>
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <BookOpenIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Beginner's WebRTC Course
            </h3>
            <p className="text-gray-700 mt-2">
              Start your WebRTC journey with this beginner's course.
            </p>
            <p className="text-red-500 font-bold mt-4">$99</p>
            <motion.a
              href="/courses/beginner-webrtc"
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
              Learn More
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <CubeIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Advanced WebRTC Projects
            </h3>
            <p className="text-gray-700 mt-2">
              Dive deep with advanced WebRTC projects.
            </p>
            <p className="text-red-500 font-bold mt-4">$149</p>
            <motion.a
              href="/courses/advanced-webrtc"
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
              Learn More
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <TagIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              WebRTC Business Bundle
            </h3>
            <p className="text-gray-700 mt-2">
              Get all WebRTC courses in one bundle and save.
            </p>
            <p className="text-red-500 font-bold mt-4">$199</p>
            <motion.a
              href="/courses/webrtc-bundle"
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
              Learn More
            </motion.a>
          </motion.div>

          {/* Additional Courses */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <UsersIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              WebRTC for Teams
            </h3>
            <p className="text-gray-700 mt-2">
              Collaborate and build WebRTC solutions with your team.
            </p>
            <p className="text-red-500 font-bold mt-4">$129</p>
            <motion.a
              href="/courses/webrtc-teams"
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
              Learn More
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <BriefcaseIcon className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              WebRTC Enterprise Solutions
            </h3>
            <p className="text-gray-700 mt-2">
              Learn how to build enterprise-grade WebRTC applications.
            </p>
            <p className="text-red-500 font-bold mt-4">$249</p>
            <motion.a
              href="/courses/webrtc-enterprise"
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Course Categories */}
        {/* <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}>
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold text-gray-900">
              Beginner Courses
            </h3>
            <p className="text-gray-700 mt-2">
              Perfect for those new to WebRTC.
            </p>
            <motion.a
              href="/courses/category/beginner"
              className="mt-6 px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition duration-300">
              Explore
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold text-gray-900">
              Advanced Courses
            </h3>
            <p className="text-gray-700 mt-2">
              For those who want to deepen their knowledge.
            </p>
            <motion.a
              href="/courses/category/advanced"
              className="mt-6 px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition duration-300">
              Explore
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold text-gray-900">
              Business Projects
            </h3>
            <p className="text-gray-700 mt-2">
              Learn to build WebRTC applications for business.
            </p>
            <motion.a
              href="/courses/category/business"
              className="mt-6 px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition duration-300">
              Explore
            </motion.a>
          </motion.div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default CoursesOverviewSection;
