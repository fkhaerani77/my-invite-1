import React from "react";
import bgImage from "../assets/bg-quote-2.jpg";

const Quotes = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#7B1E1E",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay kabut putih atas */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.74), rgba(255,255,255,0))",
          zIndex: 1,
        }}
      />

      {/* Overlay kabut putih bawah */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, rgba(255, 255, 255, 0.67), rgba(255,255,255,0))",
          zIndex: 1,
        }}
      />

      {/* Konten utama */}
      <div
  style={{
    maxWidth: "700px",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "20px",
    borderRadius: "12px",
    zIndex: 2,
    lineHeight: "2",
  }}
>
  <h2 style={{ fontSize: "0.9rem", marginBottom: "16px" }}>
    وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
    لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
    إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
  </h2>
  <p style={{ marginBottom: "8px", fontWeight: "400"}}>
    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."
  </p>

  <p style={{ fontStyle: "italic", fontSize: "14px", marginTop: "8px", fontWeight: "600"}}>
    – QS. Ar-Rum: 21
  </p>
</div>

    </section>
  );
};

export default Quotes;
