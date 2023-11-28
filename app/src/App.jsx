import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/landingpage.jsx";
import Login from "./pages/login/login.jsx";
import Dashboard from "./pages/admin/dashboard/dashboard.jsx";
import EmailVerify from "./pages/emailverifypage/emailverify.jsx";

//APPLY ROUTES
import ApplyRegister from "./pages/apply/ApplyRegister/register.jsx";
import ApplyHome from "./pages/apply/ApplyHome/applyhome.jsx";
//JOIN ROUTES
import JoinRegister from "./pages/join/JoinRegister/register.jsx";
import JoinHome from "./pages/join/JoinHome/joinhome.jsx";
//FORGOT PASSWORD
import CheckEmail from "./pages/forgotpassword/checkemail.jsx";
import ForgotPassword from "./pages/forgotpassword/forgotpassword.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/applyregister" element={<ApplyRegister />} />
          <Route path="/joinregister" element={<JoinRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admindashboard" element={<Dashboard />} />
          <Route path="/applyhome" element={<ApplyHome />} />
          <Route path="/joinhome" element={<JoinHome />} />
          <Route path="/resetpasswordverify" element={<CheckEmail />} />
          <Route path="/verify/:id/:token" element={<EmailVerify/>}/>
          <Route path="/reset/:id/:token" element={<ForgotPassword/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
