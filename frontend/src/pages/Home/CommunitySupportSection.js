import React from "react";
import { motion } from "framer-motion";
import {
  UserGroupIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const communitySupport = [
  {
    icon: UserGroupIcon,
    title: "Join the Community",
    description:
      "Become a part of our vibrant community. Connect with other WebRTC learners and professionals through our forums and social media groups.",
    link: "/community",
    linkText: "Join Now",
  },
  {
    icon: ChatBubbleOvalLeftEllipsisIcon,
    title: "Live Q&A Sessions",
    description:
      "Participate in live Q&A sessions with industry experts. Get your questions answered and learn from the experiences of others.",
    link: "/live-qa",
    linkText: "View Schedule",
  },
  {
    icon: PhoneIcon,
    title: "Support & Contact",
    description:
      "Need help? Our support team is here to assist you. Reach out to us with any questions or concerns you may have.",
    link: "/support",
    linkText: "Contact Us",
  },
];

const CommunitySupportSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          Community & Support
        </motion.h2>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}>
          {communitySupport.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.05 }}>
              <item.icon className="h-16 w-16 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
              <motion.a
                href={item.link}
                className="mt-6 inline-block px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
                whileHover={{ scale: 1.05 }}>
                {item.linkText}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CommunitySupportSection;
