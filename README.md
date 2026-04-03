# OUR Cafe - High-Fidelity Frontend Demo

A luxury, modern Next.js + Tailwind CSS demo for **OUR Cafe**, San Fernando's largest cafe. Designed to pivot from "overwhelming and chaotic" to "exclusive and seamless."

## 🎨 Design Philosophy: Warm Minimalism

**Brand Identity:**
- **Warm White:** #FAF9F6 (Cream 200) - Primary background
- **Deep Charcoal:** #1A1917 (Espresso) - Text
- **Cafe Brown:** #6B6552 (Soft warmth accent)
- **Warm Gold:** #D4A574 (Premium accent)

**Typography:**
- **Display:** Playfair Display (elegant headlines)
- **Body:** Inter (clean, modern)
- **Serif:** Merriweather (premium touches)

**Aesthetic:** Clean, luxury, Korean-minimalist inspired with organic warmth.

---

## 📦 What's Included

### 1. **Smart Concierge Hero Section**
- Live Vibe Check widget showing real-time cafe atmosphere
- Current vibe status (e.g., "Lively & Social")
- Estimated wait time
- Dual CTAs: \"View Digital Menu\" & \"Explore the Rooftop\"
- Smooth animations with Framer Motion

### 2. **Visual-First Digital Menu**
- Category-based organization (Brewed, Non-Coffee, Mains, Pastries)
- High-res product images
- Category icons for quick scanning
- **Slide-over drawer (mobile-responsive)** with:
  - Large product photo
  - Full description
  - Vibe tags (e.g., "indulgent", "zen")
  - Price display
  - \"Add to Queue\" CTA
  - Pro-tip about pairings

### 3. **Crowd Management UX**
- Interactive bar chart showing hourly cafe density
- \"Best Time to Visit\" highlight (6 AM - only 15% full)
- Queue capacity indicator
- **Digital Ticket component** with:
  - QR code (for cashier verification)
  - Order number
  - Estimated wait time
  - Queue position
  - Instructions

### 4. **Styling System**
- Warm minimalism color palette
- Smooth transitions and hover states
- Pill-shaped buttons with subtle borders
- Staggered animations with Framer Motion
- Responsive design (mobile-first)

