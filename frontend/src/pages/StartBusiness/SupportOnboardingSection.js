import React from "react";
import { motion } from "framer-motion";
import {
  ChatBubbleLeftEllipsisIcon,
  PhoneIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

const SupportOnboardingSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl lg:text-4xl font-bold">Support & Onboarding</h2>
        <p className="text-gray-600 mt-4">
          We ensure a smooth start with our comprehensive onboarding and support
          services.
        </p>
      </motion.div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <LifebuoyIcon className="h-12 w-12 text-red-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Onboarding Process</h3>
          <p className="text-gray-700 mt-2">
            Our team will guide you through installation, setup, and training to
            get you up and running quickly.
          </p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <ChatBubbleLeftEllipsisIcon className="h-12 w-12 text-red-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Live Chat Support</h3>
          <p className="text-gray-700 mt-2">
            Our live chat support is available 24/7 to help you resolve any
            issues quickly.
          </p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <PhoneIcon className="h-12 w-12 text-red-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">
            Dedicated Account Manager
          </h3>
          <p className="text-gray-700 mt-2">
            For larger accounts, a dedicated account manager will ensure
            personalized support and service.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportOnboardingSection;
