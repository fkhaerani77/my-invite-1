import React from "react";
import { motion } from "framer-motion";
import priaImg from "../assets/cpp1.jpg";
import wanitaImg from "../assets/cpw2.jpg";
import ornament from "../assets/ornament2.svg";

const styles = {
  section: {
    position: "relative",
    padding: "100px 20px",
    background: "linear-gradient(to bottom, #fefaf8, #fff5f5)",
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
  },
    heading: {
    fontSize: "2.5rem", // lebih kecil dari 3rem
    fontWeight: 700,
    marginBottom: "40px", // dikurangi agar lebih ringkas
    color: "#4b0000ff",
  },
  card: {
    background: "rgba(255, 255, 255, 0.85)",
    borderRadius: "20px",
    padding: "30px 20px", // lebih kecil dari 40px 30px
    width: "100%",
    maxWidth: "320px", // dikurangi dari 360px
    margin: "0 auto",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)", // sedikit lebih soft
    border: "1px solid #e5cfcf",
    position: "relative",
    zIndex: 1,
  },
  photoWrapper: {
    width: "110px", // sebelumnya 130px
    height: "110px",
    margin: "0 auto 20px", // dikurangi sedikit jarak
    borderRadius: "50%",
    border: "4px solid #b98c65",
    overflow: "hidden",
    boxShadow: "0 0 0 3px #fff",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "2rem",
    color: "#7B1E1E",
    fontFamily: "'Great Vibes', cursive",
    marginBottom: "12px",
  },
  desc: {
    fontSize: "0.8rem",
    color: "#7B1E1E",
    lineHeight: 1.6,
  },
  igButton: {
    marginTop: "16px",
    display: "inline-block",
    background: "#b38c63",
    color: "#fff",
    borderRadius: "12px",
    padding: "8px 16px",
    fontWeight: "600",
    fontSize: "0.95rem",
    textDecoration: "none",
  },
  ornament: {
    position: "absolute",
    width: "240px",
    opacity: 0.06,
    filter: "blur(2px)",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  },
};

const Perkenalan = () => {
  return (
    <section style={styles.section} id="perkenalan">
      {/* Ornamen pojok */}
      <img src={ornament} alt="ornament" style={{ ...styles.ornament, top: 0, left: 0 }} />
      <img src={ornament} alt="ornament" style={{ ...styles.ornament, top: 0, right: 0, transform: "scaleX(-1)" }} />
      <img src={ornament} alt="ornament" style={{ ...styles.ornament, bottom: 0, left: 0, transform: "scaleY(-1)" }} />
      <img src={ornament} alt="ornament" style={{ ...styles.ornament, bottom: 0, right: 0, transform: "scale(-1, -1)" }} />

      {/* Judul */}

      {/* Kartu Mempelai Wanita */}
      <div style={{ display: "flex", justifyContent: "center" }}>
  <motion.div
    style={styles.card}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <div style={styles.photoWrapper}>
      <img src={priaImg} alt="Muhammad fadhil" style={styles.photo} />
    </div>
    <h3 style={styles.name}>Muhammad Fadhil</h3>
    <p style={styles.desc}>
      Putri dari Pasangan <br />
      Bapak Muhofi (Alm.) & Ibu Muniroh
      {/* <br />
      Beralamat di Jakarta */}
    </p>
    {/* <a
      href="https://instagram.com/zahralestari"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.igButton}
    >
      @zahralestari
    </a> */}
    <div className="dgn">
      <b><p>Dengan</p></b>
    </div>
    
    <div style={styles.photoWrapper}>
      <img src={wanitaImg} alt="Zahra Lestari" style={styles.photo} />
    </div>
    <h3 style={styles.name}>Amelia Nurrani</h3>
    <p style={styles.desc}>
      Putri dari Pasangan <br />
      Bapak Aman Apeng & Ibu Nengsih Sunengsih <br />
      {/* Beralamat di Jakarta */}
    </p>
  </motion.div>
</div>

    </section>
  );
};

export default Perkenalan;
