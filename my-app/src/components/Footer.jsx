import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Clock } from 'lucide-react';

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
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.02em', color: '#FAF7F2' }}>
              Pack<span style={{ color: '#C4A882' }}>Box</span><span style={{ color: '#8B6F47', fontSize: '34px' }}>.</span>
            </span>
            <p style={{ color: '#A89880', fontSize: '14px', lineHeight: 1.8, maxWidth: '220px' }}>
              Premium packaging solutions for modern businesses. Quality, sustainability, and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ color: '#FAF7F2', fontSize: '15px', fontWeight: 700, marginBottom: '22px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: Mail,  text: 'info@packbox.in' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: Clock, text: 'Mon–Fri: 9AM – 6PM' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#A89880', fontSize: '14px' }}>
                  <Icon size={15} style={{ color: '#C4A882', flexShrink: 0 }} />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          </div>

        </div>

        {/* Divider + copyright */}
        <div style={{ borderTop: '1px solid #2C2416', padding: '28px 0', textAlign: 'center' }}>
          <p style={{ color: '#6B5B3E', fontSize: '13px', margin: 0 }}>
            &copy; 2026 PackBox. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
