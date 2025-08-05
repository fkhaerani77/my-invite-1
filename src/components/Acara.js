import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgAcara from "../assets/bg-quote-2.jpg";

const Acara = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const acaraData = [
    {
      judul: "Akad Pernikahan",
      hari: "Minggu",
      tanggal: ["07", "12", "25"],
      waktu: "Pukul 09.00 WIB",
      tempat: "Kediaman Mempelai Wanita",
      alamat: "Desa Tuk Karang suwung Blok Pulau Undrus Dusun 01 RT/RW 01",
      // map: "https://maps.app.goo.gl/DfmuqqMvmTGovWeRA",
    },
    {
      judul: "Resepsi Pernikahan",
      hari: "Minggu",
      tanggal: ["07", "12", "25"],
      waktu: "Pukul 10.00 WIB",
      tempat: "Kediaman Mempelai Wanita",
      alamat: "Desa Tuk Karang suwung Blok Pulau Undrus Dusun 01 RT/RW 01",
      // map: "https://maps.google.com",
    },
  ];

  return (
    <section
      id="tanggal"
      style={{
        backgroundImage: `url(${bgAcara})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        gap: "30px",
      }}
    >
      {acaraData.map((acara, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#fff9f5",
            borderRadius: "200px 200px 12px 12px",
            padding: "40px 16px", // padding lebih ramping
            maxWidth: "480px", // max lebar lebih kecil dari 600px
            width: "80%", // tidak 100% biar ada space kanan-kiri
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
          data-aos="fade-up"
        >
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "2.2rem",
              color: "#800000",
              marginBottom: "10px",
            }}
          >
            {acara.judul}
          </h2>

          <p style={{ color: "#8b3e2f", marginBottom: "24px" }}>{acara.hari}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              marginBottom: "24px",
            }}
          >
            {acara.tanggal.map((val, i) => (
              <div
                key={i}
                style={{
                  padding: "0 20px",
                  borderRight: i < 2 ? "1px solid #8b3e2f" : "none",
                }}
              >
                <h1 style={{ margin: 0, fontSize: "3rem", color: "#800000" }}>{val}</h1>
              </div>
            ))}
          </div>

          <p style={{ fontStyle: "italic", marginBottom: "6px", color: "#5c2a18" }}>
            {acara.waktu}
          </p>
          <p style={{ marginBottom: "4px", color: "#5c2a18" }}>{acara.tempat}</p>
          <p style={{ marginBottom: "20px", color: "#5c2a18" }}>{acara.alamat}</p>

          {/* <a
            href={acara.map}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              border: "2px solid #800000",
              borderRadius: "30px",
              color: "#800000",
              textDecoration: "none",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#80000020")}
            onMouseOut={(e) => (e.target.style.background = "transparent")}
          >
            📍 Map Lokasi Acara
          </a> */}
        </div>
      ))}
    </section>
  );
};

export default Acara;
