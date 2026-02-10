# Serenity Yoga Website - Setup & Customization Guide

## 🎯 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

## 📋 Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css          # Navigation header
│   ├── Hero.jsx & Hero.css              # Carousel section
│   ├── About.jsx & About.css            # Teacher info
│   ├── Classes.jsx & Classes.css        # Class listings
│   ├── Gallery.jsx & Gallery.css        # Photo gallery
│   ├── Testimonials.jsx & Testimonials.css
│   ├── FAQ.jsx & FAQ.css                # FAQ accordion
│   ├── Contact.jsx & Contact.css        # Contact & socials
│   └── Footer.jsx & Footer.css
├── styles.css                           # Global styles & design tokens
├── App.jsx                              # Main app component
└── main.jsx                             # Entry point

public/                                  # Static assets
index.html                               # HTML template
```

## 🎨 Customization Guide

### 1. WhatsApp Integration

**Update the phone number in two places:**

**File: `src/components/Hero.jsx` (Line ~59)**
```javascript
const phoneNumber = '+1234567890' // Your WhatsApp number with country code
```

**File: `src/components/Contact.jsx` (Line ~9)**
```javascript
const phoneNumber = '+1234567890' // Same number
```

**Format:** Use international format: `+[country code][number]`
- Example: `+14155552671` for US
- Example: `+919876543210` for India
- Example: `+442071838750` for UK

### 2. Update Content

#### Hero Carousel Slides
**File: `src/components/Hero.jsx` (Lines 13-30)**
```javascript
const slides = [
  {
    title: 'Your Title',
    quote: '"Your inspirational quote here" - Author',
    image: 'linear-gradient(135deg, #d4a574 0%, #a8c4a8 100%)',
    color: '#7b9a7f'
  },
  // Add more slides...
]
```

#### Yoga Classes
**File: `src/components/Classes.jsx` (Lines 14-75)**
```javascript
const classes = [
  {
    id: 1,
    name: 'Class Name',
    description: 'Class description...',
    duration: '60 minutes',
    time: 'Mon & Wed 10:00 AM',
    mode: 'Online & Offline',
    level: 'Beginner', // or 'Intermediate', 'Advanced', 'All Levels'
    price: 'Per Class: $15'
  },
  // Add more classes...
]
```

#### Testimonials
**File: `src/components/Testimonials.jsx` (Lines 6-40)**
```javascript
const testimonials = [
  {
    id: 1,
    name: 'Student Name',
    role: 'Student Title',
    text: 'Their testimonial...',
    rating: 5,
    avatar: '👩' // Use emoji or initials
  },
  // Add more testimonials...
]
```

#### FAQ Items
**File: `src/components/FAQ.jsx` (Lines 6-40)**
```javascript
const faqs = [
  {
    id: 1,
    question: 'Your question?',
    answer: 'Your answer...'
  },
  // Add more FAQ items...
]
```

#### Contact Information
**File: `src/components/Contact.jsx` (Lines 39-51)**
Update:
- Studio Location
- Class Schedule
- Phone Number
- Email Address
- Social Media Links (Lines 62-81)

### 3. Colors & Design

**File: `src/styles.css` (Lines 1-20)**

Default color scheme (peaceful & nature-inspired):
```css
:root {
  /* Primary Colors - Green tones */
  --primary-color: #7b9a7f;      /* Main green */
  --primary-light: #a8c4a8;      /* Light green */
  --primary-dark: #5a7a5e;       /* Dark green */
  
  /* Neutrals - Warm beige/cream */
  --bg-primary: #f5f1e8;         /* Main background */
  --bg-secondary: #fafaf8;       /* Secondary background */
  --text-primary: #2c2c2c;       /* Dark text */
  --text-secondary: #6b6b6b;     /* Gray text */
  
  /* Accents - Warm tones */
  --accent-warm: #d4a574;        /* Warm brown/gold */
  --accent-light: #e8d9c9;       /* Light cream */
}
```

To change colors, simply update these hex values.

### 4. Fonts

**Default Font:** System fonts (fast loading)

To change fonts, edit `src/styles.css`:
```css
body {
  font-family: 'Your Font Name', Tahoma, Geneva, sans-serif;
}
```

Popular options:
- `'Segoe UI'` (Windows)
- `'Helvetica'` (Clean)
- `'Georgia'` (Elegant serif)
- `'Playfair Display'` (Luxury serif - requires import)

### 5. Social Media Links

**File: `src/components/Contact.jsx` (Lines 62-81)**

Update each social link:
```javascript
{
  id: 1,
  icon: FaWhatsapp,
  name: 'WhatsApp',
  link: 'https://wa.me/YOUR_NUMBER?text=...',
  color: '#25D366'
},
{
  id: 2,
  icon: FaInstagram,
  name: 'Instagram',
  link: 'https://instagram.com/your_handle',
  color: '#E4405F'
},
// ... update other social links
```

### 6. Email for Newsletter

**File: `src/components/Contact.jsx` (Lines 134-140)**

The newsletter form currently doesn't send emails. To add email functionality:

Option 1: Use Formspree
```javascript
const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  // Send to formspree or your email service
}
```

Option 2: Use EmailJS
- Sign up at emailjs.com
- Add your email service configuration

Option 3: Use a backend service
- Node.js + Express
- Firebase functions
- Vercel serverless functions

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repo at vercel.com
3. Vercel auto-detects Vite and builds

### Deploy to Netlify

1. Run `npm run build`
2. Upload `dist` folder to Netlify
3. Or connect GitHub for auto-deployments

### Deploy to GitHub Pages

1. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/', // Your repo name
  // ... rest of config
})
```

