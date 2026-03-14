# 📐 Layout Structure

## Visual Page Flow

```
┌─────────────────────────────────────────────────────────────┐
│                         NAVBAR                               │
│  [Logo]              [Home] [Features] [Gallery] [Contact]  │
│                                                    [☰ Menu]  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                            │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │  Premium Packaging   │  │                      │        │
│  │  Boxes for Modern    │  │    [Hero Image]      │        │
│  │  Businesses          │  │                      │        │
│  │                      │  │                      │        │
│  │  [Get Quote] [Explore]│  └──────────────────────┘        │
│  └──────────────────────┘                                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    FEATURES SECTION                          │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │  [Icon]  │  │  [Icon]  │  │  [Icon]  │                 │
│  │  Title   │  │  Title   │  │  Title   │                 │
│  │  Desc    │  │  Desc    │  │  Desc    │                 │
│  └──────────┘  └──────────┘  └──────────┘                 │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │  [Icon]  │  │  [Icon]  │  │  [Icon]  │                 │
│  │  Title   │  │  Title   │  │  Title   │                 │
│  │  Desc    │  │  Desc    │  │  Desc    │                 │
│  └──────────┘  └──────────┘  └──────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    GALLERY SECTION                           │
│                                                              │
│  ┌────────┐  ┌────────┐  ┌────────┐                       │
│  │ Image  │  │ Image  │  │ Image  │                       │
│  │   1    │  │   2    │  │   3    │                       │
│  └────────┘  └────────┘  └────────┘                       │
│                                                              │
│  ┌────────┐  ┌────────┐  ┌────────┐                       │
│  │ Image  │  │ Image  │  │ Image  │                       │
│  │   4    │  │   5    │  │   6    │                       │
│  └────────┘  └────────┘  └────────┘                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  TESTIMONIALS SECTION                        │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  [Photo] │  │  [Photo] │  │  [Photo] │  │  [Photo] │  │
│  │  Name    │  │  Name    │  │  Name    │  │  Name    │  │
│  │  Company │  │  Company │  │  Company │  │  Company │  │
│  │  ★★★★★   │  │  ★★★★★   │  │  ★★★★★   │  │  ★★★★★   │  │
│  │  Review  │  │  Review  │  │  Review  │  │  Review  │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    CONTACT SECTION                           │
│                                                              │
│              ┌─────────────────────────┐                    │
│              │  [Name Input]           │                    │
│              │  [Email Input]          │                    │
│              │  [Phone Input]          │                    │
│              │  [Message Textarea]     │                    │
│              │  [Send Message Button]  │                    │
│              └─────────────────────────┘                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                         FOOTER                               │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ PackBox  │  │ Quick    │  │ Contact  │  │ Follow   │  │
│  │ About    │  │ Links    │  │ Info     │  │ Us       │  │
│  │          │  │          │  │          │  │ [Icons]  │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                              │
│              © 2026 PackBox. All rights reserved.           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📱 Responsive Breakpoints

### Mobile (< 768px)
```
┌──────────────┐
│   NAVBAR     │
│   [☰ Menu]   │
└──────────────┘
┌──────────────┐
│     HERO     │
│   [Content]  │
│   [Image]    │
└──────────────┘
┌──────────────┐
│   FEATURES   │
│  [Feature 1] │
│  [Feature 2] │
│  [Feature 3] │
│  [Feature 4] │
│  [Feature 5] │
│  [Feature 6] │
└──────────────┘
```

### Tablet (768px - 1024px)
```
┌────────────────────────┐
│       NAVBAR           │
│ [Logo] [Links]         │
└────────────────────────┘
┌────────────────────────┐
│        HERO            │
│  [Content] | [Image]   │
└────────────────────────┘
┌────────────────────────┐
│      FEATURES          │
│  [Card 1] [Card 2]     │
│  [Card 3] [Card 4]     │
│  [Card 5] [Card 6]     │
└────────────────────────┘
```

### Desktop (> 1024px)
```
┌──────────────────────────────────┐
│           NAVBAR                  │
│  [Logo]    [Links]                │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│            HERO                   │
│  [Content]  |  [Large Image]      │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│          FEATURES                 │
│  [Card 1] [Card 2] [Card 3]      │
│  [Card 4] [Card 5] [Card 6]      │
└──────────────────────────────────┘
```

---

## 🎨 Color Zones

```
┌─────────────────────────────────────┐
│  NAVBAR - White/Transparent         │ ← Blur on scroll
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  HERO - Orange Gradient             │ ← from-orange-50
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  FEATURES - White                   │ ← Clean white
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  GALLERY - Orange/Slate Gradient    │ ← from-slate-50
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  TESTIMONIALS - White               │ ← Clean white
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  CONTACT - Orange Gradient          │ ← from-orange-50
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  FOOTER - Dark Slate                │ ← bg-slate-900
└─────────────────────────────────────┘
```

---

## 🎭 Animation Triggers

### On Page Load
- Hero content slides in from left
- Hero image slides in from right

### On Scroll (when section enters viewport)
- Section headings fade in
- Feature cards stagger in (0.1s delay each)
- Gallery images stagger in
- Testimonial cards stagger in
- Contact form fades in

### On Hover
- Feature cards lift up (-8px)
- Gallery images zoom (110%)
- Buttons scale slightly (105%)
- Social icons change color

### On Click
- Smooth scroll to section
- Form submission animation

---

## 📏 Spacing System

```
Section Padding:
- Top/Bottom: py-20 (80px)

