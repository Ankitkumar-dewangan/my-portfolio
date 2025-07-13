// src/components/Project.js
import React from "react";
import DDC from "../imagew/ddc.eb1242a0b88f53de1da6.png";
import Lost from "../imagew/losssssst.png";
import Ecom from "../imagew/E-commerce.webp";
import Shankra from "../imagew/shankra.png";
import Real from "../imagew/Real.avif";
import Weather from "../imagew/wheather.webp";
import "./Project.css";

const projectsData = [
  {
    title: "SmartE – Employee Management System",
    image: DDC,
    description:
      "Developed a complete HRMS Dashboard using ReactJS, Django, and MySQL with attendance, leave, payroll, and AI chatbot integration.",
    tech: ["React", "Django", "MySQL", "Ant Design"],
    live: "https://ddcconsultancy.in/",
    // github: "https://github.com/your-username/smarte",
  },
  {
    title: "Lost and Found",
    image: Lost,
    description:
      "Built a secure lost-and-found portal where users can register, report, and claim lost items using Django, ReactJS, and OTP verification.",
    tech: ["React", "Ant Design", "Framer Motion"],
    // live: "https://your-portfolio-link.com",
    // github: "https://github.com/your-username/portfolio",
  },
  {
    title: "Real Property Dealing",
    image: Real,
    description:
      "Created a MERN stack platform for buying/selling property with form submissions, dynamic listings, and property details.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    // live: "#",
    // github: "https://github.com/your-username/task-manager",
  },
  {
    title: "E-Commerce Platform",
    image: Ecom,
    description:
      "Developed an online shopping site using MERN stack with user login, product listing, cart, and payment integration (UI only).",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    // live: "#",
    // github: "https://github.com/your-username/task-manager",
  },
  {
    title: "Shankra Machinery",
    image: Shankra,
    description:
      "Built a company product showcase site using ReactJS and Node.js with category-wise filtering and inquiry system.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    // live: "#",
    // github: "https://github.com/your-username/task-manager",
  },
  {
    title: "Weather App",
    image: Weather,
    description:
      "Created a weather application using ReactJS and OpenWeather API with live city search and animated weather cards.",
    tech: ["React", "CSS", "OpenWeather API"],
    // live: "https://weather-app-live-link.com",
    // github: "https://github.com/your-username/weather-app",
  },
];


const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">
            <span className="title-main">Featured</span>
            <span className="title-accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            Discover my latest work and innovations
          </p>
          <div className="title-underline">
            <div className="underline-gradient"></div>
          </div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              key={index}
              style={{ "--card-index": index }}
            >
              <div className="card-glow"></div>
              <div className="project-image-container">
                <div className="image-border"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-demo-btn"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      <i className="fab fa-github"></i>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="content-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="title-accent-line"></div>
                </div>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`tech-tag tag-${tech
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, "")}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
