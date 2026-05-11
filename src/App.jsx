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
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const styles = {
    container: { backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#e4e4e7', fontFamily: 'serif', overflowX: 'hidden' },
    header: { height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 2 },
    title: { fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', fontStyle: 'italic', margin: 0, color: '#fff' },
    subtitle: { letterSpacing: '0.4em', fontSize: '10px', textTransform: 'uppercase', opacity: 0.5, marginTop: '10px', color: '#f472b6' },
    
    // Gradient Background Wrapper per Chapter
    storySection: (idx) => ({
      width: '100%',
      padding: '100px 0',
      // Memberikan gradasi halus yang bergantian arahnya mengikuti zigzag
      background: idx % 2 === 0 
        ? 'linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(24,24,27,0.5) 100%)' 
        : 'linear-gradient(270deg, rgba(10,10,10,1) 0%, rgba(24,24,27,0.5) 100%)',
      borderTop: '1px solid rgba(255,255,255,0.03)',
      borderBottom: '1px solid rgba(255,255,255,0.03)',
    }),
    
    main: { maxWidth: '1000px', margin: '0 auto', padding: '0 20px' },
    storyRow: (idx) => ({
      display: 'flex',
      flexDirection: window.innerWidth < 768 
        ? (idx % 2 === 0 ? 'column' : 'column-reverse') 
        : (idx % 2 === 0 ? 'row' : 'row-reverse'),
      alignItems: 'center',
      gap: '50px',
      justifyContent: 'center'
    }),
    photoBox: (idx) => ({
      width: window.innerWidth < 768 ? '280px' : '320px',
      backgroundColor: '#1a1a1a',
      padding: '12px',
      borderRadius: '8px',
      boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
      transform: idx % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)',
      border: '1px solid rgba(255,255,255,0.05)'
    }),
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' },
    photoItem: { height: '160px', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#222' },
    textBox: (idx) => ({ 
      flex: 1, 
      textAlign: window.innerWidth < 768 ? (idx % 2 === 0 ? 'left' : 'right') : (idx % 2 === 0 ? 'left' : 'right'), 
      minWidth: '300px' 
    }),
    date: { fontSize: '11px', fontWeight: 'bold', color: '#f472b6', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px', display: 'block' },
    storyTitle: { fontSize: '2.5rem', fontWeight: 'bold', margin: '10px 0', color: '#fff' },
    description: { fontStyle: 'italic', lineHeight: '1.8', opacity: 0.6, fontSize: '1.1rem' }
  };

  return (
    <div style={styles.container}>
      
      <header style={styles.header}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <h1 style={styles.title}>Mahesa & Ika</h1>
          <p style={styles.subtitle}>Our First Month Archive</p>

          <div style={{ marginTop: '40px' }}>
            <audio ref={audioRef} src="/kita.mp3" loop />
            <button 
              onClick={togglePlay}
              style={{
                backgroundColor: isPlaying ? '#f472b6' : 'transparent',
                border: '1px solid #f472b6',
                color: isPlaying ? '#fff' : '#f472b6',
                padding: '12px 35px',
                borderRadius: '30px',
                fontSize: '11px',
                fontWeight: 'bold',
                letterSpacing: '2px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              {isPlaying ? 'PAUSE MUSIC ⏸' : 'PLAY OUR SONG 🎵'}
            </button>
          </div>
        </motion.div>
      </header>

      <main>
        {stories.map((story, idx) => (
          <section key={idx} style={styles.storySection(idx)}>
            <div style={styles.main}>
              <div style={styles.storyRow(idx)}>
                
                {/* Photo Side */}
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }} 
                  initial={{ opacity: 0, y: 50 }} 
                  viewport={{ once: true }}
                  style={styles.photoBox(idx)}
                >
                  <div style={styles.grid}>
                    {story.images.slice(0, 4).map((img, i) => (
                      <div key={i} onClick={() => setSelectedImg(img)} style={styles.photoItem}>
                        <img 
                          src={img} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} 
                          onMouseOver={e => e.currentTarget.style.opacity = 1}
                          onMouseOut={e => e.currentTarget.style.opacity = 0.7}
                          alt="memori" 
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }} 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }} 
                  viewport={{ once: true }}
                  style={styles.textBox(idx)}
                >
                  <span style={styles.date}>{story.date}</span>
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
              position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.98)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              padding: '20px', backdropFilter: 'blur(10px)' 
            }}
          >
            <img src={selectedImg} style={{ maxWidth: '95%', maxHeight: '95%', objectFit: 'contain', borderRadius: '4px' }} alt="zoom" />
            <button style={{ position: 'absolute', top: '30px', right: '30px', color: 'white', border: 'none', background: 'none', fontSize: '30px', cursor: 'pointer', opacity: 0.5 }}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ textAlign: 'center', opacity: 0.2, fontSize: '9px', letterSpacing: '5px', padding: '100px 0' }}>
        MAHESA & IKA • 2026
      </footer>

    </div>
  );
}

export default App;