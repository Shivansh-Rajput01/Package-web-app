# PackBox - Premium Packaging Landing Page

A modern, premium one-page landing website for a delivery packaging box company built with React, TailwindCSS, and Framer Motion.

## 🚀 Tech Stack

- **React.js** (Vite)
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with smooth scroll
│   ├── Hero.jsx            # Hero section with CTA buttons
│   ├── Features.jsx        # 6 feature cards with icons
│   ├── Gallery.jsx         # Product image gallery
│   ├── Testimonials.jsx    # Customer testimonials
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer with links
├── pages/
│   └── LandingPage.jsx     # Main landing page component
├── App.jsx                 # Root component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Design Features

- Clean, modern, premium UI
- Minimalistic layout with whitespace
- Smooth scrolling between sections
- Soft shadows and rounded corners
- Subtle hover animations
- Section entrance animations on scroll
- Gradient backgrounds
- Mobile-first responsive design

## 🎨 Color Palette

- **Primary**: #F97316 (orange)
- **Secondary**: #FB923C (light orange)
- **Neutral**: white / light gray
- **Accent**: dark slate

## 📦 Installation & Setup

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🧩 Components Overview

### Navbar
- Sticky navigation with blur background on scroll
- Smooth scroll to sections
- Mobile hamburger menu
- Responsive design

### Hero Section
- Strong headline and description
- Two CTA buttons (Get a Quote, Explore Boxes)
- Hero image with gradient background
- Entrance animations

### Features Section
- 6 feature cards in responsive grid
- Icons from Lucide React
- Hover lift animation
- Staggered entrance animations

### Gallery Section
- 6 product images in grid layout
- Hover zoom effect
- Overlay caption on hover
- Unsplash placeholder images

### Testimonials Section
- 4 customer testimonials
- Customer photos and ratings
- Company information
- Card hover effects

### Contact Section
- Clean contact form
- Form fields: Name, Email, Phone, Message
- Form validation
- Console log on submit

### Footer
- Company branding
- Quick navigation links
- Contact information
- Social media icons
- Copyright notice

## 🎭 Animations

All animations are powered by Framer Motion:
- Section fade-in on scroll (using `useInView`)
- Hero content entrance animation
- Card hover animations
- Image hover zoom effects
- Staggered children animations

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg
- Hamburger menu for mobile
- Responsive grid layouts
- Flexible typography

## 🖼️ Images

All images are sourced from Unsplash as placeholders. Replace with actual product images:
- Hero image
- Gallery images (6 total)
- Testimonial photos (4 total)

## 🔧 Customization

### Update Colors
Edit Tailwind classes in components:
- `bg-orange-500` → Primary color
- `text-orange-500` → Text color
- `border-orange-300` → Border color

### Update Content
- **Company name**: Search for "PackBox" and replace
- **Contact info**: Update in Footer.jsx
- **Features**: Edit features array in Features.jsx
- **Testimonials**: Edit testimonials array in Testimonials.jsx

### Add Real Images
Replace Unsplash URLs with your own:
- Hero.jsx - Line 35
- Gallery.jsx - Lines 10-35
- Testimonials.jsx - Lines 13-40

## 📝 Form Handling

The contact form currently logs to console. To add real functionality:

1. **Add backend API**:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

2. **Or use a service** like Formspree, EmailJS, or Netlify Forms

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## ✨ Features Implemented

✅ Sticky navbar with blur effect  
✅ Smooth scrolling navigation  
✅ Mobile hamburger menu  
✅ Hero section with CTAs  
✅ 6 feature cards with icons  
✅ Product gallery with hover effects  
✅ Customer testimonials  
✅ Contact form with validation  
✅ Footer with social links  
✅ Framer Motion animations  
✅ Fully responsive design  
✅ Production-quality UI  

## 🎯 Performance Tips

- Images are lazy-loaded by default in modern browsers
- Framer Motion animations use GPU acceleration
- TailwindCSS purges unused styles in production
- Vite provides optimized builds

## 📄 License

This project is open source and available for commercial use.

---

Built with ❤️ using React, TailwindCSS, and Framer Motion
