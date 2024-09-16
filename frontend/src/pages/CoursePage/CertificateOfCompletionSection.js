import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const CertificateOfCompletionSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold">Certificate of Completion</h2>
        <p className="mt-4 text-lg text-gray-700">
          Earn your digital certificate after successfully completing the
          course.
        </p>
      </motion.div>

      {/* Certificate Section */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-between"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Your Certificate</h3>
          <p className="text-gray-700">
            Congratulations on completing the course! Download your certificate.
          </p>
        </div>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
          <ArrowDownTrayIcon className="inline h-5 w-5 mr-2" />
          Download Certificate
        </button>
      </motion.div>

      {/* Social Sharing Section */}
      <motion.div
        className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <h3 className="text-2xl font-semibold mb-4">Share Your Achievement</h3>
        <p className="text-gray-700">
          Share your certificate on social media or LinkedIn to showcase your
          skills.
        </p>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition">
          Share on LinkedIn
        </button>
      </motion.div>
    </section>
  );
};

export default CertificateOfCompletionSection;
