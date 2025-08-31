import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Acara from "./components/Acara";
import Galeri from "./components/Galeri";
import Ucapan from "./components/Ucapan";
import Hadiah from "./components/Hadiah";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import Navbar from "./components/Navbar";
import WelcomeScreen from "./components/WelcomeScreen";
import Perkenalan from "./components/Perkenalan";
import Quotes from "./components/Quotes";
import Maps from "./components/Maps";
import "./styles/main.css";
import { FiChevronsDown, FiPause } from "react-icons/fi";

function App() {
  const query = new URLSearchParams(useLocation().search);
  const namaTamu = query.get("kpd") || "Tamu Undangan";

  const [isOpened, setIsOpened] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const [showHint, setShowHint] = useState(true); // popup petunjuk

  const acaraRef = useRef(null);
  const galeriRef = useRef(null);
  const ucapanRef = useRef(null);
  const hadiahRef = useRef(null);

  // deteksi mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // efek auto scroll
  useEffect(() => {
    if (!isOpened || !isAutoScroll) return;

    let animationFrameId;
    const speed = isMobile ? 1.5 : 4; // lebih lambat di mobile

    const scrollStep = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll) {
        setIsAutoScroll(false);
        cancelAnimationFrame(animationFrameId);
        return;
      }

      window.scrollBy(0, speed);
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    // delay 1 detik di mobile supaya Hero & Perkenalan selesai render
    const delay = isMobile ? 1000 : 0;
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scrollStep);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOpened, isAutoScroll, isMobile]);

  // toggle auto scroll manual
  const toggleAutoScroll = () => {
    setShowHint(false); // sembunyikan petunjuk
    setIsAutoScroll((prev) => !prev);
  };

  // navigasi Navbar
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const wasAuto = isAutoScroll;
    setIsAutoScroll(false);

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    if (wasAuto) {
      setTimeout(() => {
        setIsAutoScroll(true);
      }, 1200);
    }
  };

  if (!isOpened) {
    return (
      <WelcomeScreen namaTamu={namaTamu} onOpen={() => setIsOpened(true)} />
    );
  }

  return (
    <>
      <Navbar onNavigate={scrollToSection} />
      <div id="hero"><Hero namaTamu={namaTamu} /></div>
      <div id="perkenalan"><Perkenalan /></div>
      <div id="quotes"><Quotes /></div>
      <div id="acara" ref={acaraRef}><Acara /></div>
      <div id="galeri" ref={galeriRef}><Galeri /></div>
      <div id="hadiah" ref={hadiahRef}><Hadiah /></div>
      <div id="ucapan" ref={ucapanRef}><Ucapan /></div>
      <div id="maps"><Maps /></div>
      <Footer />
      <MusicPlayer />

      {/* Tombol Toggle Auto Scroll */}
      <div
        style={{
          position: "fixed",
          bottom: "140px",
          right: "10px",
          zIndex: 9999,
          textAlign: "center",
        }}
      >
        <button
          onClick={toggleAutoScroll}
          style={{
            background: isAutoScroll ? "#fff" : "#800000",
            border: "2px solid #800000",
            padding: "4px",
            borderRadius: "30%",
            cursor: "pointer",
            fontSize: "5px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          title={isAutoScroll ? "Matikan Auto Scroll" : "Mulai Auto Scroll"}
        >
          {isAutoScroll ? (
            <FiPause size={22} color="#800000" />
          ) : (
            <FiChevronsDown size={22} color="#fff" />
          )}
        </button>

        {/* Popup petunjuk */}
        {showHint && !isAutoScroll && (
          <div
            style={{
              marginTop: "6px",
              background: "#fff3e0",
              color: "#4b0000",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              maxWidth: "180px",
            }}
          >
            Klik tombol untuk aktifkan auto scroll
          </div>
        )}
      </div>
    </>
  );
}

export default App;
