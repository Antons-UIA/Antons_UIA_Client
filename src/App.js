import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcidBaseDisorder from "./pages/AcidBaseDisorder";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp/SignUp";
import Statistics from "./pages/Statistics";
import Reports from "./pages/Reports";
import VideoCall from "./components/VideoCall/VideoCall";
import Maps from "./pages/Maps";
import Signup_Patient from "./pages/SignUp/Signup_Patient";
import Signup_Doctor from "./pages/SignUp/Signup_Doctor";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/video" element={<VideoCall />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="reports/:id" element={<Statistics />} />
          <Route path="/acidbase" element={<AcidBaseDisorder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup-patient" element={<Signup_Patient />} />
          <Route path="/signup-doctor" element={<Signup_Doctor />} />
          <Route path="/sign-out" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
