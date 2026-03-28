# subhaan-portfolio

Personal portfolio website for Subhaan Syed — built with vanilla HTML, CSS, and JavaScript using [Vite](https://vitejs.dev/). Deployed on [Vercel](https://vercel.com/).

---

## Tech Stack

- **HTML / CSS / JS** — no frameworks, fully hand-crafted
- **Vite** — local dev server and build tool
- **Vercel** — deployment and hosting
- **Font** — [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) via Google Fonts

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

---

## Project Structure

```
subhaan-portfolio/
├── public/
│   └── logo.png          # Personal logo asset
├── index.html            # Main page
├── styles.css            # All styles
├── script.js             # Minimal interactivity
├── vite.config.js        # Vite configuration
├── vercel.json           # Vercel deployment config
├── package.json
└── README.md
```

---

## Deployment

This site is deployed via [Vercel](https://vercel.com/). To deploy your own fork:

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com/) and import the repository
3. Vercel auto-detects the config from `vercel.json` — just click **Deploy**
4. Your site will be live at `https://your-project-name.vercel.app`

To connect a custom domain later, go to your Vercel project settings → Domains.

---

## Customization

All content is in `index.html`. Styles and colors are controlled via CSS variables at the top of `styles.css`:

```css
:root {
  --bg:     #F7F2EA;   /* cream background */
  --gold:   #C9A050;   /* gold accent */
  --text:   #1A1A1A;   /* primary text */
  --muted:  #7A7265;   /* secondary text */
}
```
