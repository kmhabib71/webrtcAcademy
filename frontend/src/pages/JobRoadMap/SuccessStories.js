import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    title: "WebRTC Developer at ABC Corp",
    testimonial:
      "The WebRTC Developer Job Roadmap was a game changer for me. I went from knowing nothing about WebRTC to landing my dream job within 6 months!",
    image: "/images/testimonials/john.jpg",
  },
  {
    name: "Jane Smith",
    title: "Freelance WebRTC Specialist",
    testimonial:
      "Thanks to the roadmap, I was able to build a strong portfolio and transition to freelance work. The projects I completed gave me the confidence I needed.",
    image: "/images/testimonials/jane.jpg",
  },
];

const SuccessStories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.title}</p>
              <p className="text-gray-700">"{item.testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SuccessStories;
