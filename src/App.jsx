import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import confetti from 'canvas-confetti';

// --- DATA STORIES ASLI MAHESA ---
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
    title: "RAININ!",
    description: "kita have something to talk trus ke kotbar malem-malem, HUJAN HUJANAN PULANG NYA MANA KM YG NYETIR HAHA",
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
    title: "FIRST TIME",
    description: "First time ke rumah aku and just the two of us doin.... and KITA JADIAN! (ak masih inget kita lagi di kasur tiduran pas ak ngajak jadian haha). LALU KITA FIRST TIME MASAK BARENG HAHA (masak ayam dadu + udang)",
    images: ["/images/rmh1.jpg", "/images/rmh2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"],
    accent: "#e8c4a0",
    emoji: "🏠"
  },
  {
    date: "5 Mei 2026",
    day: "11",
    title: "PASCAL DATE",
    description: "Sayang aku pake dress hitam baruu trus pake pita pink di kepala nya (LUCU BGT FAK) trus ketemuan di st cikudapateuh dan kita ke wisuda temen kamu trus ke PASKAL!",
    images: ["/images/baso1.jpg", "/images/baso2.jpg", "/images/baso3.jpg", "/images/foto (8).jpg"],
    accent: "#f0c4d4",
    emoji: "🎀"
  }
];

