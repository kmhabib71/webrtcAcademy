import React from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    name: "John Doe",
    story: "How John transitioned to a WebRTC Developer in 6 months...",
    image: "/images/student-1.jpg",
  },
  {
    name: "Jane Smith",
    story: "Company X's success with WebRTC, thanks to our platform...",
    image: "/images/student-2.jpg",
  },
  // Add more case studies as needed
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}>
              <img
                src={caseStudy.image}
                alt={caseStudy.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{caseStudy.name}</h3>
                <p className="mt-4 text-gray-600">{caseStudy.story}</p>
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

export default SuccessStories;
