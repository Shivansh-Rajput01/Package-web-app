import { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import VideoHero from '../components/VideoHero';
import Hero from '../components/Hero';

// Lazy-load below-fold sections — reduces initial JS parse cost
const Features     = lazy(() => import('../components/Features'));
const Gallery      = lazy(() => import('../components/Gallery'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact      = lazy(() => import('../components/Contact'));
const Footer       = lazy(() => import('../components/Footer'));

// Minimal fallback — matches section bg so there's no flash
const Fallback = ({ bg = '#F5F0E8' }) => (
  <div style={{ minHeight: '200px', background: bg }} />
);

const LandingPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <VideoHero />
    <Hero />
    <Suspense fallback={<Fallback bg="#2C2416" />}>
      <Features />
    </Suspense>
    <Suspense fallback={<Fallback bg="#EDE8DC" />}>
      <Gallery />
    </Suspense>
    <Suspense fallback={<Fallback bg="#2C2416" />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<Fallback bg="#1E1509" />}>
      <Contact />
    </Suspense>
    <Suspense fallback={<Fallback bg="#1E1509" />}>
      <Footer />
    </Suspense>
  </div>
);

export default LandingPage;
