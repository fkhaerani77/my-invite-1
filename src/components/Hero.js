import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { startBackgroundSlideshow } from "../utils/backgroundSlider";
import foto1 from "../assets/amel-1.webp";
import foto2 from "../assets/amel-2.webp";
import foto3 from "../assets/amel-3.webp";

const imageList = [foto1, foto2, foto3];

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  // countdown
  useEffect(() => {
    const targetDate = new Date("2025-12-07T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(interval); return; }
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // animasi teks
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => { if (heroRef.current) observer.unobserve(heroRef.current); };
  }, []);

  // slideshow
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      [foto2, foto3].forEach((src) => { const img = new Image(); img.src = src; });
      const stop = startBackgroundSlideshow(setCurrentImage, imageList.length);
      return () => stop && stop();
    } else {
      setCurrentImage(0);
    }
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-backgrounds">
        {imageList.map((img, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentImage ? "visible" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="hero-content">
        <p className={`hero-subtitle ${isVisible ? "show" : ""}`}>
          The Wedding Of :
        </p>
        <h1 className={`hero-title ${isVisible ? "show" : ""}`}>
          Fadhil & Amel
        </h1>

        {/* Countdown */}
        <div className={`countdown-container ${isVisible ? "show" : ""}`}>
          {Object.entries(countdown).map(([unit, value]) => (
            <div key={unit} className="countdown-box">
              <div className="count-number animate-change">{value}</div>
              <div className="count-label">{unit.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <p className="kalimat-pembukaan">
          Atas Berkah dan Rahmat Allah Subhanahu Wa Ta'ala. Tanpa mengurangi
          rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat
          sekalian untuk menghadiri acara pernikahan kami :
        </p>
      </div>
    </section>
  );
};

export default Hero;
