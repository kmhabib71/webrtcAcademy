import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  CheckBadgeIcon, // Correct icon name
} from "@heroicons/react/24/solid";
import { AuthContext } from "../Auth/AuthProvider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProfilePage = () => {
  const { authUser, loading } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authUser && !loading) {
      setUser(authUser);
    }
  }, [authUser, loading]);

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="flex items-center space-x-8">
            <img
              className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-lg"
              src={user.profile?.avatar || "/default-avatar.png"}
              alt={`${user.profile?.firstName} ${user.profile?.lastName}`}
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {user.profile?.firstName} {user.profile?.lastName}
              </h2>
              <p className="text-xl text-gray-600">{user.role}</p>
              <p className="text-md text-gray-500 mt-2">{user.profile?.bio}</p>
              <div className="flex space-x-4 mt-4">
                {user.profile?.socialLinks?.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-700">
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-indigo-50 shadow-md rounded-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-semibold text-indigo-800 mb-6">
            Enrolled Courses
          </h3>
          {user.enrolledCourses?.length > 0 ? (
            user.enrolledCourses.map((course) => (
              <div
                key={course._id}
                className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h4>
                  <p className="text-gray-600">{course.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-indigo-700">
                    {
                      user.courseProgress.find(
                        (cp) => cp.courseId === course._id
                      )?.progress
                    }
                    % Completed
                  </p>
                  <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No courses enrolled yet.</p>
          )}
        </motion.div>

        <motion.div
          className="bg-indigo-50 shadow-md rounded-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-semibold text-indigo-800 mb-6">
            Achievements
          </h3>
          {user.courseProgress?.map((courseProgress, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-indigo-900">
                {courseProgress.courseId.title}
              </h4>
              <div className="flex space-x-4">
                {courseProgress.achievements?.length > 0 ? (
                  courseProgress.achievements.map((achievement) => (
                    <div
                      key={achievement._id}
                      className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow">
                      <CheckBadgeIcon className="h-6 w-6 text-green-500" />
                      <p className="text-gray-700">{achievement.name}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No achievements yet.</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="bg-indigo-50 shadow-md rounded-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-semibold text-indigo-800 mb-6">
            Personal Information
          </h3>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
