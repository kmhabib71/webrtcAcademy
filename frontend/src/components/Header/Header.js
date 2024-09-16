import React, { useContext, useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/Auth/AuthProvider";

const MotionLink = motion(Link);

const Header = ({ onLoginClick, onSignUpClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const { isLoggedIn, authUser, logout } = useContext(AuthContext);

  // Animation Variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1, color: "#EF4444" }, // Red-500 in Tailwind
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: -300 },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle clicking outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full z-30">
      {/* Background Layer */}
      <div
        className={`hidden md:block absolute inset-0 transition-all duration-300 pointer-events-none ${
          isScrolled ? "bg-white opacity-70 backdrop-blur-sm" : "bg-transparent"
        }`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <MotionLink
            to="/"
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <img src="./svg/logo.svg" alt="Logo" className="h-8 w-auto" />
          </MotionLink>
          <motion.div
            className="hidden md:flex space-x-4 items-center"
            initial="hidden"
            animate="visible">
            <MotionLink
              to="/webrtc-job-roadmap"
              className="text-gray-900"
              variants={menuItemVariants}
              whileHover="hover">
              WebRTC Job Roadmap
            </MotionLink>
            <MotionLink
              to="/start-business"
              className="text-gray-900"
              variants={menuItemVariants}
              whileHover="hover">
              Start Business
            </MotionLink>
            <MotionLink
              to="/courses"
              className="text-gray-900"
              variants={menuItemVariants}
              whileHover="hover">
              Courses
            </MotionLink>
            <MotionLink
              to="/insights"
              className="text-gray-900"
              variants={menuItemVariants}
              whileHover="hover">
              Insights
            </MotionLink>

            {isLoggedIn ? (
              <>
                <MotionLink
                  to="/profile"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md"
                  whileHover={{ scale: 1.05 }}>
                  Profile
                </MotionLink>
                <motion.button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  whileHover={{ scale: 1.05 }}>
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <motion.button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  whileHover={{ scale: 1.05 }}
                  onClick={onLoginClick}>
                  Login
                </motion.button>
                <motion.button
                  className="border border-[#71aa9c] text-black px-4 py-2 rounded-md"
                  whileHover={{ scale: 1.05 }}
                  onClick={onSignUpClick}>
                  Sign Up
                </motion.button>
              </>
            )}
          </motion.div>
          <motion.div
            className="flex md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-red-500 focus:outline-none">
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        className={`md:hidden z-20 ${isOpen ? "block" : "hidden"} bg-white`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MotionLink
            to="/webrtc-job-roadmap"
            className="block text-gray-900 hover:text-red-500"
            variants={menuItemVariants}
            onClick={closeMenu}>
            WebRTC Job Roadmap
          </MotionLink>
          <MotionLink
            to="/start-business"
            className="block text-gray-900 hover:text-red-500"
            variants={menuItemVariants}
            onClick={closeMenu}>
            Start Business
          </MotionLink>
          <MotionLink
            to="/courses"
            className="block text-gray-900 hover:text-red-500"
            variants={menuItemVariants}
            onClick={closeMenu}>
            Courses
          </MotionLink>
          <MotionLink
            to="/insights"
            className="block text-gray-900 hover:text-red-500"
            variants={menuItemVariants}
            onClick={closeMenu}>
            Insights
          </MotionLink>

          {isLoggedIn ? (
            <>
              <MotionLink
                to="/profile"
                className="block text-indigo-500 hover:text-indigo-700"
                onClick={closeMenu}>
                Profile
              </MotionLink>
              <motion.button
                className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-2"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  closeMenu();
                  logout();
                }}>
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <motion.button
                className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-2"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  closeMenu();
                  onLoginClick();
                }}>
                Login
              </motion.button>
              <motion.button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  closeMenu();
                  onSignUpClick();
                }}>
                Sign Up
              </motion.button>
            </>
          )}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
