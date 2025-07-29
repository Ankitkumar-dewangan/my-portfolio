import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  PictureOutlined,
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Image } from "antd";
import { Link } from "react-scroll";
import "./Mobile.css";

import Pro from "../imagew/WhatsApp Image 2025-07-05 at 22.52.28_109c30fd.jpg";

const MobileSidebar = ({
  onClose,
  onHomeClick,
  onAboutClick,
  onContactClick,
}) => {
  return (
    <div className="mobile-sidebar">
      <div className="sidebar-header">
        <Image
          src={Pro}
          alt="Profile"
          className="sidebar-avatar"
          preview={{
            toolbarRender: () => null,
          }}
        />
        <h2>Ankit Kumar Dewangan</h2>
      </div>

      <div className="social-icons">
        <a
          href="mailto:ankitdewangan1122@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope color="#EA4335" size={30} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub color="#333" size={30} />
        </a>
        <a
          href="https://www.instagram.com/ankitkumar_26_/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram color="#E1306C" size={30} />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn color="#0a66c2" size={30} />
        </a>
      </div>

      <ul className="sidebar-menu">
        <li>
          <HomeOutlined style={{ color: "#87CEEB" }} />
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => {
              onHomeClick();
              onClose();
            }}
          >
            Home
          </Link>
        </li>

        <li>
          <UserOutlined />
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => {
              onAboutClick();
              onClose();
            }}
          >
            About
          </Link>
        </li>

        <li>
          <FileTextOutlined />
          <Link to="skills" smooth={true} duration={500} onClick={onClose}>
            Skills
          </Link>
        </li>

        <li>
          <PictureOutlined />
          <Link to="projects" smooth={true} duration={500} onClick={onClose}>
            Projects
          </Link>
        </li>

        <li>
          <AppstoreOutlined />
          <Link to="internships" smooth={true} duration={500} onClick={onClose}>
            Internships
          </Link>
        </li>

        {/* ✅ Contact Section */}
        <li>
          <MailOutlined />
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => {
              onContactClick(); // Trigger contact animation
              onClose();
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileSidebar;
