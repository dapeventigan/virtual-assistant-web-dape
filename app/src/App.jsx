import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/home/landingpage.jsx";
import ApplyRegister from "./pages/apply/register.jsx";
import JoinRegister from "./pages/join/register.jsx";
import Login from "./pages/login/login.jsx";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