Container:
- Max Width: max-w-7xl (1280px)
- Padding: px-4 sm:px-6 lg:px-8

Card Spacing:
- Padding: p-8 (32px)
- Gap: gap-8 (32px)

Text Spacing:
- Heading margin: mb-4 (16px)
- Paragraph margin: mb-8 (32px)
```

---

## 🔤 Typography Scale

```
Hero Headline:
- Mobile: text-5xl (48px)
- Desktop: text-6xl (60px)

Section Headings:
- Mobile: text-4xl (36px)
- Desktop: text-5xl (48px)

Body Text:
- Regular: text-base (16px)
- Large: text-xl (20px)

Card Titles:
- text-xl (20px)

Small Text:
- text-sm (14px)
```

---

## 🎯 Interactive Elements

### Primary CTA
- Background: orange-500
- Hover: orange-600 + shadow-lg + scale-105
- Text: white, font-semibold

### Secondary CTA
- Background: white
- Border: slate-200 → orange-500 on hover
- Text: slate-800, font-semibold

### Navigation Links
- Default: slate-600
- Hover: orange-500
- Active: orange-500

### Form Inputs
- Border: slate-300
- Focus: orange-500 border + orange-200 ring
- Rounded: rounded-lg

---

## 📐 Grid Systems

### Features Section
```css
grid md:grid-cols-2 lg:grid-cols-3
/* 1 col mobile, 2 cols tablet, 3 cols desktop */
```

### Gallery Section
```css
grid md:grid-cols-2 lg:grid-cols-3
/* 1 col mobile, 2 cols tablet, 3 cols desktop */
```

### Testimonials Section
```css
grid md:grid-cols-2 lg:grid-cols-4
/* 1 col mobile, 2 cols tablet, 4 cols desktop */
```

### Footer Section
```css
grid md:grid-cols-4
/* 1 col mobile, 4 cols desktop */
```

---

## 🎨 Shadow System

```css
/* Cards */
shadow-lg        /* Default card shadow */
hover:shadow-xl  /* Hover state */
shadow-2xl       /* Contact form */

/* Images */
shadow-2xl       /* Hero image */
```

---

## 🔄 Transition System

```css
/* Standard transitions */
transition-all duration-300

/* Hover animations */
transition-transform duration-500

/* Framer Motion */
duration: 0.6s (sections)
duration: 0.5s (cards)
duration: 0.2s (hover)
```

---

This layout creates a modern, professional landing page with clear visual hierarchy and smooth user experience.
