# subhaan-portfolio

Personal portfolio website for Subhaan Syed — built with vanilla HTML, CSS, and JavaScript using [Vite](https://vitejs.dev/). Deployed on [Vercel](https://vercel.com/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Subhaan50/subhaan-portfolio)

---

## Tech Stack

- **HTML / CSS / JS** — no frameworks, fully hand-crafted
- **Vite** — local dev server and build tool
- **Vercel** — deployment and hosting (auto-deploys on every push)
- **Font** — [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) via Google Fonts

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The site hot-reloads on save.

### Deploy

```bash
git add .
git commit -m "your message"
git push
```

Vercel picks up the push automatically and redeploys within ~30 seconds.

---

## Content Management

All content lives in one file: **`content.js`** at the root of the project. You never need to touch any other file for day-to-day updates.

---

### Updating "Currently"

The `currently` object controls what appears on the home page under the **Currently** section.

```js
export const currently = {
  text: "finishing the semester.",
  since: "Mar 2026",
}
```

To update it, change `text` to your new status and set `since` to the current month.

---

### Moving a Status to Archive

When you update **Currently**, move the old entry into the `archive` array so the history is preserved. Each archive entry needs `text`, `from`, and `to`.

**Before:**
```js
export const currently = {
  text: "finishing the semester.",
  since: "Mar 2026",
}

export const archive = []
```

**After (e.g. updating in May 2026):**
```js
export const currently = {
  text: "building something new.",
  since: "May 2026",
}

export const archive = [
  { text: "finishing the semester.", from: "Mar 2026", to: "May 2026" },
]
```

The Archive page will automatically display all entries, newest first, with the date range shown.

---

### Adding a Blog Post

Blog posts are two-step: add the entry to `content.js`, then create the post HTML file.

#### Step 1 — Add the entry to `content.js`

```js
export const posts = [
  {
    title: "Your post title here",
    date: "2026-05-01",          // YYYY-MM-DD format
    url: "posts/your-post.html", // must match the file you create in Step 2
  },
]
```

The Blog page will automatically show the title and formatted date, newest first.

#### Step 2 — Create the post file

Duplicate an existing post file (e.g. `posts/robotics-roadmap.html`) and update these three things:

1. **`<title>`** in the `<head>`:
   ```html
   <title>Your post title — Subhaan Syed</title>
   ```

2. **The post header** in `<main>`:
   ```html
   <h1 class="post-title">Your post title</h1>
   <p class="post-subtitle">A short subtitle or description</p>
   <p class="post-date">May 2026</p>
   ```

3. **The post body**:
   ```html
   <div class="post-body">
     <p>Your first paragraph goes here.</p>
     <p>Each paragraph is wrapped in its own &lt;p&gt; tag.</p>
     <p>Add as many as you need.</p>
   </div>
   ```

#### Step 3 — Register the file with Vite

Open `vite.config.js` and add your new post to the `input` object:

```js
input: {
  main:            resolve(__dirname, 'index.html'),
  building:        resolve(__dirname, 'building.html'),
  blog:            resolve(__dirname, 'blog.html'),
  archive:         resolve(__dirname, 'archive.html'),
  roboticsRoadmap: resolve(__dirname, 'posts/robotics-roadmap.html'),
  yourPost:        resolve(__dirname, 'posts/your-post.html'), // add this line
},
```

Then push — Vercel handles the rest.

---

## Project Structure

```
subhaan-portfolio/
├── public/
│   ├── logo.png          # Sidebar logo
│   └── favicon.png       # Browser tab icon
├── posts/
│   └── robotics-roadmap.html  # Individual blog post pages
├── index.html            # Home page
├── building.html         # Building page
├── blog.html             # Blog listing page
├── archive.html          # Archive page
├── content.js            # ← Edit this for all content updates
├── styles.css            # All styles and CSS variables
├── script.js             # Rendering logic (reads from content.js)
├── vite.config.js        # Build config (register new posts here)
├── vercel.json           # Vercel deployment config
└── package.json
```

---

## Customization

Colors and typography are controlled via CSS variables at the top of `styles.css`:

```css
:root {
  --bg:        #F7F2EA;   /* cream background */
  --text:      #1A1A1A;   /* primary text: name, body */
  --secondary: #363230;   /* supporting text: labels, descriptions, discipline tag */
  --muted:     #6B6760;   /* subtle only: dates, inactive nav, social links */
  --gold:      #C9A050;   /* accent color */
  --border:    #E8E0D5;   /* divider lines */
}
```
