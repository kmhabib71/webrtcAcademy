import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    image: "/images/article-1.jpg",
    title: "Understanding WebRTC: What You Need to Know to Get Started",
    excerpt: "Learn the basics of WebRTC and how to get started...",
  },
  {
    image: "/images/article-2.jpg",
    title: "Top 10 Real-World Applications of WebRTC",
    excerpt: "Explore the various applications of WebRTC in the real world...",
  },
  // Add more articles as needed
];

const EducationalArticles = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Educational Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="mt-4 text-gray-600">{article.excerpt}</p>
                <a
                  href="#"
                  className="text-red-500 hover:underline mt-4 inline-block">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalArticles;
