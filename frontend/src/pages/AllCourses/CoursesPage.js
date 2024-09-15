import React from "react";
import CoursesHero from "./CoursesHero";
import CoursesList from "./CoursesList";
import FeaturedCourses from "./FeaturedCourses";
import CoursesCTA from "./CoursesCTA";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Sample data for courses
const allCourses = [
  {
    image: "/images/course-webrtc-basics.jpg",
    title: "WebRTC Basics: Getting Started with Real-Time Communication",
    instructor: "John Doe",
    rating: 4.8,
    reviews: 120,
  },
  {
    image: "/images/course-advanced-webrtc.jpg",
    title: "Advanced WebRTC: Mastering Real-Time Communication",
    instructor: "Jane Smith",
    rating: 4.9,
    reviews: 95,
  },
  {
    image: "/images/course-webrtc-projects.jpg",
    title: "Building Real-World WebRTC Projects",
    instructor: "Mike Johnson",
    rating: 4.7,
    reviews: 80,
  },
  {
    image: "/images/course-group-chat-sfu.jpg",
    title: "Group Chat with SFU: Building Scalable WebRTC Applications",
    instructor: "Emily Davis",
    rating: 4.8,
    reviews: 110,
  },
  {
    image: "/images/course-webrtc-security.jpg",
    title: "WebRTC Security: Best Practices for Secure Communication",
    instructor: "David Brown",
    rating: 4.6,
    reviews: 70,
  },
  {
    image: "/images/course-video-e-learning.jpg",
    title: "Building Video E-Learning Platforms with WebRTC",
    instructor: "Sarah Lee",
    rating: 4.9,
    reviews: 130,
  },
  {
    image: "/images/course-telehealth-webrtc.jpg",
    title: "Telehealth Solutions with WebRTC",
    instructor: "Michael Green",
    rating: 4.7,
    reviews: 90,
  },
  {
    image: "/images/course-webrtc-performance.jpg",
    title: "Optimizing WebRTC Performance: Techniques and Tools",
    instructor: "Anna White",
    rating: 4.8,
    reviews: 85,
  },
  {
    image: "/images/course-webrtc-ai.jpg",
    title: "Integrating AI with WebRTC for Enhanced Communication",
    instructor: "Chris Martinez",
    rating: 4.8,
    reviews: 60,
  },
];

const featuredCourses = allCourses.slice(0, 3);

const CoursesPage = () => {
  return (
    <>
      <Header />
      <CoursesHero />
      <FeaturedCourses featuredCourses={featuredCourses} />
      <CoursesList courses={allCourses} />
      <CoursesCTA />
      <Footer />
    </>
  );
};

export default CoursesPage;
