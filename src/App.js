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

  const acaraRef = useRef(null);
  const galeriRef = useRef(null);
  const ucapanRef = useRef(null);
  const hadiahRef = useRef(null);

  // efek auto scroll
  useEffect(() => {
  if (!isOpened || !isAutoScroll) return;

  let lastTimestamp = performance.now();

  const scrollStep = (timestamp) => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScroll) {
      setIsAutoScroll(false);
      return;
    }

    // jalankan tiap ~16ms (~60fps)
    const delta = timestamp - lastTimestamp;
    if (delta > 16) {
      let y = window.scrollY;
      let speed = 2; // scroll lebih kecil per frame → lebih halus
      window.scrollBy(0, speed);
      lastTimestamp = timestamp;
    }

    requestAnimationFrame(scrollStep);
  };

  requestAnimationFrame(scrollStep);
}, [isOpened, isAutoScroll]);


  // auto aktif begitu buka undangan
  useEffect(() => {
    if (isOpened) {
      setIsAutoScroll(true);
    }
  }, [isOpened]);

  // handler toggle manual
  const toggleAutoScroll = () => {
    setIsAutoScroll((prev) => !prev);
  };

  // handler untuk navigasi Navbar
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // stop auto scroll sementara
    const wasAuto = isAutoScroll;
    setIsAutoScroll(false);

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // hidupkan lagi auto scroll setelah delay
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
      </div>
    </>
  );
}

export default App;
