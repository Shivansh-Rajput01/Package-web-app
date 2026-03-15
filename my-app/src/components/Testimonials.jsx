import { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Delhi Handicrafts",
    review: "Box ki quality ekdum top-notch hai. Cardboard itna strong hai ki transit mein koi bhi damage nahi hota. Aur price bhi market mein sabse competitive hai. Full paisa vasool!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    company: "Jaipur Jewels",
    review: "Humne 500 custom printed boxes order kiye — printing sharp thi, corners tight the, aur rate bhi reasonable tha. Bulk mein itni achi quality milna mushkil hota hai. Bahut khush hain.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    company: "Mumbai Spices Co.",
    review: "Corrugated boxes ki thickness aur strength exactly waise hi thi jaise describe kiya gaya tha. Pricing bhi fair hai aur bulk discount ne budget mein bahut help ki. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    company: "Chennai Organics",
    review: "Eco-friendly kraft boxes order kiye the — quality dekh ke dil khush ho gaya. Na zyada bhaari, na kamzor. Aur cost bhi plastic packaging se zyada nahi thi. Perfect choice!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "Ludhiana Exports",
    review: "Pehli baar order kiya toh sample box dekh ke hi confirm kar liya. Material premium tha aur rate bhaav mein tha. Ab regularly bulk orders dete hain — quality consistent rehti hai.",
    rating: 5,
  },
  {
    name: "Ananya Krishnan",
    company: "Bengaluru Retail Co.",
    review: "Custom size boxes banwaye the — exact dimensions mile, sealing strong thi, aur per-box cost bhi budget mein fit ho gayi. UpTechWork ka packaging quality pe koi compromise nahi.",
    rating: 5,
  },
  {
    name: "Rohan Gupta",
    company: "Pune Distributors",
    review: "Double-wall corrugated boxes liye the heavy items ke liye. Boxes ne poora weight handle kiya bina kisi damage ke. Price bhi fair tha considering the strength. Bahut satisfied hain.",
    rating: 5,
  },
  {
    name: "Kavya Nair",
    company: "Kochi Traders",
    review: "Box printing quality aur material dono hi excellent hain. Humne 3 baar order kiya hai aur har baar quality same rahi. Pricing transparent hai — koi hidden charges nahi. Trust worthy!",
    rating: 5,
  },
];

const CARD_WIDTH = 340;
const GAP = 20;
const DURATION = 40; // seconds for one full loop

const TestimonialCard = ({ t }) => (
  <div className="testimonial-card" style={{
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
        {/* Initials avatar — no external image needed */}
        <div style={{
          width: '42px', height: '42px', borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, #7A6040, #2C2416)',
          border: '2px solid #E0D5C5',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '14px', fontWeight: 700, color: '#F5F0E8', letterSpacing: '0.02em',
        }}>
          {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
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
  const animName = direction === 'left' ? 'marqueeLeft' : 'marqueeRight';

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: `${GAP}px`,
          width: 'max-content',
          animation: `${animName} ${DURATION}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section id="testimonials" style={{ background: '#2C2416', padding: '100px 0 80px', overflow: 'hidden' }}>

      {/* Header */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px', textAlign: 'center', marginBottom: '60px' }}>
        <Reveal variant="fadeUp">
          <span style={{ color: '#C4A882', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
            Testimonials
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: '#F5F0E8', marginBottom: '16px', lineHeight: 1.15 }}>
            What Our Clients Say
          </h2>
          <p style={{ fontSize: '16px', color: '#A89880', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
            Join hundreds of satisfied businesses that trust UpTechWork for their packaging needs.
          </p>
        </Reveal>
      </div>

      {/* Marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

    </section>
  );
};

export default Testimonials;
