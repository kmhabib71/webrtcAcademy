import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "./HeroSection";
import ValuePropositionSection from "./ValuePropositionSection";
import CoursesOverviewSection from "./CoursesOverviewSection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import HowItWorksSection from "./HowItWorksSection";
import FeaturedResourcesSection from "./FeaturedResourcesSection";
import CommunitySupportSection from "./CommunitySupportSection";
import CallToActionSection from "./CallToActionSection";
// sss
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ValuePropositionSection />
      <CoursesOverviewSection />
      <SuccessStoriesSection />
      <HowItWorksSection />
      <FeaturedResourcesSection />
      <CommunitySupportSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default Home;
