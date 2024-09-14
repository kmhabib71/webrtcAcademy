import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import Header from "../../components/Header/Header";
import Footer from "../Home/Footer";
import CourseHeroSection from "./CourseHeroSection";
import CourseOverviewSection from "./CourseOverviewSection";
import CurriculumSection from "./CurriculumSection";
import InstructorBioSection from "./InstructorBioSection";
import ReviewsAndTestimonialsSection from "./ReviewsAndTestimonialsSection";
import FAQSection from "./FAQSection";
import CallToActionSection from "./CallToActionSection";
import RelatedCoursesSection from "./RelatedCoursesSection";

const CourseDetails = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 py-12">
        {/* Course Hero Section */}
        <CourseHeroSection />

        {/* Course Overview Section */}
        <CourseOverviewSection />
        {/* Curriculum Section */}
        <CurriculumSection />
        {/* Instructor Bio Section */}
        <InstructorBioSection />
        {/* Reviews Section */}
        <ReviewsAndTestimonialsSection />
        {/* Review */}
        <FAQSection />
        <CallToActionSection />
        {/* Related Courses Section */}
        <RelatedCoursesSection />
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
// For an individual course details page, it's essential to structure the content in a way that highlights the value and key features of the course while providing all necessary information for potential students. Here's a suggested structure for the course details page:

// 1. Course Hero Section
// Course Title: The name of the course, prominently displayed.
// Course Subtitle: A brief description that summarizes the course content.
// Instructor Name and Image: Display the instructor's name and a small profile image.
// Ratings and Reviews: Show an average rating out of 5 stars and the number of reviews.
// CTA Button(s):
// Primary CTA: "Enroll Now" or "Buy Course" with pricing information.
// Secondary CTA: "Preview Course" (if a preview video or free lessons are available).
// Course Image or Video: A dynamic image or introductory video that visually represents the course.
// 2. Course Overview Section
// Course Description: A detailed description of what the course covers.
// Learning Objectives: Highlight the key skills or knowledge that students will gain from the course.
// Key Features: Include bullet points of important features such as downloadable resources, lifetime access, certificates, etc.
// Course Requirements: A list of prerequisites or skills needed before taking the course (if any).
// 3. Curriculum Section
// Course Outline: A breakdown of the course modules and lessons, often collapsible for easy navigation.
// Each module should include:
// Module Title
// List of lessons/lectures with a brief description and duration.
// An indicator if the lesson is free (if applicable).
// Duration: Total course duration (e.g., "10 hours of content").
// Progress Indicator: If the user is enrolled, show a progress bar indicating how much of the course they have completed.
// 4. Instructor Bio Section
// Instructor Profile: Detailed bio of the instructor, including their qualifications, experience, and other courses they teach.
// Instructor's Social Media Links: Links to the instructor’s LinkedIn, Twitter, or personal website.
// 5. Reviews and Testimonials Section
// Student Reviews: Display several reviews from students who have taken the course, with a mix of ratings.
// Overall Rating: Show the course's overall rating out of 5 stars.
// Write a Review: Provide an option for enrolled students to write their reviews.
// 6. Related Courses Section
// Recommended Courses: Display courses related to the current one, allowing students to explore further learning opportunities.
// Bundles: If the course is part of a bundle, promote the bundle here with links to explore or buy.
// 7. FAQ Section
// Common Questions: A list of frequently asked questions specific to the course. This helps in addressing common concerns or clarifications.
// Course Support: Information on how students can get help if they have issues or questions related to the course content.
// 8. Call to Action Section
// Limited-Time Offers: If there are any discounts or special offers, highlight them here with a CTA to enroll.
// Guarantee: If you offer a money-back guarantee, mention it to build trust.
// 9. Footer Section
// Quick Links: Links to other courses, bundles, blog, etc., similar to the main footer but tailored for the course page.
// Payment Methods: Display accepted payment methods.
// Legal Information: Links to terms of service, privacy policy, and refund policy.
