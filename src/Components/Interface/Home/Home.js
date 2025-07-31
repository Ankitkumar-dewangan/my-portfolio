import React from "react";
import { Button, Typography, Space } from "antd";
import "animate.css";

import { LinkOutlined, DownloadOutlined } from "@ant-design/icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import Pic from "../imagew/bbhai.jpg";
const { Title, Paragraph, Text } = Typography;

const Home = ({ animateKey }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="floating-element"
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
      style={{
        position: "absolute",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
        background: "linear-gradient(45deg, #64ffda, #00bcd4)",
        borderRadius: "50%",
        boxShadow: "0 0 10px rgba(100, 255, 218, 0.5)",
      }}
    />
  ));

  return (
    <section
      key={animateKey}
      className="hero-section animate__animated animate__zoomIn animate__slow"
      id="home"
    >
      <div className="floating-elements">{floatingElements}</div>
      <div className="glow-effect"></div>

      <div className="hero-wrapper" ref={ref}>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
        >
          <div className="image-container">
            <img
              src={Pic}
              alt="Professional Developer"
              className="profile-image"
            />
            <div className="image-border" />
            <div className="image-dots" />
          </div>
        </motion.div>

        <motion.div
          className="hero-content"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Text className="hero-greeting">Hi there, I'm</Text>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Title className="hero-title">
              <motion.span
                className="highlight-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Ankit Kumar Dewangan
              </motion.span>
            </Title>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Title className="hero-subtitle" level={2}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Full Stack Web Developer
              </motion.span>
            </Title>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Paragraph className="hero-description">
              I build responsive, scalable web applications with clean UI and
              robust backend logic, delivering smooth and modern user
              experiences using React and Django
            </Paragraph>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Space size="middle" className="hero-buttons">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#projects">
                  <Button
                    type="primary"
                    icon={<LinkOutlined />}
                    size="large"
                    className="hero-btn primary-btn"
                  >
                    View My Work
                  </Button>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  download="Ankit_Resume.pdf"
                >
                  <Button
                    type="default"
                    icon={<DownloadOutlined />}
                    size="large"
                    className="hero-btn11 secondary-btn"
                  >
                    Download CV
                  </Button>
                </a>
              </motion.div>
            </Space>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