// Floating particles
function Particles() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: i % 3 === 0 ? '3px' : '2px',
            height: i % 3 === 0 ? '3px' : '2px',
            borderRadius: '50%',
            backgroundColor: i % 4 === 0 ? '#d4a373' : i % 4 === 1 ? '#e8c4c4' : i % 4 === 2 ? '#b5c4b1' : '#c9b8d4',
            left: `${(i * 5.7) % 100}%`,
            opacity: 0.4,
          }}
          animate={{
            y: ['-10vh', '110vh'],
            x: [0, Math.sin(i) * 60],
            opacity: [0, 0.5, 0.5, 0],
          }}
          transition={{
            duration: 12 + (i * 1.3) % 8,
            repeat: Infinity,
            delay: (i * 0.7) % 6,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

// Book cover component
function BookCover({ isOpened, onOpen }) {
  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            background: 'radial-gradient(ellipse at 50% 60%, #1a1008 0%, #0a0806 100%)',
          }}
        >
          {/* Ambient glow */}
          <div style={{
            position: 'absolute', width: '500px', height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,163,115,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <motion.div
            onClick={onOpen}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: 'min(85vw, 340px)',
              height: 'min(65vh, 500px)',
              background: 'linear-gradient(135deg, #2a1f14 0%, #1e1510 40%, #2a1f14 100%)',
              borderRadius: '4px 16px 16px 4px',
              boxShadow: '20px 20px 60px rgba(0,0,0,0.9), -3px 0 15px rgba(0,0,0,0.5), inset -2px 0 8px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              position: 'relative', overflow: 'hidden',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Spine */}
            <div style={{
              position: 'absolute', left: 0, top: 0, width: '24px', height: '100%',
              background: 'linear-gradient(90deg, #1a0f08, #2d1f14)',
              borderRight: '1px solid rgba(212,163,115,0.15)',
            }} />

            {/* Texture overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
              pointerEvents: 'none',
            }} />

            {/* Gold border frame */}
            <div style={{
              position: 'absolute', inset: '28px 20px 28px 36px',
              border: '1px solid rgba(212,163,115,0.25)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', inset: '32px 24px 32px 40px',
              border: '1px solid rgba(212,163,115,0.1)',
              pointerEvents: 'none',
            }} />

            {/* Content */}
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 44px 0 52px' }}>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ fontSize: '28px', marginBottom: '18px' }}
              >
                🌸
              </motion.div>

              <p style={{
                letterSpacing: '0.5em', fontSize: '8px', color: '#d4a373',
                textTransform: 'uppercase', marginBottom: '16px', opacity: 0.7,
              }}>
                A R C H I V E · 2 0 2 6
              </p>

              <h1 style={{
                fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
                fontSize: '1.7rem', color: '#e8dfc8', fontStyle: 'italic',
                fontWeight: 300, lineHeight: 1.3, margin: '0 0 8px',
                letterSpacing: '0.05em',
              }}>
                Mahesa<br/>&<br/>Ika
              </h1>

              <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #d4a373, transparent)', margin: '18px auto' }} />

              <p style={{ fontSize: '9px', color: '#b8a898', letterSpacing: '0.3em', opacity: 0.6 }}>
                OUR STORY
              </p>

              <motion.div
                style={{
                  marginTop: '28px', padding: '8px 20px',
                  border: '1px solid rgba(212,163,115,0.3)',
                  fontSize: '8px', letterSpacing: '0.25em', color: '#d4a373',
                  display: 'inline-block',
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                OPEN BOOK
              </motion.div>
            </div>

            {/* Corner flourishes */}
            <span style={{ position: 'absolute', top: '36px', right: '26px', fontSize: '14px', opacity: 0.3 }}>✦</span>
            <span style={{ position: 'absolute', bottom: '36px', right: '26px', fontSize: '14px', opacity: 0.3 }}>✦</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Story card
function StoryCard({ story, idx }) {
  const isEven = idx % 2 === 0;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '80px 24px',
        position: 'relative',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Big chapter number BG */}
      <div style={{
        position: 'absolute', top: '20px',
        [isEven ? 'left' : 'right']: '40px',
        fontSize: 'clamp(80px, 15vw, 140px)',
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        fontStyle: 'italic',
        color: 'rgba(255,255,255,0.025)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        {story.day}
      </div>

      <div style={{
        maxWidth: '960px', margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}>
        {/* Header row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexDirection: isEven ? 'row' : 'row-reverse',
          }}
        >
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: `radial-gradient(circle, ${story.accent}30 0%, transparent 70%)`,
            border: `1px solid ${story.accent}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', flexShrink: 0,
          }}>
            {story.emoji}
          </div>
          <div>
            <p style={{
              fontSize: '10px', letterSpacing: '0.35em', color: story.accent,
              textTransform: 'uppercase', margin: '0 0 4px', opacity: 0.8,
              fontFamily: 'monospace',
            }}>
              {story.date}
            </p>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              color: '#f0e8d8',
              margin: 0, fontWeight: 400, fontStyle: 'italic',
              letterSpacing: '0.02em',
            }}>
              {story.title}
            </h2>
          </div>
        </motion.div>

        {/* Main content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}>
          {/* Photo grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ order: isEven ? 1 : 2 }}
          >
            <PhotoGrid images={story.images} accent={story.accent} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              order: isEven ? 2 : 1,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: '8px 0',
            }}
          >
            <div style={{
              width: '30px', height: '1px',
              background: `linear-gradient(90deg, ${story.accent}, transparent)`,
              marginBottom: '20px',
            }} />
            <p style={{
              fontFamily: '"Lora", Georgia, serif',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
              color: '#c0b8a8',
              lineHeight: '1.9',
              margin: 0,
              fontStyle: 'italic',
            }}>
              "{story.description}"
            </p>
            <div style={{
              marginTop: '28px',
              padding: '16px',
              background: `linear-gradient(135deg, ${story.accent}08, transparent)`,
              border: `1px solid ${story.accent}18`,
              borderRadius: '2px',
            }}>
              <p style={{
                fontFamily: 'monospace',
                fontSize: '9px', letterSpacing: '0.2em',
                color: story.accent, opacity: 0.6, margin: 0,
                textTransform: 'uppercase',
              }}>
                Chapter {story.day} of our story
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function PhotoGrid({ images, accent }) {
  const [hovered, setHovered] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '160px 160px',
        gap: '6px',
        position: 'relative',
      }}>
        {/* Polaroid frame */}
        <div style={{
          position: 'absolute', inset: '-10px',
          background: '#e6dfd0',
          zIndex: 0,
          boxShadow: '12px 16px 40px rgba(0,0,0,0.7)',
          transform: 'rotate(-1.2deg)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-28px', left: 0, right: 0,
          height: '32px', background: '#e6dfd0',
          zIndex: 0,
          transform: 'rotate(-1.2deg)',
        }} />

        {images.slice(0, 4).map((img, i) => (
          <motion.div
            key={i}
            style={{ position: 'relative', zIndex: 1, overflow: 'hidden', cursor: 'zoom-in' }}
            whileHover={{ scale: 1.02, zIndex: 2 }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`memory ${i + 1}`}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: hovered === i ? 'brightness(1.05) saturate(1.1)' : 'brightness(0.85) saturate(0.9)',
                transition: 'filter 0.4s ease',
              }}
            />
            {hovered === i && (
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(135deg, ${accent}20, transparent)`,
              }} />
            )}
          </motion.div>
        ))}

        {/* Tape */}
        <div style={{
          position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%) rotate(-3deg)',
          width: '60px', height: '18px',
          background: 'rgba(212,163,115,0.25)',
          zIndex: 5, backdropFilter: 'blur(2px)',
        }} />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9000,
              background: 'rgba(5,3,2,0.97)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px', backdropFilter: 'blur(20px)',
              cursor: 'zoom-out',
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ position: 'relative' }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{
                background: '#e6dfd0',
                padding: '12px 12px 40px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
              }}>
                <img
                  src={selectedImg}
                  style={{ maxWidth: '80vw', maxHeight: '75vh', objectFit: 'contain', display: 'block' }}
                  alt="zoom"
                />
              </div>
              <button
                onClick={() => setSelectedImg(null)}
                style={{
                  position: 'absolute', top: '-14px', right: '-14px',
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: '#1a1208', border: '1px solid rgba(212,163,115,0.3)',
                  color: '#d4a373', cursor: 'pointer', fontSize: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

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
      {/* Background gradient rings */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,163,115,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px', height: '400px', borderRadius: '50%',
        border: '1px solid rgba(212,163,115,0.06)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px', borderRadius: '50%',
        border: '1px solid rgba(212,163,115,0.03)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          style={{
            letterSpacing: '0.55em', fontSize: '9px', color: '#d4a373',
            textTransform: 'uppercase', marginBottom: '20px',
            fontFamily: 'monospace', opacity: 0.7,
          }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          14 Maret — 5 Mei 2026
        </motion.p>

        <h1 style={{
          fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: 300, fontStyle: 'italic',
          color: '#f0e8d8',
          margin: '0 0 8px',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
        }}>
          Mahesa & Ika
        </h1>

        <div style={{
          height: '1px', width: '120px',
          background: 'linear-gradient(90deg, transparent, #d4a373, transparent)',
          margin: '24px auto',
        }} />

        <p style={{
          fontFamily: '"Lora", Georgia, serif',
          fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
          color: '#a09080',
          letterSpacing: '0.15em',
          fontStyle: 'italic',
        }}>
          A month of firsts. A lifetime of us.
        </p>

        <div style={{ marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <motion.button
            onClick={onToggle}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent',
              border: '1px solid rgba(212,163,115,0.4)',
              color: '#d4a373',
              padding: '12px 32px',
              fontSize: '9px', letterSpacing: '0.3em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'monospace',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}
          >
            <span>{isPlaying ? '⏸' : '▶'}</span>
            {isPlaying ? 'PAUSE' : 'PLAY'} SONG
          </motion.button>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: '#d4a373', opacity: 0.4, fontSize: '14px' }}
          >
            ↓
          </motion.div>
        </div>

        {/* Stats strip */}
        <div style={{
          display: 'flex', gap: '0', marginTop: '60px',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {[
            { n: '11', l: 'Moments' },
            { n: '1', l: 'Month' },
            { n: '∞', l: 'Memories' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '16px 32px', textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <p style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1.6rem', color: '#d4a373',
                margin: '0 0 4px', fontStyle: 'italic',
              }}>{s.n}</p>
              <p style={{ fontSize: '8px', letterSpacing: '0.3em', color: '#6a6058', margin: 0, textTransform: 'uppercase', fontFamily: 'monospace' }}>{s.l}</p>
            </div>
          ))}
        </div>
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
    }, 1500);

    const duration = 4000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 60, origin: { x: 0, y: 0.7 }, colors: ['#ffc0cb', '#d4a373', '#e6dfcc', '#f0e0d0'] });
      confetti({ particleCount: 3, angle: 120, spread: 60, origin: { x: 1, y: 0.7 }, colors: ['#ffc0cb', '#d4a373', '#e6dfcc', '#f0e0d0'] });
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
      backgroundColor: '#0c0a08',
      minHeight: '100vh',
      color: '#b8b09a',
      fontFamily: '"Lora", Georgia, serif',
      overflowX: 'hidden',
    }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap');
        
        * { box-sizing: border-box; }
        
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0c0a08; }
        ::-webkit-scrollbar-thumb { background: rgba(212,163,115,0.3); border-radius: 2px; }
        
        html { scroll-behavior: smooth; }
      `}</style>

      <audio ref={audioRef} src="/kita.mp3" loop />

      {/* Grain texture */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999,
        opacity: 0.035,
        background: 'url("https://grainy-gradients.vercel.app/noise.svg")',
      }} />

      {/* Top vignette */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '120px',
        background: 'linear-gradient(to bottom, rgba(12,10,8,0.8), transparent)',
        pointerEvents: 'none', zIndex: 50,
      }} />

      <Particles />
      <BookCover isOpened={isOpened} onOpen={handleOpenBook} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 1 : 0 }}
        transition={{ duration: 2, delay: 1.2 }}
      >
        <HeroSection isPlaying={isPlaying} onToggle={togglePlay} />

        {/* Timeline line */}
        <div style={{
          position: 'relative',
          maxWidth: '960px', margin: '0 auto',
          padding: '0 0 60px',
        }}>
          {stories.map((story, idx) => (
            <StoryCard key={idx} story={story} idx={idx} />
          ))}
        </div>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '100px 24px 80px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,163,115,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontStyle: 'italic', color: '#d4a373',
              opacity: 0.6, margin: '0 0 16px',
            }}>
              "And it's only the beginning."
            </p>
            <div style={{
              height: '1px', width: '60px',
              background: 'linear-gradient(90deg, transparent, rgba(212,163,115,0.4), transparent)',
              margin: '0 auto 20px',
            }} />
            <p style={{
              fontFamily: 'monospace', fontSize: '9px',
              letterSpacing: '0.4em', color: '#5a5048',
              textTransform: 'uppercase',
            }}>
              Mahesa & Ika · 2026
            </p>
          </motion.div>
        </footer>
      </motion.div>
    </div>
  );
}