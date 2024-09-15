import React from "react";
import RoadmapOverview from "./RoadmapOverview";
import Header from "../../components/Header/Header";
import VisualRoadmap from "./VisualRoadmap";
import CourseModules from "./CourseModules";
import CapstoneProjects from "./CapstoneProjects";
import InterviewPreparation from "./InterviewPreparation";
import SuccessStories from "./SuccessStories";
import PricingCTA from "./PricingCTA";
import Footer from "../../components/Footer/Footer";

function index() {
  return (
    <div>
      <Header />
      <RoadmapOverview />
      <VisualRoadmap />
      <CourseModules />
      <CapstoneProjects />
      <InterviewPreparation />
      <SuccessStories />
      <PricingCTA />
      <Footer />
    </div>
  );
}

export default index;
