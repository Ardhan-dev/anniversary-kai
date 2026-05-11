import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const stories = [
  {
    date: "14 Maret 2026",
    day: "01",
    title: "The Start",
    description: "First time kita ketemuan buat jogging di kotbar. Masih inget banget pas pertama kali bonceng kamu trus hug wkwk ❤️",
    images: ["/images/jadian1.jpg", "/images/jadian2.jpg", "/images/jadian3.jpg", "/images/jadian4.jpg"],
    accent: "#e8a598",
    emoji: "🌅"
  },
  {
    date: "16 Maret 2026",
    day: "02",
    title: "First Kiss!!!",
    description: "Inget ga kita di IKEA. Trus umm curi curi kiss and that's also first time we kissin (IN PUBLIC PLACES?!)",
    images: ["/images/jadian4.jpg", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"],
    accent: "#d4a373",
    emoji: "💋"
  },
  {
    date: "18 Maret 2026",
    day: "03",
    title: "VIDEO CALL!!",
    description: "Kamu sama CC bukber trus kita vidcall, trus ketemuan di tagog dan pulang bareng ke rumah kamu",
    images: ["/images/jadian4.jpg", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"],
    accent: "#b5c4b1",
    emoji: "📱"
  },
  {
    date: "25 Maret 2026",
    day: "04",
    title: "FIRST FLOWER!",
    description: "First time dalam hidup aku giving flowers, and u are the first girl ever! and hope it's the last (beside my mom and our future daughter)",
    images: ["/images/bunga1.jpg", "/images/jadian.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"],
    accent: "#f2b5d4",
    emoji: "🌹"
  },
  {
    date: "26 Maret 2026",
    day: "05",
    title: "NIGHT DATE",
    description: "Kamu pulang dari rumah mbah trus mau ketemuan sama cc tapi cc gajadi dateng dan akhirnya ak nyusul sama nimo haha",
    images: ["/images/n2.jpg", "/images/n3.jpg", "/images/n4.jpg", "/images/n5.jpg"],
    accent: "#8b9dc3",
    emoji: "🌙"
  },
  {
    date: "27 Maret 2026",
    day: "06",
    title: "FREAKY!",
    description: "Tengah malem ak ke rmh kamu and we make out for the first time.... crazy",
    images: ["/images/f1.jpeg", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"],
    accent: "#c9a0a0",
    emoji: "🔥"
  },
  {
    date: "29 Maret 2026",
    day: "07",
    title: "PHOTOBOOTH",
    description: "Kita ke gacoan then Tiramisusu dan Lawson trus ke Pasar Kota Baru, and our first photobooth (kissin)",
    images: ["/images/pb1.jpeg", "/images/pb2.jpg", "/images/pb3.jpg", "/images/pb4.jpg"],
    accent: "#d4b896",
    emoji: "📸"
  },
  {
    date: "2 April 2026",
    day: "08",
    title: "HUJAN-HUJANAN",
    description: "Kita have something to talk trus ke kotbar malem-malem, HUJAN HUJANAN PULANG NYA MANA KM YG NYETIR HAHA",
    images: ["/images/hujan1.webp", "/images/jadian5.jpg", "/images/foto (7).jpg", "/images/foto (8).jpg"],
    accent: "#9bb5c9",
    emoji: "🌧️"
  },
  {
    date: "7 April 2026",
    day: "09",
    title: "BASO!",
    description: "First time ke tempat bakso yang kata kamu enak, dan bener.... ENAK BGT MANA MURAH LAGI",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"],
    accent: "#c4956a",
    emoji: "🍜"
  },
  {
    date: "12 April 2026",
    day: "10",
    title: "JADIAN!!!",
    description: "First time ke rumah aku dan kita berdua aja... trus KITA JADIAN! (ak masih inget kita lagi di kasur tiduran pas ak ngajak jadian haha). Abis itu masak bareng — ayam dadu + udang, kacau tapi enak.",
    images: ["/images/rmh1.jpg", "/images/rmh2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"],
    accent: "#e8c4a0",
    emoji: "🏠"
  },
  {
    date: "5 Mei 2026",
    day: "11",
    title: "PASCAL DATE",
    description: "Sayang pake dress hitam baru trus pake pita pink di kepala nya (LUCU BGT FAK) — ketemuan di st cikudapateuh, ke wisuda temen, trus jalan ke PASKAL!",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"],
    accent: "#f0c4d4",
    emoji: "🎀"
  }
];

// Floating doodle particles — more scrapbook-y
function Particles() {
  const dots = [...Array(14)].map((_, i) => ({
    left: `${(i * 7.1) % 100}%`,
    color: ['#e8a598','#f2b5d4','#b5c4b1','#d4a373','#9bb5c9'][i % 5],
    size: i % 4 === 0 ? 4 : 2,
    dur: 10 + (i * 1.4) % 8,
    delay: (i * 0.8) % 7,
  }));
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {dots.map((d, i) => (
        <motion.div key={i}
          style={{ position: 'absolute', width: d.size, height: d.size, borderRadius: '50%', backgroundColor: d.color, left: d.left, opacity: 0.3 }}
          animate={{ y: ['-5vh', '105vh'], x: [0, Math.sin(i * 0.9) * 40], opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: d.dur, repeat: Infinity, delay: d.delay, ease: 'linear' }}
        />
      ))}
    </div>
  );
}

// Book cover — lebih casual, less undangan
function BookCover({ isOpened, onOpen }) {
  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          exit={{ opacity: 0, scale: 0.92, filter: 'blur(16px)' }}
          transition={{ duration: 0.9 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            background: '#f5f0e8',
          }}
        >
          {/* Lined paper bg */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #e8e0d0 27px, #e8e0d0 28px)',
            opacity: 0.5,
          }} />

          <motion.div
            onClick={onOpen}
            whileHover={{ scale: 1.015, rotate: 0.5 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: 'min(82vw, 320px)',
              background: '#fff9f0',
              borderRadius: '3px',
              boxShadow: '6px 8px 30px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)',
              cursor: 'pointer',
              padding: '40px 32px 48px',
              position: 'relative',
              transform: 'rotate(-1.5deg)',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            {/* Sticker tape top */}
            <div style={{
              position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(-1deg)',
              width: '70px', height: '20px', background: 'rgba(212,163,115,0.4)',
              borderRadius: '1px',
            }} />

            {/* Red margin line */}
            <div style={{
              position: 'absolute', left: '40px', top: 0, bottom: 0, width: '1px',
              background: 'rgba(220,120,120,0.3)',
            }} />

            <div style={{ paddingLeft: '12px', position: 'relative' }}>
              {/* Handwritten-ish label */}
              <p style={{
                fontFamily: '"Caveat", cursive, Georgia',
                fontSize: '11px', color: '#b8a090', letterSpacing: '0.1em',
                margin: '0 0 12px', opacity: 0.7,
              }}>
                my journal —
              </p>

              <h1 style={{
                fontFamily: '"Caveat", cursive, Georgia',
                fontSize: '2.8rem',
                color: '#3a2e26',
                margin: '0 0 6px',
                fontWeight: 700,
                lineHeight: 1.15,
              }}>
                Mahesa<br/>& Ika
              </h1>

              <div style={{
                width: '50px', height: '2px',
                background: '#e8a598',
                margin: '14px 0',
              }} />

              <p style={{
                fontFamily: '"Caveat", cursive',
                fontSize: '1rem',
                color: '#8a7060',
                lineHeight: 1.5,
              }}>
                cerita kita dari<br/>bulan pertama 🌸
              </p>

              {/* Doodle stars */}
              <span style={{ position: 'absolute', top: 0, right: 0, fontSize: '22px', opacity: 0.25 }}>✦</span>
              <span style={{ position: 'absolute', bottom: '-10px', right: '20px', fontSize: '16px', opacity: 0.2 }}>★</span>
            </div>

            <motion.div
              style={{
                marginTop: '36px', paddingLeft: '12px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span style={{ fontFamily: '"Caveat", cursive', fontSize: '0.9rem', color: '#c4956a' }}>buka →</span>
            </motion.div>

            {/* Corner fold */}
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 0, height: 0,
              borderStyle: 'solid',
              borderWidth: '0 0 24px 24px',
              borderColor: 'transparent transparent #e8e0d4 transparent',
            }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Photo grid — polaroid style
function PhotoGrid({ images, accent }) {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', position: 'relative' }}>
        {/* Polaroid backing */}
        <div style={{
          position: 'absolute', inset: '-10px -10px -30px',
          background: '#fff',
          boxShadow: '4px 8px 24px rgba(0,0,0,0.15)',
          zIndex: 0,
          transform: 'rotate(-1.5deg)',
        }} />
        {images.slice(0, 4).map((img, i) => (
          <motion.div key={i}
            style={{ position: 'relative', zIndex: 1, overflow: 'hidden', cursor: 'zoom-in', height: '150px' }}
            whileHover={{ scale: 1.04, zIndex: 2 }}
            onClick={() => setSelected(img)}
          >
            <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: `${accent}15`, mixBlendMode: 'multiply' }} />
          </motion.div>
        ))}
        {/* Tape */}
        <div style={{
          position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)',
          width: '55px', height: '16px', background: 'rgba(200,180,140,0.35)',
          zIndex: 5,
        }} />
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9000,
              background: 'rgba(0,0,0,0.88)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px', cursor: 'zoom-out',
            }}
          >
            <motion.div
              initial={{ scale: 0.88 }} animate={{ scale: 1 }} exit={{ scale: 0.88 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#fff', padding: '12px 12px 44px', transform: 'rotate(-1deg)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
            >
              <img src={selected} style={{ maxWidth: '80vw', maxHeight: '70vh', objectFit: 'contain', display: 'block' }} alt="" />
              <button onClick={() => setSelected(null)} style={{
                position: 'absolute', top: '-12px', right: '-12px',
                width: '28px', height: '28px', borderRadius: '50%',
                background: '#3a2e26', border: 'none',
                color: '#fff', cursor: 'pointer', fontSize: '14px',
              }}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Story card — journal entry style
function StoryCard({ story, idx }) {
  const isEven = idx % 2 === 0;
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      style={{
        padding: '56px 20px 56px',
        position: 'relative',
        borderBottom: '1px dashed rgba(0,0,0,0.08)',
      }}
    >
      {/* Big faint number */}
      <div style={{
        position: 'absolute', top: '12px',
        [isEven ? 'left' : 'right']: '16px',
        fontFamily: '"Caveat", cursive',
        fontSize: 'clamp(70px, 14vw, 120px)',
        color: 'rgba(0,0,0,0.04)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {story.day}
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flexDirection: isEven ? 'row' : 'row-reverse' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: `${story.accent}25`,
            border: `1.5px solid ${story.accent}60`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '17px', flexShrink: 0,
          }}>
            {story.emoji}
          </div>
          <div>
            <p style={{
              fontFamily: '"Caveat", cursive',
              fontSize: '13px', color: story.accent,
              margin: '0 0 2px', opacity: 0.85,
            }}>
              {story.date}
            </p>
            <h2 style={{
              fontFamily: '"Caveat", cursive',
              fontSize: 'clamp(1.7rem, 4.5vw, 2.4rem)',
              color: '#2e2218',
              margin: 0, fontWeight: 700,
              lineHeight: 1.1,
            }}>
              {story.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
          alignItems: 'start',
        }}>
          <div style={{ order: isEven ? 1 : 2 }}>
            <PhotoGrid images={story.images} accent={story.accent} />
          </div>

          <div style={{ order: isEven ? 2 : 1, paddingTop: '8px' }}>
            {/* Ruled lines bg for text area */}
            <div style={{
              background: '#fffef9',
              border: `1px solid ${story.accent}30`,
              borderLeft: `3px solid ${story.accent}60`,
              padding: '16px 18px',
              borderRadius: '2px',
              position: 'relative',
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 25px, rgba(0,0,0,0.04) 25px, rgba(0,0,0,0.04) 26px)',
            }}>
              <p style={{
                fontFamily: '"Caveat", cursive',
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: '#4a3828',
                lineHeight: '1.8',
                margin: 0,
              }}>
                {story.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Video section di bawah — untuk vlog
function VideoSection() {
  const fileRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('video/')) return;
    const url = URL.createObjectURL(file);
    setVideoSrc(url);
  };

  return (
    <section style={{
      padding: '80px 20px 60px',
      borderTop: '1px dashed rgba(0,0,0,0.1)',
      maxWidth: '760px',
      margin: '0 auto',
    }}>
      {/* Label handwritten */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{
          fontFamily: '"Caveat", cursive',
          fontSize: '13px', color: '#b8a090',
          letterSpacing: '0.1em', margin: '0 0 8px',
        }}>
          bonus —
        </p>
        <h2 style={{
          fontFamily: '"Caveat", cursive',
          fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
          color: '#2e2218',
          margin: 0, fontWeight: 700,
        }}>
          🎬 vlog kita
        </h2>
        <div style={{ width: '40px', height: '2.5px', background: '#e8a598', margin: '12px auto 0', borderRadius: '2px' }} />
      </div>

      {!videoSrc ? (
        // Drop zone
        <motion.div
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onClick={() => fileRef.current?.click()}
          animate={{ borderColor: dragging ? '#e8a598' : 'rgba(0,0,0,0.12)' }}
          style={{
            border: `2px dashed ${dragging ? '#e8a598' : 'rgba(0,0,0,0.15)'}`,
            borderRadius: '8px',
            background: dragging ? '#fff8f5' : '#fffef9',
            padding: '60px 32px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            position: 'relative',
          }}
        >
          <input
            ref={fileRef}
            type="file"
            accept="video/*"
            style={{ display: 'none' }}
            onChange={e => handleFile(e.target.files[0])}
          />
          <span style={{ fontSize: '36px', display: 'block', marginBottom: '14px' }}>🎥</span>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: '1.2rem', color: '#6a5848',
            margin: '0 0 8px',
          }}>
            drop video vlog kamu di sini
          </p>
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: '0.95rem', color: '#b8a090', margin: 0 }}>
            atau klik buat pilih dari device
          </p>

          {/* Corner tape decorations */}
          <div style={{
            position: 'absolute', top: '-8px', left: '30px',
            width: '45px', height: '14px',
            background: 'rgba(212,163,115,0.35)', transform: 'rotate(-2deg)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-8px', right: '30px',
            width: '45px', height: '14px',
            background: 'rgba(232,165,152,0.35)', transform: 'rotate(1.5deg)',
          }} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative' }}
        >
          {/* Polaroid-style video frame */}
          <div style={{
            background: '#fff',
            padding: '14px 14px 56px',
            boxShadow: '6px 10px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)',
            transform: 'rotate(-0.8deg)',
            position: 'relative',
          }}>
            {/* Tape top */}
            <div style={{
              position: 'absolute', top: '-10px', left: '50%',
              transform: 'translateX(-50%) rotate(-1.5deg)',
              width: '70px', height: '18px',
              background: 'rgba(200,180,140,0.4)',
            }} />

            <video
              src={videoSrc}
              controls
              style={{
                width: '100%',
                display: 'block',
                borderRadius: '2px',
              }}
            />

            {/* Caption area */}
            <div style={{
              position: 'absolute', bottom: '10px', left: 0, right: 0,
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: '"Caveat", cursive',
                fontSize: '1rem', color: '#8a7060',
              }}>
                📍 Bandung, 2026
              </p>
            </div>

            {/* Corner fold */}
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 0, height: 0,
              borderStyle: 'solid',
              borderWidth: '0 0 22px 22px',
              borderColor: 'transparent transparent #f0ece4 transparent',
            }} />
          </div>

          <button
            onClick={() => setVideoSrc(null)}
            style={{
              marginTop: '20px',
              background: 'transparent',
              border: '1.5px dashed rgba(0,0,0,0.2)',
              borderRadius: '4px',
              padding: '8px 20px',
              fontFamily: '"Caveat", cursive',
              fontSize: '1rem',
              color: '#8a7060',
              cursor: 'pointer',
              display: 'block',
              marginLeft: 'auto',
            }}
          >
            ganti video
          </button>
        </motion.div>
      )}
    </section>
  );
}

