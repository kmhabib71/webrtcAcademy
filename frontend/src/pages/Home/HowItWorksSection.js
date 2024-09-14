import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: AcademicCapIcon,
    title: "Choose Your Course",
    description:
      "Browse our range of WebRTC courses and select the one that suits your career or business goals.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Learn and Build",
    description:
      "Engage with expert-led lessons and build real-world projects to solidify your learning.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Get Certified",
    description:
      "Earn industry-recognized certification to validate your skills and knowledge.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Launch Your Career or Business",
    description:
      "Apply your skills to secure a job in IT or start your own WebRTC-based business.",
  },
];

const HowItWorksSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          How It Works
        </motion.h2>

        <motion.div
          className="mt-12 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8"
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
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="flex flex-col items-center text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.05 }}>
                <step.icon className="h-16 w-16 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700 mt-2 max-w-xs">
                  {step.description}
                </p>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}>
                  <svg
                    className="w-12 h-12 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5l7 7-7 7M5 12h14"
                    />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
