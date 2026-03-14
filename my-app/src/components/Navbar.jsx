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
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(245,240,232,0.92)' : '#F5F0E8',
        borderBottom: '1px solid #D4C9B0',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 12px rgba(44,36,22,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between navbar-inner" style={{ paddingLeft: '210px', paddingRight: '110px' }}>

        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-black tracking-widest uppercase flex-shrink-0 transition-colors"
          style={{ color: '#2C2416' }}
          onMouseEnter={e => e.target.style.color = '#8B6F47'}
          onMouseLeave={e => e.target.style.color = '#2C2416'}
        >
          PackBox
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
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: '#6B5B3E' }}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: '#F5F0E8', borderTop: '1px solid #D4C9B0' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-xs font-semibold tracking-widest uppercase py-2 transition-colors"
                  style={{ color: '#6B5B3E' }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
