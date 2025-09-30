import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/blog" element={<Blog />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
