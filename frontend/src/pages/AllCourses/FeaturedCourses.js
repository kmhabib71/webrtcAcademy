import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const FeaturedCourses = ({ featuredCourses }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          Featured Courses
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
