import React from "react";
import { useInView } from "react-intersection-observer";
import foto1 from "../assets/amel-1.jpg";
import foto2 from "../assets/amel-2.jpg";
import foto3 from "../assets/amel-3.jpg";
import foto4 from "../assets/amel-4.jpg";
import foto5 from "../assets/amel-5.jpg";
import foto6 from "../assets/cpp1.jpg";
import foto7 from "../assets/cpw3.jpg";
import foto8 from "../assets/cpp2.jpg";
import foto9 from "../assets/cpw4.jpg";
import "./Galeri.css";

const Galeri = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const galeriImages = [
    foto1, foto2, foto3,
    foto4, foto5, foto6,
    foto7, foto8, foto9,
  ];

  return (
    <section className="galeri-section" id="galeri" ref={ref}>
      <h2 className="galeri-title">Galeri Kenangan</h2>
      <div className="galeri-grid">
        {galeriImages.map((src, i) => (
          <div
            key={i}
            className={`galeri-wrapper 
              ${inView ? "fade-in-out" : ""}
              ${i === galeriImages.length - 1 && galeriImages.length % 2 !== 0 ? "center-last" : ""}
            `}
          >
            <img src={src} alt={`img${i}`} className="galeri-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeri;
