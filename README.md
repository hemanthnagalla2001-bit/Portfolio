# Hemanth Nagalla — Portfolio

A premium, animated personal portfolio website built with React, Framer Motion, and deployed on Vercel.

**Live URL:** _https://your-portfolio.vercel.app_ _(update after deployment)_

---

## Features

- Animated hero section with typewriter effect and floating gradient orbs
- Framer Motion scroll-reveal animations throughout every section
- Interactive skills section with animated progress bars
- Alternating experience timeline with hover effects
- Filterable projects grid (All, Full Stack, Backend, Analytics, Dashboard, Cloud, Live Projects)
- Education cards with GPA display
- Contact form with mailto integration
- Sticky navbar with active section detection and mobile hamburger menu
- Back-to-top button
- Loading animation with progress bar
- Fully responsive — desktop, tablet, and mobile
- Dark premium theme with purple/teal accent palette
- Resume PDF download button

---

## Tech Stack

| Layer       | Tech                                         |
|-------------|----------------------------------------------|
| Framework   | React 18 + Vite                              |
| Animations  | Framer Motion                                |
| Icons       | React Icons (Feather)                        |
| Fonts       | Inter + JetBrains Mono (Google Fonts)        |
| Deployment  | Vercel                                       |

---

## Local Setup

```bash
# Clone the repo
git clone https://github.com/hemanthnagalla2001-bit/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## How to Update Resume

1. Replace the file at `public/resume/Hemanth_Nagalla_Resume.pdf` with your new resume.
2. The filename must stay the same, or update the `href` in:
   - `src/components/Hero.jsx` — Download Resume button
   - `src/components/Navbar.jsx` — Resume button in nav

---

## How to Update Project Live Links

Open `src/data/projects.js` and update the `live` field for any project once deployed:

```js
{
  title: "My Project",
  github: "https://github.com/hemanthnagalla2001-bit/my-project",
  live: "https://my-project.vercel.app",   // ← add live URL here
}
```

---

## How to Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B — GitHub Integration (Recommended)
1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Vite — no extra configuration needed.
4. Click Deploy.

---

## Folder Structure

```
portfolio/
├── public/
│   └── resume/
│       └── Hemanth_Nagalla_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── ExperienceTimeline.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── BackToTop.jsx
│   │   └── Loader.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── education.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vercel.json
├── package.json
└── README.md
```

---

## Future Improvements

- Dark/light theme toggle
- Blog section
- Certification badges
- Animated project screenshots
- EmailJS integration for live contact form submissions
