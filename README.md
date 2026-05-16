# 🚀 Aamir Nodhla — Personal Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-2DD4BF?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Personal portfolio website of **Aamir Nodhla** — Software Developer & Android Engineer based in Vadodara, Gujarat, India.

---

## 🌐 Live Demo

> 💡 Host this on [GitHub Pages](https://pages.github.com/) for free!  
> Once deployed, your site will be live at: `https://<your-username>.github.io/portfolio`

---

## 📸 Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, availability badge, quick links |
| **About** | Bio + animated stat cards |
| **Experience** | Animated vertical timeline with company badges |
| **Projects** | Card grid with status badges (Live / WIP / Team) |
| **Skills** | Tech stack grouped by category |
| **Certifications** | Cisco Academy & ITM University credentials |
| **Contact** | Email, GitHub, phone CTA |

---

## 🗂️ Project Structure

```
portfolio/
│
├── index.html              # Main HTML — all sections
│
├── assets/
│   ├── css/
│   │   └── style.css       # All styles, variables, animations
│   └── js/
│       └── main.js         # Scroll reveal, nav highlight, interactions
│
└── README.md               # You're here!
```

---

## ✨ Features

- 🌑 **Dark terminal-inspired design** with teal accent color
- 🔲 Subtle CSS grid background + noise texture overlay
- 💡 **Scroll-triggered reveal animations** using Intersection Observer API
- ⏱️ **Staggered entrance** for project cards, skill groups & timeline items
- 🔗 **Active nav highlighting** as you scroll through sections
- 📱 **Responsive** — works on mobile and desktop
- ⚡ **Zero dependencies** — pure HTML, CSS, JavaScript (no frameworks)
- 🔤 Google Fonts: Syne + Fira Code + DM Sans

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, Grid, Flexbox, animations) |
| Logic | Vanilla JavaScript (ES6+, Intersection Observer) |
| Fonts | Google Fonts (Syne, Fira Code, DM Sans) |
| Hosting | GitHub Pages (recommended) |

---

## 🚀 Getting Started

### Option 1 — Open Locally
Just open `index.html` in any browser. No build tools or server needed.

```bash
# Clone the repo
git clone https://github.com/Noddy8/portfolio.git

# Open in browser
open index.html   # macOS
start index.html  # Windows
```

### Option 2 — Deploy on GitHub Pages (Free Hosting)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch → `/ (root)`
4. Click **Save**
5. Your site goes live at `https://Noddy8.github.io/portfolio` 🎉

### Option 3 — Deploy on Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `portfolio/` folder
3. Your site is live instantly with a shareable URL

---

## 🎨 Customisation

All design tokens are CSS variables in `assets/css/style.css`:

```css
:root {
  --accent:       #2DD4BF;   /* Main teal accent — change to any color */
  --accent2:      #818CF8;   /* Purple accent (featured project cards) */
  --bg:           #070B14;   /* Main background */
  --text:         #EEF2FF;   /* Body text color */
  --font-display: 'Syne', sans-serif;
  --font-mono:    'Fira Code', monospace;
}
```

To update your info, edit the relevant section in `index.html`. Each section is clearly commented:
- `<!-- HERO -->` — Name, title, tagline
- `<!-- EXPERIENCE -->` — Add/remove timeline items
- `<!-- PROJECTS -->` — Add/remove project cards
- `<!-- SKILLS -->` — Add/remove skill tags
- `<!-- CONTACT -->` — Email, GitHub, phone

---

## 📁 Adding a Profile Photo

1. Save your photo as `assets/images/profile.jpg`
2. In `index.html`, add inside the `#hero` section:

```html
<img src="assets/images/profile.jpg" alt="Aamir Nodhla" class="hero-photo" />
```

3. In `style.css`, add:

```css
.hero-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  object-fit: cover;
}
```

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | workspace.aamir@gmail.com |
| GitHub | [@Noddy8](https://github.com/Noddy8) |
| Phone | +91 76219 01553 |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).  
Feel free to fork it and make it your own! ⭐

---

<p align="center">
  Designed & built by <strong>Aamir Nodhla</strong> · Software Developer & Android Engineer
</p>
