import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    feature: "Real-time Video Chat",
    strangerChat: true,
    groupChat: true,
    webinar: false,
    telehealth: true,
  },
  {
    feature: "Screen Sharing",
    strangerChat: false,
    groupChat: true,
    webinar: true,
    telehealth: false,
  },
  {
    feature: "End-to-End Encryption",
    strangerChat: true,
    groupChat: true,
    webinar: false,
    telehealth: true,
  },
  {
    feature: "AI-Powered Moderation",
    strangerChat: true,
    groupChat: false,
    webinar: false,
    telehealth: false,
  },
];

const FeaturesComparisonSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-4 bg-gray-200">Features</th>
              <th className="p-4 bg-gray-200">Stranger Chat</th>
              <th className="p-4 bg-gray-200">Group Chat</th>
              <th className="p-4 bg-gray-200">Webinar</th>
              <th className="p-4 bg-gray-200">Telehealth</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-4">{item.feature}</td>
                <td className="p-4">{item.strangerChat ? "✓" : "—"}</td>
                <td className="p-4">{item.groupChat ? "✓" : "—"}</td>
                <td className="p-4">{item.webinar ? "✓" : "—"}</td>
                <td className="p-4">{item.telehealth ? "✓" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default FeaturesComparisonSection;
