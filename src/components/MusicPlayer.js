import React, { useEffect, useRef, useState } from "react";
import { BsMusicNoteBeamed, BsPauseFill } from "react-icons/bs";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div style={styles.wrapper}>
      <audio ref={audioRef} src="/music/Song-2.mp3" loop />
      <button onClick={togglePlay} style={styles.button}>
        {playing ? <BsPauseFill size={22} color="#800000" /> : <BsMusicNoteBeamed size={22} color="#800000" />}
      </button>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "fixed",
    bottom: "100px",
    right: "10px",
    zIndex: 9999,
  },
  button: {
    background: "#fff",
    border: "2px solid #800000",
    padding: "4px",
    borderRadius: "30%",
    cursor: "pointer",
    fontSize: "5px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  },
};

export default MusicPlayer;
