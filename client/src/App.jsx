import HomeScreen from "./pages/Home";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomeScreen />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
