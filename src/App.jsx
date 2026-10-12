
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import Letter from "./pages/Letter";
import Reasons from "./pages/Reasons";
import Surprise from "./pages/Surprise";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </BrowserRouter>
  );
}
