import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const CurriculumSection = ({ modules = [] }) => {
  const [expandedModules, setExpandedModules] = React.useState({});

  // Fallback demo modules if none are provided
  const demoModules = [
    {
      title: "Getting Started with WebRTC",
      duration: 1.5, // in hours
      lessons: [
        {
          title: "Introduction to WebRTC",
          description:
            "A brief introduction to what WebRTC is and why it matters.",
          duration: "15 minutes",
          isFree: true,
        },
        {
          title: "Setting Up Your Development Environment",
          description:
            "Step-by-step guide to setting up your environment for WebRTC development.",
          duration: "30 minutes",
          isFree: false,
        },
      ],
    },
    {
      title: "Advanced WebRTC Techniques",
      duration: 2,
      lessons: [
        {
          title: "Peer-to-Peer Connections",
          description:
            "Learn how to establish and manage peer-to-peer connections.",
          duration: "45 minutes",
          isFree: false,
        },
        {
          title: "Handling Media Streams",
          description: "Techniques for capturing and processing media streams.",
          duration: "1 hour",
          isFree: false,
        },
      ],
    },
  ];

  // Use demo modules if none are provided
  const contentModules = modules.length > 0 ? modules : demoModules;

  const toggleModule = (moduleIndex) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleIndex]: !prev[moduleIndex],
    }));
  };

  return (
    <motion.div
      className="container mx-auto px-6 py-12 space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Curriculum
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Explore the course content below. Each module breaks down into
          lessons, giving you an in-depth understanding of WebRTC.
        </p>
      </motion.div>

      {/* Modules */}
      <motion.div
        className="space-y-8 w-[70%]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}>
        {contentModules.map((module, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer  mx-auto"
            onClick={() => toggleModule(index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                {module.title}
              </h3>
              {expandedModules[index] ? (
                <ChevronUpIcon className="h-6 w-6 text-gray-900" />
              ) : (
                <ChevronDownIcon className="h-6 w-6 text-gray-900" />
              )}
            </div>

            {expandedModules[index] && (
              <motion.div
                className="mt-4 space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}>
                {module.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {lesson.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {lesson.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{lesson.duration}</p>
                      {lesson.isFree && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          Free
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Total Duration */}
      <motion.div
        className="text-lg lg:text-xl text-gray-700 font-medium  mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}>
        Total Course Duration:{" "}
        <span className="font-bold">
          {contentModules.reduce((acc, module) => acc + module.duration, 0)}{" "}
          hours
        </span>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="w-full bg-gray-200 rounded-full h-4 mt-6  mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}>
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: "50%" }} // Replace with the actual user's progress
        ></div>
      </motion.div>
    </motion.div>
  );
};

export default CurriculumSection;
