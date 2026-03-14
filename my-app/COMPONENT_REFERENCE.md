# Component Reference Guide

## 🧩 Component Breakdown

### 1. Navbar Component
**File**: `src/components/Navbar.jsx`

**Features**:
- Sticky positioning with scroll detection
- Blur background effect when scrolled
- Smooth scroll navigation
- Mobile hamburger menu with animation
- Responsive design

**Key Props**: None (self-contained)

**Customization**:
```javascript
// Change company name
<button>PackBox</button> // Line 42

// Add/remove nav links
const navLinks = [
  { name: 'Home', id: 'home' },
  // Add more links here
];
```

---

### 2. Hero Component
**File**: `src/components/Hero.jsx`

**Features**:
- Large headline with gradient text
- Two CTA buttons
- Hero image with gradient overlay
- Entrance animations
- Smooth scroll to sections

**Customization**:
```javascript
// Update headline
<h1>Your Custom Headline</h1> // Line 23

// Update description
<p>Your custom description</p> // Line 28

// Change hero image
src="your-image-url" // Line 53
```

---

### 3. Features Component
**File**: `src/components/Features.jsx`

**Features**:
- 6 feature cards in responsive grid
- Icon + Title + Description
- Hover lift animation
- Staggered entrance animations

**Customization**:
```javascript
// Add/edit features
const features = [
  {
    icon: YourIcon, // From lucide-react
    title: 'Your Feature',
    description: 'Your description',
  },
  // Add more features
];
```

**Available Icons**: Import from `lucide-react`
- Shield, Leaf, Palette, Boxes, Lock, Truck
- See: https://lucide.dev/icons/

---

### 4. Gallery Component
**File**: `src/components/Gallery.jsx`

**Features**:
- 6 images in responsive grid
- Hover zoom effect
- Overlay caption on hover
- Staggered entrance animations

**Customization**:
```javascript
// Update images
const images = [
  {
    url: 'your-image-url',
    caption: 'Your Caption',
  },
  // Add more images
];
```

**Image Sources**:
- Unsplash (current)
- Your own product photos
- Stock photo services

---

### 5. Testimonials Component
**File**: `src/components/Testimonials.jsx`

**Features**:
- 4 testimonial cards
- Customer photo, name, company
- 5-star rating display
- Gradient card backgrounds

**Customization**:
```javascript
// Add/edit testimonials
const testimonials = [
  {
    name: 'Customer Name',
    company: 'Company Name',
    photo: 'photo-url',
    review: 'Review text',
    rating: 5,
  },
  // Add more testimonials
];
```

---

### 6. Contact Component
**File**: `src/components/Contact.jsx`

**Features**:
- Contact form with validation
- Name, Email, Phone, Message fields
- Form state management
- Submit handler (console log)

**Customization**:
```javascript
// Update form handler
const handleSubmit = (e) => {
  e.preventDefault();
  // Add your API call here
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

**Integration Options**:
- Formspree
- EmailJS
- Netlify Forms
- Custom backend API

---

### 7. Footer Component
**File**: `src/components/Footer.jsx`

**Features**:
- Company branding
- Quick navigation links
- Contact information
- Social media icons
- Copyright notice

**Customization**:
```javascript
// Update company name
<h3>Your Company</h3> // Line 17

// Update contact email
<span>your@email.com</span> // Line 48

// Update social links
<a href="your-social-url"> // Lines 66-86
```

---

## 🎨 Styling Guide

### Color Classes
```javascript
// Primary Orange
bg-orange-500    // Background
text-orange-500  // Text
border-orange-500 // Border

// Secondary
bg-orange-100    // Light background
bg-orange-50     // Very light background

// Neutral
bg-slate-800     // Dark background
text-slate-600   // Body text
text-slate-800   // Heading text
```

### Common Patterns

**Card with Hover**:
```javascript
<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
  {/* Content */}
</div>
```

**Button Primary**:
```javascript
<button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all">
  Button Text
</button>
```

**Button Secondary**:
```javascript
<button className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold border-2 border-slate-200 hover:border-orange-500">
  Button Text
</button>
```

---

## 🎭 Animation Patterns

### Fade In on Scroll
```javascript
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Component = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Content */}
      </motion.div>
    </section>
  );
};
```

### Hover Animation
```javascript
<motion.div
  whileHover={{ y: -8, transition: { duration: 0.2 } }}
  className="..."
>
  {/* Content */}
</motion.div>
```

### Staggered Children
```javascript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

<motion.div variants={container} initial="hidden" animate="show">
  {items.map((item) => (
    <motion.div key={item.id} variants={item}>
      {/* Content */}
    </motion.div>
  ))}
</motion.div>
```

---

## 📱 Responsive Breakpoints

```javascript
// Tailwind breakpoints
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large devices

// Usage
<div className="grid md:grid-cols-2 lg:grid-cols-3">
  // 1 column on mobile
  // 2 columns on tablet
  // 3 columns on desktop
</div>
```

---

## 🔧 Common Modifications

### Change Primary Color
1. Find all instances of `orange-500`, `orange-600`, etc.
2. Replace with your color: `blue-500`, `purple-500`, etc.

### Add New Section
1. Create component in `src/components/`
2. Import in `LandingPage.jsx`
3. Add to render order
4. Add navigation link in `Navbar.jsx`

### Update Images
1. Replace Unsplash URLs with your own
2. Maintain aspect ratios for best results
3. Optimize images for web (WebP format recommended)

### Modify Form Behavior
1. Open `Contact.jsx`
2. Update `handleSubmit` function
3. Add API endpoint or service integration

---

## 🚀 Performance Optimization

### Image Optimization
```javascript
// Use next-gen formats
<img src="image.webp" alt="..." />

// Add loading attribute
<img loading="lazy" src="..." alt="..." />
```

### Code Splitting
```javascript
// Lazy load components
const Gallery = lazy(() => import('./components/Gallery'));
```

### Animation Performance
- Framer Motion uses GPU acceleration
- Animations are optimized by default
- Use `will-change` CSS for custom animations

---

## 📚 Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev/icons/
- **Unsplash**: https://unsplash.com/
- **React Docs**: https://react.dev/

---

Built with modern web technologies for optimal performance and user experience.
