import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Demo FAQs data
  const faqs = [
    {
      question: "What are the prerequisites for this course?",
      answer:
        "A basic understanding of web development is recommended. Familiarity with JavaScript and HTML is a plus, but not required.",
    },
    {
      question: "How long do I have access to the course?",
      answer:
        "You will have lifetime access to the course content, allowing you to learn at your own pace.",
    },
    {
      question: "Will I receive a certificate after completing the course?",
      answer:
        "Yes, upon successful completion of the course, you will receive a certificate that you can add to your LinkedIn profile or resume.",
    },
    {
      question: "How can I get help if I have questions during the course?",
      answer:
        "You can ask questions in the course’s Q&A section or contact the instructor directly via the course platform. We also offer email support.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      className="container mx-auto px-6 py-12 space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      {/* Section Heading */}
      <motion.div
        className="space-y-4 text-center lg:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Got questions? We’ve got answers.
        </p>
      </motion.div>

      {/* FAQs */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border rounded-lg p-4 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: index * 0.1,
            }}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}>
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900">
                {faq.question}
              </h4>
              {activeIndex === index ? (
                <ChevronUpIcon className="h-6 w-6 text-gray-900" />
              ) : (
                <ChevronDownIcon className="h-6 w-6 text-gray-900" />
              )}
            </div>
            {activeIndex === index && (
              <motion.p
                className="mt-4 text-gray-700 leading-relaxed"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}>
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Course Support */}
      <motion.div
        className="mt-8 text-center lg:text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div className="flex items-center justify-center lg:justify-start space-x-2">
          <InformationCircleIcon className="h-6 w-6 text-blue-500" />
          <h4 className="text-lg lg:text-xl font-semibold text-gray-900">
            Need Help? Contact Course Support
          </h4>
        </div>
        <p className="mt-2 text-gray-700 leading-relaxed">
          If you have any issues or need further assistance, please reach out to
          our support team at
          <a
            href="mailto:support@webrtcacademy.com"
            className="text-blue-500 underline">
            support@webrtcacademy.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;
