import React from "react";
import { motion } from "framer-motion";
import {
  NewspaperIcon,
  VideoCameraIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

const resources = [
  {
    icon: NewspaperIcon,
    title: "Latest Blog Post",
    description:
      "Stay updated with the latest trends in WebRTC technology. Read our latest blog post on optimizing WebRTC applications.",
    link: "/blog/latest",
    linkText: "Read More",
  },
  {
    icon: VideoCameraIcon,
    title: "Upcoming Webinar",
    description:
      "Join our free webinar on building scalable WebRTC applications. Learn from the experts and get your questions answered.",
    link: "/webinars/upcoming",
    linkText: "Register Now",
  },
  {
    icon: PresentationChartBarIcon,
    title: "Free Resource",
    description:
      "Download our free guide on starting a WebRTC business. This resource covers everything you need to know.",
    link: "/resources/free-guide",
    linkText: "Download Now",
  },
];

const FeaturedResourcesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          Featured Resources
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
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-100 shadow-lg rounded-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.05 }}>
              <resource.icon className="h-16 w-16 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                {resource.title}
              </h3>
              <p className="text-gray-700 mt-2">{resource.description}</p>
              <motion.a
                href={resource.link}
                className="mt-6 inline-block px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
                whileHover={{ scale: 1.05 }}>
                {resource.linkText}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedResourcesSection;
