import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Acara from "./components/Acara";
import Galeri from "./components/Galeri";
import Ucapan from "./components/Ucapan";
import Hadiah from "./components/Hadiah";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
// import ShareButton from "./components/ShareButton";
import Navbar from "./components/Navbar";
import WelcomeScreen from "./components/WelcomeScreen";
// import PerjalananCinta from "./components/PerjalananCinta";
import Perkenalan from "./components/Perkenalan";
import Quotes from "./components/Quotes";
import Maps from "./components/Maps";
import "./styles/main.css";
import { FiChevronsDown, FiPause } from "react-icons/fi";

function App() {
  const query = new URLSearchParams(useLocation().search);
  const namaTamu = query.get("kpd") || "Tamu Undangan";

  const [isOpened, setIsOpened] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const heroRef = useRef(null);
  const acaraRef = useRef(null);
  const galeriRef = useRef(null);
  const perjalananRef = useRef(null);
  const ucapanRef = useRef(null);
  const hadiahRef = useRef(null);
  const shareRef = useRef(null);

  useEffect(() => {
  if (!isOpened || !isAutoScroll) return;

  let scrollSpeed = 1.5; // px per frame (~30px/detik pada 60fps)
  let animationFrameId;

  const smoothScroll = () => {
    window.scrollBy(0, scrollSpeed);
    animationFrameId = requestAnimationFrame(smoothScroll);
  };

  animationFrameId = requestAnimationFrame(smoothScroll);

  const onUserScroll = (e) => {
    if (e.deltaY < 0) {
      setIsAutoScroll(false);
      cancelAnimationFrame(animationFrameId);
    }
  };

  const onUserClickLink = () => {
    setIsAutoScroll(false);
    cancelAnimationFrame(animationFrameId);
    setTimeout(() => {
      setIsAutoScroll(true);
    }, 3000);
  };

  window.addEventListener("wheel", onUserScroll);
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((a) => a.addEventListener("click", onUserClickLink));

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("wheel", onUserScroll);
    navLinks.forEach((a) =>
      a.removeEventListener("click", onUserClickLink)
    );
  };
}, [isOpened, isAutoScroll]);


  if (!isOpened) {
    return (
      <WelcomeScreen namaTamu={namaTamu} onOpen={() => setIsOpened(true)} />
    );
  }

  return (
    <>
      <Navbar />
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
      {/* <div id="perjalanan" ref={perjalananRef}>
        <PerjalananCinta />
      </div> */}
      <div id="hadiah" ref={hadiahRef}>
        <Hadiah />
      </div>
      <div id="ucapan" ref={ucapanRef}>
        <Ucapan />
      </div>
      {/* <div id="share" ref={shareRef}>
        <ShareButton namaTamu={namaTamu} />
      </div> */}
      <div id="maps">
        <Maps />
      </div>
      <Footer />
      <MusicPlayer />

      {/* ✅ Tombol Toggle Auto Scroll (Sudah Diperbaiki) */}
      <div
  style={{
    position: "fixed",
    bottom: "140px", // biar di atas tombol musik
    right: "10px",
    zIndex: 9999,
  }}
>
  <button
    onClick={() => setIsAutoScroll((prev) => !prev)}
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
    title={isAutoScroll ? "Matikan Auto Scroll" : "Nyalakan Auto Scroll"}
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
