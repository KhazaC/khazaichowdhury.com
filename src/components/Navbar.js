import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src="/assets/logo.svg" alt="Home" className="logo-icon" />
      </Link>
      <Link to="/photography" className="nav-link">
        Photography
      </Link>
      {/* <Link to="/computer-science" className="nav-link">
        Computer Science
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link> */}
    </nav>
  );
}

export default Navbar;
