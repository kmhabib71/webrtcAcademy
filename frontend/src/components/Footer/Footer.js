import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  Courses
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/start-business"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  Start a Business
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/blog"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  Blog
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/career-paths"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  Career Paths
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-6">
              <motion.a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1, color: "#ffffff" }}>
                <UserGroupIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1, color: "#ffffff" }}>
                <UserGroupIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1, color: "#ffffff" }}>
                <BriefcaseIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1, color: "#ffffff" }}>
                <AcademicCapIcon className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Legal Information */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  Terms of Service
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/cookies-policy"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  Cookies Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/accessibility"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}>
                  Accessibility
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}>
            <p className="text-gray-500">
              &copy; 2024 WebRTC Academy. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            className="mt-4 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}>
            <img src="/images/visa.png" alt="Visa" className="h-8 w-auto" />
            <img src="/images/paypal.png" alt="PayPal" className="h-8 w-auto" />
            <img
              src="/images/mastercard.png"
              alt="MasterCard"
              className="h-8 w-auto"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
