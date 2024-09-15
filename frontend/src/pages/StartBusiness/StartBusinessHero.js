import React from "react";
import { motion } from "framer-motion";

const StartBusinessHero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/images/start-business-banner.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Dark overlay */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-16 py-32 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          className="text-center lg:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Launch Your WebRTC Business Today
          </h1>
          <p className="mt-4 text-lg lg:text-2xl text-gray-200">
            Choose from a variety of ready-to-launch WebRTC solutions designed
            to help you succeed.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <motion.a
              href="#products"
              className="px-8 py-4 bg-red-500 text-white text-lg rounded-md font-semibold hover:bg-red-600 transition duration-300"
              whileHover={{ scale: 1.05 }}>
              Explore Products
            </motion.a>
            <motion.a
              href="#request-demo"
              className="px-8 py-4 bg-white text-red-500 border border-red-500 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}>
              Request a Demo
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image/Video */}
        <motion.div
          className="relative w-full lg:w-1/2 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}>
          <img
            src="/images/overview-thumbnail.jpg"
            alt="WebRTC Business Solutions"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StartBusinessHero;
