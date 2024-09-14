import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);

const HeroSection = () => {
  return (
    <div
      className="relative flex flex-col-reverse lg:flex-row items-center justify-between h-screen px-6 lg:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner.png')" }} // Ensure this path is correct
    >
      <div className="absolute inset-0 bg-red-500 opacity-10 mix-blend-multiply"></div>
      {/* Content Goes Here */}

      {/* Left Section: Text */}
      <div className="max-w-lg space-y-6 text-center lg:text-left lg:max-w-lg lg:pl-10 z-10">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold leading-snug text-gray-900"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}>
          Become a WebRTC Expert and Transform Your Career or Business
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, x: -50, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}>
          Join industry experts, build real projects, and start your WebRTC
          journey today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-6 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}>
          <MotionLink
            to="/get-started"
            className="px-6 py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}>
            Join Now
          </MotionLink>
          <MotionLink
            to="/bundles"
            className="px-6 py-3 bg-white text-red-500 border border-red-500 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.05 }}>
            Browse Courses
          </MotionLink>
        </motion.div>
      </div>

      {/* Right Section: Image */}
      <motion.div
        className="relative w-full lg:w-1/2 h-full flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}>
        <img
          src="/images/heroimage.png"
          alt="Hero"
          className="max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
