
import React from "react";
import { NavLink } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="site-navbar">
      <NavLink to="/" className="nav-brand">
        <Heart size={27} fill="currentColor" />
        <span>For You</span>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/memories">Gallery</NavLink>
        <NavLink to="/letter">A Letter</NavLink>
        <NavLink to="/reasons">Why You</NavLink>
        <NavLink to="/surprise">Surprise</NavLink>
      </nav>
    </header>
  );
}
