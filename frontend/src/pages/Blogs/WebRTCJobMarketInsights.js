import React from "react";
import { motion } from "framer-motion";

const jobMarketInsights = [
  {
    title: "WebRTC Developer Salary Trends in 2024",
    content:
      "Explore the latest salary trends for WebRTC developers in 2024, with data on the highest paying industries and regions.",
  },
  {
    title: "Top Companies Hiring WebRTC Developers Right Now",
    content:
      "Discover the top companies actively hiring WebRTC developers, including insights into their hiring processes.",
  },
  {
    title: "How to Ace Your WebRTC Developer Interview",
    content:
      "Get tips and strategies for acing your WebRTC developer interview, including common questions and best practices.",
  },
];

const WebRTCJobMarketInsights = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          WebRTC Job Market Insights
        </h2>
        <div className="space-y-12">
          {jobMarketInsights.map((insight, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold mb-4">{insight.title}</h3>
              <p className="text-gray-600 mb-4">{insight.content}</p>
              <a href="#" className="text-red-500 hover:underline inline-block">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebRTCJobMarketInsights;
