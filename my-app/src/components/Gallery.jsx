import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Reveal from './Reveal';

// Local images — Vite fingerprints these for long-term browser caching
import img1  from '../assets/images/img1.jpg';
import img2  from '../assets/images/img2.jpg';
import img3  from '../assets/images/img3.jpg';
import img4  from '../assets/images/img4.jpg';
import img5  from '../assets/images/img5.jpg';
import img6  from '../assets/images/img6.jpg';
import img7  from '../assets/images/img7.jpg';
import img8  from '../assets/images/img8.jpg';
import img9  from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';

// Preload all gallery images into browser cache immediately
const allImgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
allImgs.forEach((src) => { const i = new Image(); i.src = src; });

// Each slot cycles through a subset of the local images
const slotImages = [
  [{ url: img1,  caption: 'Kraft Paper Boxes' },      { url: img6,  caption: 'Custom Printed Boxes' }],
  [{ url: img2,  caption: 'E-commerce Shipping' },    { url: img7,  caption: 'Retail Packaging' }],
  [{ url: img3,  caption: 'Branded Packaging' },      { url: img8,  caption: 'Mailer Boxes' }],
  [{ url: img4,  caption: 'Warehouse Solutions' },    { url: img9,  caption: 'Storage Solutions' }],
  [{ url: img5,  caption: 'Delivery Boxes' },         { url: img10, caption: 'Bulk Delivery Boxes' }],
  [{ url: img6,  caption: 'Premium Gift Boxes' },     { url: img1,  caption: 'Eco-Friendly Packaging' }],
];

const STAGGER_MS = 600;

const Gallery = () => {
  const ref = useRef(null);
  const [slotIndexes, setSlotIndexes] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      slotImages.forEach((_, slotI) => {
        setTimeout(() => {
          setSlotIndexes(prev => {
            const next = [...prev];
            next[slotI] = (next[slotI] + 1) % slotImages[slotI].length;
            return next;
          });
        }, slotI * STAGGER_MS);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" style={{ background: '#EDE8DC', padding: '100px 0 60px' }} ref={ref}>

      {/* Header */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px', textAlign: 'center', marginBottom: '52px' }}>
        <Reveal variant="fadeUp">
          <span style={{ color: '#8B6F47', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
            Our Products
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: '#2C2416', marginBottom: '16px', lineHeight: 1.15 }}>
            Our Packaging Solutions
          </h2>
          <p style={{ fontSize: '16px', color: '#6B5B3E', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
            Explore our diverse range of high-quality packaging boxes designed for every business need.
          </p>
        </Reveal>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }} className="gallery-padding gallery-scroll-wrapper">
        <div className="gallery-grid gallery-grid-mobile" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '300px 300px',
          gap: '12px',
        }}>
          {slotImages.map((pool, i) => {
            const img = pool[slotIndexes[i]];
            return (
              <Reveal key={i} variant="scaleIn" delay={i * 0.07} style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
                <AnimatePresence mode="sync">
                  <motion.img
                    key={img.url}
                    src={img.url}
                    alt={img.caption}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </AnimatePresence>

                {/* Caption */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
                  background: 'linear-gradient(to top, rgba(18,12,4,0.78) 0%, rgba(18,12,4,0.12) 45%, transparent 68%)',
                  display: 'flex', alignItems: 'flex-end', padding: '18px 20px',
                }}>
                  <span style={{ color: '#F5F0E8', fontSize: '14.5px', fontWeight: 500, textShadow: '0 1px 6px rgba(0,0,0,0.55)' }}>
                    {img.caption}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Gallery;
