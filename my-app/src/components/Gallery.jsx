import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Each slot cycles through packaging-only images
const slotImages = [
  [
    { url: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=1400&q=90', caption: 'E-commerce Shipping Boxes' },
    { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=90', caption: 'Kraft Paper Boxes' },
    { url: 'https://images.unsplash.com/photo-1612103198005-b238154f4590?w=1400&q=90', caption: 'Corrugated Boxes' },
  ],
  [
    { url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1400&q=90', caption: 'Branded Packaging' },
    { url: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1400&q=90', caption: 'Custom Printed Boxes' },
    { url: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1400&q=90', caption: 'Retail Packaging' },
  ],
  [
    { url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=90', caption: 'Warehouse Packaging' },
    { url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=90', caption: 'Delivery Boxes' },
    { url: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=1400&q=90', caption: 'Mailer Boxes' },
  ],
  [
    { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=90', caption: 'Premium Gift Boxes' },
    { url: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=1400&q=90', caption: 'Shipping Boxes' },
    { url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1400&q=90', caption: 'Branded Mailers' },
  ],
  [
    { url: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=1400&q=90', caption: 'Eco-Friendly Packaging' },
    { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=90', caption: 'Kraft Boxes' },
    { url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=90', caption: 'Storage Solutions' },
  ],
  [
    { url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=90', caption: 'Bulk Delivery Boxes' },
    { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=90', caption: 'Gift Packaging' },
    { url: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1400&q=90', caption: 'Custom Box Printing' },
  ],
];

const STAGGER_MS = 600;

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
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
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span style={{ color: '#8B6F47', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
            Our Products
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: '#2C2416', marginBottom: '16px', lineHeight: 1.15 }}>
            Our Packaging Solutions
          </h2>
          <p style={{ fontSize: '16px', color: '#6B5B3E', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
            Explore our diverse range of high-quality packaging boxes designed for every business need.
          </p>
        </motion.div>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}
              >
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
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Gallery;