// Hero — journal cover page feel
function HeroSection({ isPlaying, onToggle }) {
  return (
    <header style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      textAlign: 'center',
      padding: '60px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ruled lines background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(0,0,0,0.04) 31px, rgba(0,0,0,0.04) 32px)',
        pointerEvents: 'none',
      }} />
      {/* Red margin */}
      <div style={{
        position: 'absolute', left: '15%', top: 0, bottom: 0, width: '1px',
        background: 'rgba(220,120,120,0.15)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative' }}
      >
        <p style={{
          fontFamily: '"Caveat", cursive',
          fontSize: '1rem', color: '#b8a090',
          margin: '0 0 10px', opacity: 0.75,
        }}>
          catetan buat kamu ☁️
        </p>

        <h1 style={{
          fontFamily: '"Caveat", cursive',
          fontSize: 'clamp(3.2rem, 12vw, 7.5rem)',
          fontWeight: 700,
          color: '#2e2218',
          margin: '0 0 4px',
          lineHeight: 1.05,
        }}>
          Mahesa & Ika
        </h1>

        <div style={{
          height: '3px', width: '100px',
          background: 'linear-gradient(90deg, #e8a598, #f2b5d4)',
          margin: '20px auto',
          borderRadius: '2px',
        }} />

        <p style={{
          fontFamily: '"Caveat", cursive',
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: '#7a6858',
          letterSpacing: '0.05em',
        }}>
          satu bulan pertama yang gak bakal dilupain 🌸
        </p>

        <div style={{ marginTop: '44px', display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <motion.button
            onClick={onToggle}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: '#fff',
              border: '1.5px solid rgba(212,163,115,0.5)',
              color: '#c4956a',
              padding: '10px 26px',
              fontSize: '0.95rem',
              fontFamily: '"Caveat", cursive',
              cursor: 'pointer',
              borderRadius: '4px',
              display: 'flex', alignItems: 'center', gap: '8px',
              boxShadow: '2px 3px 12px rgba(0,0,0,0.07)',
            }}
          >
            {isPlaying ? '⏸' : '▶'} {isPlaying ? 'pause musik' : 'play musik'}
          </motion.button>
        </div>

        {/* Stats — casual */}
        <div style={{
          display: 'flex', gap: '0', marginTop: '52px',
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '2px 4px 16px rgba(0,0,0,0.06)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          {[
            { n: '11', l: 'momen' },
            { n: '~1 bln', l: 'bareng' },
            { n: '∞', l: 'kenangan' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '16px 28px', textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(0,0,0,0.07)' : 'none',
            }}>
              <p style={{ fontFamily: '"Caveat", cursive', fontSize: '1.6rem', color: '#c4956a', margin: '0 0 3px', fontWeight: 700 }}>{s.n}</p>
              <p style={{ fontFamily: '"Caveat", cursive', fontSize: '0.9rem', color: '#9a8878', margin: 0 }}>{s.l}</p>
            </div>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ marginTop: '36px', color: '#c4956a', opacity: 0.5, fontSize: '18px' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </header>
  );
}

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpenBook = () => {
    setIsOpened(true);
    setTimeout(() => {
      setIsPlaying(true);
      if (audioRef.current) audioRef.current.play().catch(() => {});
    }, 1200);

    const end = Date.now() + 3500;
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors: ['#ffc0cb','#d4a373','#e6dfcc','#f2b5d4'] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors: ['#ffc0cb','#d4a373','#e6dfcc','#f2b5d4'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
    else { audioRef.current.play().catch(() => {}); setIsPlaying(true); }
  };

  return (
    <div style={{
      backgroundColor: '#f7f3ec',
      minHeight: '100vh',
      color: '#2e2218',
      fontFamily: '"Caveat", cursive, Georgia, serif',
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Lora:ital,wght@0,400;1,400&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #f7f3ec; }
        ::-webkit-scrollbar-thumb { background: rgba(196,149,106,0.4); border-radius: 2px; }
        html { scroll-behavior: smooth; }
      `}</style>

      <audio ref={audioRef} src="/kita.mp3" loop />

      {/* Subtle noise texture */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999,
        opacity: 0.025,
        background: 'url("https://grainy-gradients.vercel.app/noise.svg")',
      }} />

      <Particles />
      <BookCover isOpened={isOpened} onOpen={handleOpenBook} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 1 : 0 }}
        transition={{ duration: 1.6, delay: 1 }}
      >
        <HeroSection isPlaying={isPlaying} onToggle={togglePlay} />

        <div style={{ maxWidth: '940px', margin: '0 auto' }}>
          {stories.map((story, idx) => (
            <StoryCard key={idx} story={story} idx={idx} />
          ))}
        </div>

        <VideoSection />

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '60px 24px 80px',
          borderTop: '1px dashed rgba(0,0,0,0.1)',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{
              fontFamily: '"Caveat", cursive',
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              color: '#c4956a',
              margin: '0 0 12px',
            }}>
              ini baru permulaan ya sayang 🌸
            </p>
            <div style={{
              height: '2px', width: '50px',
              background: 'linear-gradient(90deg, #e8a598, #f2b5d4)',
              margin: '0 auto 16px',
              borderRadius: '2px',
            }} />
            <p style={{
              fontFamily: '"Caveat", cursive',
              fontSize: '0.9rem',
              color: '#b8a090',
              letterSpacing: '0.05em',
            }}>
              Mahesa & Ika · 2026
            </p>
          </motion.div>
        </footer>
      </motion.div>
    </div>
  );
}