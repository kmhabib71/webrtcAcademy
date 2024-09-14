import React from "react";
import { motion } from "framer-motion";
import { MegaphoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const CallToActionSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-red-200 via-pink-200 to-purple-200 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center text-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          Don't Miss Out!
        </motion.h2>

        <motion.p
          className="mt-4 text-lg lg:text-xl text-center text-black "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
          Take advantage of our limited-time offers and exclusive content. Sign
          up now to get the best deals and updates on new courses.
        </motion.p>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}>
          <motion.div
            className="flex flex-col items-center p-6 bg-white text-red-500 rounded-lg shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <MegaphoneIcon className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">Limited-Time Offers</h3>
            <p className="mt-2 text-center">
              Enroll today to take advantage of our special discounts. Hurry,
              offers are available for a limited time only!
            </p>
            <motion.a
              href="/offers"
              className="mt-4 inline-block px-6 py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
              whileHover={{ scale: 1.05 }}>
              Get Started Now
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-white text-red-500 rounded-lg shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}>
            <EnvelopeIcon className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="mt-2 text-center">
              Sign up for our newsletter to receive the latest updates,
              exclusive discounts, and valuable WebRTC content.
            </p>
            <motion.a
              href="/newsletter-signup"
              className="mt-4 inline-block px-6 py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
              whileHover={{ scale: 1.05 }}>
              Sign Up Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToActionSection;
