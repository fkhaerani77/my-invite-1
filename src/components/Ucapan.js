import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import './Ucapan.css';



const supabaseUrl = "https://bnnnqeecjyptbhixbvlp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubm5xZWVjanlwdGJoaXhidmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MDY4MjMsImV4cCI6MjA2OTk4MjgyM30.liuS-PsU7oTJIgrx0DIrvMuEc3B-TZ4BfBMbQL6ot-I";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Ucapan = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [ucapanList, setUcapanList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchUcapan = async () => {
    const { data, error } = await supabase
      .from("ucapan")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setUcapanList(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !pesan || !kehadiran) return;

    const { error } = await supabase.from("ucapan").insert([
      {
        nama,
        ucapan: pesan,
        kehadiran,
      },
    ]);

    if (!error) {
      setIsSuccess(true);
      setNama("");
      setPesan("");
      setKehadiran("");
      fetchUcapan();
    } else {
      console.error("Gagal kirim:", error.message);
    }
  };

  useEffect(() => {
    fetchUcapan();
  }, []);

  return (
  <section className="ucapan-wrapper">
    <h2 className="ucapan-title">Kirim Ucapan & Doa</h2>

    <form className="ucapan-form" onSubmit={handleSubmit}>
      <input
        className="ucapan-input"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Nama kamu"
      />
      <textarea
        className="ucapan-textarea"
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
        placeholder="Tulis ucapan dan doa terbaik..."
      />
      <select
        className="ucapan-select"
        value={kehadiran}
        onChange={(e) => setKehadiran(e.target.value)}
      >
        <option value="">Konfirmasi Kehadiran</option>
        <option value="Hadir">Hadir</option>
        <option value="Tidak Hadir">Maaf Belum Bisa Hadir</option>
      </select>
      <button className="ucapan-button" type="submit">Kirim Ucapan</button>
      {isSuccess && <p className="ucapan-success">Terima kasih atas ucapannya!</p>}
    </form>

    <h3 className="ucapan-subtitle">Ucapan Masuk</h3>
    <ul className="ucapan-list">
      {ucapanList.length === 0 && (
        <p className="ucapan-empty">Belum ada ucapan yang masuk 🕊️</p>
      )}
      {ucapanList.map((u) => (
        <li key={u.id} className="ucapan-item">
          <strong>{u.nama}</strong> ({u.kehadiran}): {u.ucapan}
        </li>
      ))}
    </ul>
  </section>
);

};

export default Ucapan;
