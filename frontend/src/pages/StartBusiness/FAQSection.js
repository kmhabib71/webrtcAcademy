import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What is the pricing structure?",
    answer:
      "We offer various pricing plans to suit different needs, including monthly subscriptions and one-time payments.",
  },
  {
    question: "Can I customize the products?",
    answer:
      "Yes, our products are fully customizable. You can modify the interface, add features, and integrate with other systems.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "We offer a 30-day money-back guarantee if you're not satisfied with the product.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl lg:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-4">
          Find answers to some common questions about our products.
        </p>
      </motion.div>
      <div className="mt-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b py-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left">
              <span className="text-lg font-semibold">{faq.question}</span>
              <ChevronDownIcon
                className={`h-6 w-6 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
