import React from "react";
import "./About.css";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import Pic from "../imagew/WhatsApp Image 2025-07-05 at 22.52.28_109c30fd.jpg";
import "animate.css";

const About = ({ animateKey }) => {
  return (
    <section
      key={animateKey}
      className="about-section animate__animated animate__jello"
      id="about"
    >
      <div className="background-overlay"></div>
      <div className="content-wrapper">
        <h2 className="section-title">About</h2>
        
        <p className="section-subtitle">
          I am currently working as a Full Stack Intern at Botivate Services LLP, where I work with technologies like React.js, Django, Python, Bootstrap, and CSS. I'm passionate about building innovative and scalable web solutions.
        </p>

        <div className="about-content">
          {/* Right Details */}
          <div className="about-info">
            <h3>Full Stack Web Developer.</h3>
            <p className="about-tagline">
              <em>
                A passionate developer focused on building clean, efficient, and user-friendly web applications from front to back.
              </em>
            </p>

            <div className="info-grid">
              <ul>
                <li>
                  <span>›</span> <strong>Birthday:</strong> 26 Feb 2002
                </li>
                <li>
                  <span>›</span> <strong>Job:</strong> Botivate Services LLP 
                </li>
                <li>
                  <span>›</span> <strong>Phone:</strong> 6264460405
                </li>
                <li>
                  <span>›</span> <strong>City:</strong> Raipur, Chhattisgarh
                </li>
              </ul>
              <ul>
                <li>
                  <span>›</span> <strong>Age:</strong> 23
                </li>
                <li>
                  <span>›</span> <strong>Degree:</strong> MCA
                </li>
                <li>
                  <span>›</span> <strong>Email:</strong>{" "}
                  ankitdewangan1122@gmail.com
                </li>
                <li>
                  <span>›</span> <strong>Freelance:</strong> Available
                </li>
              </ul>
            </div>

            <p className="about-desc">
              I enjoy turning complex problems into simple, beautiful, and intuitive designs. I’m constantly learning new technologies to improve my skills and deliver impactful digital experiences. Whether working on the front-end or back-end, I always strive to write clean, efficient, and maintainable code.
            </p>
          </div>

          {/* Left Image */}
          <div className="about-image">
            <div className="image-wrapper">
              <img src={Pic} alt="About" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
