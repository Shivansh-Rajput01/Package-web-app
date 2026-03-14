# 📦 PackBox - Premium Packaging Landing Page

A modern, production-ready landing page for a packaging box company built with React, TailwindCSS, and Framer Motion.

![Tech Stack](https://img.shields.io/badge/React-19.2.4-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Latest-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.36.0-ff0055)
![Lucide Icons](https://img.shields.io/badge/Lucide%20Icons-0.577.0-orange)

---

## ✨ Features

- 🎨 **Modern Premium UI** - Clean, professional design inspired by Stripe and Notion
- 🎭 **Smooth Animations** - Framer Motion powered scroll animations and interactions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Performance Optimized** - Fast loading with Vite and optimized assets
- ♿ **Accessible** - Semantic HTML and ARIA-compliant components
- 🎯 **SEO Ready** - Proper structure for search engine optimization
- 🔧 **Easy to Customize** - Well-organized components and clear documentation

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
my-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation
│   │   ├── Hero.jsx            # Hero section with CTAs
│   │   ├── Features.jsx        # 6 feature cards
│   │   ├── Gallery.jsx         # Product image gallery
│   │   ├── Testimonials.jsx    # Customer reviews
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer with links
│   ├── pages/
│   │   └── LandingPage.jsx     # Main page component
│   ├── App.jsx                 # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/                     # Static assets
├── QUICK_START.md             # Quick start guide
├── PROJECT_GUIDE.md           # Detailed documentation
├── COMPONENT_REFERENCE.md     # Component API reference
└── LAYOUT_STRUCTURE.md        # Visual layout guide
```

---

## 🎨 Design System

### Color Palette
- **Primary**: `#F97316` (Orange 500)
- **Secondary**: `#FB923C` (Orange 400)
- **Neutral**: White / Slate Gray
- **Accent**: Dark Slate

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, 36-60px
- **Body**: Regular, 16-20px

### Spacing
- **Section Padding**: 80px (py-20)
- **Container Max Width**: 1280px
- **Card Padding**: 32px (p-8)

---

## 📄 Page Sections

### 1. Navbar
- Sticky positioning with blur effect on scroll
- Smooth scroll navigation
- Mobile hamburger menu
- Responsive design

### 2. Hero Section
- Eye-catching headline with gradient text
- Two CTA buttons (Get a Quote, Explore Boxes)
- Hero image with gradient overlay
- Entrance animations

### 3. Features Section
- 6 feature cards in responsive grid
- Icons: Shield, Leaf, Palette, Boxes, Lock, Truck
- Hover lift animation
- Staggered entrance animations

### 4. Gallery Section
- 6 product images in grid layout
- Hover zoom effect (110%)
- Overlay caption on hover
- Responsive grid (1/2/3 columns)

### 5. Testimonials Section
- 4 customer testimonials
- Customer photos and 5-star ratings
- Company information
- Gradient card backgrounds

### 6. Contact Section
- Clean contact form
- Fields: Name, Email, Phone, Message
- Form validation
- Submit handler (console log - ready for API integration)

### 7. Footer
- Company branding
- Quick navigation links
- Contact information
- Social media icons (Facebook, Twitter, Instagram, LinkedIn)
- Copyright notice

---

## 🎭 Animations

All animations are powered by Framer Motion:

- **On Page Load**: Hero content slides in
- **On Scroll**: Sections fade in when entering viewport
- **On Hover**: Cards lift, images zoom, buttons scale
- **Smooth Scrolling**: Between all sections

---

## 🔧 Customization

### Change Company Name
Search and replace `PackBox` with your company name in:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`

### Update Colors
Find and replace color classes:
- `orange-500` → Your primary color
- `orange-600` → Your primary hover color
- `orange-100` → Your light accent color

### Replace Images
Update image URLs in:
- `src/components/Hero.jsx` (Line 53)
- `src/components/Gallery.jsx` (Lines 10-35)
- `src/components/Testimonials.jsx` (Lines 13-40)

### Modify Content
Edit the content arrays in each component:
- Features: `src/components/Features.jsx`
- Testimonials: `src/components/Testimonials.jsx`
- Gallery: `src/components/Gallery.jsx`

---

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Get started in 3 steps
- **[PROJECT_GUIDE.md](./PROJECT_GUIDE.md)** - Complete documentation
- **[COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)** - Component API and patterns
- **[LAYOUT_STRUCTURE.md](./LAYOUT_STRUCTURE.md)** - Visual layout guide

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Other Platforms
Build the project and upload the `dist` folder to your hosting provider.

---

## 🛠️ Tech Stack

- **[React 19.2.4](https://react.dev/)** - UI library
- **[Vite 8.0.0](https://vitejs.dev/)** - Build tool
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion 12.36.0](https://www.framer.com/motion/)** - Animation library
- **[Lucide React 0.577.0](https://lucide.dev/)** - Icon library

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "framer-motion": "^12.36.0",
    "lucide-react": "^0.577.0"
  }
}
```

---

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 License

This project is open source and available for commercial use.

---

## 🤝 Contributing

Feel free to customize this template for your needs. If you create something cool, share it!

---

## 💡 Tips

1. **Images**: Use WebP format for better performance
2. **Colors**: Maintain consistency with Tailwind's color palette
3. **Spacing**: Use Tailwind's spacing scale (4, 8, 12, 16)
4. **Testing**: Test on real devices, not just DevTools
5. **Performance**: Optimize images before deployment

---

## 📞 Support

For questions or issues:
- Check the documentation files
- Review component code comments
- Visit [Tailwind Docs](https://tailwindcss.com/docs)
- Visit [Framer Motion Docs](https://www.framer.com/motion/)

---

## 🎉 Ready to Launch!

Your premium landing page is production-ready. Customize the content, add your images, and deploy!

**Built with ❤️ using React, TailwindCSS, and Framer Motion**

---

### Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. 📝 Update company name and content
4. 🖼️ Replace placeholder images
5. 🎨 Customize colors (optional)
6. 🚀 Deploy to production

Happy coding! 🚀
