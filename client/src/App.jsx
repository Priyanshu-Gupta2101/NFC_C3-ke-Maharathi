import RegUser from "./pages/AuthPages/Register/RegisterUser";
import RegVol from "./pages/AuthPages/RegisterVolunteer/RegisterVolunteer";
import EMICalculator from "./pages/emiCalculatorPage/emiCalculator";
import Room from "./pages/Room";
import BlogList from "./pages/Blogs/BlogList";
import BlogViewTest from "./pages/Blogs/BlogView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import ExpenseTracker from "./components/Expense Tracker/ExpenseTracker";
import Faq from "./pages/Faq";
import MapBank from "./pages/Map/Map";
import Home from "./pages/Home";
import BlogTest from "./pages/Blogs/BlogTest";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/room" element={<Room />} />
      <Route path="/register/user" element={<RegUser />} />
      <Route path="/register/volunteer" element={<RegVol />} />
      <Route path="/emiCalculator" element={<EMICalculator />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/:id" element={<BlogTest />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/expense-tracker" element={<ExpenseTracker />} />
      {/* <Route path="/test" element={<BlogTest />} /> */}
      <Route path="/map-banks" element={<MapBank />} />
      <Route path="/abc" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
