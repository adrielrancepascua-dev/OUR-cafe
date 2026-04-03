# Quick Start Guide - OUR Cafe Demo

## 🚀 Get Running in 3 Steps

### Step 1: Install & Start
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
**Result:** Server running at `http://localhost:3000`

### Step 2: Explore the Demo
- **Hero Section:** Scroll down to see \"Live Vibe Check\" widget
- **Digital Menu:** Click any menu item to see the slide-over drawer
- **Crowd Management:** See the bar chart showing peak hours
- **Digital Ticket:** Click \"Generate Ticket\" for QR code demo

### Step 3: Customize
- Change colors in `tailwind.config.js`
- Update menu items in `data/menu.json`
- Edit copy in component files (`.tsx`)

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main page - combines all sections |
| `src/components/HeroSection.tsx` | Smart Concierge hero |
| `src/components/MenuPreview.tsx` | Digital menu with drawer |
| `src/components/PeakHours.tsx` | Crowd management + ticket |
| `data/menu.json` | Menu items & peak hours data |
| `tailwind.config.js` | Colors & theme config |
| `README.md` | Full documentation |

---

## 🎨 Quick Design Changes

### Change Primary Color (Cream → Your Color)
Edit `tailwind.config.js`:
```js
cream: {
  200: '#YOURCOLORHERE', // Was #FAF9F6
}
```

### Change Text Color
Edit `tailwind.config.js`:
```js
charcoal: {
  900: '#YOURCOLORHERE', // Was #1A1917
}
```

### Update Menu Items
Edit `data/menu.json`:
```json
{
  \"id\": 1,
  \"name\": \"New Item Name\",
  \"price\": \"₱XXX\",
  \"description\": \"New description\",
  \"image\": \"https://new-image-url.com\"
}
```

---

## 🤖 Supabase Integration (Optional)

To enable real-time features:

1. **Sign up:** https://supabase.com
2. **Create project** and get API keys
3. **Add to `.env.local`:**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   ```
4. **Install client:**
   ```bash
   npm install @supabase/supabase-js
   ```
5. **Update HeroSection.tsx** (see README.md for code)

---

## 🚀 Deploy to Vercel

```bash
# 1. Push to GitHub
git init && git add . && git commit -m \"Initial\"
git push -u origin main

# 2. Go to vercel.com
# 3. Import your repo
# 4. Set environment variables
# 5. Deploy! (automatic)
```

Your site will be live at `your-project.vercel.app`

---

## 📞 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

**Changes not showing?**
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

**Images not loading?**
- Ensure Unsplash URLs are accessible
- Check `next.config.js` has correct domain

**Build failing?**
```bash
npm run build  # See full error message
```

---

## 🎯 What to Demo First

1. **Scroll hero section** - Show \"Live Vibe Check\" widget
2. **Click a menu item** - Show smooth drawer animation
3. **Scroll to charts** - Show crowd management insight
4. **Click \"Generate Ticket\"** - Show QR code demo
5. **Mention Supabase** - Explain how to make it real-time

---

## 📝 Common Edits

### Change Cafe Name
```tsx
// src/app/layout.tsx, line ~14
<div>☕ YOUR CAFE NAME</div>
```

### Change Headline
```tsx
// src/components/HeroSection.tsx, line ~30
<h1>Welcome to <span>YOUR TEXT</span></h1>
```

### Change Location Info
```tsx
// src/app/layout.tsx, footer section
<p>Your Address Here</p>
```

### Change Button Text
```tsx
// src/components/HeroSection.tsx
<button>YOUR CTA TEXT</button>
```

---

## ✅ Pre-Deployment Checklist

- [ ] Tested on mobile + desktop
- [ ] Updated menu items with real data
- [ ] Changed colors to match brand
- [ ] Updated footer with correct info
- [ ] Set up Supabase (if using real-time)
- [ ] Tested all buttons + interactions
- [ ] Checked images load correctly
- [ ] Built locally: `npm run build`
- [ ] Tested build: `npm run start`

---

## 🎓 Learning Resources

- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Next.js:** https://nextjs.org/docs
- **Recharts:** https://recharts.org/api
- **Supabase:** https://supabase.com/docs

---

**Questions? Check README.md for detailed documentation.**
