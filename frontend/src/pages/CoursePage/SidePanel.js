import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const SidePanel = ({ modules }) => {
  const [openModuleIndex, setOpenModuleIndex] = useState(null);

  const toggleModule = (index) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  return (
    <motion.div
      className="w-full lg:w-1/4 bg-white shadow-lg p-4 rounded-lg"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}>
      <h2 className="text-xl font-bold mb-4">Course Content</h2>

      <div>
        {modules.map((module, index) => (
          <div key={module.title} className="mb-4">
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleModule(index)}>
              <span className="font-medium text-gray-700">{module.title}</span>
              {openModuleIndex === index ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openModuleIndex === index && (
              <ul className="mt-2 space-y-2 pl-4 text-gray-600">
                {module.lectures.map((lecture) => (
                  <li key={lecture.title} className="flex justify-between">
                    <span>{lecture.title}</span>
                    {lecture.completed && (
                      <span className="text-green-500">✔</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Progress Tracker */}
      <div className="mt-8">
        <h3 className="text-gray-600">Course Progress</h3>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: "70%" }}></div>
        </div>
        <p className="mt-2 text-gray-600">70% Complete</p>
      </div>
    </motion.div>
  );
};

export default SidePanel;
