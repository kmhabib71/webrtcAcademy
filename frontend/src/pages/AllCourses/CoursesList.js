import React from "react";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";
const CoursesList = ({ courses }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-center mt-10">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        All Courses
      </motion.h2>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesList;
