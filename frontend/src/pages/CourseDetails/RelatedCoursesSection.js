import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const relatedCourses = [
  {
    title: "Advanced WebRTC Projects",
    description: "Deep dive into advanced WebRTC projects and techniques.",
    price: "$149",
    link: "/courses/advanced-webrtc-projects",
    image: "/images/related-course1.png",
  },
  {
    title: "WebRTC Business Bundle",
    description: "All-in-one bundle to start your WebRTC business.",
    price: "$199",
    link: "/courses/webrtc-business-bundle",
    image: "/images/related-course2.png",
  },
  {
    title: "WebRTC for Beginners",
    description: "A beginner's guide to mastering WebRTC from scratch.",
    price: "$99",
    link: "/courses/webrtc-for-beginners",
    image: "/images/related-course3.png",
  },
];

const RelatedCoursesSection = () => {
  return (
    <motion.div
      className="container mx-auto px-6 py-12 space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      {/* Section Heading */}
      <motion.div
        className="space-y-4 text-center lg:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Related Courses
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
          Continue your learning journey with these related courses.
        </p>
      </motion.div>

      {/* Related Courses */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}>
        {relatedCourses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}>
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {course.title}
            </h3>
            <p className="text-gray-700 mt-2">{course.description}</p>
            <p className="text-red-500 font-bold mt-4">{course.price}</p>
            <motion.div className="mt-6" whileHover={{ scale: 1.05 }}>
              <Link
                to={course.link}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:opacity-90 transition-opacity duration-300">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RelatedCoursesSection;