### 5. **Supabase Integration Pro-Tip**
- Guide on connecting to Supabase for real-time vibe check
- Instructions for live orders queue
- Analytics tracking setup

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
our-cafe-demo/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with nav & footer
│   │   ├── page.tsx            # Main page (all sections)
│   │   └── globals.css         # Global Tailwind styles
│   └── components/
│       ├── HeroSection.tsx     # Smart Concierge hero
│       ├── MenuPreview.tsx     # Digital menu with drawer
│       └── PeakHours.tsx       # Crowd management & ticket
├── data/
│   └── menu.json               # Menu items & vibe data
├── tailwind.config.js          # Tailwind theme (Warm Minimalism)
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
└── package.json                # Dependencies
```

---

## 🎬 Key Features

### Animations
- **Fade-in transitions** on hero sections
- **Staggered entry** for menu items (Framer Motion)
- **Smooth drawer animations** for menu details
- **Hover effects** on interactive elements
- **Respects prefers-reduced-motion** for accessibility

### Responsiveness
- Mobile-first design
- Touch-friendly buttons (44px minimum)
- Optimized layouts for 375px, 768px, 1024px, 1440px breakpoints
- Drawer works seamlessly on mobile and desktop

### Performance
- Image lazy loading
- CSS-in-JS with Tailwind (production-optimized)
- Zero external fonts by default (Google Fonts via `<link>`)
- Static data from JSON (no runtime compilation)

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Focus states visible (ring styles)
- Color contrast ≥ 4.5:1 (WCAG AA)
- Keyboard navigation support

---

## 💡 Pro-Tip: Supabase Integration

### To Make \"Live Vibe Check\" Real-Time:

**Step 1: Create Supabase Project**
```bash
# Sign up at https://supabase.com
# Create a new project
```

**Step 2: Set Environment Variables**
```env
NEXT_PUBLIC_SUPABASE_URL=https://yourproject.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Step 3: Create Tables**
```sql
-- Create cafe_status table
CREATE TABLE cafe_status (
  id INT PRIMARY KEY,
  current_vibe VARCHAR(50),
  estimated_wait INT,
  crowd_percentage INT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create menu_items table
CREATE TABLE menu_items (
  id INT PRIMARY KEY,
  category VARCHAR(30),
  name VARCHAR(200),
  description TEXT,
  price INT,
  image_url VARCHAR(500),
  vibe VARCHAR(30)
);

-- Create orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number VARCHAR(10),
  customer_name VARCHAR(100),
  items JSON,
  estimated_wait INT,
  queue_position INT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Step 4: Enable Realtime**
- Go to Database → Replication → Toggle \"Orders\" table
- Go to Realtime settings → Enable

**Step 5: Update Component**
```typescript
// Replace: import menuData from '../../data/menu.json'
// With:

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// In HeroSection.tsx:
useEffect(() => {
  // Subscribe to real-time vibe updates
  supabase
    .from('cafe_status')
    .on('*', payload => {
      setCurrentVibe(payload.new);
    })
    .subscribe();
}, []);
```

**Step 6: Push Real Data from POS**
- Connect your cafe POS system to update `cafe_status` table
- Use Supabase Functions or webhooks to sync
- Automatic frontend updates via WebSocket (Realtime)

### Benefits:
- ✅ **Real-time capacity updates** (no refresh needed)
- ✅ **Live order queue** with notifications
- ✅ **Analytics dashboard** (crowd patterns, peak hours)
- ✅ **Customer authentication** (for loyalty programs)
- ✅ **Scalable to 10,000+ concurrent users**

---

## 🎯 Design Decisions

### Why Warm Minimalism?
1. **Combats \"hospital/cold\" complaints** with soft cream backgrounds
2. **Luxury positioning** through elegant typography and spacing
3. **Minimalist** to emphasize \"seamless\" experience
4. **Warm accents** create inviting, exclusive atmosphere

### Why Next.js + Tailwind?
1. **Next.js:** Fast, production-ready, great for e-commerce
2. **Tailwind:** Rapid styling, responsive-first, extensible
3. **Framer Motion:** Smooth animations without overhead

### Component Structure
- **HeroSection:** Stand-alone, reusable
- **MenuPreview:** Stateful (drawer management), fully interactive
- **PeakHours:** Charts + interactivity (ticket generation)
- **Layout:** Shared nav/footer, SEO-friendly

---

## 🔧 Customization

### Change Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  cream: { 200: '#FAF9F6' },      // Change primary white
  charcoal: { 900: '#1A1917' },   // Change text color
  cafe: { 700: '#6B6552' },       // Change warm accent
}
```

### Add/Update Menu Items
Edit `data/menu.json`:
```json
{
  "id": 9,
  "category": "Brewed",
  "name": "New Item",
  "price": "₱125",
  "image": "https://...",
  "description": "..."
}
```

### Update Craft Hours
Edit `data/menu.json` > `peakHours` array

### Change Animation Speed
Edit `src/components/HeroSection.tsx` > `containerVariants`:
```typescript
transition: { staggerChildren: 0.2 } // Increase for slower
```

---

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Optimization Tips
1. Image optimization: Use Next.js `<Image>` component
2. Font loading: Preload with `<link rel=\"preload\">`
3. Code splitting: Next.js automatic (route-based)
4. Bundle analysis: `npm install --save-dev @next/bundle-analyzer`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Push to GitHub
git init && git add . && git commit -m \"Initial commit\"
git remote add origin https://github.com/yourname/our-cafe-demo
git push -u origin main

# Deploy
# 1. Go to vercel.com
# 2. Import project
# 3. Set env vars (NEXT_PUBLIC_SUPABASE_URL, etc.)
# 4. Deploy!
```

### Deploy to Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Set environment variables

---

## 📞 Support

For questions or customizations:
- Review the code comments in components
- Check Tailwind docs: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion/
- Recharts: https://recharts.org/

---

## 📄 License

This demo is open-source and ready to customize for OUR Cafe's needs.

---

**Built with ☕ and ❤️ for OUR Cafe**
