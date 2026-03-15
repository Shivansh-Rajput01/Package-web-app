import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "PRODUCTS", id: "features" },
    { name: "ABOUT", id: "home" },
    { name: "GALLERY", id: "gallery" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(245,240,232,0.82)' : 'rgba(245,240,232,0.75)',
          borderBottom: '1px solid #D4C9B0',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled ? '0 2px 16px rgba(44,36,22,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between navbar-inner" style={{ paddingLeft: '210px', paddingRight: '110px' }}>

          <button
            onClick={() => scrollToSection("video-home")}
            className="text-xl font-black tracking-widest uppercase flex-shrink-0 transition-colors"
            style={{ color: '#2C2416' }}
            onMouseEnter={e => e.target.style.color = '#8B6F47'}
            onMouseLeave={e => e.target.style.color = '#2C2416'}
          >
            UpTechWork
          </button>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-semibold tracking-widest uppercase transition-colors"
                style={{ color: '#6B5B3E' }}
                onMouseEnter={e => e.target.style.color = '#2C2416'}
                onMouseLeave={e => e.target.style.color = '#6B5B3E'}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6 flex-shrink-0">
            {[{ Icon: ShoppingBag, label: '(0)' }, { Icon: Search, label: 'Search' }].map(({ Icon, label }) => (
              <button
                key={label}
                className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-colors"
                style={{ color: '#6B5B3E' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#2C2416' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#6B5B3E' }}
              >
                <Icon size={16} strokeWidth={1.5} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: '#2C2416', padding: '4px' }}
              aria-label="Toggle menu"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>

        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(22, 13, 4, 0.88)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              padding: '0 32px',
            }}
          >
            {/* Top bar: logo + close */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '80px',
              flexShrink: 0,
            }}>
              <button
                onClick={() => scrollToSection("video-home")}
                style={{
                  color: '#F5F0E8',
                  fontSize: '20px',
                  fontWeight: 900,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                UpTechWork
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  color: '#F5F0E8',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                }}
                aria-label="Close menu"
              >
                <X size={26} strokeWidth={2} />
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(245,240,232,0.12)', flexShrink: 0 }} />

            {/* Nav links — centered */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'center',
                    color: '#F5F0E8',
                    fontSize: '32px',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(245,240,232,0.08)',
                    lineHeight: 1,
                    width: '100%',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C4A882'}
                  onMouseLeave={e => e.currentTarget.style.color = '#F5F0E8'}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Bottom brand mark — centered */}
            <div style={{ paddingBottom: '40px', flexShrink: 0, textAlign: 'center' }}>
              <p style={{ color: 'rgba(245,240,232,0.3)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Premium Packaging Solutions
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
