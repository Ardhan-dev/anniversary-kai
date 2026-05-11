import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    description: "First time dalam hidup aku giving flowers, and u are the first girl ever!",
    images: ["/images/bunga1.jpg", "/images/jadian.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"]
  },
  {
    date: "12 April 2026",
    title: "FIRST TIME",
    description: "First time ke rumah aku and just the two of us doin.... and KITA JADIAN! LALU KITA FIRST TIME MASAK BARENG HAHA",
    images: ["/images/rmh1.jpg", "/images/rmh2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  },
  {
    date: "5 Mei 2026",
    title: "PASCAL DATE",
    description: "Sayang aku pake dress hitam baruu trus pake pita pink di kepala nya (LUCU BGT FAK) trus ke PASKAL!",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"]
  }
];

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) { audioRef.current.pause(); } 
    else { audioRef.current.play(); }
    setIsPlaying(!isPlaying);
  };

  const styles = {
    container: { 
      backgroundColor: '#e8e2d2', 
      minHeight: '100vh', 
      color: '#4a4435', 
      fontFamily: 'serif', 
      overflowX: 'hidden' 
    },
    header: { 
      height: '60vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center', 
      padding: '0 20px' 
    },
    storySection: (idx) => ({
      width: '100%',
      padding: '120px 0',
      // Gradasi lebih kontras untuk memisahkan chapter
      background: idx % 2 === 0 
        ? 'linear-gradient(180deg, rgba(215,204,180,0) 0%, rgba(215,204,180,0.8) 50%, rgba(215,204,180,0) 100%)' 
        : 'transparent',
      borderTop: '1px solid rgba(74,68,53,0.1)',
    }),
    main: { maxWidth: '1000px', margin: '0 auto', padding: '0 20px' },
    storyRow: (idx) => ({
      display: 'flex',
      // Mobile tetap zig-zag via tumpukan vertikal yang bergantian
      flexDirection: window.innerWidth < 768 
        ? (idx % 2 === 0 ? 'column' : 'column-reverse') 
        : (idx % 2 === 0 ? 'row' : 'row-reverse'),
      alignItems: 'center',
      gap: '60px',
      justifyContent: 'center'
    }),
    photoBox: (idx) => ({
      width: window.innerWidth < 768 ? '290px' : '340px',
      backgroundColor: '#f9f7f2', // Putih kertas foto lama
      padding: '12px 12px 40px 12px', // Khas Polaroid (bawah lebar)
      boxShadow: '10px 10px 25px rgba(0,0,0,0.15)',
      transform: idx % 2 === 0 ? 'rotate(-2deg)' : 'rotate(3deg)',
      border: '1px solid rgba(0,0,0,0.05)',
    }),
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
    photoItem: { 
      height: '140px', 
      overflow: 'hidden', 
      backgroundColor: '#ddd',
      boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' 
    },
    textBox: (idx) => ({ 
      flex: 1, 
      // Zig-zag teks di mobile (kiri/kanan)
      textAlign: window.innerWidth < 768 
        ? (idx % 2 === 0 ? 'left' : 'right') 
        : (idx % 2 === 0 ? 'left' : 'right'),
      padding: '20px'
    }),
    storyTitle: { fontSize: '2.8rem', fontWeight: 'bold', color: '#3a3528', marginBottom: '15px' },
    description: { fontStyle: 'italic', lineHeight: '1.8', opacity: 0.8, fontSize: '1.15rem' }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontStyle: 'italic', margin: 0 }}>Mahesa & Ika</h1>
          <p style={{ letterSpacing: '0.5em', fontSize: '12px', textTransform: 'uppercase', opacity: 0.6 }}>The Memory Journal</p>
          
          <div style={{ marginTop: '40px' }}>
            <audio ref={audioRef} src="/kita.mp3" loop />
            <button onClick={togglePlay} style={{
              backgroundColor: '#4a4435', color: '#e8e2d2', border: 'none',
              padding: '12px 40px', borderRadius: '4px', fontSize: '11px',
              fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer',
              textTransform: 'uppercase', boxShadow: '5px 5px 15px rgba(0,0,0,0.2)'
            }}>
              {isPlaying ? 'PAUSE JOURNAL ⏸' : 'OPEN JOURNAL 🎵'}
            </button>
          </div>
        </motion.div>
      </header>

      <main>
        {stories.map((story, idx) => (
          <section key={idx} style={styles.storySection(idx)}>
            <div style={styles.main}>
              <div style={styles.storyRow(idx)}>
                
                {/* Polaroid Frame Side */}
                <motion.div 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  viewport={{ once: true }} 
                  style={styles.photoBox(idx)}
                >
                  <div style={styles.grid}>
                    {story.images.slice(0, 4).map((img, i) => (
                      <div key={i} onClick={() => setSelectedImg(img)} style={styles.photoItem}>
                        <img 
                          src={img} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.2)' }} 
                          alt="memori" 
                        />
                      </div>
                    ))}
                  </div>
                  <p style={{ 
                    textAlign: 'center', 
                    fontSize: '11px', 
                    marginTop: '15px', 
                    fontFamily: 'monospace', 
                    opacity: 0.5,
                    letterSpacing: '1px'
                  }}>
                    Recorded on: {story.date}
                  </p>
                </motion.div>

                {/* Narrative Side */}
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }} 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }} 
                  viewport={{ once: true }} 
                  style={styles.textBox(idx)}
                >
                  <h2 style={styles.storyTitle}>{story.title}</h2>
                  <p style={styles.description}>"{story.description}"</p>
                </motion.div>

              </div>
            </div>
          </section>
        ))}
      </main>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            onClick={() => setSelectedImg(null)} 
            style={{ 
              position: 'fixed', inset: 0, zIndex: 100, 
              backgroundColor: 'rgba(58,53,40,0.98)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              padding: '20px', backdropFilter: 'blur(5px)' 
            }}
          >
            <img 
              src={selectedImg} 
              style={{ 
                maxWidth: '90%', maxHeight: '90%', 
                objectFit: 'contain', 
                border: '12px solid #fff', 
                boxShadow: '0 0 50px rgba(0,0,0,0.5)' 
              }} 
              alt="zoom" 
            />
            <button style={{ 
              position: 'absolute', top: '30px', right: '30px', 
              color: 'white', border: 'none', background: 'none', 
              fontSize: '30px', cursor: 'pointer' 
            }}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ 
        textAlign: 'center', opacity: 0.4, fontSize: '10px', 
        letterSpacing: '5px', padding: '120px 0', textTransform: 'uppercase' 
      }}>
        Mahesa & Ika • The First Month Archive • 2026
      </footer>
    </div>
  );
}

export default App;