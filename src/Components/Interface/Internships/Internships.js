// src/components/Internships.js
import React from "react";
import { Typography, Row, Col } from "antd";
import { motion } from "framer-motion";
import "./Internships.css";

const { Title, Paragraph } = Typography;

const internships = [
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


const Internships = () => {
  return (
    <section id="internships" className="internships-section">
      <div className="internships-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title level={1} className="internships-title">
            Internships
          </Title>

          <Row gutter={[24, 24]}>
            {internships.map((internship, index) => (
              <Col xs={24} md={12} key={index}>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                    scale: 0.9,
                  }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                  className="internship-card"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Title level={4} className="company-title">
                      <a href="https://yashvitech.com/" > {internship.company}</a>
                    </Title>
                  </motion.div>

                  <motion.p
                    className="role"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {internship.role}
                  </motion.p>

                  <motion.p
                    className="duration"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {internship.duration}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Paragraph className="internship-desc">
                      {internship.description}
                    </Paragraph>
                  </motion.div>

                  <motion.div
                    className="tech-tags"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {internship.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className={`tech-tag tag-${tech
                          .toLowerCase()
                          .replace(/[^a-z0-9]/g, "")}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.8 + index * 0.1 + i * 0.05,
                          duration: 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 },
                        }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
