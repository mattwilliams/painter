# Obrien Painting Website

Professional painting business website built with Next.js 14, TypeScript, Tailwind CSS, and Embla Carousel.

## Features

- ✨ **Hero Carousel** — Auto-rotating image carousel with manual controls
- 🎨 **Black & Beige Theme** — Professional color scheme
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile
- ⚡ **Fast & SEO Ready** — Built with Next.js 14 (App Router)
- 🔧 **Easy Configuration** — Update photos and contact info in config files
- 🚀 **One-Click Deploy** — Deploy to Vercel from GitHub

## Project Structure

```
painter/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation menu
│   │   ├── Carousel.tsx      # Image carousel
│   │   ├── Logo.tsx          # Logo placeholder
│   │   └── Footer.tsx        # Footer
│   ├── (pages)/
│   │   ├── painting/page.tsx # Painting services
│   │   ├── fences/page.tsx   # Fence services
│   │   ├── about/page.tsx    # About page
│   │   └── contact/page.tsx  # Contact form
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── config/
│   └── photos.ts             # Carousel images config (EDIT THIS!)
├── public/
│   └── images/               # Local images (optional)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Editing Carousel Photos

The carousel uses placeholder images from Unsplash. To update them:

1. Open `config/photos.ts`
2. Update the `carouselPhotos` array:

```typescript
export const carouselPhotos = [
  {
    id: 1,
    src: "https://your-image-url.jpg", // or "/images/photo1.jpg"
    caption: "Your project description",
  },
  // Add more photos...
];
```

**Options:**
- Use external URLs (Unsplash, Pexels, your own image hosting)
- Store images in `public/images/` and reference them as `/images/filename.jpg`

## Customization

### Update Contact Info
Edit [app/components/Footer.tsx](app/components/Footer.tsx#L38-L42) and [app/(pages)/contact/page.tsx](app/(pages)/contact/page.tsx#L62-L72):
```typescript
// Replace [PLACEHOLDER] with actual contact info
Phone: [PLACEHOLDER]
Email: [PLACEHOLDER]
```

### Update Logo
Replace the placeholder in [app/components/Logo.tsx](app/components/Logo.tsx):
```typescript
// Instead of [LOGO] text, add your image:
<Image src="/logo.png" alt="Obrien Painting" width={48} height={48} />
```

### Colors
Edit [tailwind.config.ts](tailwind.config.ts#L9-L12) to change the color scheme:
```typescript
colors: {
  'obrien-black': '#1a1a1a',    // Dark black
  'obrien-white': '#f8f8f8',    // Off-white
  'obrien-beige': '#d4c5b9',    // Beige accent
}
```

## Local Development

### Prerequisites
- Node.js 18+ (or use Vercel to avoid Node.js setup)
- npm or yarn

### Setup & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## Deployment to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js apps. It's free, fast, and integrates perfectly with GitHub.

### Step 1: Create GitHub Repository

```bash
cd ~/painter

# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Obrien Painting website"

# Create repo on github.com, then:
git remote add origin https://github.com/YOUR-USERNAME/painter.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select **"Import Git Repository"**
4. Paste: `https://github.com/YOUR-USERNAME/painter.git`
5. Click **Import**
6. Click **Deploy**

**That's it!** Your site is now live at `https://your-project.vercel.app`

### Step 3: Connect Custom Domain (Optional)

1. In Vercel dashboard → **Settings** → **Domains**
2. Add your custom domain (e.g., `obrienpaintings.com`)
3. Update your domain's DNS records (instructions provided by Vercel)

### Step 4: Auto-Deploy on Git Push

From now on, every time you push to `main`:
```bash
git add .
git commit -m "Update carousel photos"
git push
```

Your site automatically deploys within 1-2 minutes. ✨

## Making Updates

### Update Carousel Photos
```bash
# Edit config file
# config/photos.ts

git add config/photos.ts
git commit -m "Update carousel images"
git push
# → Auto-deploys to Vercel
```

### Update Contact Info
```bash
# Edit these files:
# app/components/Footer.tsx
# app/(pages)/contact/page.tsx

git add app/
git commit -m "Update contact information"
git push
# → Auto-deploys
```

### Update Business Info
```bash
# Edit home page, about page, etc.

git add app/
git commit -m "Update business information"
git push
# → Auto-deploys
```

## Troubleshooting

### Build Errors
- Make sure all file paths in imports use `@/` alias (e.g., `@/config/photos`)
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- If using external URLs, check the URL is valid and publicly accessible
- If using local images in `public/images/`, make sure the path starts with `/`

### Deploy Issues
- Check Vercel build logs in dashboard
- Ensure all environment variables are set in Vercel → Settings → Environment Variables

## Performance Tips

- **Lighthouse Score**: Should be 90+
- Images are optimized automatically by Next.js
- Carousel images use lazy loading
- CSS is minified and optimized

## Support

For questions or issues:
1. Check Next.js docs: [nextjs.org](https://nextjs.org)
2. Vercel help: [vercel.com/docs](https://vercel.com/docs)
3. Tailwind docs: [tailwindcss.com](https://tailwindcss.com)

---

**Built with ❤️ using Next.js, Tailwind CSS, and TypeScript**
