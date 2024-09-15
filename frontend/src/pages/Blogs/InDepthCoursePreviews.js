import React from "react";
import { motion } from "framer-motion";

const coursePreviews = [
  {
    title: "Inside Look: What You’ll Learn in Our Advanced WebRTC Course",
    video: "/videos/advanced-course-preview.mp4",
    description:
      "This course will take you through advanced WebRTC concepts, including real-time media streaming, peer-to-peer networking, and security best practices.",
    syllabus: [
      "Introduction to Advanced WebRTC",
      "Real-Time Media Streaming",
      "Peer-to-Peer Networking",
      "WebRTC Security Best Practices",
    ],
  },
  {
    title: "Why Our WebRTC Projects Course Will Make You Job-Ready",
    video: "/videos/projects-course-preview.mp4",
    description:
      "Get hands-on experience by working on real-world WebRTC projects that are essential for landing a job in the industry.",
    syllabus: [
      "Project 1: Building a Video Chat Application",
      "Project 2: Integrating WebRTC with IoT",
      "Project 3: Secure WebRTC Application Development",
    ],
  },
  // Add more courses as needed
];

const InDepthCoursePreviews = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          In-Depth Course Previews
        </h2>
        <div className="space-y-12">
          {coursePreviews.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
              <video
                src={course.video}
                controls
                className="w-full h-56 mb-6 rounded-lg"
              />
              <p className="text-gray-600 mb-4">{course.description}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {course.syllabus.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InDepthCoursePreviews;
