# Learn with Lane — Netlify Deployment Quick Start

Your React site is ready. Here's how to get it live on Netlify in 5 minutes.

## What You Have

✅ Complete React app with 3 pages (Home, Services, Learning Games)  
✅ Responsive design (mobile, tablet, desktop)  
✅ Your logo embedded  
✅ Brand colors (#007bbf blue, #6b4423 brown, #fde9b5 beige)  
✅ Contact links in footer  
✅ Google Calendar booking integration  
✅ Netlify configuration ready to go  

## Step 1: Push to GitHub

```bash
cd lwl-netlify

# Initialize git (if not done)
git add .
git commit -m "Initial Learn with Lane website commit"

# Create a new repo at github.com and push
git remote add origin https://github.com/YOUR_USERNAME/learn-with-lane.git
git branch -M main
git push -u origin main
```

## Step 2: Connect to Netlify

1. Go to **https://netlify.com** and sign up (free)
2. Click **"New site from Git"**
3. Choose **GitHub** and authorize
4. Select your **learn-with-lane** repo
5. Netlify will auto-detect these settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Settings** from `netlify.toml`
6. Click **"Deploy site"**

**That's it!** Your site is live at a temporary URL. Netlify will give you a link like `https://vibrant-hopper-a1b2c3.netlify.app`

## Step 3: Connect Your Custom Domain

Once you have your site live:

1. Go to **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Enter **learnwithlane.com**
4. Follow Netlify's DNS instructions (add CNAME/A records to your domain registrar)
5. Wait ~24 hours for DNS to propagate

**If you use Google Domains, Netlify Registrar, or other supported registrars**, you can connect directly without manual DNS setup.

## Making Changes

Every time you push to GitHub, Netlify automatically rebuilds and deploys:

```bash
# Make changes to files locally
git add .
git commit -m "Update home page content"
git push origin main

# Netlify sees the push and auto-deploys (takes ~2 minutes)
```

## Images & Assets

**To add more images later:**

1. Place image files in `src/assets/`
2. Import in any component:
   ```js
   import myImage from '../assets/myImage.png';
   ```
3. Use in JSX:
   ```js
   <img src={myImage} alt="description" />
   ```
4. Commit and push — Netlify rebuilds automatically

Images are optimized automatically during the build process.

## What's Where

- **Logo**: `src/assets/logo.png` (used in Navigation)
- **Pages**: `src/pages/` (Home.js, Services.js, LearningGames.js)
- **Styling**: `src/App.css` (global styles with color variables)
- **Config**: `netlify.toml` (build & redirect settings)

## Common Issues

**"Build failed"**
→ Check that all file imports are correct (case-sensitive on Linux servers)
→ Run `npm run build` locally to test

**"Site shows blank"**
→ Check the browser console (F12) for errors
→ Netlify logs should show the issue (Site settings → Builds)

**"My domain isn't working"**
→ DNS can take 24-48 hours to propagate
→ Check your domain registrar's DNS settings match Netlify's instructions

## Support & Next Steps

**Free Netlify features:**
- Auto-deployments from Git
- Free SSL/HTTPS
- CDN globally distributed
- 100GB bandwidth/month
- Deploy previews for pull requests

**When ready to add more:**
- Product shop page (Etsy integration)
- Interactive learning games
- Blog/resource section
- Email signup for newsletter

## Questions?

Netlify has great docs at **https://docs.netlify.com**

You're all set. Push to GitHub and watch your site go live! 🚀
