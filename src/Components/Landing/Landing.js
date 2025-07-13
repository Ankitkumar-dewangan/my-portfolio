import React, { useState } from "react";
import Header from "../Interface/Header/Header";
import Footer from "../Interface/Footer/Footer";
import Home from "../Interface/Home/Home";
import About from "../Interface/About/About";
import Skills from "../Interface/Skill/Skill";
import Project from "../Interface/Project/Project";
import Internships from "../Interface/Internships/Internships";
import Contact from "../Interface/Contact/Contact";

function Landing() {
  const [homeKey, setHomeKey] = useState(0);
  const [aboutKey, setAboutKey] = useState(0);
  const [contactKey, setContactKey] = useState(0);

  const handleHomeClick = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    setHomeKey((prev) => prev + 1);
  };

  const handleAboutClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    setAboutKey((prev) => prev + 1);
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setContactKey((prev) => prev + 1);
  };

  return (
    <>
      <Header
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
      />

      <main>
        <Home animateKey={homeKey} />
        <About animateKey={aboutKey} />
        <Skills />
        <Project />
        <Internships />
        <Contact animateKey={contactKey} />
      </main>

      <Footer />
    </>
  );
}

export default Landing;
