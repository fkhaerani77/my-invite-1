import React, { useState, useEffect } from "react";

const Ucapan = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [ucapanList, setUcapanList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const scriptURL = "https://script.google.com/macros/s/AKfycbxB5xlTidNlGlW7yza-hf-J7pD0Yw8v34krAWwo2MGsN3Zpr1wD9VMGq4MKksyg4zqcvg/exec"; // Ganti dengan Web App URL kamu

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !pesan || !kehadiran) return;

    const payload = {
      nama,
      ucapan: pesan,
      kehadiran,
    };

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.result === "success") {
        setIsSuccess(true);
        setNama("");
        setPesan("");
        setKehadiran("");
        fetchUcapan(); // Refresh ucapan setelah submit
      }
    } catch (err) {
      console.error("Gagal mengirim:", err);
    }
  };

  const fetchUcapan = async () => {
    try {
      const res = await fetch(scriptURL);
      const data = await res.json();
      const reversed = data.reverse(); // Tampilkan yang terbaru di atas
      setUcapanList(reversed);
    } catch (err) {
      console.error("Gagal mengambil ucapan:", err);
    }
  };

  useEffect(() => {
    fetchUcapan();
  }, []);

  return (
    <section id="ucapan" style={styles.section}>
      <h2 style={styles.title}>Kirim Ucapan & Doa</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nama kamu"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Tulis ucapan dan doa terbaik..."
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          rows={4}
          style={styles.textarea}
        />
        <select
          value={kehadiran}
          onChange={(e) => setKehadiran(e.target.value)}
          style={styles.select}
        >
          <option value="" disabled>
            Konfirmasi Kehadiran
          </option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Maaf Belum Dapat Hadir</option>
        </select>

        <button type="submit" style={styles.button}>
          Kirim Ucapan
        </button>
        {isSuccess && (
          <p style={{ color: "#800000", marginTop: "10px" }}>
            Terima kasih atas ucapannya! 💌
          </p>
        )}
      </form>

      <div style={styles.listWrapper}>
        <h3 style={styles.subtitle}>💬 Ucapan Masuk</h3>
        {ucapanList.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888" }}>
            Belum ada ucapan yang masuk 🕊️
          </p>
        ) : (
          ucapanList.map((u, i) => (
            <div key={i} style={styles.ucapanBox}>
              <strong style={styles.nama}>{u.nama}</strong>{" "}
              <span style={styles.kehadiran}>({u.kehadiran})</span>
              <p style={styles.pesan}>"{u.ucapan}"</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: "#fdf6f6",
    padding: "50px 16px",
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
  },
  title: {
    fontSize: "30px",
    marginBottom: "30px",
    color: "#800000",
    fontFamily: "'Great Vibes', cursive",
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "20px",
    color: "#800000",
    fontWeight: "600",
  },
  form: {
    maxWidth: "450px",
    margin: "0 auto",
    background: "#fff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(128, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outlineColor: "#800000",
    fontFamily: "'Cormorant Garamond', serif",
  },
  textarea: {
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    resize: "none",
    fontSize: "15px",
    outlineColor: "#800000",
    fontFamily: "'Cormorant Garamond', serif",
  },
  select: {
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outlineColor: "#800000",
    fontFamily: "'Cormorant Garamond', serif",
  },
  button: {
    padding: "14px",
    backgroundColor: "#800000",
    border: "none",
    borderRadius: "12px",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
    fontFamily: "'Cormorant Garamond', serif",
  },
  listWrapper: {
    marginTop: "50px",
    maxWidth: "600px",
    marginInline: "auto",
  },
  ucapanBox: {
    background: "#fff",
    borderLeft: "6px solid #800000",
    padding: "16px 20px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    marginBottom: "16px",
    textAlign: "left",
  },
  nama: {
    color: "#800000",
    fontWeight: "bold",
    fontSize: "16px",
  },
  kehadiran: {
    color: "#555",
    marginLeft: "6px",
    fontStyle: "italic",
    fontSize: "14px",
  },
  pesan: {
    marginTop: "6px",
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.5",
  },
};

export default Ucapan;
