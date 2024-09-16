import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Auth/Register";
import SignIn from "./pages/Auth/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AuthProvider from "./pages/Auth/AuthProvider";
import Logout from "./pages/Auth/Logout";
import Admin from "./pages/Admin/Admin";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import JobRoadMap from "./pages/JobRoadMap/index";
import StartBusiness from "./pages/StartBusiness/index";
import CoursesPage from "./pages/AllCourses/CoursesPage";
import Blog from "./pages/Blogs/Index.js";
import CoursesInPage from "./pages/CoursePage/Index.js";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:callerSocketId" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/webrtc-job-roadmap" element={<JobRoadMap />} />
          <Route path="/start-business" element={<StartBusiness />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/coursepage" element={<CoursesInPage />} />
          <Route path="/Admin/*" element={<Admin />} />
        </Routes>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
