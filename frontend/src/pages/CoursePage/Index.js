import React from "react";
import CourseContentSection from "./CourseContentSection";
import SidePanel from "./SidePanel";
import QAPanel from "./QAPanel";
import CourseRatingSection from "./CourseRatingSection";
import CourseProgressSection from "./CourseProgressSection";
import InteractiveQuizAssignmentsSection from "./InteractiveQuizAssignmentsSection";
import NotesAnnotationsSection from "./NotesAnnotationsSection";
import SupplementaryResourcesSection from "./SupplementaryResourcesSection";
import CertificateOfCompletionSection from "./CertificateOfCompletionSection";
import CommunityNetworkingSection from "./CommunityNetworkingSection";
import InstructorTAInteractionSection from "./InstructorTAInteractionSection";
import AdvancedCoursesCTASection from "./AdvancedCoursesCTASection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const CoursePage = () => {
  const lecture = {
    title: "Introduction to WebRTC",
    description:
      "Learn the basics of WebRTC and how it powers real-time communication in modern web applications.",
    videoSrc: "/videos/webrtc-intro.mp4",
    progress: 60,
  };

  const modules = [
    {
      title: "Module 1: Getting Started",
      lectures: [
        { title: "What is WebRTC?", completed: true },
        { title: "Setting Up Your Environment", completed: true },
        { title: "Basic WebRTC Concepts", completed: false },
      ],
    },
    {
      title: "Module 2: Advanced WebRTC",
      lectures: [
        { title: "Understanding STUN and TURN", completed: false },
        { title: "Peer-to-Peer Communication", completed: false },
        { title: "Building a WebRTC Application", completed: false },
      ],
    },
  ];

  const questions = [
    {
      question: "How does WebRTC work?",
      answer:
        "WebRTC enables real-time communication in browsers and mobile apps.",
      upvotes: 5,
      tags: ["WebRTC", "Introduction"],
    },
    {
      question: "What are STUN and TURN servers?",
      answer:
        "STUN and TURN are used to assist WebRTC in finding the best connection path.",
      upvotes: 3,
      tags: ["WebRTC", "Advanced"],
    },
  ];

  const reviews = [
    {
      rating: 5,
      comment: "Excellent course with detailed explanations.",
      reviewerName: "John Doe",
    },
    {
      rating: 4,
      comment: "Great content but could use more examples.",
      reviewerName: "Jane Smith",
    },
  ];

  const badges = [
    {
      name: "WebRTC Basics",
      description: "Completed the WebRTC Basics module.",
    },
    {
      name: "Advanced WebRTC",
      description: "Mastered advanced WebRTC topics.",
    },
  ];

  return (
    <>
      <Header />
      {/* Adding padding-top to avoid overlapping with the Header */}
      <div className="space-y-8 pt-16 lg:pt-20">
        {/* Course Content and Side Panel */}
        <div className="lg:flex">
          <CourseContentSection lecture={lecture} />
          <SidePanel modules={modules} />
        </div>

        {/* Q&A Panel */}
        <QAPanel questions={questions} />

        {/* Course Rating and Feedback */}
        <CourseRatingSection reviews={reviews} />

        {/* Course Progress Section */}
        <CourseProgressSection progress={70} badges={badges} />

        {/* Interactive Quizzes/Assignments */}
        <InteractiveQuizAssignmentsSection />

        {/* Notes & Annotations */}
        <NotesAnnotationsSection />

        {/* Supplementary Resources */}
        <SupplementaryResourcesSection />

        {/* Certificate of Completion */}
        <CertificateOfCompletionSection />

        {/* Community & Networking */}
        <CommunityNetworkingSection />

        {/* Instructor/TA Interaction */}
        <InstructorTAInteractionSection />

        {/* Call to Action for Advanced Courses */}
        <AdvancedCoursesCTASection />
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
