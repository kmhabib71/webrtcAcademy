import React from "react";
import { motion } from "framer-motion";

const SuccessStoriesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">Success Stories</h2>
        <p className="text-gray-600 mt-4">
          See how our WebRTC products have transformed businesses worldwide.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <img
            src="/images/success-story-1.jpg"
            alt="Success Story 1"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700">
            "Using the Stranger Chat solution, we were able to launch our
            platform in just weeks. Our user engagement skyrocketed!"
          </p>
          <p className="mt-2 text-sm text-gray-500">
            — John Doe, CEO of ChatNow
          </p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <img
            src="/images/success-story-2.jpg"
            alt="Success Story 2"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700">
            "The Group Chat solution was exactly what we needed for our online
            classes. The platform is stable and user-friendly."
          </p>
          <p className="mt-2 text-sm text-gray-500">
            — Jane Smith, Founder of LearnOnline
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
