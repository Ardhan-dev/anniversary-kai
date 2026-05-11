import React, { useState, useRef, useEffect } from 'react';
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

// Floating doodle particles
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

// Interactive Opening Section
function InteractiveOpening({ onComplete }) {
  const [step, setStep] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [questionStep, setQuestionStep] = useState(0);
  const [noCount, setNoCount] = useState(0);

  const noResponses = [
    "masa sih ga inget :(",
    "coba inget inget lagi dong... 🥺",
    "ayoo pasti inget kok...",
    "please sayang, inget kan? 🥹",
    "hari spesial kita loh ini... 💕",
    "okeee aku kasih tau... it's May 12th 2026!",
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setShowQuestion(true), 600);
    return () => clearTimeout(timer1);
  }, []);

  const handleYes = () => {
    if (questionStep === 0) {
      setQuestionStep(1);
    } else {
      setStep(2);
      setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#ffc0cb', '#d4a373', '#f2b5d4', '#ff6b6b', '#ffd93d'],
        });
      }, 300);
      setTimeout(() => onComplete(), 2500);
    }
  };

  const handleNo = () => {
    if (noCount < noResponses.length - 1) {
      setNoCount(noCount + 1);
    } else {
      if (questionStep === 0) {
        setQuestionStep(1);
        setNoCount(0);
      } else {
        setStep(2);
        setTimeout(() => {
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#ffc0cb', '#d4a373', '#f2b5d4', '#ff6b6b', '#ffd93d'],
          });
        }, 300);
        setTimeout(() => onComplete(), 2500);
      }
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        background: '#f5ede0',
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(180,150,120,0.1) 31px, rgba(180,150,120,0.1) 32px)',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 60%, rgba(180,150,120,0.15) 100%)',
        pointerEvents: 'none',
      }} />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="hello"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ textAlign: 'center', position: 'relative' }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.2, 0.9, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              style={{ position: 'absolute', top: '-50px', left: '-40px', fontSize: '40px', opacity: 0.3 }}
            >
              ✦
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -10, 15, 0], y: [0, -8, 4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
              style={{ position: 'absolute', top: '-30px', right: '-30px', fontSize: '32px', opacity: 0.25 }}
            >
              ☁️
            </motion.span>
            <motion.span
              style={{ position: 'absolute', bottom: '-40px', left: '50%', fontSize: '28px', opacity: 0.2 }}
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌸
            </motion.span>

            {showQuestion && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
              >
                <p style={{
                  fontFamily: '"Caveat", cursive',
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  color: '#3a2e26',
                  margin: '0 0 24px',
                  lineHeight: 1.3,
                }}>
                  Hai Ikaaa! 💕
                </p>
                <p style={{
                  fontFamily: '"Caveat", cursive',
                  fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
                  color: '#6a5848',
                  margin: '0 0 32px',
                }}>
                  How's ur day? ☀️
                </p>
                <motion.button
                  onClick={() => setStep(1)}
                  whileHover={{ scale: 1.06, boxShadow: '0 8px 30px rgba(212,163,115,0.4)' }}
                  whileTap={{ scale: 0.94 }}
                  style={{
                    fontFamily: '"Caveat", cursive',
                    fontSize: '1.4rem',
                    padding: '16px 48px',
                    background: 'linear-gradient(135deg, #e8c4a0, #f2b5d4)',
                    border: 'none',
                    borderRadius: '50px',
                    color: '#3a2e26',
                    cursor: 'pointer',
                    boxShadow: '0 6px 24px rgba(212,163,115,0.3)',
                    transition: 'all 0.3s',
                  }}
                >
                  klik aku! 🌟
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '420px', padding: '0 24px' }}
          >
            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                color: '#3a2e26',
                margin: '0 0 32px',
                lineHeight: 1.4,
              }}
            >
              {questionStep === 0
                ? "inget ga sekarang tanggal berapa? 📅"
                : "tanggal 12 Mei 2026, inget ga itu hari apa? 🥺"}
            </motion.p>

            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                onClick={handleYes}
                whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(180,200,160,0.5)' }}
                whileTap={{ scale: 0.9 }}
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontSize: '1.3rem',
                  padding: '14px 44px',
                  background: 'linear-gradient(135deg, #c8e6c9, #a5d6a7)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#2e4a2e',
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(180,200,160,0.35)',
                  transition: 'all 0.3s',
                }}
              >
                Yes! 💖
              </motion.button>
              <motion.button
                onClick={handleNo}
                whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(220,160,160,0.5)' }}
                whileTap={{ scale: 0.9 }}
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontSize: '1.3rem',
                  padding: '14px 44px',
                  background: 'linear-gradient(135deg, #f8d7da, #f5c6cb)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#5a2e2e',
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(220,160,160,0.35)',
                  transition: 'all 0.3s',
                }}
              >
                No... 😢
              </motion.button>
            </div>

            {noCount > 0 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontSize: '1.2rem',
                  color: '#c97a7a',
                  marginTop: '24px',
                  fontStyle: 'italic',
                }}
              >
                {noResponses[Math.min(noCount - 1, noResponses.length - 1)]}
              </motion.p>
            )}
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 150, damping: 12 }}
            style={{ textAlign: 'center' }}
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <p style={{
                fontFamily: '"Caveat", cursive',
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                color: '#3a2e26',
                margin: '0 0 8px',
                fontWeight: 700,
                lineHeight: 1.1,
              }}>
                INGET DONG! 🎉
              </p>
              <p style={{
                fontFamily: '"Caveat", cursive',
                fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                color: '#c4956a',
                margin: '0 0 20px',
              }}>
                YEAH IT'S OUR
              </p>
              <p style={{
                fontFamily: '"Caveat", cursive',
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                color: '#e8a598',
                margin: '0',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #e8a598, #f2b5d4, #d4a373)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                1 MONTH ANNIVERSARY! 💕
              </p>
            </motion.div>
            <motion.div
              style={{ marginTop: '32px', fontSize: '60px' }}
              animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🌸🎀💖🌹✨
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Photo Puzzle Game
// Photo Puzzle Game - LANGSUNG AMBIL DARI PUBLIC FOLDER
function PhotoPuzzle({ onComplete }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [pieces, setPieces] = useState([]);
  const [solved, setSolved] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const gridSize = 3;

  // List foto yang tersedia di public/images
  const availablePhotos = [
    "/images/jadian1.jpg",
    "/images/jadian2.jpg",
    "/images/jadian3.jpg",
    "/images/jadian4.jpg",
    "/images/jadian5.jpg",
    "/images/bunga1.jpg",
    "/images/n2.jpg",
    "/images/n3.jpg",
    "/images/pb1.jpeg",
    "/images/pb2.jpg",
    "/images/rmh1.jpg",
    "/images/rmh2.jpg",
    "/images/baso1.jpg",
    "/images/baso2.jpg",
    "/images/baso3.jpg",
  ];

  // Pilih foto random saat component mount
  useEffect(() => {
    const randomPhoto = availablePhotos[Math.floor(Math.random() * availablePhotos.length)];
    createPuzzle(randomPhoto);
  }, []);

  const createPuzzle = (imgUrl) => {
    setIsLoading(true);
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 300;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      // Cover image to square
      const minDim = Math.min(img.width, img.height);
      const sx = (img.width - minDim) / 2;
      const sy = (img.height - minDim) / 2;
      ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);
      
      const pieceSize = size / gridSize;
      const newPieces = [];
      
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          const pieceCanvas = document.createElement('canvas');
          pieceCanvas.width = pieceSize;
          pieceCanvas.height = pieceSize;
          const pieceCtx = pieceCanvas.getContext('2d');
          pieceCtx.drawImage(
            canvas,
            col * pieceSize, row * pieceSize, pieceSize, pieceSize,
            0, 0, pieceSize, pieceSize
          );
          
          newPieces.push({
            id: row * gridSize + col,
            correctPosition: row * gridSize + col,
            currentPosition: row * gridSize + col,
            image: pieceCanvas.toDataURL(),
            row,
            col,
          });
        }
      }
      
      // Shuffle pieces
      const shuffled = [...newPieces];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i].currentPosition, shuffled[j].currentPosition] = 
        [shuffled[j].currentPosition, shuffled[i].currentPosition];
      }
      
      shuffled.forEach(piece => {
        piece.row = Math.floor(piece.currentPosition / gridSize);
        piece.col = piece.currentPosition % gridSize;
      });
      
      setPieces(shuffled);
      setImageUrl(imgUrl);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      // Fallback kalau gambar gagal load
      setIsLoading(false);
      console.error('Gagal load gambar:', imgUrl);
    };
  };

  // Buat ulang puzzle dengan foto random lain
  const reshufflePuzzle = () => {
    setSolved(false);
    setSelectedPiece(null);
    const randomPhoto = availablePhotos[Math.floor(Math.random() * availablePhotos.length)];
    createPuzzle(randomPhoto);
  };

  const swapPieces = (piece1, piece2) => {
    const newPieces = [...pieces];
    const tempPos = newPieces[piece1].currentPosition;
    newPieces[piece1].currentPosition = newPieces[piece2].currentPosition;
    newPieces[piece2].currentPosition = tempPos;
    
    newPieces[piece1].row = Math.floor(newPieces[piece1].currentPosition / gridSize);
    newPieces[piece1].col = newPieces[piece1].currentPosition % gridSize;
    newPieces[piece2].row = Math.floor(newPieces[piece2].currentPosition / gridSize);
    newPieces[piece2].col = newPieces[piece2].currentPosition % gridSize;
    
    setPieces(newPieces);
    
    const isSolved = newPieces.every(p => p.id === p.currentPosition);
    if (isSolved) {
      setSolved(true);
      setTimeout(() => onComplete(), 1500);
    }
  };

  const handlePieceClick = (index) => {
    if (solved) return;
    if (selectedPiece === null) {
      setSelectedPiece(index);
    } else if (selectedPiece === index) {
      setSelectedPiece(null);
    } else {
      swapPieces(selectedPiece, index);
      setSelectedPiece(null);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{
        fontFamily: '"Caveat", cursive',
        fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
        color: '#3a2e26',
        marginBottom: '8px',
      }}>
        🧩 Puzzle Foto Kita!
      </h2>
      <p style={{
        fontFamily: '"Caveat", cursive',
        fontSize: '1.1rem',
        color: '#8a7060',
        marginBottom: '28px',
      }}>
        {isLoading 
          ? 'Nyiapin puzzle... 🎨' 
          : solved 
            ? 'Selesaikan Puzzle nya!' 
            : 'Susun puzzle nya! Klik dua piece buat tuker posisi'}
      </p>

      {isLoading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ fontSize: '60px', marginTop: '40px' }}
        >
          🧩
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gap: '3px',
            maxWidth: '300px',
            margin: '0 auto 24px',
            background: '#d4c4b0',
            padding: '3px',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          }}>
            {pieces.sort((a, b) => a.currentPosition - b.currentPosition).map((piece) => {
              const actualIndex = pieces.findIndex(p => p.id === piece.id);
              return (
                <motion.div
                  key={piece.id}
                  onClick={() => handlePieceClick(actualIndex)}
                  whileHover={{ scale: solved ? 1 : 1.05, zIndex: 2 }}
                  whileTap={{ scale: solved ? 1 : 0.95 }}
                  animate={{
                    borderColor: selectedPiece === actualIndex ? '#e8a598' : 'transparent',
                    boxShadow: selectedPiece === actualIndex ? '0 0 0 3px #e8a598, 0 4px 16px rgba(232,165,152,0.6)' : 'none',
                  }}
                  style={{
                    aspectRatio: '1',
                    backgroundImage: `url(${piece.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '4px',
                    cursor: solved ? 'default' : 'pointer',
                    border: selectedPiece === actualIndex ? '3px solid #e8a598' : '2px solid transparent',
                    transition: 'all 0.2s',
                    position: 'relative',
                  }}
                >
                  {piece.id === piece.currentPosition && solved && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(180,220,180,0.3)',
                        borderRadius: '4px',
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {solved && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: '1.4rem',
                color: '#c4956a',
              }}
            >
              Yey! Puzzle selesai! 🎉
            </motion.p>
          )}

          {/* Tombol acak ulang */}
          {!solved && (
            <motion.button
              onClick={reshufflePuzzle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: '1rem',
                padding: '10px 24px',
                background: 'transparent',
                border: '1.5px dashed rgba(180,150,120,0.5)',
                borderRadius: '20px',
                color: '#b8a090',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              🔄 ganti foto / acak ulang
            </motion.button>
          )}

          {solved && (
            <motion.button
              onClick={reshufflePuzzle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: '"Caveat", cursive',
                fontSize: '1rem',
                padding: '10px 24px',
                background: 'transparent',
                border: '1.5px dashed rgba(180,150,120,0.5)',
                borderRadius: '20px',
                color: '#b8a090',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              🔄 main lagi?
            </motion.button>
          )}
        </motion.div>
      )}
    </div>
  );
}


// Rose Bouquet Component - FIXED (MAWAR PASTI MUNCUL)
function RoseBouquet({ show, onClose }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (show) {
      // Reset dulu
      setShowContent(false);
      
      // Baru tampilin setelah mount
      const timer = setTimeout(() => setShowContent(true), 200);
      
      // Confetti burst berkala
      const confettiInterval = setInterval(() => {
        confetti({
          particleCount: 25,
          spread: 50,
          origin: { y: 0.3, x: Math.random() * 0.5 + 0.25 },
          colors: ['#ffb6c1', '#ff6b6b', '#ffffff', '#f8bbd0', '#ffd93d', '#a5d6a7'],
          shapes: ['circle', 'heart'],
          scalar: 0.7,
          gravity: 0.7,
          ticks: 120,
        });
      }, 1000);
      
      const stopConfetti = setTimeout(() => clearInterval(confettiInterval), 6000);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(stopConfetti);
        clearInterval(confettiInterval);
      };
    }
  }, [show]);

  if (!show) return null;

  // Posisi rapi 10 mawar
  const roses = [
    { emoji: '🌹', x: 50, y: 12, s: '52px', r: -5, d: 0 },
    { emoji: '🌸', x: 28, y: 22, s: '44px', r: -18, d: 0.25 },
    { emoji: '🌹', x: 72, y: 22, s: '44px', r: 15, d: 0.5 },
    { emoji: '🌷', x: 15, y: 35, s: '40px', r: -28, d: 0.75 },
    { emoji: '🌺', x: 40, y: 33, s: '46px', r: -6, d: 1 },
    { emoji: '🌹', x: 60, y: 33, s: '46px', r: 10, d: 1.25 },
    { emoji: '🌸', x: 85, y: 38, s: '38px', r: 30, d: 1.5 },
    { emoji: '🌼', x: 22, y: 48, s: '38px', r: -20, d: 1.75 },
    { emoji: '🌹', x: 50, y: 50, s: '44px', r: 3, d: 2 },
    { emoji: '💮', x: 78, y: 50, s: '38px', r: 25, d: 2.25 },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9000,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          padding: '20px',
        }}
      >
        {/* Buket */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.1 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: 'min(75vw, 340px)',
            height: 'min(85vw, 400px)',
          }}
        >
          {/* Background buket */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 70%, #faf3e8 0%, #efe4d4 55%, #e0d2bd 100%)',
            borderRadius: '48% 48% 44% 44% / 55% 55% 42% 42%',
            boxShadow: '0 20px 50px rgba(0,0,0,0.35), inset 0 0 50px rgba(255,220,200,0.25)',
          }} />

          {/* Bunga-bunga — SELALU MUNCUL kalau show true */}
          {roses.map((rose, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0, y: 40 }}
              animate={showContent ? { 
                scale: 1, 
                opacity: 1, 
                y: 0,
                rotate: [rose.r, rose.r + 4, rose.r - 3, rose.r]
              } : {}}
              transition={showContent ? {
                delay: rose.d,
                type: 'spring',
                stiffness: 160,
                damping: 13,
                rotate: {
                  delay: rose.d + 1,
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }
              } : {}}
              whileHover={showContent ? { scale: 1.35, zIndex: 10 } : {}}
              style={{
                position: 'absolute',
                left: `${rose.x}%`,
                top: `${rose.y}%`,
                transform: 'translate(-50%, -50%)',
                fontSize: rose.s,
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                zIndex: 2,
                cursor: 'default',
              }}
            >
              {rose.emoji}
            </motion.div>
          ))}

          {/* Daun kiri */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={showContent ? { opacity: 0.5, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              position: 'absolute',
              left: '3%',
              top: '42%',
              fontSize: '38px',
              transform: 'rotate(-45deg)',
              zIndex: 1,
            }}
          >🌿</motion.span>

          {/* Daun kanan */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={showContent ? { opacity: 0.5, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              position: 'absolute',
              right: '3%',
              top: '40%',
              fontSize: '38px',
              transform: 'rotate(40deg)',
              zIndex: 1,
            }}
          >🌿</motion.span>

          {/* Daun kecil */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={showContent ? { opacity: 0.4, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              position: 'absolute',
              left: '10%',
              top: '52%',
              fontSize: '26px',
              transform: 'rotate(-30deg)',
              zIndex: 1,
            }}
          >🍃</motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={showContent ? { opacity: 0.4, scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              position: 'absolute',
              right: '10%',
              top: '50%',
              fontSize: '26px',
              transform: 'rotate(30deg)',
              zIndex: 1,
            }}
          >🍃</motion.span>

          {/* Sparkles */}
          {showContent && [...Array(8)].map((_, i) => (
            <motion.span
              key={`sparkle-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.9, 0],
                scale: [0.3, 1, 0.3],
                y: [0, -30],
                x: [0, (i % 2 === 0 ? 20 : -20)]
              }}
              transition={{
                delay: 1.5 + i * 0.5,
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2
              }}
              style={{
                position: 'absolute',
                left: `${20 + i * 8}%`,
                top: `${30 + (i % 3) * 15}%`,
                fontSize: '12px',
                zIndex: 3,
                pointerEvents: 'none',
              }}
            >
              ✨
            </motion.span>
          ))}

          {/* Bungkus bawah */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={showContent ? { scaleY: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.6, type: 'spring', stiffness: 130 }}
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '20%',
              width: '60%',
              height: '20%',
              background: 'linear-gradient(180deg, #efe4d4 0%, #e0d2bd 60%, #d4c5aa 100%)',
              borderRadius: '0 0 16px 16px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              zIndex: 0,
              transformOrigin: 'bottom',
            }}
          />

          {/* Pita */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={showContent ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 2, type: 'spring', stiffness: 180, damping: 12 }}
            style={{
              position: 'absolute',
              bottom: '16%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 5,
              fontSize: '30px',
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.35))',
            }}
          >
            🎀
          </motion.div>
        </motion.div>

        {/* Pesan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.5, duration: 0.6, type: 'spring' }}
          style={{
            textAlign: 'center',
            background: 'rgba(255,255,255,0.9)',
            padding: '18px 28px',
            borderRadius: '14px',
            boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
            marginTop: '24px',
            maxWidth: '300px',
          }}
        >
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
            color: '#c4956a',
            margin: '0 0 4px',
            fontWeight: 700,
          }}>
            flowers for you 🌹
          </p>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: '0.9rem',
            color: '#8a7060',
            margin: '2px 0',
          }}>
          
          </p>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: '1.2rem',
            color: '#e8a598',
            margin: '6px 0 0',
            fontWeight: 600,
          }}>
          
          </p>
        </motion.div>

        {/* Tombol tutup */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: '20px',
            fontFamily: '"Caveat", cursive',
            fontSize: '1rem',
            padding: '8px 28px',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '20px',
            color: '#fff',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
          }}
        >
          tutup ✕
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
// Book cover
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
            background: '#f5ede0',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, rgba(180,150,120,0.2) 27px, rgba(180,150,120,0.2) 28px)',
            opacity: 0.4,
          }} />

          <motion.div
            onClick={onOpen}
            whileHover={{ scale: 1.015, rotate: 0.5 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: 'min(82vw, 320px)',
              background: '#faf5ec',
              borderRadius: '3px',
              boxShadow: '6px 8px 30px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)',
              cursor: 'pointer',
              padding: '40px 32px 48px',
              position: 'relative',
              transform: 'rotate(-1.5deg)',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <div style={{
              position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(-1deg)',
              width: '70px', height: '20px', background: 'rgba(212,163,115,0.4)',
              borderRadius: '1px',
            }} />

            <div style={{
              position: 'absolute', left: '40px', top: 0, bottom: 0, width: '1px',
              background: 'rgba(200,140,120,0.3)',
            }} />

            <div style={{ paddingLeft: '12px', position: 'relative' }}>
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

// Photo grid
function PhotoGrid({ images, accent }) {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: '-10px -10px -30px',
          background: '#faf5ec',
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
              style={{ background: '#faf5ec', padding: '12px 12px 44px', transform: 'rotate(-1deg)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
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

// Story card
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
            <div style={{
              background: '#faf7f0',
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

// Video section
function VideoSection() {
  const fileRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('video/')) return;
    const url = URL.createObjectURL(file);
    setVideoSrc(url);
  };

  useEffect(() => {
    // Try to load video from public folder
    fetch('/video/vlog.mp4', { method: 'HEAD' })
      .then(res => {
        if (res.ok) setVideoSrc('/video/vlog.mp4');
      })
      .catch(() => {});
  }, []);

  return (
    <section style={{
      padding: '80px 20px 60px',
      borderTop: '1px dashed rgba(0,0,0,0.1)',
      maxWidth: '760px',
      margin: '0 auto',
    }}>
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
        <motion.div
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onClick={() => fileRef.current?.click()}
          animate={{ borderColor: dragging ? '#e8a598' : 'rgba(0,0,0,0.12)' }}
          style={{
            border: `2px dashed ${dragging ? '#e8a598' : 'rgba(0,0,0,0.15)'}`,
            borderRadius: '8px',
            background: dragging ? '#faf5ec' : '#faf7f0',
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
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: '0.95rem', color: '#b8a090',
            margin: 0,
          }}>
            atau klik buat pilih dari device<br/>
            <span style={{ fontSize: '0.8rem' }}>
              (taruh video di public/video/vlog.mp4 juga bisa!)
            </span>
          </p>

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
          <div style={{
            background: '#faf5ec',
            padding: '14px 14px 56px',
            boxShadow: '6px 10px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)',
            transform: 'rotate(-0.8deg)',
            position: 'relative',
          }}>
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

            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 0, height: 0,
              borderStyle: 'solid',
              borderWidth: '0 0 22px 22px',
              borderColor: 'transparent transparent #e8e0d4 transparent',
            }} />
          </div>


        </motion.div>
      )}
    </section>
  );
}

// Hero section
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
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(0,0,0,0.04) 31px, rgba(0,0,0,0.04) 32px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: '15%', top: 0, bottom: 0, width: '1px',
        background: 'rgba(200,140,120,0.15)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
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
              background: '#faf5ec',
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

        <div style={{
          display: 'flex', gap: '0', marginTop: '52px',
          background: '#faf5ec',
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
  const [showInteraction, setShowInteraction] = useState(false);
  const [interactionDone, setInteractionDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [puzzleDone, setPuzzleDone] = useState(false);
  const [showRoses, setShowRoses] = useState(false);
  const audioRef = useRef(null);

  const handleOpenBook = () => {
    setIsOpened(true);
    setTimeout(() => setShowInteraction(true), 800);
  };

  const handleInteractionComplete = () => {
    setInteractionDone(true);
    setShowInteraction(false);
    setTimeout(() => {
      setIsPlaying(true);
      if (audioRef.current) audioRef.current.play().catch(() => {});
    }, 600);

    const end = Date.now() + 4000;
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

  const handlePuzzleComplete = () => {
    setPuzzleDone(true);
    setTimeout(() => setShowRoses(true), 800);
  };

  return (
    <div style={{
      backgroundColor: '#f5ede0',
      minHeight: '100vh',
      color: '#2e2218',
      fontFamily: '"Caveat", cursive, Georgia, serif',
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Lora:ital,wght@0,400;1,400&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #f5ede0; }
        ::-webkit-scrollbar-thumb { background: rgba(196,149,106,0.4); border-radius: 2px; }
        html { scroll-behavior: smooth; }
      `}</style>

      <audio ref={audioRef} src="/kita.mp3" loop />

      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999,
        opacity: 0.025,
        background: 'url("https://grainy-gradients.vercel.app/noise.svg")',
      }} />

      <Particles />
      <BookCover isOpened={isOpened} onOpen={handleOpenBook} />

      <AnimatePresence>
        {showInteraction && !interactionDone && (
          <InteractiveOpening onComplete={handleInteractionComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: interactionDone ? 1 : 0 }}
        transition={{ duration: 1.6 }}
      >
        <HeroSection isPlaying={isPlaying} onToggle={togglePlay} />

        <div style={{ maxWidth: '940px', margin: '0 auto' }}>
          {stories.map((story, idx) => (
            <StoryCard key={idx} story={story} idx={idx} />
          ))}
        </div>

        <VideoSection />

        {/* Puzzle Section */}
        <section style={{
          padding: '80px 20px 60px',
          borderTop: '1px dashed rgba(0,0,0,0.1)',
        }}>
          <PhotoPuzzle onComplete={handlePuzzleComplete} />
        </section>

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

      {/* Rose Bouquet Modals */}
      <RoseBouquet show={showRoses} onClose={() => setShowRoses(false)} />
    </div>
  );
}