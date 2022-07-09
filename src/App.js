import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TourismSites from "./pages/TourismSites";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";

function App() {
  return (
    <Router class="bc-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tourism_sites" element={<TourismSites />}></Route>
        {/* <Route exact path="/coin/:coin" children={<Coin />} /> */}
        <Route path="/contact_us" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
