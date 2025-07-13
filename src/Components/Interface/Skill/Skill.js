import React, { useState } from "react";
import { Typography, Row, Col } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeOutlined,
  ApiOutlined,
  DatabaseOutlined,
  ToolOutlined,
  RocketOutlined,
  BookOutlined,
} from "@ant-design/icons";

import "./Skill.css";

const { Title, Text } = Typography;

const skillsData = {
  frontend: [
    { name: "HTML", level: 95, color: "#E44D26" },
    { name: "CSS", level: 90, color: "#264DE4" },
    { name: "Bootstrap", level: 85, color: "#7952B3" },
    { name: "Tailwind CSS", level: 85, color: "#38B2AC" },
    { name: "JavaScript", level: 85, color: "#F0DB4F" },
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "Redux", level: 80, color: "#764ABC" },
    { name: "Ant Design", level: 85, color: "#1890FF" },
    { name: "Next.js", level: 80, color: "#000000" },
  ],

  backend: [
    { name: "Node.js", level: 70, color: "#68A063" },
    { name: "Python", level: 80, color: "#3776AB" },
    { name: "PHP", level: 65, color: "#8892BE" },
    { name: "MongoDB", level: 65, color: "#4DB33D" },
    { name: "Django", level: 80, color: "#092E20" },
    { name: "MySQL", level: 75, color: "#4479A1" },
  ],

  tools: [
    { name: "Git & GitHub", level: 85, color: "#F05032" },
    { name: "Postman", level: 80, color: "#FF6C37" },
    { name: "VSCode", level: 90, color: "#007ACC" },
    { name: "Ai Tools", level: 65, color: "#F24E1E" },
  ],
};

// import { CodeOutlined, ApiOutlined } from "@ant-design/icons";

const experienceData = [
  {
    company: "YASHVITECH IT SOLUTION PVT. LTD",
    link: "https://yashvitech.com/",
    role: "Full Stack Web Developer Intern",
    duration: "Sep 2024 – Jun 2025",
    description:
      "Developed a full-featured HRMS dashboard with React and Django including employee attendance, leave tracking, salary management, and integrated AI-powered chatbot.",
    tech: ["Html", "Css", "JavaScript", "Bootstrap", "Tailwind", "Ant Design", "React", "Python", "Django", "SQLite"],
  },
  {
    company: "BOTIVATE SERVICES LLP",
    link: "https://botivate.in/", // replace with the correct URL
    role: "Full Stack Web Developer Job",
    duration: "Currently",
    description:
      "Built full-stack applications using MongoDB, Express, React, and Node.js, gaining real-time project exposure on task management and productivity tools.",
    tech: ["Next.js", "MongoDB", "Google Sheet(Database)", "Ai tools", "Express", "React", "Node.js"],
  },
];

const educationData = [
  {
    degree: "B.Sc Computer Science",
    institution: "Govt. Nagarjuna Post Graduate College of Science",
    period: "2020 - 2023",
    description: "Percentage - 71%",
    icon: <BookOutlined />,
  },
  {
    degree: "Master of Computer Application",
    institution: "Shri Shankaracharya Professional University",
    period: "2023 - 2025",
    description: "Percentage - 80%",
    icon: <BookOutlined />,
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          {/* <Text className="section-subtitle">My Abilities</Text> */}
          <Title className="section-title">Skills & Experience</Title>
          <div className="section-divider" />
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="skill-category">
              <div className="category-header">
                <CodeOutlined className="category-icon" />
                <h3>Frontend</h3>
              </div>
              {skillsData.frontend.map((skill, index) => (
                <motion.div
                  className="skill-item"
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-container">
                    <motion.div
                      className="progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="skill-category">
              <div className="category-header">
                <DatabaseOutlined className="category-icon" />
                <h3>Backend</h3>
              </div>
              {skillsData.backend.map((skill, index) => (
                <motion.div
                  className="skill-item"
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-container">
                    <motion.div
                      className="progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="skill-category">
              <div className="category-header">
                <ToolOutlined className="category-icon" />
                <h3>Tools</h3>
              </div>
              {skillsData.tools.map((skill, index) => (
                <motion.div
                  className="skill-item"
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-container">
                    <motion.div
                      className="progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="experience-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="tabs-container">
              <div className="tabs">
                <button
                  className={`tab ${activeTab === "education" ? "active" : ""}`}
                  onClick={() => setActiveTab("education")}
                >
                  <BookOutlined /> Education
                </button>
                <button
                  className={`tab ${
                    activeTab === "experience" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("experience")}
                >
                  <RocketOutlined /> Experience
                </button>
              </div>

              <div className="tab-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === "experience" ? (
                      <div className="timeline">
                        {experienceData.map((item, index) => (
                          <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="timeline-icon">{item.icon}</div>
                            <div className="timeline-content">
                              <h3>{item.title}</h3>
                              <div className="timeline-meta">
                                <span className="company">{item.company}</span>
                                <span className="period">{item.period}</span>
                              </div>
                              <p>{item.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="timeline">
                        {educationData.map((item, index) => (
                          <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="timeline-icon">{item.icon}</div>
                            <div className="timeline-content">
                              <h3>{item.degree}</h3>
                              <div className="timeline-meta">
                                <span className="company">
                                  {item.institution}
                                </span>
                                <span className="period">{item.period}</span>
                              </div>
                              <p style={{ fontWeight: "bold" }}>
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {hoveredSkill && (
          <motion.div
            className="skill-tooltip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ backgroundColor: hoveredSkill.color }}
          >
            <span>{hoveredSkill.name}</span>
            <span>{hoveredSkill.level}%</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
