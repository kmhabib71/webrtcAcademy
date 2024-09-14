import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Shoo lei",
    image: "/images/testimonial1.jpg",
    title: "Software Engineer at TechCorp",
    quote:
      "Thanks to WebRTC Academy, I landed my dream job as a software engineer. The hands-on projects and expert mentorship were invaluable.",
  },
  {
    name: "Jane Smith",
    image: "/images/testimonial2.jpg",
    title: "Founder of WebRTC Startups",
    quote:
      "The business-oriented courses gave me the confidence and skills to start my own WebRTC-based business. Highly recommended!",
  },
  {
    name: "Michael Lee",
    image: "/images/testimonial3.jpg",
    title: "CTO at Innovate Inc.",
    quote:
      "The advanced WebRTC projects pushed my skills to the next level. Now, I’m leading a tech team at Innovate Inc. The courses were worth every penny!",
  },
];

const SuccessStoriesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          Success Stories
        </motion.h2>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-100 shadow-lg rounded-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.05 }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-red-500 font-medium">{testimonial.title}</p>
              <p className="text-gray-700 mt-4">{testimonial.quote}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <p className="text-lg text-gray-700">
            Join the thousands of professionals who have transformed their
            careers and businesses with WebRTC Academy.
          </p>
          <motion.a
            href="/get-started"
            className="mt-6 inline-block px-6 py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}>
            Get Started Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
