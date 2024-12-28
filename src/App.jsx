import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import _ from "lodash";

import { useAppContext } from "./contexts/AppContext";
import { APPLICANT, EMPLOYER } from "./constant/variable";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/job/Jobs";
import Job from "./pages/job/Job";
import EditJob from "./pages/job/EditJob";
import AddJob from "./pages/job/AddJob";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Apply from "./pages/job/Apply";
import Companies from "./pages/company/Companies";
import Home from "./pages/Home";
import AddCompany from "./pages/company/AddCompany";
import JobApplications from "./pages/job/JobApplications";
import JobApplicants from "./pages/job/JobApplicants";

function App() {
  const { isLoggedIn, user } = useAppContext();

  const isApplicant = _.get(user, "type") === APPLICANT || false;
  const isEmployer = _.get(user, "type") === EMPLOYER || false;

  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/:role" element={<Register />} />
          <Route path="/register" element={<Register />} />
          {isLoggedIn && <Route path="/profile/:id" element={<Profile />} />}
          {isLoggedIn && (
            <Route path="/profile/:id/edit" element={<EditProfile />} />
          )}
          {isLoggedIn && (
            <Route path="/companies/add" element={<AddCompany />} />
          )}
          <Route path="/companies" element={<Companies />} />
          <Route path="/jobs" element={<Jobs />} />
          {isLoggedIn && isEmployer && (
            <Route path="/jobs/add" element={<AddJob />} />
          )}
          {isLoggedIn && isEmployer && (
            <Route path="/jobs/:id/edit" element={<EditJob />} />
          )}
          {isLoggedIn && isApplicant && (
            <Route path="/jobs/:id/apply" element={<Apply />} />
          )}
           {isLoggedIn && isApplicant && (
            <Route path="/jobs/apply" element={<JobApplications />} />
          )}
          {isLoggedIn && isEmployer && (
            <Route path="/jobs/apply" element={<JobApplicants />} />
          )}
          <Route path="/jobs/:id" element={<Job />} />

          {/* Catch-all Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
