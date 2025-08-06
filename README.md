# Modern Vibrant Portfolio Website

A modern, vibrant, and responsive portfolio website for a seasoned developer with 14 years of experience. This site beautifully showcases expertise in JavaScript, React, Angular, HTML5, CSS3, team leadership, and a wealth of frontend and cloud technologies.

## Features

- **Vibrant, modern design** with bold color schemes
- Fully **responsive** (mobile-first)
- **Introduction** section with profile/hero
- **Experience** section (14 years, team leadership)
- **Skills** covering:
  - JavaScript (ES6+)
  - React.js & Angular
  - HTML5 & CSS3
  - Tailwind CSS, Bootstrap
  - Frontend tools (Webpack, Babel, ESLint, etc.)
  - Cloud: Kubernetes, Docker, CI/CD
- **Projects** (add your best work)
- **Contact** form with social icons
- Animations and interactive elements

## Tech Stack

- React (with Vite for fast build/start)
- Tailwind CSS (primary styling)
- Bootstrap (select components)
- Framer Motion (animations)
- React Icons (icons)
- Deployed-ready for Vercel/Netlify/GitHub Pages

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the dev server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

---

## Deploy to GitHub Pages

1. **Build your app:**
   ```bash
   npm run build
   ```
   This will create a `dist` directory.
2. **Copy contents to `/docs`:**
   ```bash
   mkdir -p docs
   cp -r dist/* docs/
   git add docs && git commit -m "chore: deploy to docs dir for GitHub Pages"
   git push
   ```
3. **Set GitHub Pages source:**
   - Go to your repo Settings → Pages.
   - Set source to `main` branch `/docs` folder.
   - Save and wait for deploy.
4. **Access site:**
   - Your site will be live at: `https://phamkitty.github.io/Portfolio`

---

## Folder Structure

- `src/`
  - `components/` - All React components
  - `assets/` - Images and icons
  - `App.jsx` - Main app structure
  - `index.css` - Tailwind/Bootstrap import

## Customization

- Update your experience, projects, and contact info in `src/data/`.
- Change theme colors in `tailwind.config.js`.

## License

MIT