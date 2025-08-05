import React from "react";

const ShareButton = ({ namaTamu }) => {
  const currentURL = window.location.origin;
  const encodedNama = encodeURIComponent(namaTamu);
  const shareURL = `${currentURL}/?kpd=${encodedNama}`;

  const pesan = `Hai! Aku mengundangmu untuk melihat undangan digital ini 🎉\n\nSilakan buka:\n${shareURL}`;
  const waLink = `https://wa.me/?text=${encodeURIComponent(pesan)}`;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <a href={waLink} target="_blank" rel="noopener noreferrer" style={styles.button}>
        📤 Bagikan via WhatsApp
      </a>
    </div>
  );
};

const styles = {
  button: {
    display: "inline-block",
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default ShareButton;
