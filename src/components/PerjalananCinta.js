// // components/PerjalananCinta.js
// import React, { useEffect, useRef } from "react";
// import "./PerjalananCinta.css";

// const perjalanan = [
//   {
//     tanggal: "Januari 2020",
//     judul: "Pertama Bertemu",
//     cerita: "Kami bertemu di kampus saat kegiatan organisasi, tidak menyangka akan sejauh ini 💫.",
//   },
//   {
//     tanggal: "Maret 2021",
//     judul: "Jadian",
//     cerita: "Setelah banyak cerita, akhirnya kami resmi jadi pasangan 💑.",
//   },
//   {
//     tanggal: "Mei 2023",
//     judul: "Lamaran",
//     cerita: "Momen lamaran penuh haru, disaksikan keluarga dan sahabat 💍.",
//   },
//   {
//     tanggal: "Oktober 2025",
//     judul: "Menuju Hari Bahagia",
//     cerita: "Kini kami siap melangkah bersama ke jenjang pernikahan 💒.",
//   },
// ];

// const PerjalananCinta = () => {
//   const itemRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           const elem = entry.target;
//           if (entry.isIntersecting) {
//             elem.classList.add("show");
//           } else {
//             elem.classList.remove("show");
//           }
//         });
//       },
//       {
//         threshold: 0.2,
//       }
//     );

//     itemRefs.current.forEach(el => {
//       if (el) observer.observe(el);
//     });

//     return () => {
//       itemRefs.current.forEach(el => {
//         if (el) observer.unobserve(el);
//       });
//     };
//   }, []);

//   return (
//     <section id="perjalanan" className="timeline-section">
//       <h2>💖 Perjalanan Cinta</h2>
//       <div className="timeline">
//         {perjalanan.map((item, index) => (
//           <div
//             className="timeline-item"
//             key={index}
//             ref={el => (itemRefs.current[index] = el)}
//           >
//             <div className="timeline-dot" />
//             <div className="timeline-content">
//               <span className="timeline-date">{item.tanggal}</span>
//               <h4>{item.judul}</h4>
//               <p>{item.cerita}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PerjalananCinta;
