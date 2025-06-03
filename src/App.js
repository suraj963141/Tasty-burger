import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Section2 from "./pages/Home/Section2";
import Section3 from "./pages/Home/Section3";
import Section4 from "./pages/Home/Section4";
import Section5 from "./pages/Home/Section5";
import Section6 from "./pages/Home/Section6";
import Section7 from "./pages/Home/Section7";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Section2 />} />
        <Route path="/menu" element={<Section3 />} />
        <Route path="/shop" element={<Section4 />} />
        <Route path="/blog" element={<Section5 />} />
        <Route path="/contact" element={<Section6 />} />
        <Route path="/cart" element={<Section7 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
