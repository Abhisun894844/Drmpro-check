# VANTA Creative Studio — Website

A bold, editorial-style agency website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — just open and run.

---

## 📁 Project Structure

```
vanta-website/
├── index.html              ← Homepage
├── pages/
│   └── contact.html        ← Contact page
├── css/
│   ├── reset.css           ← CSS reset / base normalisation
│   ├── variables.css       ← CSS custom properties (colors, fonts, spacing)
│   ├── style.css           ← Main component styles
│   └── animations.css      ← @keyframes definitions
├── js/
│   ├── cursor.js           ← Custom animated cursor
│   ├── animations.js       ← Scroll-triggered reveal (IntersectionObserver)
│   └── nav.js              ← Mobile menu toggle + scroll shrink
└── assets/
    ├── images/             ← Drop your images here
    └── icons/              ← SVG icons / favicons
```

---

## 🚀 Getting Started in VS Code

### Option 1 — Live Server (recommended)
1. Install the **Live Server** extension by Ritwick Dey
2. Right-click `index.html` → **Open with Live Server**
3. Browser auto-reloads on every save ✓

### Option 2 — Open directly
Just double-click `index.html` to open in your browser.
*(Custom cursor won't show on `file://` in some browsers — Live Server fixes this.)*

---

## 🎨 Customisation Guide

### Colors
Edit `css/variables.css`:
```css
:root {
  --bg:     #0a0a08;   /* Page background */
  --fg:     #f0ede4;   /* Text color */
  --accent: #c8f000;   /* Lime green highlight */
  --muted:  #3a3a34;   /* Borders / dividers */
  --mid:    #7a7a6e;   /* Secondary text */
}
```

### Fonts
Swap the Google Fonts link in `<head>` and update `--font-display`, `--font-body`, `--font-mono` in `variables.css`.

### Adding Pages
1. Duplicate `pages/contact.html`
2. Update the `<nav>` links to use `../` relative paths
3. Link to it from `index.html`

### Adding Images
Drop files into `assets/images/` and reference them:
```html
<img src="assets/images/project-hero.jpg" alt="Project name" />
```

---

## 📦 Recommended VS Code Extensions

| Extension | Purpose |
|---|---|
| Live Server | Instant browser preview with hot reload |
| Prettier | Auto-format HTML / CSS / JS on save |
| HTML CSS Support | Class name autocomplete |
| Color Highlight | Preview color values inline |
| ESLint | JavaScript linting |

---

## 🌐 Deployment

This is a static site — deploy anywhere:
- **Vercel**: `vercel deploy` (zero config)
- **Netlify**: Drag & drop the folder
- **GitHub Pages**: Push to `main`, enable Pages in Settings

---

## 📝 License

MIT — free to use and modify.
