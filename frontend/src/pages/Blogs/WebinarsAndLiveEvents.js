import React from "react";
import { motion } from "framer-motion";

const liveEvents = [
  {
    title: "Join Our Live Webinar: Introduction to WebRTC",
    date: "April 20, 2024",
    description:
      "Learn the basics of WebRTC in this free live webinar hosted by our expert instructors.",
  },
  {
    title: "Upcoming Live Coding Session: Building a WebRTC App from Scratch",
    date: "May 5, 2024",
    description:
      "Join us for a live coding session where we will build a WebRTC app from the ground up.",
  },
  {
    title: "Register for Our WebRTC Q&A with Industry Experts",
    date: "May 20, 2024",
    description:
      "Have your WebRTC questions answered by industry experts in this interactive Q&A session.",
  },
];

const WebinarsAndLiveEvents = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Webinars and Live Events
        </h2>
        <div className="space-y-12">
          {liveEvents.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
              <p className="text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <a
                href="#"
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg inline-block">
                Register Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarsAndLiveEvents;
