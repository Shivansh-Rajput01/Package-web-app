import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Video is served from /public so it streams directly without bundling
const VIDEO_SRC = '/Home.mp4';

const VideoHero = () => {
  const scrollToHero = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="video-home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1E1509', // fallback while video loads
      }}
    >
      {/* Background video — no overlay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 0,
          display: 'block',
        }}
      >
        {/* Serve from /public for direct streaming, no bundler processing */}
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToHero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '36px', left: '50%',
          transform: 'translateX(-50%)', zIndex: 2,
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}
      >
        <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.7)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} style={{ color: 'rgba(245,240,232,0.7)' }} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default VideoHero;
