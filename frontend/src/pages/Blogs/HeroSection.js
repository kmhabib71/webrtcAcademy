import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-500 text-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <h1 className="text-4xl lg:text-5xl font-bold">
            Stay Ahead in WebRTC with Expert Insights
          </h1>
          <p className="mt-4 text-lg lg:text-xl">
            Discover the latest trends, tutorials, success stories, and industry
            news in WebRTC.
          </p>
          <div className="mt-8">
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg mr-4">
              Explore Insights
            </button>
            <button className="bg-white border border-red-500 hover:bg-red-500 hover:text-white text-red-500 py-2 px-6 rounded-lg">
              Subscribe for Updates
            </button>
          </div>
        </motion.div>
        <motion.div
          className="mt-12 lg:mt-0 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <img
            src="/images/hero-insights.jpg"
            alt="Insights Overview"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
