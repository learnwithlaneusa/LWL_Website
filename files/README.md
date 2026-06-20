# Learn with Lane - Website

A modern, responsive React website for Learn with Lane tutoring services.

## Project Structure

```
src/
├── App.js                 # Main app component with routing
├── App.css               # Global styles and design tokens
├── components/
│   ├── Navigation.js     # Header navigation
│   ├── Navigation.css
│   ├── Footer.js         # Footer
│   └── Footer.css
├── pages/
│   ├── Home.js           # Homepage
│   ├── Services.js       # Services & Scheduling page
│   ├── LearningGames.js  # Learning Games page
│   └── Pages.css
├── assets/
│   └── logo.png
└── index.js

public/
├── index.html
└── logo.png

netlify.toml             # Netlify configuration
package.json             # Dependencies
```

## Color Scheme

- **Primary Blue**: #007bbf
- **Secondary Brown**: #6b4423
- **Accent Beige**: #fde9b5
- **Dark Background**: #2c3e50
- **Light Background**: #f5f5f5

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

This will open the site at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deploy to Netlify

### Option 1: Connect GitHub (Recommended)
1. Push this repo to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub account
5. Select the repo
6. Netlify will auto-detect settings from `netlify.toml` and deploy

### Option 2: Drag & Drop
1. Run `npm run build` locally
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `build/` folder onto the page
4. Your site is live!

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

## Adding Images Later

Images are stored in `src/assets/`. To add new images:

1. Place image files in `src/assets/`
2. Import in components: `import image from '../assets/image.png'`
3. Use in JSX: `<img src={image} alt="description" />`

For large images or background images, consider optimizing them first with tools like [TinyPNG](https://tinypng.com) or [ImageOptim](https://imageoptim.com).

## Pages

- **Home** (`/` or `/home`) - Hero, about, services overview
- **Services & Scheduling** (`/services-scheduling`) - Pricing, rates, booking
- **Learning Games** (`/learning-games`) - Interactive resources (placeholder for now)

## Customization

All styling uses CSS custom properties (variables) defined in `App.css`:
```css
:root {
  --primary-blue: #007bbf;
  --secondary-brown: #6b4423;
  --accent-beige: #fde9b5;
  /* ... */
}
```

Change these values to update the entire site theme.

## Features

✅ Fully responsive (mobile, tablet, desktop)  
✅ Fast static site generation  
✅ Clean, semantic HTML  
✅ Accessible navigation  
✅ SEO-friendly  
✅ Google Calendar integration for bookings  
✅ Mobile hamburger menu  
✅ Contact information in footer  

## Next Steps

1. Add product shop page (Etsy integration)
2. Create interactive Learning Games
3. Add blog/resources section
4. Set up email newsletter signup
5. Add student testimonials section

---

**Deploy with Netlify** — Push to GitHub and watch it auto-deploy. Free SSL, fast CDN, and no servers to manage.
