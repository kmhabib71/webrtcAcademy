import React from "react";
import { motion } from "framer-motion";

const interviews = [
  {
    title: "Interview with John Doe: Why WebRTC is the Skill of the Future",
    video: "/videos/interview-john-doe.mp4",
    takeaways: [
      "WebRTC's impact on modern communication",
      "Key skills for WebRTC developers",
      "Future trends in WebRTC",
    ],
  },
  {
    title:
      "WebRTC and the Developer's Perspective: Insights from Industry Experts",
    video: "/videos/interview-industry-experts.mp4",
    takeaways: [
      "Challenges in WebRTC development",
      "Best practices for secure WebRTC applications",
      "The future of WebRTC technology",
    ],
  },
  // Add more interviews as needed
];

const ExpertInterviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Expert Interviews
        </h2>
        <div className="space-y-12">
          {interviews.map((interview, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold mb-4">{interview.title}</h3>
              <video
                src={interview.video}
                controls
                className="w-full h-56 mb-6 rounded-lg"
              />
              <h4 className="text-xl font-semibold mb-2">Key Takeaways:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {interview.takeaways.map((takeaway, idx) => (
                  <li key={idx}>{takeaway}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertInterviews;
