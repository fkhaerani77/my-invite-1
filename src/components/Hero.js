import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import foto1 from "../assets/amel-1.webp";

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animasi teks on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      {/* Background */}
      <div
        className="hero-backgrounds"
        style={{ backgroundImage: `url(${foto1})` }}
      />

      {/* Content */}
      <div className="hero-content">
        <p className={`hero-subtitle ${isVisible ? "show" : ""}`}>
          The Wedding Of :
        </p>
        <h1 className={`hero-title ${isVisible ? "show" : ""}`}>
          Fadhil & Amel
        </h1>

        <p className="kalimat-pembukaan">
          Atas Berkah dan Rahmat Allah Subhanahu Wa Ta'ala. Tanpa mengurangi
          rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat
          sekalian untuk menghadiri acara pernikahan kami.
        </p>
      </div>
    </section>
  );
};

export default Hero;
