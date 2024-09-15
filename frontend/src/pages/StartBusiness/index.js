import React from "react";

import Header from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";
import StartBusinessHero from "./StartBusinessHero";
import ProductOverviewSection from "./ProductOverviewSection";
import FeaturesComparisonSection from "./FeaturesComparisonSection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import SupportOnboardingSection from "./SupportOnboardingSection";
import FAQSection from "./FAQSection";
import CallToActionSection from "./CallToActionSection";

function index() {
  return (
    <div>
      <Header />
      <StartBusinessHero />
      <ProductOverviewSection />
      {/* <FeaturesComparisonSection /> */}
      <SuccessStoriesSection />
      <SupportOnboardingSection />
      <FAQSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default index;
