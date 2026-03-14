import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    background: 'transparent',
    border: '1.5px solid rgba(245,240,232,0.3)',
    borderRadius: '10px',
    padding: '16px 20px',
    color: '#FAF7F2',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.13em',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  };

  const infoItems = [
    { icon: Phone,  lines: ['+91 98765 43210', '+91 91234 56789'] },
    { icon: Mail,   lines: ['info@packbox.in', 'support@packbox.in'] },
    { icon: MapPin, lines: ['12, Industrial Area, Sector 5,', 'New Delhi – 110001, India'] },
  ];

  return (
    <section id="contact" ref={ref} style={{ minHeight: '100vh', display: 'flex', alignItems: 'stretch' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', width: '100%' }}
        className="contact-grid"
      >
        {/* LEFT */}
        <div style={{
          background: '#1E1509', padding: '72px 56px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden',
        }} className="contact-left">
          <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(196,180,154,0.07)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(196,180,154,0.05)', pointerEvents: 'none' }} />

          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 900, color: '#FAF7F2', marginBottom: '18px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                GET IN TOUCH
              </h2>
              <p style={{ fontSize: '15px', color: '#A89880', lineHeight: 1.75, marginBottom: '52px', maxWidth: '280px' }}>
                Need custom packaging for your business? We're here to help you find the perfect solution.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {infoItems.map(({ icon: Icon, lines }) => (
                <div key={lines[0]} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0, background: 'rgba(196,180,154,0.1)', border: '1px solid rgba(196,180,154,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} style={{ color: '#C4B49A' }} />
                  </div>
                  <div style={{ paddingTop: '2px' }}>
                    {lines.map(l => (
                      <p key={l} style={{ color: '#C4B49A', fontSize: '14px', margin: 0, lineHeight: 1.85 }}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ marginTop: '60px' }}>
            <span style={{ fontSize: '22px', fontWeight: 900, color: '#FAF7F2', letterSpacing: '-0.02em' }}>
              Pack<span style={{ color: '#C4A882' }}>Box</span><span style={{ color: '#8B6F47', fontSize: '28px' }}>.</span>
            </span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ background: '#7A6040', padding: '72px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          className="contact-right"
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '560px', width: '100%', margin: '0 auto' }}>
            <input
              type="text" name="name" value={formData.name} onChange={handleChange} required
              placeholder="YOUR NAME" style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(245,240,232,0.75)'}
              onBlur={e => e.target.style.borderColor = 'rgba(245,240,232,0.3)'}
            />
            <input
              type="email" name="email" value={formData.email} onChange={handleChange} required
              placeholder="YOUR EMAIL" style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(245,240,232,0.75)'}
              onBlur={e => e.target.style.borderColor = 'rgba(245,240,232,0.3)'}
            />
            <textarea
              name="message" value={formData.message} onChange={handleChange} required
              placeholder="YOUR MESSAGE" rows={7}
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={e => e.target.style.borderColor = 'rgba(245,240,232,0.75)'}
              onBlur={e => e.target.style.borderColor = 'rgba(245,240,232,0.3)'}
            />
            <button
              type="submit"
              style={{ background: '#1E1509', color: '#FAF7F2', border: 'none', borderRadius: '10px', padding: '18px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', transition: 'background 0.2s, box-shadow 0.2s', marginTop: '4px' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0e0a04'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1E1509'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Contact;
