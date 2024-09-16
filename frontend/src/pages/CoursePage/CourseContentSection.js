import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PlayIcon,
  BackwardIcon as RewindIcon, // Adjusted Icon
  ForwardIcon as FastForwardIcon, // Adjusted Icon
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const CourseContentSection = ({ lecture }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="flex flex-col lg:flex-row lg:items-start max-w-7xl mx-auto p-4 lg:p-8">
      {/* Video Player */}
      <motion.div
        className="w-full lg:w-3/4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
          <video
            src={lecture.videoSrc}
            controls
            className="w-full h-72 lg:h-96"></video>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button onClick={handlePlayPause}>
              <PlayIcon className="h-8 w-8 text-white" />
            </button>
            <div className="flex items-center space-x-4">
              <button>
                <RewindIcon className="h-6 w-6 text-white" />
              </button>
              <button>
                <FastForwardIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Lecture Title & Description */}
        <div className="mt-6">
          <h1 className="text-2xl lg:text-3xl font-bold">{lecture.title}</h1>
          <p className="mt-2 text-gray-600">{lecture.description}</p>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${lecture.progress}%` }}></div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-between">
          <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-700">
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Previous Lecture</span>
          </button>
          <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-700">
            <span>Next Lecture</span>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CourseContentSection;
