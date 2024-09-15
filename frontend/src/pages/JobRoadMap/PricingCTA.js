import React from "react";
import { motion } from "framer-motion";

const PricingCTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-r from-red-400 to-red-600 text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Pricing</h2>
        <p className="mb-8 text-lg">
          Flexible payment plans are available to make it easier for you to
          start your journey today. We also offer limited-time discounts!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-2xl font-bold mb-4">$199</p>
            <ul className="mb-4 space-y-2">
              <li>Full Access to Courses</li>
              <li>Downloadable Resources</li>
              <li>Community Access</li>
            </ul>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md">
              Enroll Now
            </button>
          </motion.div>
          <motion.div
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-2xl font-bold mb-4">$299</p>
            <ul className="mb-4 space-y-2">
              <li>Everything in Basic</li>
              <li>One-on-One Coaching</li>
              <li>Mock Interviews</li>
            </ul>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md">
              Get Started
            </button>
          </motion.div>
          <motion.div
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-2xl font-bold mb-4">$399</p>
            <ul className="mb-4 space-y-2">
              <li>Everything in Pro</li>
              <li>Lifetime Access</li>
              <li>Advanced Certification</li>
            </ul>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md">
              Join the Roadmap
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingCTA;
