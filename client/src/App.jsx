import RegUser from "./pages/AuthPages/Register/RegisterUser";
import RegVol from "./pages/AuthPages/RegisterVolunteer/RegisterVolunteer";
import Room from "./pages/Room";
import BlogList from "./pages/Blogs/BlogList";
import BlogViewTest from "./pages/Blogs/BlogView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Faq from "./pages/Faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/room" element={<Room />} />
      <Route path="/register/user" element={<RegUser />} />
      <Route path="/register/volunteer" element={<RegVol />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/:id" element={<BlogViewTest />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
