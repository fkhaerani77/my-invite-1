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
  const [showHint, setShowHint] = useState(true);

  const acaraRef = useRef(null);
  const galeriRef = useRef(null);
  const ucapanRef = useRef(null);
  const hadiahRef = useRef(null);

  // efek auto scroll dengan tunda sampai semua gambar selesai load
  useEffect(() => {
    if (!isOpened || !isAutoScroll) return;

    let animationFrameId;
    let started = false;

    const startScroll = () => {
      if (started) return;
      started = true;

      const scrollStep = () => {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        if (window.scrollY >= maxScroll) {
          setIsAutoScroll(false);
          cancelAnimationFrame(animationFrameId);
          return;
        }

        // buat langkah lebih halus di awal (biar tidak getar)
        const step =
          window.scrollY < window.innerHeight * 2
            ? 2 // halaman awal → lebih kecil
            : 4; // sisanya normal
        window.scrollBy(0, step);

        animationFrameId = requestAnimationFrame(scrollStep);
      };

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    // pastikan semua asset sudah selesai load
    if (document.readyState === "complete") {
      startScroll();
    } else {
      const handleLoad = () => startScroll();
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isOpened, isAutoScroll]);

  // handler toggle manual
  const toggleAutoScroll = () => {
    setIsAutoScroll((prev) => !prev);
    setShowHint(false);
  };

  // handler untuk navigasi Navbar
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
      <div id="hero">
        <Hero namaTamu={namaTamu} />
      </div>
      <div id="perkenalan">
        <Perkenalan />
      </div>
      <div id="quotes">
        <Quotes />
      </div>
      <div id="acara" ref={acaraRef}>
        <Acara />
      </div>
      <div id="galeri" ref={galeriRef}>
        <Galeri />
      </div>
      <div id="hadiah" ref={hadiahRef}>
        <Hadiah />
      </div>
      <div id="ucapan" ref={ucapanRef}>
        <Ucapan />
      </div>
      <div id="maps">
        <Maps />
      </div>
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
