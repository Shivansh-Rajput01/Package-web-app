import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Package } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Local images — imported so Vite fingerprints & caches them
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";

const taglines = [
  "Premium Packaging",
  "Eco-Friendly Boxes",
  "Custom Branding",
  "Bulk Delivery Ready",
  "Secure Shipping",
];

// Words that cycle in the headline with typewriter effect
const cycleWords = [
  "Businesses",
  "Startups",
  "E-commerce",
  "Retailers",
  "Exporters",
  "D2C Brands",
  "Wholesalers",
];

// Typewriter hook — types, holds, erases, moves to next word
const useTypewriter = (words, typeSpeed = 70, eraseSpeed = 40, holdMs = 1000) => {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState('typing');
  const frame = useRef(null);

  useEffect(() => {
    const word = words[wordIdx];
    clearTimeout(frame.current);

    if (phase === 'typing') {
      if (display.length < word.length) {
        frame.current = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typeSpeed);
      } else {
        frame.current = setTimeout(() => setPhase('erasing'), holdMs);
      }
    } else if (phase === 'erasing') {
      if (display.length > 0) {
        frame.current = setTimeout(() => setDisplay(display.slice(0, -1)), eraseSpeed);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(frame.current);
  }, [display, phase, wordIdx]);

  return display;
};

const slides = [
  { url: img1, title: "Kraft Paper Boxes",      uses: ["Artisan & handmade goods", "Retail gift packaging", "Subscription box inserts", "Eco-conscious brands"] },
  { url: img2, title: "E-commerce Shipping",    uses: ["Online store fulfillment", "Last-mile delivery", "Return-friendly packaging", "Multi-item orders"] },
  { url: img3, title: "Branded Packaging",      uses: ["Custom logo printing", "Unboxing experience", "Brand identity boost", "Influencer PR boxes"] },
  { url: img4, title: "Warehouse Solutions",    uses: ["Bulk storage & stacking", "Inventory management", "B2B wholesale dispatch", "Heavy-duty protection"] },
  { url: img5, title: "Delivery Boxes",         uses: ["Courier-ready sizing", "Fragile item safety", "Cold-chain logistics", "Same-day delivery"] },
];

// Preload all slide images so they're cached before the slider reaches them
slides.forEach(({ url }) => { const i = new Image(); i.src = url; });

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [tagIndex, setTagIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const typedWord = useTypewriter(cycleWords);
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (hovered) return;
    const t = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % slides.length);
    }, 3500);
    return () => clearInterval(t);
  }, [hovered]);

  useEffect(() => {
    const t = setInterval(() => {
      setTagIndex((p) => (p + 1) % taglines.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  const goTo = (idx) => { setDirection(idx > current ? 1 : -1); setCurrent(idx); };
  const prev = () => { setDirection(-1); setCurrent((p) => (p - 1 + slides.length) % slides.length); };
  const next = () => { setDirection(1); setCurrent((p) => (p + 1) % slides.length); };

  const variants = {
    enter:  (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 hero-section"
      style={{ backgroundColor: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center hero-grid">

          {/* ── Left content ── */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

            <div className="inline-flex items-center gap-3 rounded-full"
              style={{ marginBottom: '40px', padding: '12px 24px', background: '#EDE8DC', border: '2px solid #C4B49A', boxShadow: '0 0 0 4px #EDE8DC, 0 0 0 6px #D4C9B0', animation: 'beigePulse 2s ease-in-out infinite', alignItems: 'center' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0, background: '#8B6F47', display: 'block', animation: 'dotBlink 1.4s ease-in-out infinite' }} />
              <div style={{ overflow: 'hidden', height: '20px', minWidth: '170px', display: 'flex', alignItems: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.span key={tagIndex}
                    initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -18, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8B6F47', lineHeight: '20px' }}>
                    {taglines[tagIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: '#2C2416' }}>
              Packaging Boxes
              <br />for Modern
              <br />
              {/* Fixed height = font-size so line never collapses when word is empty */}
              <span style={{
                display: 'block',
                height: '1.2em',
                lineHeight: '1.2em',
                overflow: 'hidden',
              }}>
                {typedWord}
                <span style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '0.82em',
                  background: '#8B6F47',
                  marginLeft: '4px',
                  verticalAlign: 'middle',
                  borderRadius: '2px',
                  animation: 'cursorBlink 0.8s step-end infinite',
                }} />
              </span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#6B5B3E', marginBottom: 0 }}>
              Elevate your brand with durable, eco-friendly packaging solutions.
              Perfect for e-commerce, shipping, and logistics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 hero-buttons" style={{ marginTop: '56px' }}>
              <button onClick={() => scrollToSection("contact")}
                className="hero-btn-primary group inline-flex items-center justify-center gap-2.5 font-semibold text-base"
                style={{ backgroundColor: '#2C2416', color: '#FAF7F2', padding: '16px 36px', borderRadius: '999px', border: 'none', boxShadow: '0 4px 18px rgba(44,36,22,0.35)', letterSpacing: '0.01em', transition: 'box-shadow 0.25s ease, background-color 0.25s ease, opacity 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1E1509'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(44,36,22,0.55)'; e.currentTarget.style.opacity = '0.92'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2C2416'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(44,36,22,0.35)'; e.currentTarget.style.opacity = '1'; }}>
                Book a call
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollToSection("gallery")}
                className="hero-btn-secondary inline-flex items-center justify-center font-semibold text-base"
                style={{ backgroundColor: 'transparent', color: '#6B5B3E', padding: '16px 36px', borderRadius: '999px', border: '1.5px solid #C4B49A', letterSpacing: '0.01em', transition: 'box-shadow 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#EDE8DC'; e.currentTarget.style.borderColor = '#8B6F47'; e.currentTarget.style.color = '#8B6F47'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(196,180,154,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#C4B49A'; e.currentTarget.style.color = '#6B5B3E'; e.currentTarget.style.boxShadow = 'none'; }}>
                Explore Boxes
              </button>
            </div>
          </motion.div>

          {/* ── Right — image slider ── */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">

            <div className="relative overflow-hidden"
              style={{ borderRadius: '20px', boxShadow: '0 20px 60px rgba(44,36,22,0.18), 0 4px 16px rgba(44,36,22,0.08)', border: '1px solid #D4C9B0', aspectRatio: '4/3' }}>

              <div style={{ position: 'absolute', inset: 0 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>

                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.img
                    key={current}
                    src={slides[current].url}
                    alt={slides[current].title}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </AnimatePresence>

                <AnimatePresence>
                  {hovered && (
                    <motion.div
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                      style={{ position: 'absolute', inset: 0, background: 'rgba(237,232,220,0.72)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', backdropFilter: 'blur(1px)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                        <Package size={18} style={{ color: '#8B6F47' }} />
                        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B6F47' }}>Use Cases</span>
                      </div>
                      <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#2C2416', marginBottom: '16px', lineHeight: 1.2, textAlign: 'center' }}>
                        {slides[current].title}
                      </h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                        {slides[current].uses.map((use, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B6F47', flexShrink: 0 }} />
                            <span style={{ fontSize: '14px', color: '#4A3B28', fontWeight: 500 }}>{use}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={prev}
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', width: '38px', height: '38px', borderRadius: '50%', border: '1.5px solid #C4B49A', background: 'rgba(245,240,232,0.92)', color: '#6B5B3E', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(44,36,22,0.1)', zIndex: 10 }}
                onMouseEnter={e => { e.currentTarget.style.background = '#EDE8DC'; e.currentTarget.style.borderColor = '#8B6F47'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(139,111,71,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,240,232,0.92)'; e.currentTarget.style.borderColor = '#C4B49A'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(44,36,22,0.1)'; }}>
                <ChevronLeft size={17} />
              </button>
              <button onClick={next}
                style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', width: '38px', height: '38px', borderRadius: '50%', border: '1.5px solid #C4B49A', background: 'rgba(245,240,232,0.92)', color: '#6B5B3E', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(44,36,22,0.1)', zIndex: 10 }}
                onMouseEnter={e => { e.currentTarget.style.background = '#EDE8DC'; e.currentTarget.style.borderColor = '#8B6F47'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(139,111,71,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,240,232,0.92)'; e.currentTarget.style.borderColor = '#C4B49A'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(44,36,22,0.1)'; }}>
                <ChevronRight size={17} />
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  style={{ borderRadius: '999px', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', width: i === current ? '28px' : '8px', height: '8px', background: i === current ? '#8B6F47' : '#C4B49A', padding: 0 }}
                />
              ))}
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full blur-3xl opacity-40 -z-10" style={{ backgroundColor: '#D4C9B0' }} />
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full blur-3xl opacity-25 -z-10" style={{ backgroundColor: '#C4B49A' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
