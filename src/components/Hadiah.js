import React from "react";
import danaLogo from "../assets/logo-dana.png";

const Hadiah = () => {
  const nomorDana1 = "0831 2855 9288";
  const nomorDana2 = "0897 9811 153";

  const handleCopy = (nomor) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(nomor)
        .then(() => alert("Nomor berhasil disalin!"))
        .catch(() => fallbackCopy(nomor));
    } else {
      fallbackCopy(nomor);
    }
  };

  const fallbackCopy = (nomor) => {
    const textArea = document.createElement("textarea");
    textArea.value = nomor;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      alert("Nomor berhasil disalin!");
    } catch (err) {
      alert("Gagal menyalin nomor.");
    }
    document.body.removeChild(textArea);
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Kirim Hadiah</h2>
      <div style={styles.card}>
        <div style={styles.divider} />
        <p style={styles.text}>
          Dengan penuh rasa syukur, bila ingin berbagi kebahagiaan, dapat melalui:
        </p>
        <img src={danaLogo} alt="Dana Logo" style={styles.logo} />

        {/* Dana 1 */}
        <div style={styles.nomorBox}>
          <span style={styles.nomor}>{nomorDana1}</span>
          <button onClick={() => handleCopy(nomorDana1)} style={styles.copyBtn}>Salin</button>
        </div>
        <p style={styles.note}>Atas nama: <strong>Amelia Nurrani</strong></p>

        {/* Dana 2 */}
        <div style={styles.nomorBox}>
          <span style={styles.nomor}>{nomorDana2}</span>
          <button onClick={() => handleCopy(nomorDana2)} style={styles.copyBtn}>Salin</button>
        </div>
        <p style={styles.note}>Atas nama: <strong>Muhammad Fadhil</strong></p>

        <div style={styles.divider} />
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: "#fdf8f6",
    padding: "50px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    marginBottom: "30px",
    color: "#800000", // maroon
    fontFamily: "'Great Vibes', cursive",
  },
  card: {
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.06)",
    maxWidth: "450px",
    margin: "0 auto",
  },
  logo: {
    width: "110px",
    marginBottom: "25px",
  },
  text: {
    fontSize: "16px",
    color: "#4e3a3a",
    marginBottom: "20px",
    fontFamily: "'Cormorant Garamond', serif",
    lineHeight: 1.6,
  },
  highlight: {
    color: "#0a67d1",
  },
  nomorBox: {
    backgroundColor: "#fae4df",
    padding: "12px 20px",
    borderRadius: "14px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#7b1e1e",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  nomor: {
    letterSpacing: "1.2px",
  },
  copyBtn: {
    backgroundColor: "#7b1e1e",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
  note: {
    fontSize: "15px",
    color: "#6c5b5b",
    fontStyle: "italic",
    fontFamily: "'Cormorant Garamond', serif",
    marginBottom: "20px",
  },
  divider: {
    height: "1px",
    background: "#eee",
    margin: "20px auto",
    width: "60%",
  },
};

export default Hadiah;
