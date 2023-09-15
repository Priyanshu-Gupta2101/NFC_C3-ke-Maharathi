import RegUser from "./pages/AuthPages/Register/RegisterUser";
import RegVol from "./pages/AuthPages/RegisterVolunteer/RegisterVolunteer";
import HomeScreen from "./pages/Home";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import ExpenseTracker from "./components/Expense Tracker/ExpenseTracker";
import Faq from "./pages/Faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/room" element={<Room />} />
      <Route path="/register/user" element={<RegUser />} />
      <Route path="/register/volunteer" element={<RegVol />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/expense-tracker" element={<ExpenseTracker />} />
    </Routes>
  );
}

export default App;
