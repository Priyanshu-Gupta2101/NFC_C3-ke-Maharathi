import RegUser from "./pages/AuthPages/Register/RegisterUser";
import RegVol from "./pages/AuthPages/RegisterVolunteer/RegisterVolunteer";
import EMICalculator from "./pages/emiCalculatorPage/emiCalculator";
import Room from "./pages/Room";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/room" element={<Room />} />
      <Route path="/register/user" element={<RegUser />} />
      <Route path="/register/volunteer" element={<RegVol />} />
      <Route path="/emiCalculator" element={<EMICalculator/>} />
    </Routes>
  );
}

export default App;
