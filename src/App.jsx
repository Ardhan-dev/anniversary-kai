import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA STORIES ASLI MAHESA ---
const stories = [
  {
    date: "14 Maret 2026",
    title: "The Start",
    description: "First time kita ketemuan buat jogging di kotbar. Masih inget banget pas pertama kali bonceng kamu trus hug wkwk ❤️",
    images: ["/images/jadian1.jpg", "/images/jadian2.jpg", "/images/jadian3.jpg", "/images/jadian4.jpg"]
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
    date: "12 April 2026",
    title: "FIRST TIME",
    description: "First time ke rumah aku and just the two of us doin.... and KITA JADIAN! (ak masih inget kita lagi di kasur tiduran pas ak ngajak jadian haha). LALU KITA FIRST TIME MASAK BARENG HAHA (masak ayam dadu + udang)",
    images: ["/images/rmh1.jpg", "/images/rmh2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
  {
    date: "5 Mei 2026",
    title: "PASCAL DATE",
    description: "Sayang aku pake dress hitam baruu trus pake pita pink di kepala nya (LUCU BGT FAK) trus ketemuan di st cikudapateuh dan kita ke wisuda temen kamu trus ke PASKAL!",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  }
];

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpenBook = () => {
    setIsOpened(true);
    setIsPlaying(true);
    if (audioRef.current) audioRef.current.play();
  };

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const styles = {
    container: { backgroundColor: '#121212', minHeight: '100vh', color: '#b8b09a', fontFamily: 'serif', overflowX: 'hidden' },
    
    // --- 3D BOOK ENGINE ---
    bookScene: {
      position: 'fixed', inset: 0, zIndex: 1000,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backgroundColor: '#0a0a0a',
      perspective: '1500px', // Memberikan efek 3D
      transition: 'opacity 1s ease 1.5s', // Fade out scene setelah buku buka
      pointerEvents: isOpened ? 'none' : 'auto',
      opacity: isOpened ? 0 : 1,
    },
    bookContainer: {
      width: 'min(90vw, 380px)',
      height: 'min(70vh, 550px)',
      position: 'relative',
      transformStyle: 'preserve-3d',
    },
    cover: {
      position: 'absolute', inset: 0,
      backgroundColor: '#2d241e',
      border: '10px solid #3d3129',
      borderRadius: '4px 15px 15px 4px',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 10,
      transformOrigin: 'left', // Engsel buku di kiri
      transition: 'transform 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isOpened ? 'rotateY(-140deg)' : 'rotateY(0deg)', // Efek mengayun ngebuka
      boxShadow: '15px 15px 40px rgba(0,0,0,0.8)',
    },
    pageInside: {
      position: 'absolute', inset: 0,
      backgroundColor: '#e6dfcc', // Warna kertas isi buku
      borderRadius: '4px 15px 15px 4px',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 5,
      color: '#4a4435', fontSize: '12px', fontStyle: 'italic'
    },

    // --- MAIN JOURNAL STYLES ---
    header: { height: '65vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' },
    title: { fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', fontStyle: 'italic', margin: 0, color: '#e0d8c3' },
    subtitle: { letterSpacing: '0.4em', fontSize: '10px', textTransform: 'uppercase', opacity: 0.5, marginTop: '10px', color: '#d4a373' },
    storySection: (idx) => ({
      width: '100%', padding: '120px 0',
      background: idx % 2 === 0 ? 'linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(18,18,18,0) 50%, rgba(20,20,20,0.9) 100%)' : 'transparent',
      borderTop: '1px solid rgba(184,176,154,0.05)',
    }),
    photoBox: (idx) => ({
      width: window.innerWidth < 768 ? '280px' : '330px', backgroundColor: '#e6dfcc', padding: '12px 12px 48px 12px',
      boxShadow: '15px 15px 40px rgba(0,0,0,0.8)', transform: idx % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2.5deg)',
    }),
    textBox: (idx) => ({ flex: 1, textAlign: window.innerWidth < 768 ? (idx % 2 === 0 ? 'left' : 'right') : (idx % 2 === 0 ? 'left' : 'right'), minWidth: '300px' })
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} src="/kita.mp3" loop />

      {/* --- 3D BOOK COVER SCENE --- */}
      <div style={styles.bookScene}>
        <div style={styles.bookContainer} onClick={handleOpenBook}>
          {/* Sampul yang bergerak ngebuka */}
          <div style={styles.cover}>
             <div style={{ border: '1px solid #d4a373', padding: '20px', textAlign: 'center' }}>
                <p style={{ letterSpacing: '0.3em', fontSize: '9px', color: '#d4a373' }}>ARCHIVE 2026</p>
                <h1 style={{ fontSize: '1.8rem', color: '#e0d8c3', fontStyle: 'italic' }}>Mahesa & Ika</h1>
                <p style={{ fontSize: '10px', color: '#b8b09a', marginTop: '10px' }}>[ Click to Open ]</p>
             </div>
          </div>
          {/* Isi buku yang diam di belakang sampul */}
          <div style={styles.pageInside}>
             <p>Turning the page...</p>
          </div>
        </div>
      </div>

      {/* --- JOURNAL CONTENT --- */}
      <motion.div 
        style={{ opacity: isOpened ? 1 : 0, transition: 'opacity 2s ease 1s' }}
      >
        <header style={styles.header}>
          <h1 style={styles.title}>Mahesa & Ika</h1>
          <p style={styles.subtitle}>Our 1 Month Journey Archive</p>
          <div style={{ marginTop: '50px' }}>
            <button 
              onClick={togglePlay}
              style={{
                backgroundColor: '#e6dfcc', border: 'none', color: '#121212',
                padding: '12px 40px', borderRadius: '2px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer'
              }}
            >
              {isPlaying ? 'PAUSE SONG ⏸' : 'PLAY SONG 🎵'}
            </button>
          </div>
        </header>

        <main>
          {stories.map((story, idx) => (
            <section key={idx} style={styles.storySection(idx)}>
              <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? (idx % 2 === 0 ? 'column' : 'column-reverse') : (idx % 2 === 0 ? 'row' : 'row-reverse'), alignItems: 'center', gap: '60px', justifyContent: 'center' }}>
                  
                  <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }} viewport={{ once: true }} style={styles.photoBox(idx)}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {story.images.slice(0, 4).map((img, i) => (
                        <div key={i} onClick={() => setSelectedImg(img)} style={{ height: '160px', overflow: 'hidden', backgroundColor: '#000', cursor: 'pointer' }}>
                          <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="memori" />
                        </div>
                      ))}
                    </div>
                    <p style={{ textAlign: 'center', fontSize: '11px', marginTop: '18px', color: '#4a4435', fontFamily: 'monospace' }}>{story.date}</p>
                  </motion.div>

                  <motion.div style={styles.textBox(idx)}>
                    <h2 style={{ fontSize: '2.4rem', color: '#e0d8c3' }}>{story.title}</h2>
                    <p style={{ fontStyle: 'italic', lineHeight: '1.8', opacity: 0.6, fontSize: '1.1rem' }}>"{story.description}"</p>
                  </motion.div>

                </div>
              </div>
            </section>
          ))}
        </main>

        <footer style={{ textAlign: 'center', opacity: 0.2, fontSize: '10px', padding: '100px 0' }}>
          MAHESA & IKA • 2026
        </footer>
      </motion.div>

      {/* MODAL IMAGE */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 2000, backgroundColor: 'rgba(0,0,0,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          >
            <img src={selectedImg} style={{ maxWidth: '95%', maxHeight: '95%', objectFit: 'contain', border: '12px solid #e6dfcc' }} alt="zoom" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;