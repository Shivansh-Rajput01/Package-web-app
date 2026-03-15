import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Snappy spring-based variants
const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 240, damping: 24 } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 240, damping: 24 } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 280, damping: 20 } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  },
};

/**
 * Reveal — wraps children with a scroll-triggered animation.
 * @param {string}  variant  - one of: fadeUp | fadeDown | fadeLeft | fadeRight | scaleIn | fadeIn
 * @param {number}  delay    - stagger delay in seconds
 * @param {string}  margin   - IntersectionObserver rootMargin (default '-60px')
 * @param {object}  style    - extra inline styles on the wrapper
 * @param {string}  className
 */
const Reveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  margin = '-60px',
  style,
  className,
  as = 'div',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });

  const v = variants[variant];
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      variants={v}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ willChange: 'transform, opacity', ...style }}
      className={className}
      custom={delay}
      transition={delay ? { ...v.visible?.transition, delay } : undefined}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
