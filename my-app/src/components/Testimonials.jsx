import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Delhi Handicrafts",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
    review: "PackBox ne hamare shipping experience ko bilkul badal diya. Custom branding ke saath hamare customers ko unboxing bahut pasand aati hai. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    company: "Jaipur Jewels",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    review: "Bohot hi achi quality ke boxes hain. Hamari jewellery safely deliver hoti hai aur packaging dekh ke customers khush ho jaate hain. Baar baar order karte hain.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    company: "Mumbai Spices Co.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    review: "Eco-friendly packaging jo strong bhi ho — yahi chahiye tha humein. PackBox ne exactly wahi diya. Bulk orders bhi time pe aate hain, koi complaint nahi.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    company: "Chennai Organics",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    review: "Organic products ke liye sahi packaging milna mushkil tha. PackBox ke sustainable boxes ne problem solve kar di. Customers bhi appreciate karte hain.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "Ludhiana Textiles",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    review: "Kapdon ki packaging ke liye perfect boxes. Na zyada bhaari, na kamzor. Delivery mein koi damage nahi aaya abhi tak. PackBox pe full trust hai.",
    rating: 5,
  },
  {
    name: "Ananya Krishnan",
    company: "Bengaluru Bakes",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    review: "Bakery items ke liye custom printed boxes order kiye — quality dekh ke dil khush ho gaya. Branding bilkul sharp hai aur boxes sturdy bhi hain.",
    rating: 5,
  },
  {
    name: "Rohan Gupta",
    company: "Pune Electronics",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
    review: "Electronics ke liye strong corrugated boxes chahiye the. PackBox ke boxes mein products bilkul safe rehte hain. Returns bhi kaafi kam ho gayi hain.",
    rating: 5,
  },
  {
    name: "Kavya Nair",
    company: "Kochi Handlooms",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    review: "Handloom sarees ke liye premium packaging chahiye thi. PackBox ne woh diya jo hum chahte the — elegant, strong aur eco-friendly. Customers love it!",
    rating: 5,
  },
];

const CARD_WIDTH = 340;
const GAP = 20;
const DURATION = 40; // seconds for one full loop

const TestimonialCard = ({ t }) => (
  <div style={{
    flexShrink: 0,
    width: `${CARD_WIDTH}px`,
    background: 'linear-gradient(145deg, #F5F0E8 0%, #EDE8DC 100%)',
    border: '1px solid #D4C9B0',
    borderRadius: '20px',
    padding: '28px 26px 24px',
    boxShadow: '0 4px 24px rgba(44,36,22,0.07), 0 1px 4px rgba(44,36,22,0.04)',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Decorative top accent */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
      background: 'linear-gradient(90deg, #7A6040, #2C2416, #7A6040)',
      borderRadius: '20px 20px 0 0',
    }} />

    {/* Quote icon */}
    <Quote size={22} style={{ color: '#8B6F47' }} />

    {/* Review text */}
    <p style={{
      color: '#4A3B28', fontSize: '13.5px', lineHeight: 1.8,
      margin: 0, flex: 1,
      display: '-webkit-box', WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical', overflow: 'hidden',
    }}>
      "{t.review}"
    </p>

    {/* Divider */}
    <div style={{ height: '1px', background: '#D4C9B0', margin: '2px 0' }} />

    {/* Stars + author */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={t.photo} alt={t.name}
          style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #E0D5C5', flexShrink: 0 }}
        />
        <div>
          <p style={{ color: '#2C2416', fontWeight: 700, fontSize: '13.5px', margin: 0, lineHeight: 1.3 }}>{t.name}</p>
          <p style={{ color: '#A89880', fontSize: '11.5px', margin: 0, marginTop: '2px' }}>{t.company}</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '2px', flexShrink: 0 }}>
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={12} style={{ color: '#7A6040', fill: '#7A6040' }} />
        ))}
      </div>
    </div>
  </div>
);

// CSS keyframe marquee — no gap issues, perfectly seamless
const MarqueeRow = ({ items, direction = 'left' }) => {
  const totalWidth = items.length * (CARD_WIDTH + GAP);
  const animName = direction === 'left' ? 'marqueeLeft' : 'marqueeRight';

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div style={{
        display: 'flex',
        gap: `${GAP}px`,
        width: 'max-content',
        animation: `${animName} ${DURATION}s linear infinite`,
      }}>
        {/* Render 3x so there's always content visible */}
        {[...items, ...items, ...items].map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section id="testimonials" style={{ background: '#2C2416', padding: '100px 0 80px', overflow: 'hidden' }} ref={ref}>

      {/* Header */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px', textAlign: 'center', marginBottom: '60px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span style={{ color: '#C4A882', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
            Testimonials
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: '#F5F0E8', marginBottom: '16px', lineHeight: 1.15 }}>
            What Our Clients Say
          </h2>
          <p style={{ fontSize: '16px', color: '#A89880', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
            Join hundreds of satisfied businesses that trust PackBox for their packaging needs.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </motion.div>

    </section>
  );
};

export default Testimonials;
