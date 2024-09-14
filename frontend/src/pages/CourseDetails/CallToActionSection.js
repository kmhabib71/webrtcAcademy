import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const CallToActionSection = () => {
  return (
    <motion.div
      className="container mx-auto px-6 py-12 space-y-12 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      {/* Section Heading */}
      <motion.div
        className="space-y-4 text-center lg:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <h2 className="text-2xl lg:text-3xl font-bold">Don't Miss Out!</h2>
        <p className="text-lg lg:text-xl leading-relaxed">
          Take advantage of our limited-time offers and start your journey to
          mastering WebRTC.
        </p>
      </motion.div>

      {/* Limited-Time Offer */}
      <motion.div
        className="bg-white text-gray-900 rounded-lg p-6 shadow-lg text-center lg:text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <h3 className="text-xl lg:text-2xl font-semibold">
          Special Discount - Save 30%
        </h3>
        <p className="mt-2 text-lg">
          Enroll in any of our courses today and save 30% on your purchase. Use
          code <span className="font-bold">WEBRTC30</span> at checkout.
        </p>
        <motion.a
          href="/enroll"
          className="inline-block mt-4 px-6 py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
          whileHover={{ scale: 1.05 }}>
          Enroll Now
        </motion.a>
      </motion.div>

      {/* Guarantee */}
      <motion.div
        className="mt-8 text-center lg:text-left flex items-center justify-center lg:justify-start space-x-2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <CheckCircleIcon className="h-6 w-6 text-green-400" />
        <h4 className="text-lg lg:text-xl font-semibold">
          30-Day Money-Back Guarantee
        </h4>
        <p className="text-md lg:text-lg text-gray-300 leading-relaxed">
          We stand behind our courses. If you're not satisfied within 30 days,
          get a full refund.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CallToActionSection;
