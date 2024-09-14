import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlobeAltIcon, AtSymbolIcon } from "@heroicons/react/24/outline";

const InstructorBioSection = ({ instructor = {} }) => {
  const demoInstructor = {
    name: "Km Habib",
    profileImage: "/images/instructor.jpg",
    bio: "Km Habib is a seasoned WebRTC expert with over 10 years of experience in the industry. He has worked on numerous high-profile WebRTC projects and is passionate about teaching others the skills they need to succeed in this growing field.",
    qualifications: "M.Sc. in Computer Science, WebRTC Developer at XYZ Corp.",
    courses: ["Advanced WebRTC Projects", "Beginner's WebRTC Course"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      email: "mailto:johndoe@example.com",
      website: "https://johndoe.com",
    },
  };

  const contentInstructor = instructor.name ? instructor : demoInstructor;

  return (
    <motion.div
      className="container mx-auto px-6 py-12 space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      <motion.div
        className="space-y-4 text-center lg:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Instructor Bio
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Meet your instructor for this course.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <img
          src={contentInstructor.profileImage}
          alt={`${contentInstructor.name}'s profile`}
          className="w-40 h-40 rounded-full object-cover"
        />
        <div className="space-y-4 max-w-2xl">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
            {contentInstructor.name}
          </h3>
          <p className="text-gray-700">{contentInstructor.bio}</p>
          <p className="text-gray-600">
            <strong>Qualifications:</strong> {contentInstructor.qualifications}
          </p>
          <p className="text-gray-600">
            <strong>Other Courses:</strong>{" "}
            {contentInstructor.courses.join(", ")}
          </p>
          <div className="flex space-x-4">
            {contentInstructor.socialLinks.linkedin && (
              <motion.a
                href={contentInstructor.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}>
                <AtSymbolIcon className="h-6 w-6" />
              </motion.a>
            )}
            {contentInstructor.socialLinks.email && (
              <motion.a
                href={contentInstructor.socialLinks.email}
                className="text-gray-700 hover:text-blue-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}>
                <AtSymbolIcon className="h-6 w-6" />
              </motion.a>
            )}
            {contentInstructor.socialLinks.website && (
              <motion.a
                href={contentInstructor.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}>
                <GlobeAltIcon className="h-6 w-6" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InstructorBioSection;
