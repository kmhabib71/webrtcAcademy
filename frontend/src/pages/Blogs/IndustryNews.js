import React from "react";
import { motion } from "framer-motion";

const newsArticles = [
  {
    headline: "Recent Updates in WebRTC Technology",
    date: "September 15, 2024",
    summary: "Discover the latest advancements in WebRTC...",
  },
  {
    headline: "New WebRTC API Features You Should Know About",
    date: "September 10, 2024",
    summary: "Learn about the new features added to WebRTC API...",
  },
  // Add more news articles as needed
];

const IndustryNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Industry News and Updates
        </h2>
        <div className="space-y-6">
          {newsArticles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold">{article.headline}</h3>
              <p className="text-gray-600 mt-2">{article.date}</p>
              <p className="mt-4 text-gray-600">{article.summary}</p>
              <a
                href="#"
                className="text-red-500 hover:underline mt-4 inline-block">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryNews;
