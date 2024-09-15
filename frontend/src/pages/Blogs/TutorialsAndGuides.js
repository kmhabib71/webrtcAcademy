import React from "react";
import { motion } from "framer-motion";

const tutorials = [
  {
    title: "How to Build a Basic WebRTC Video Chat Application",
    steps: [
      "Step 1: Setting up the environment...",
      "Step 2: Implementing WebRTC signaling...",
      "Step 3: Handling media streams...",
    ],
  },
  {
    title: "Integrating WebRTC with AI: Step-by-Step Guide",
    steps: [
      "Step 1: Preparing your AI models...",
      "Step 2: Integrating AI with WebRTC...",
      "Step 3: Real-time analysis...",
    ],
  },
  // Add more tutorials as needed
];

const TutorialsAndGuides = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Tutorials and How-To Guides
        </h2>
        <div className="space-y-12">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold mb-4">{tutorial.title}</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                {tutorial.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
              <a
                href="#"
                className="text-red-500 hover:underline mt-4 inline-block">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialsAndGuides;
