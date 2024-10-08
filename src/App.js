import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services"; // Import the Services component
import "./styles.css";
import Leadership from "./components/Leadership";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/leadership" element={<Leadership />} /> {/* Add this line */}
          <Route path="/about" element={<About />} /> 
          <Route path="/contactUs" element={<ContactUs />} /> 
        </Routes>
      </div>
    </Router>
  );
}
