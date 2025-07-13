// src/components/Contact.js
import React, { useState, useRef, useEffect } from "react";
import { Rate } from "antd";
import Emogy from "../imagew/emogy.jpg";
import {
  Typography,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Input,
  message,
  Select,
} from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";
import "animate.css";
import { toast } from 'react-toastify';
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = ({ animateKey }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const [animationClass, setAnimationClass] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    setAnimationClass("animate__animated animate__zoomInUp animate__slow");
    const timer = setTimeout(() => setAnimationClass(""), 1000);
    return () => clearTimeout(timer);
  }, [animateKey]);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9]/g, "");
    setOtp(newOtp);
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const onFinish = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:8000/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      console.log("Response from backend:", result);

      // ✅ Check for 5-star rating here
      if (values.feedback === 5) {
        setShowThankYou(true);
      } else {
        setShowThankYou(false);
      }

      toast.success("Message sent successfully!");
      form.resetFields();
      // Delay closing modal to show emoji
      setTimeout(() => {
        setIsModalOpen(false);
        setShowThankYou(false); // reset after closing
      }, 5500);
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`contact-section ${animationClass}`}>
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title level={2} className="contact-title">
            Contact Me
          </Title>
          <Paragraph className="contact-subtext"></Paragraph>

          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <div className="contact-box">
                <FaEnvelope
                  color="#EA4335"
                  size={40}
                  className="contact-icon"
                />
                <p>Email</p>
                <a href="mailto:ankitdewangan621@gmail.com">
                  ankitdewangan1122@gmail.com
                </a>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div className="contact-box-git">
                <FaGithub color="#333" size={40} className="contact-icon" />
                <p>GitHub</p>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  Ankitkumar-dewangan
                </a>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div className="contact-box-in">
                <FaLinkedinIn
                  color="#0a66c2"
                  size={40}
                  className="contact-icon"
                />
                <p>LinkedIn</p>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/your-profile
                </a>
              </div>
            </Col>
          </Row>

          <div className="contact-cta">
            <Button type="primary" size="large" onClick={showModal}>
              Say Hello
            </Button>
          </div>
        </motion.div>
      </div>

      {/* ✅ className="contact-modal" added below */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width="100%"
        style={{ maxWidth: 500 }}
        className="contact-modal"
      >
        <div className="modal-body-content">
          {/* <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
            Contact Form
          </Title> */}
          {showThankYou ? (
            <div className="thank-you-modal-overlay">
              <img src={Emogy} alt="Thank You Emoji" />
            </div>
          ) : (
            <Form form={form} layout="vertical" onFinish={onFinish}>
              {/* ✅ Your Form.Item fields go here */}
              <Form.Item
                name="name"
                label={<span style={{ color: "#1e3a8a" }}>Full Name</span>}

                rules={[
                  { required: true, message: "Please enter your full name" },
                ]}
              >
                <Input placeholder="Enter your full name" />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span style={{ color: "#1e3a8a" }}>Email Address</span>}

                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input placeholder="Enter your email address" />
              </Form.Item>

              <Form.Item
                name="phone"
                label={<span style={{ color: "#1e3a8a" }}>Phone Number</span>}

                rules={[
                  { required: true, message: "Please enter your phone number" },
                  {
                    pattern: /^\d{10}$/,
                    message: "Phone number must be exactly 10 digits",
                  },
                ]}
              >
                <Input
                  addonBefore="+91"
                  placeholder="Enter 10-digit phone number"
                  maxLength={10}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </Form.Item>

              <Form.Item
                name="suggestion"
                label={<span style={{ color: "#1e3a8a" }}>Suggestion</span>}
                rules={[
                  { required: true, message: "Please enter your suggestion" },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Enter your suggestions or message"
                />
              </Form.Item>

              <Form.Item
                name="feedback"
                label={<span style={{ color: "#1e3a8a" }}>Rate your experience</span>}
                rules={[
                  { required: true, message: "Please provide your feedback" },
                ]} 
              >
                <Rate style={{marginLeft:"35%"}} />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={isSubmitting}
                >
                  SUBMIT
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Contact;
