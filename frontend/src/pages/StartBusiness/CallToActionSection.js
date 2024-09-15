import React from "react";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <motion.div
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl lg:text-4xl font-bold">Get Started Today</h2>
        <p className="mt-4 text-lg">
          Don't miss out on our limited-time offers. Launch your WebRTC business
          now!
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/pricing"
            className="bg-white text-red-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
            Enroll Now
          </a>
          <a
            href="/demo"
            className="bg-red-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300">
            Schedule a Demo
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-200">
          Hurry! This offer is available for a limited time only.
        </p>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
