// components/Opening.js
import React from "react";
import bgOpening from "../assets/bg-opening.png"; // ganti dengan file kamu

const Opening = ({ onOpen }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgOpening})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#4b4b4b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <h3 style={{ fontFamily: "Great Vibes", fontSize: "26px", color: "#c4a755" }}>
        The wedding of
      </h3>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: "10px 0", color: "#444" }}>
        Rifky & Eva
      </h1>
      <img
        src="/your-photo.jpg" // ganti dengan foto pasangan
        alt="Pasangan"
        style={{ width: "220px", borderRadius: "50%", margin: "20px 0" }}
      />
      <p style={{ fontSize: "20px", fontStyle: "italic", color: "#333" }}>23 / 11 / 2026</p>

      <button
        onClick={onOpen}
        style={{
          marginTop: "30px",
          padding: "12px 30px",
          backgroundColor: "#c4a755",
          border: "none",
          borderRadius: "30px",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Buka Undangan
      </button>
    </section>
  );
};

export default Opening;
