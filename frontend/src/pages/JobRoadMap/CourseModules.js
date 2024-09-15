import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Introduction to WebRTC",
    badge: "/badges/intro-badge.png",
    description: "Learn the basics of WebRTC.",
    link: "/courses/introduction",
  },
  {
    title: "Intermediate WebRTC",
    badge: "/badges/intermediate-badge.png",
    description: "Build on your WebRTC knowledge.",
    link: "/courses/intermediate",
  },
  {
    title: "Advanced WebRTC",
    badge: "/badges/advanced-badge.png",
    description: "Master advanced WebRTC topics.",
    link: "/courses/advanced",
  },
];

const CourseModules = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Course Modules
      </h2>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}>
            <img
              src={course.badge}
              alt={course.title}
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <a
              href={course.link}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
              View Course Details
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseModules;
