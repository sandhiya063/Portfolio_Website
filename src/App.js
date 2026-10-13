import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Accordian from "./Accordian";
import Contact from "./Contact";
function App() {
  return (
      <>
      <nav className="navbar">
        <h2>MyPortfolio</h2>
      <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/accordian">Accordian</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
     
   </>
  );
}

export default App;

