import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, Leaf, Palette, Boxes, Lock, Truck } from 'lucide-react';

const features = [
  { icon: Shield,  title: 'Durable Corrugated Material',  description: 'High-quality corrugated cardboard engineered to protect your products through the toughest transit conditions.',  bg: '#F5F0E8', iconBg: '#EDE4D3', blob: '#C4A882', blobShadow: '#C4A88255', rotate: -3, side: 'left',  delay: 0   },
  { icon: Leaf,    title: 'Eco-Friendly Packaging',        description: '100% recyclable materials that reduce environmental impact without compromising on strength or quality.',          bg: '#EDE8DC', iconBg: '#D4C9B0', blob: '#8B6F47', blobShadow: '#8B6F4755', rotate:  2, side: 'right', delay: 0.12 },
  { icon: Palette, title: 'Custom Branding Options',       description: 'Full-color printing, embossing, and custom finishes to make your packaging an extension of your brand.',          bg: '#F5F0E8', iconBg: '#EDE4D3', blob: '#B89870', blobShadow: '#B8987055', rotate: -2, side: 'left',  delay: 0.24 },
  { icon: Boxes,   title: 'Multiple Box Sizes',            description: 'From small mailers to large freight boxes — we have the perfect size for every product you ship.',                bg: '#EDE8DC', iconBg: '#D4C9B0', blob: '#7A6040', blobShadow: '#7A604055', rotate:  3, side: 'right', delay: 0.36 },
  { icon: Lock,    title: 'Secure Shipping Protection',    description: 'Reinforced edges and tamper-resistant designs ensure your products arrive intact every single time.',              bg: '#F5F0E8', iconBg: '#EDE4D3', blob: '#A89070', blobShadow: '#A8907055', rotate: -2, side: 'left',  delay: 0.48 },
  { icon: Truck,   title: 'Fast Bulk Delivery',            description: 'Streamlined production and logistics mean your bulk orders arrive on time, every time.',                          bg: '#EDE8DC', iconBg: '#D4C9B0', blob: '#8B6F47', blobShadow: '#8B6F4755', rotate:  2, side: 'right', delay: 0.60 },
];

// Pushpin SVG
const Pin = ({ color }) => (
  <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
    <circle cx="10" cy="10" r="9" fill={color} opacity="0.88" />
    <circle cx="10" cy="10" r="5"  fill="white"  opacity="0.28" />
    <circle cx="7.5" cy="7.5" r="2.5" fill="white" opacity="0.42" />
    <rect x="9" y="18" width="2" height="9" rx="1" fill={color} opacity="0.6" />
  </svg>
);

// Blob shape above card
const Blob = ({ color, shadow }) => (
  <div style={{
    width: '52px', height: '52px',
    borderRadius: '50% 42% 58% 44% / 46% 54% 42% 52%',
    background: `radial-gradient(circle at 38% 36%, ${color}EE, ${color}88)`,
    boxShadow: `0 8px 22px ${shadow}`,
  }} />
);

const FeatureCard = ({ feature, isInView }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: feature.delay, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', paddingTop: '36px', width: '100%' }}
    >
      {/* Blob above card — centered */}
      <div style={{
        position: 'absolute', top: '-4px', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3, pointerEvents: 'none',
      }}>
        <Blob color={feature.blob} shadow={feature.blobShadow} />
      </div>

      {/* Pin on top of blob */}
      <div style={{
        position: 'absolute', top: '-10px', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 4, pointerEvents: 'none',
        filter: 'drop-shadow(0 2px 4px rgba(44,36,22,0.25))',
      }}>
        <Pin color={feature.blob} />
      </div>

      {/* Card */}
      <motion.div
        animate={{
          rotate: hovered ? 0 : feature.rotate,
          boxShadow: hovered
            ? '0 24px 60px rgba(44,36,22,0.13)'
            : '0 4px 20px rgba(44,36,22,0.07)',
        }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        style={{
          backgroundColor: feature.bg,
          borderRadius: '22px',
          padding: '32px 28px 36px',
          border: '1px solid rgba(196,180,154,0.3)',
          transformOrigin: 'top center',
          cursor: 'default',
          minHeight: '220px',
        }}
      >
        <div style={{
          width: '46px', height: '46px', borderRadius: '13px',
          backgroundColor: feature.iconBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '20px',
        }}>
          <Icon size={22} style={{ color: '#7A6040' }} />
        </div>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#2C2416', marginBottom: '12px', lineHeight: 1.25 }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: '14px', color: '#6B5B3E', lineHeight: 1.75, margin: 0 }}>
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // card width fixed, step down per pair
  const CARD_W = 340;
  const STEP_Y = 340;
  const RIGHT_OFFSET = 120;
  const CARD_H = 320;

  const getTop = (i) => Math.floor(i / 2) * STEP_Y + (i % 2 === 1 ? RIGHT_OFFSET : 0);
  // totalH = top of last card + its actual height (no extra padding)
  const totalH = getTop(features.length - 1) + CARD_H;

  return (
    <section id="features" style={{ backgroundColor: '#2C2416', padding: '100px 0 60px' }} ref={ref}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: '#F5F0E8', marginBottom: '18px', lineHeight: 1.15 }}>
            Why Choose{' '}
            <span style={{ color: '#C4A882', fontStyle: 'italic' }}>Our</span>
            {' '}Packaging?
          </h2>
          <p style={{ fontSize: '16px', color: '#A89880', maxWidth: '460px', margin: '0 auto', lineHeight: 1.75 }}>
            Premium quality boxes designed for modern businesses that care about their products and the planet.
          </p>
        </motion.div>

        {/* Staggered layout */}
        <div className="features-mobile" style={{ position: 'relative', height: `${totalH}px` }}>

          {/* Dashed diagonal lines */}
          <svg className="features-svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'visible' }}>
            {features.slice(0, -1).map((_, i) => {
              const isLeft = i % 2 === 0;
              // pin center x: left card center = CARD_W/2, right card center = totalWidth - CARD_W/2
              // expressed as % of container width (860px)
              const leftCx = (CARD_W / 2 / 860) * 100;
              const rightCx = ((860 - CARD_W / 2) / 860) * 100;
              const x1 = isLeft ? leftCx + '%' : rightCx + '%';
              const x2 = isLeft ? rightCx + '%' : leftCx + '%';
              const y1 = getTop(i) + 10;
              const y2 = getTop(i + 1) + 10;
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#7A6040" strokeWidth="1.5" strokeDasharray="7 5"
                  strokeLinecap="round" opacity="0.5" />
              );
            })}
          </svg>

          {/* Cards */}
          {features.map((feature, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} style={{
                position: 'absolute',
                top: `${getTop(index)}px`,
                left: isLeft ? 0 : 'auto',
                right: isLeft ? 'auto' : 0,
                width: `${CARD_W}px`,
                zIndex: 1,
              }}>
                <FeatureCard feature={feature} isInView={isInView} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
