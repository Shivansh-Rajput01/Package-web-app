# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
cd my-app
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Navigate to: `http://localhost:5173`

---

## 🎯 What You'll See

Your landing page includes:

✅ **Sticky Navigation Bar** - Smooth scrolling to all sections  
✅ **Hero Section** - Eye-catching headline with CTA buttons  
✅ **Features Section** - 6 product advantages with icons  
✅ **Gallery Section** - Product image showcase  
✅ **Testimonials Section** - Customer reviews  
✅ **Contact Form** - Lead capture form  
✅ **Footer** - Links and social media  

---

## 🎨 Quick Customization

### Change Company Name
**File**: `src/components/Navbar.jsx` (Line 42)
```javascript
<button>YourCompany</button>
```

**File**: `src/components/Footer.jsx` (Line 17)
```javascript
<h3>YourCompany</h3>
```

### Update Hero Headline
**File**: `src/components/Hero.jsx` (Line 23)
```javascript
<h1>Your Custom Headline Here</h1>
```

### Change Primary Color
Find and replace throughout:
- `orange-500` → `blue-500` (or any Tailwind color)
- `orange-600` → `blue-600`
- `orange-100` → `blue-100`

### Add Your Logo
**File**: `src/components/Navbar.jsx`
```javascript
<img src="/logo.png" alt="Logo" className="h-8" />
```

### Update Contact Email
**File**: `src/components/Footer.jsx` (Line 48)
```javascript
<span>your@email.com</span>
```

---

## 📝 Test the Contact Form

1. Scroll to the Contact section
2. Fill out the form
3. Click "Send Message"
4. Open browser console (F12)
5. See the form data logged

**To add real functionality**, see `PROJECT_GUIDE.md` → Form Handling section.

---

## 🖼️ Replace Placeholder Images

### Hero Image
**File**: `src/components/Hero.jsx` (Line 53)
```javascript
<img src="your-image-url" alt="..." />
```

### Gallery Images
**File**: `src/components/Gallery.jsx` (Lines 10-35)
```javascript
const images = [
  { url: 'your-image-1.jpg', caption: 'Caption 1' },
  { url: 'your-image-2.jpg', caption: 'Caption 2' },
  // ... more images
];
```

### Testimonial Photos
**File**: `src/components/Testimonials.jsx` (Lines 13-40)
```javascript
photo: 'your-customer-photo.jpg'
```

---

## 🎭 Animation Features

All animations work automatically:
- Sections fade in as you scroll
- Cards lift on hover
- Images zoom on hover
- Smooth scrolling between sections

No additional setup needed!

---

## 📱 Test Responsive Design

1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

---

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🚀 Deploy Your Site

### Vercel (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy automatically

### Manual Build
```bash
npm run build
# Upload 'dist' folder to your hosting
```

---

## 📚 Need More Help?

- **Full Documentation**: See `PROJECT_GUIDE.md`
- **Component Details**: See `COMPONENT_REFERENCE.md`
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

## ✨ Pro Tips

1. **Images**: Use WebP format for better performance
2. **Colors**: Stick to Tailwind's color palette for consistency
3. **Spacing**: Use Tailwind's spacing scale (4, 8, 12, 16, etc.)
4. **Typography**: Keep font sizes consistent across sections
5. **Testing**: Test on real devices, not just browser DevTools

---

## 🎉 You're Ready!

Your premium landing page is ready to customize and deploy. Start by updating the content to match your brand, then replace the placeholder images with your own.

Happy coding! 🚀
