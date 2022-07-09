import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router class="bc-dark">
      <Navbar />
      <Routes>{/* <Route path="/" element={<Home />}></Route> */}</Routes>
    </Router>
  );
}

export default App;
