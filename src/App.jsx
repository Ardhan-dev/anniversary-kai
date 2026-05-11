import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stories = [
  {
    date: "14 Maret 2026",
    title: "The Start",
    description: "First time kita ketemuan buat jogging di kotbar. Masih inget banget pas pertama kali bonceng kamu trus hug wkwk ❤️",
    images: ["/images/jadian1.jpg", "/images/jadian2.jpg", "/images/jadian3.jpg"]
  },
  {
    date: "16 Maret 2026",
    title: "First Kiss!!!",
    description: "Inget ga kita di IKEA. Trus umm curi curi kiss and that's also first time we kissin (IN PUBLIC PLACES?!)",
    images: ["/images/jadian4.jpg", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"]
  },
    {
    date: "18 Maret 2026",
    title: "VIDEO CALL!!",
    description: "Kamu sama CC bukber trus kita vidcall, trus ketemuan di tagog dan pulang bareng ke rumah kamu",
    images: ["/images/jadian4.jpg", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"]
  },
    {
    date: "20 Maret 2026",
    title: "JUJUR GTW!!",
    description: "Kamu sama CC bukber trus kita vidcall, trus ketemuan di tagog dan pulang bareng ke rumah kamu",
    images: ["/images/jadian4.jpg", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"]
  },
    {
    date: "24 Maret 2026",
    title: "HOT DAWHG",
    description: "Kamu sama CC bukber trus kita vidcall, trus ketemuan di tagog dan pulang bareng ke rumah kamu",
    images: ["/images/jadian4.jpg", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"]
  },
    {
    date: "25 Maret 2026",
    title: "FIRST FLOWER!",
    description: "First time dalam hidup aku giving flowers, and u are the first girl ever! and hope it's the last (beside my mom and our future daughter)",
    images: ["/images/bunga1.jpg", "/images/jadian.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"]
  },
    {
    date: "26 Maret 2026",
    title: "NIGHT DATE WITH FLOWERS",
    description: "Kamu pulang dari rumah mbah trus mau ketemuan sama cc tapi cc gajadi dateng dan akhirnya ak nyusul sama nimo haha",
    images: ["/images/n2.jpg", "/images/n3.jpg", "/images/n4.jpg", "/images/n5.jpg"]
  },
    {
    date: "27 Maret 2026",
    title: "FREAKY!",
    description: "Tengah malem ak ke rmh kamu and we make out for the first time.... crazy",
    images: ["/images/f1.jpeg", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"]
  },
    {
    date: "29 Maret 2026",
    title: "PHOTOBOOTH",
    description: "Kita ke gacoan then Tiramisusu dan Lawson trus ke Pasar Kota Baru, and our first photobooth (kissin)",
    images: ["/images/pb1.jpeg", "/images/pb2.jpg", "/images/pb3.jpg", "/images/pb4.jpg"]
  },
    {
    date: "2 April 2026",
    title: "RAININ!",
    description: "kita have something to talk trus ke kotbar malem-malem, HUJAN HUJANAN PULANG NYA MANA KM YG NYETIR HAHA",
    images: ["/images/hujan1.webp", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"]
  },
    {
    date: "7 April 2026",
    title: "BASO!",
    description: "First time ke tempat bakso yang kata kamu enak, dan bener.... ENAK BGT MANA MURAH LAGI",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "9 April 2026",
    title: "DRAWIN!",
    description: "KAMU GAMBARIN KITA DI BUKU TRUS NGAJARIN MORSE CODE DLL HAHA",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "10 April 2026",
    title: "DADAK!",
    description: "Sebenarnya ini tengah malem banget aku tbtb dateng haha",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "12 April 2026",
    title: "FIRST TIME",
    description: "First time ke rumah aku and just the two of us doin....  and KITA JADIAN! (ak masih inget kita lagi di kasur tiduran pas ak ngajak jadian haha). LALU KITA FIRST TIME MASAK BARENG HAHA (masak ayam dadu + udang)",
    images: ["/images/rmh1.jpg", "/images/rmh2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "13 April 2026",
    title: "BASO LAGI!",
    description: "NTAH YG KEBERAPA KALI NYA BAKSO",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "14 April 2026",
    title: "IKA GOES TO CAMPUS",
    description: "FIRST TIME AK NGAJAK KAMU KE KAMPUS, trus kamu nunggu and temen-temen aku komen (kamu cantik haha) trus ke mixue then pulang",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "18 April 2026",
    title: "FAMILY LUNCH or BREAKFAST",
    description: "TBTB DIAJAK MAKAN SAMA KELUARGA KAMU (padahal cuman niat nganterin kamu bekel buat kerja haha)",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "21 April 2026",
    title: "MARAHAN KARENA MISSKOM",
    description: "KAMU PABJI AK VALO",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "26 April 2026",
    title: "LEWAT TENGAH MALEM",
    description: "Kita nonton The Lord of the Ring sampai ketiduran bahkan jam 1/2/3 baru pulang aku nya....",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "27 April 2026",
    title: "FIRST TIME GTA V",
    description: "First time ayankk aku main GTA V (nyemplungin mobil ke satu satu nya kolam di tengah kota)",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "28 April 2026",
    title: "ADA ADA AJA",
    description: "Kita pacaran di ruko mama km trus beli jus, dimsum, sambil nonton dan freaky (and ketahuan mama km maybe)",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "4 Mei 2026",
    title: "Second FLower",
    description: "Ak beli bunga mawar buat kamu, and U LOVED IT! (ak gaboleh pegang jir)",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "5 Mei 2026",
    title: "PASCAL DATE",
    description: "Sayang aku pake dress hitam baruu trus pake pita pink di kepala nya (LUCU BGT FAK) trus ketemuan di st cikudapateuh dan kita ke wisuda temen kamu trus ke PASKAL!. SERUU BANGETTT! (beres dr paskal ke rmh mbah ngangkat etalase)",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
    {
    date: "10 Mei 2026",
    title: "QUALITY TIME",
    description: "Second time ke rumah aku dan quality time sama ayankk! (masih kangen sampe skrg) sebelum nya 2 hari cuman ketemu 1 jaman doank ",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
];

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Style Objek (Biar gak rusak karena Tailwind)
  const styles = {
    container: { backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#e4e4e7', fontFamily: 'serif', paddingBottom: '100px', overflowX: 'hidden' },
    header: { height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
    title: { fontSize: '4rem', fontWeight: 'bold', fontStyle: 'italic', margin: 0, color: '#fff' },
    subtitle: { letterSpacing: '0.4em', fontSize: '10px', textTransform: 'uppercase', opacity: 0.5, marginTop: '10px', color: '#f472b6' },
    main: { maxWidth: '1000px', margin: '0 auto', padding: '0 20px' },
    storyRow: (idx) => ({
      display: 'flex',
      flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
      alignItems: 'center',
      gap: '60px',
      marginBottom: '120px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }),
    photoBox: (idx) => ({
      width: '320px', // UKURAN FOTO DIKUNCI DI SINI
      backgroundColor: '#1a1a1a',
      padding: '12px',
      borderRadius: '8px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      transform: idx % 2 === 0 ? 'rotate(1.5deg)' : 'rotate(-1.5deg)',
      border: '1px solid #27272a'
    }),
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' },
    photoItem: { height: '160px', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#222' },
    textBox: (idx) => ({ flex: 1, textAlign: idx % 2 === 0 ? 'left' : 'right', minWidth: '300px' }),
    date: { fontSize: '12px', fontWeight: 'bold', color: '#f472b6', letterSpacing: '3px', textTransform: 'uppercase' },
    storyTitle: { fontSize: '2.5rem', fontWeight: 'bold', margin: '15px 0', color: '#fff', fontFamily: 'serif' },
    description: { fontStyle: 'italic', lineHeight: '1.8', opacity: 0.6, fontSize: '1.1rem' }
  };

  return (
    <div style={styles.container}>
      
      <header style={styles.header}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <h1 style={styles.title}>Mahesa & Ika</h1>
          <p style={styles.subtitle}>Our First Month Archive</p>
          {/* PLAYER SPOTIFY - Sudah disesuaikan biar pas */}
    <div style={{ marginTop: '30px', width: '320px', borderRadius: '12px', overflow: 'hidden' }}>
      <iframe
        style={{ borderRadius: '12px' }} 
        src="https://open.spotify.com/embed/track/6e1FbhEE8vsjY0xySPWWEk?utm_source=generator"
        width="100%"
        height="152" // Aku ganti 152 biar gak terlalu makan tempat
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#333', margin: '30px auto' }}></div>
        </motion.div>
      </header>

      <main style={styles.main}>
        {stories.map((story, idx) => (
          <div key={idx} style={styles.storyRow(idx)}>
            
            {/* Gallery Box */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} viewport={{ once: true }}
              style={styles.photoBox(idx)}
            >
              <div style={styles.grid}>
                {story.images.map((img, i) => (
                  <div key={i} onClick={() => setSelectedImg(img)} style={styles.photoItem}>
                    <img 
                      src={img} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
                      onMouseOver={e => e.currentTarget.style.opacity = 1}
                      onMouseOut={e => e.currentTarget.style.opacity = 0.8}
                      alt="memori" 
                    />
                  </div>
                ))}
              </div>
              <p style={{ textAlign: 'center', fontSize: '9px', marginTop: '10px', opacity: 0.3, letterSpacing: '2px' }}>MEMORIES #{idx + 1}</p>
            </motion.div>

            {/* Content Box */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }} viewport={{ once: true }}
              style={styles.textBox(idx)}
            >
              <span style={styles.date}>{story.date}</span>
              <h2 style={styles.storyTitle}>{story.title}</h2>
              <p style={styles.description}>"{story.description}"</p>
            </motion.div>

          </div>
        ))}
      </main>

      {/* Modal View */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backdropFilter: 'blur(5px)' }}
          >
            <img src={selectedImg} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '4px' }} />
            <button style={{ position: 'absolute', top: '30px', right: '30px', color: 'white', border: 'none', background: 'none', fontSize: '30px', cursor: 'pointer', opacity: 0.5 }}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ textAlign: 'center', opacity: 0.2, fontSize: '10px', letterSpacing: '5px', marginTop: '50px' }}>
        LOVE JOURNAL • 2026
      </footer>

    </div>
  );
}

export default App;