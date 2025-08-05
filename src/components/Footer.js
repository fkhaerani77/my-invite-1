import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => (
  <section
    className="footer"
    style={{
      textAlign: "center",
      padding: "30px 20px 40px",
      fontSize: "14px",
      background: "#fdf9f6",
      color: "#5c1a1b",
      fontFamily: "'Cormorant Garamond', serif",
    }}
  >
    <p style={{ fontSize: "16px", marginBottom: "4px" }}>
      Terima kasih atas perhatian dan kehadiran Anda.
    </p>
    <p style={{ fontStyle: "italic", marginBottom: "6px" }}>Hormat kami,</p>
    <strong
      style={{
        fontSize: "18px",
        letterSpacing: "1px",
        color: "#841c26",
      }}
    >
      Keluarga Besar
    </strong>

    <div
      style={{
        marginTop: "30px",
        marginBottom: "80px",
        textAlign: "center",
        fontSize: "13px",
        color: "#888",
        fontStyle: "italic",
      }}
    >
      Powered by{" "}
      <a
        href="https://www.instagram.com/nama_ig_kamu"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginLeft: "8px",
          marginRight: "3px",
          color: "#841c26",
          textDecoration: "none",
          verticalAlign: "middle",
        }}
        aria-label="Instagram Ranizé"
      >
        <FaInstagram size={16} />
      </a>
      <span
        style={{
          
          fontWeight: "bold",
          color: "#5c1a1b",
          fontStyle: "normal",
        }}
      >
        Ranizé
      </span>
    </div>
  </section>
);

export default Footer;
