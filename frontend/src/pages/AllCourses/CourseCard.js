import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}>
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p className="text-gray-600">{course.instructor}</p>
        <div className="flex items-center mt-2">
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <span className="ml-2 text-gray-700">
            {course.rating} ({course.reviews} reviews)
          </span>
        </div>
        <Link to="/course-details">
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">
            View Course
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