2. Run `npm run build`
3. Push `dist` folder to `gh-pages` branch

## 📱 Testing

### Test Responsive Design
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on: Mobile (375px), Tablet (768px), Desktop (1200px)

### Test WhatsApp Links
- Click "Book via WhatsApp" or WhatsApp icon
- Should open WhatsApp with pre-filled message
- Requires WhatsApp installed or web.whatsapp.com access

### Test Smooth Scrolling
- Click navigation links
- Page should scroll smoothly
- All section IDs must match nav links

## 🔧 Advanced Customization

### Add Google Analytics
```javascript
// Add to index.html before closing </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
```

### Add Custom Fonts (Google Fonts)
```html
<!-- Add to index.html <head> -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
```

### Add Animation Libraries
```bash
npm install framer-motion
npm install aos
```

### Add Form Validation
```bash
npm install react-hook-form zod
```

## 📝 SEO Tips

1. **Update Meta Tags** in `index.html`:
```html
<meta name="description" content="Your yoga class description">
<meta name="keywords" content="yoga, meditation, wellness">
```

2. **Add Structured Data**:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Serenity Yoga",
  "image": "logo.jpg",
  "telephone": "+1-234-567-8900"
}
```

3. **Optimize Images**: Use WebP format for faster loading

4. **Mobile Friendly**: Website is already responsive

## 🐛 Troubleshooting

### Issue: WhatsApp links not working
- Check phone number format (must include + and country code)
- Ensure no spaces in phone number
- Try opening in browser with WhatsApp Web active

### Issue: Carousel not auto-playing
- Check that autoPlay state is true
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)

### Issue: Styles not applying
- Hard refresh browser (Ctrl+Shift+R)
- Clear dist folder and rebuild: `npm run build`
- Check CSS class names match

### Issue: Page layout broken on mobile
- Check viewport meta tag in index.html
- Test in Chrome DevTools device emulation
- Ensure media queries are present in CSS files

## 📚 Useful Resources

- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **React Icons**: https://react-icons.github.io/react-icons
- **CSS Animation**: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
- **MDN Web Docs**: https://developer.mozilla.org

## 💡 Tips & Best Practices

1. **Use Semantic HTML**: Improves accessibility and SEO
2. **Test on Real Devices**: Emulation isn't always accurate
3. **Keep Content Updated**: Fresh content improves rankings
4. **Optimize Images**: Use compression tools
5. **Monitor Performance**: Use Lighthouse (DevTools)
6. **Regular Backups**: Save your customizations

## 🆘 Need Help?

For issues with:
- **React/JavaScript**: Check React documentation
- **Styling**: Check CSS/MDN documentation
- **Deployment**: Check Vercel/Netlify documentation
- **WhatsApp API**: Check WhatsApp Business API docs

---

**Happy Teaching! 🧘‍♀️**

Your website is ready to showcase your yoga practice and connect with students!
