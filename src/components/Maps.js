import React from "react";

const Maps = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Lokasi Acara</h2>
      <div style={styles.mapWrapper}>
        <iframe
          title="Lokasi Pernikahan"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.79164013971!2d108.62614628673344!3d-6.836779285318983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f051197b4c273%3A0x4325abed19f7160c!2sJembatan%20Pulo%20undrus!5e0!3m2!1sen!2sid!4v1754325641785!5m2!1sen!2sid"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "32px 16px",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "30px",
    marginBottom: "30px",
    color: "#800000", // maroon
    fontFamily: "'Great Vibes', cursive",
  },
  mapWrapper: {
    maxWidth: "600px",
    margin: "0 auto",
  },
};

export default Maps;
