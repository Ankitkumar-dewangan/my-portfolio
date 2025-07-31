// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import MobileSidebar from "../Mobile/Mobile"; // ✅ Mobile component
import "./Header.css";
import Logo from "../imagew/ankit_logo-removebg-preview.png";
const Header = ({ onHomeClick, onAboutClick, onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ✅ Update on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="portfolio-header">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Logo" className="logo-img" />
            <span className="logo-text">House of Ankit</span>
          </div>

          {/* Hamburger Icon (Mobile only) */}
          {isMobile && (
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✖" : "☰"}
            </div>
          )}

          {/* Desktop Navbar (Visible on large screens) */}
          <nav className={`nav-links ${!isMobile || menuOpen ? "active" : ""}`}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => {
                setMenuOpen(false); // close mobile menu
                onHomeClick(); // trigger animation reset
              }}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => {
                onAboutClick(); // 🔁 retrigger animation
                setMenuOpen(false); // ❌ close sidebar
              }}
            >
              About
            </Link>

            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="internships"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Internships
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => {
                setMenuOpen(false);
                onContactClick(); // ✅ Re-trigger Contact animation
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* ✅ Mobile Sidebar Overlay (if applicable) */}
      {menuOpen && isMobile && (
        <MobileSidebar
          onClose={() => setMenuOpen(false)}
          onHomeClick={onHomeClick}
          onAboutClick={onAboutClick}
          onContactClick={onContactClick}
        />
      )}
    </>
  );
};

export default Header;
