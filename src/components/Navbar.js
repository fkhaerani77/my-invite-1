import React, { useState } from "react";
import {
  FaHome,
  FaHandshake,
  FaQuoteRight,
  FaCalendarAlt,
  FaCommentDots,
  FaMapMarkerAlt,
} from "react-icons/fa";

const menuItems = [
  { id: "hero", label: "Opening", icon: <FaHome /> },
  { id: "perkenalan", label: "Mempelai", icon: <FaHandshake /> },
  { id: "quotes", label: "Quotes", icon: <FaQuoteRight /> },
  { id: "acara", label: "Tanggal", icon: <FaCalendarAlt /> },
  { id: "ucapan", label: "RSVP", icon: <FaCommentDots /> },
  { id: "maps", label: "Maps", icon: <FaMapMarkerAlt /> },
];

const Navbar = ({ onNavigate }) => {
  const [active, setActive] = useState("hero");

  const handleClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    onNavigate(id);
  };

  return (
    <nav style={styles.nav}>
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => handleClick(e, item.id)}
          style={{
            ...styles.link,
            ...(active === item.id ? styles.activeLink : {}),
          }}
        >
          <div style={styles.icon}>{item.icon}</div>
          <div style={styles.label}>{item.label}</div>
        </a>
      ))}
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-around",
    padding: "8px 0 25px",
    borderTop: "1px solid #ccc",
    zIndex: 9999,
    backdropFilter: "blur(10px)",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#7B1E1E",
    textDecoration: "none",
    fontSize: "11px",
    fontWeight: "600",
    padding: "6px 10px",
    borderRadius: "12px",
    transition: "0.3s ease",
  },
  activeLink: {
    backgroundColor: "#7B1E1E",
    color: "#fff",
  },
  icon: {
    fontSize: "18px",
    marginBottom: "3px",
  },
  label: {
    fontSize: "11px",
  },
};

export default Navbar;
