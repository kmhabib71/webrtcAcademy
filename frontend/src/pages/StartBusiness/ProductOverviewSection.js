import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Stranger Chat Solution (Omegle-like)",
    description: "Real-time video chat with easy integration and scalability.",
    image: "/images/stranger-chat.png",
    link: "/products/stranger-chat",
  },
  {
    title: "Group Chat with SFU (Google Meet-like)",
    description:
      "Multi-party video conferencing, screen sharing, and secure communication.",
    image: "/images/group-chat.png",
    link: "/products/group-chat",
  },
  {
    title: "Webinar Platform",
    description: "Host live webinars with interactive features.",
    image: "/images/webinar-platform.png",
    link: "/products/webinar-platform",
  },
  {
    title: "Customer Support Video Chat",
    description: "Video chat solution for customer service and support.",
    image: "/images/customer-support.png",
    link: "/products/customer-support",
  },
  {
    title: "Telehealth Platform",
    description: "Platform for virtual medical consultations.",
    image: "/images/telehealth-platform.png",
    link: "/products/telehealth-platform",
  },
  {
    title: "Video E-Learning Platform",
    description:
      "E-learning platform with video lessons, quizzes, and student-teacher interactions.",
    image: "/images/video-elearning.png",
    link: "/products/video-elearning",
  },
];

const ProductOverviewSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <a
                href={product.link}
                className="text-red-500 hover:text-red-600">
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductOverviewSection;
