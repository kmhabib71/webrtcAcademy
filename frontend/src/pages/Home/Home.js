import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import SignInForm from "../../components/Auth/SignInForm/SignInForm";
import RegisterForm from "../../components/Auth/RegisterForm/RegisterForm";
import Header from "../../components/Header/Header";
import HeroSection from "./HeroSection";
import ValuePropositionSection from "./ValuePropositionSection";
import CoursesOverviewSection from "./CoursesOverviewSection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import HowItWorksSection from "./HowItWorksSection";
import FeaturedResourcesSection from "./FeaturedResourcesSection";
import CommunitySupportSection from "./CommunitySupportSection";
import CallToActionSection from "./CallToActionSection";
import AuthModal from "../../components/Auth/Modal/Modal";
import Footer from "../../components/Footer/Footer";

const backendUrl = "http://localhost:5000";

function Home() {
  const { isLoggedIn, authUser, loading, login } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "", // Initialize firstName
    lastName: "", // Initialize lastName
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSignInModalVisible, setSignInModalVisible] = useState(false);
  const [isRegisterModalVisible, setRegisterModalVisible] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    if (isLoggedIn) {
      setSignInModalVisible(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      toast.success("Internet connection restored.");
    };
    const handleOffline = () => {
      setIsOffline(true);
      toast.error("Internet connection lost.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/auth/signin`, user, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setSignInModalVisible(false);
        toast.success("Signed In Successfully!");
        login(response.data.user);
        window.location.reload();
      }
    } catch (error) {
      toast.error("Error signing in; check email and password.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/register`,
        user,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setSignInModalVisible(false);
        toast.success("Signed Up Successfully!");
        login(response.data.user);
        window.location.reload();
      }
    } catch (error) {
      toast.error("Error signing up; check email and password.");
    }
  };

  const openRegisterModal = () => {
    setSignInModalVisible(false);
    setRegisterModalVisible(true);
  };

  const openSignInModal = () => {
    setRegisterModalVisible(false);
    setSignInModalVisible(true);
  };

  return (
    <div>
      <Header
        onLoginClick={openSignInModal}
        onSignUpClick={openRegisterModal}
      />
      {!isLoggedIn && (
        <div>
          <AuthModal
            isVisible={isSignInModalVisible}
            onClose={() => setSignInModalVisible(false)}>
            <SignInForm
              user={user}
              setUser={setUser}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              onSubmit={handleSignInSubmit}
              onSignUpClick={openRegisterModal}
            />
          </AuthModal>

          <AuthModal
            isVisible={isRegisterModalVisible}
            onClose={() => setRegisterModalVisible(false)}>
            <RegisterForm
              user={user}
              setUser={setUser}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              onSubmit={handleRegisterSubmit}
              onSignInClick={openSignInModal}
            />
          </AuthModal>
        </div>
      )}
      {isOffline && (
        <div className="offline-warning bg-red-500 text-black p-2 text-center">
          You are offline
        </div>
      )}
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
