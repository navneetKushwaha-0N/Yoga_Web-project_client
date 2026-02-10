# Serenity Yoga - Yoga Teacher Website

A modern, calm, and responsive website for a yoga teacher built with **React** and **Vite**. Features a peaceful, nature-inspired design with soft colors and smooth interactions.

## ✨ Features

- **Responsive Design** - Mobile-first approach, works perfectly on all devices
- **Interactive Carousel** - Beautiful hero section with auto-playing carousel, smooth transitions, and manual controls
- **WhatsApp Integration** - One-click booking via WhatsApp with pre-filled messages
- **Multiple Sections:**
  - Home with carousel and CTAs
  - About section with instructor info and credentials
  - Classes listing with descriptions and schedules
  - Gallery with lightbox view
  - Student testimonials
  - FAQ accordion
  - Contact section with social media links
  - Footer

- **Performance Optimized** - Fast loading, smooth scrolling, and efficient code
- **SEO Friendly** - Meta tags, semantic HTML, and proper structure
- **No Dependencies on Heavy UI Frameworks** - Built with vanilla React and CSS

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. **Clone or download the project**

2. **Install dependencies:**
```bash
npm install
# or
pnpm install
```

3. **Run the development server:**
```bash
npm run dev
# or
pnpm dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## 📝 Customization

### Update WhatsApp Number
In `src/components/Hero.jsx` and `src/components/Contact.jsx`, update the phone number:
```javascript
const phoneNumber = '1234567890' // Replace with your actual WhatsApp number
```

### Update Social Media Links
In `src/components/Contact.jsx`, update the social media links array with your actual profiles:
```javascript
const socialLinks = [
  {
    id: 1,
    icon: FaWhatsapp,
    name: 'WhatsApp',
    link: 'https://wa.me/YOUR_NUMBER',
    color: '#25D366'
  },
  // ... other links
]
```

### Customize Colors
Edit the design tokens in `src/styles.css`:
```css
:root {
  --primary-color: #7b9a7f;
  --primary-light: #a8c4a8;
  --primary-dark: #5a7a5e;
  --accent-warm: #d4a574;
  /* ... */
}
```

### Update Content
- **Hero Slides**: Edit the `slides` array in `src/components/Hero.jsx`
- **Classes**: Update the `classes` array in `src/components/Classes.jsx`
- **Testimonials**: Modify the `testimonials` array in `src/components/Testimonials.jsx`
- **FAQ**: Update the `faqs` array in `src/components/FAQ.jsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Design

- **Color Palette**: Peaceful, nature-inspired soft colors
- **Typography**: Clean, readable fonts optimized for all screen sizes
- **Layout**: Mobile-first responsive design with smooth transitions

## 📦 Tech Stack

- **React 18.2** - UI library
- **Vite 5** - Build tool and dev server
- **React Icons 5** - Icon library
- **Swiper** - Touch slider (available for enhancement)
- **CSS3** - Styling and animations

## 🔒 Security

- No backend server needed
- No user data collection
- No payment processing
- HTTPS ready for deployment

## 📈 SEO Optimization

- Semantic HTML structure
- Meta tags in index.html
- Mobile-friendly responsive design
- Fast loading performance
- Smooth scrolling and navigation

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Go to vercel.com and connect your repository
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify
1. Run `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Other Hosts
Build the project and upload the contents of the `dist` folder to any static hosting provider.

## 📄 License

This project is open source and available for personal and commercial use.

## 💬 Support

For customization help or questions, feel free to reach out. This website is designed to be easy to modify and maintain.

---

Made with 🧘 for yoga lovers everywhere
