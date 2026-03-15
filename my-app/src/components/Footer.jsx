import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Clock } from 'lucide-react';
import Reveal from './Reveal';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const links = ['home', 'features', 'gallery', 'contact'];
  const socials = [
    { icon: Facebook,  href: '#' },
    { icon: Twitter,   href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin,  href: '#' },
  ];

  return (
    <footer style={{ background: '#1E1509', color: '#FAF7F2', padding: '80px 0 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }} className="footer-inner">

        {/* Top grid */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1.4fr 1fr', gap: '48px', marginBottom: '64px', textAlign: 'center' }}>

          {/* Brand */}
          <Reveal variant="fadeUp" className="footer-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.02em', color: '#FAF7F2' }}>
              UpTech<span style={{ color: '#C4A882' }}>Work</span><span style={{ color: '#8B6F47', fontSize: '34px' }}>.</span>
            </span>
            <p style={{ color: '#A89880', fontSize: '14px', lineHeight: 1.8, maxWidth: '220px' }}>
              Premium packaging solutions for modern businesses. Quality, sustainability, and reliability.
            </p>
          </Reveal>

          {/* Quick Links */}
          <Reveal variant="fadeUp" delay={0.1} className="footer-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ color: '#FAF7F2', fontSize: '15px', fontWeight: 700, marginBottom: '22px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {links.map(id => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    style={{ background: 'none', border: 'none', color: '#A89880', fontSize: '14px', cursor: 'pointer', padding: 0, transition: 'color 0.2s', textTransform: 'capitalize' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C4A882'}
                    onMouseLeave={e => e.currentTarget.style.color = '#A89880'}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal variant="fadeUp" delay={0.2} className="footer-contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ color: '#FAF7F2', fontSize: '15px', fontWeight: 700, marginBottom: '22px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: Mail,  text: 'Info@uptechwork.com', href: 'mailto:Info@uptechwork.com' },
                { icon: Phone, text: '+91 87705 60198', href: 'tel:+918770560198' },
                { icon: Phone, text: '+91 91115 57774', href: 'tel:+919111557774' },
                { icon: Clock, text: 'Mon–Fri: 9AM – 6PM' },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '14px' }}>
                  <Icon size={15} style={{ color: '#C4A882', flexShrink: 0 }} />
                  {href
                    ? <a href={href} style={{ color: '#A89880', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#C4A882'}
                        onMouseLeave={e => e.currentTarget.style.color = '#A89880'}
                      >{text}</a>
                    : <span style={{ color: '#A89880' }}>{text}</span>
                  }
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Follow Us */}
          <Reveal variant="fadeUp" delay={0.3} className="footer-follow" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ color: '#FAF7F2', fontSize: '15px', fontWeight: 700, marginBottom: '22px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#2C2416', border: '1px solid #3D3020', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A89880', transition: 'background 0.2s, color 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#3D3020'; e.currentTarget.style.color = '#C4A882'; e.currentTarget.style.borderColor = '#C4A882'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#2C2416'; e.currentTarget.style.color = '#A89880'; e.currentTarget.style.borderColor = '#3D3020'; }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </Reveal>

        </div>

        {/* Divider + copyright */}
        <Reveal variant="fadeIn" delay={0.2}>
          <div style={{ borderTop: '1px solid #2C2416', padding: '28px 0', textAlign: 'center' }}>
            <p style={{ color: '#6B5B3E', fontSize: '13px', margin: 0 }}>
              &copy; 2026 UpTechWork. All rights reserved.
            </p>
          </div>
        </Reveal>

      </div>
    </footer>
  );
};

export default Footer;
