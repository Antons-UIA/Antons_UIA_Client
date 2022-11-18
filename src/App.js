import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcidBaseDisorder from "./pages/AcidBaseDisorder";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/acidbase" element={<AcidBaseDisorder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
