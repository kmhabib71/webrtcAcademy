import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroSection from "./HeroSection";
import EducationalArticles from "./articles";
import TutorialsAndGuides from "./TutorialsAndGuides";
import SuccessStories from "./SuccessStories";
import IndustryNews from "./IndustryNews";
import InDepthCoursePreviews from "./InDepthCoursePreviews";
import ExpertInterviews from "./ExpertInterviews";
import InteractiveContent from "./InteractiveContent";
import WebinarsAndLiveEvents from "./WebinarsAndLiveEvents";

function index() {
  return (
    <div>
      <Header />
      <HeroSection />
      <EducationalArticles />
      <TutorialsAndGuides />
      <SuccessStories />
      <IndustryNews />
      <InDepthCoursePreviews />
      <ExpertInterviews />
      <InteractiveContent />
      <WebinarsAndLiveEvents />
      <Footer />
    </div>
  );
}

export default index;
