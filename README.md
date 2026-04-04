# subhaan-portfolio

Personal portfolio website for Subhaan Syed — built with vanilla HTML, CSS, and JavaScript using [Vite](https://vitejs.dev/). Deployed on [Vercel](https://vercel.com/).

Live at **[subhaan-portfolio.vercel.app](https://subhaan-portfolio.vercel.app)**

---

## Tech Stack

- **HTML / CSS / JS** — no frameworks, fully hand-crafted
- **Vite** — local dev server and build tool
- **Vercel** — deployment and hosting (auto-deploys on every push to `main`)
- **Font** — [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) via Google Fonts
- **Quill.js** — rich text editor used in the admin panel

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — name, affiliations, currently section |
| `/building` | Projects and things being built |
| `/blog` | Blog post listing |
| `/thoughts` | Short-form thoughts with timestamps |
| `/reading` | Links and reading with commentary |
| `/videos` | Embedded YouTube videos |
| `/archive` | Log of past statuses and retired content |
| `/admin` | Content management panel (password: GitHub PAT) |

---

## Content Management

All content is managed through the **admin panel** at `/admin`. No code editing required for day-to-day updates.

### Accessing Admin

1. Go to `https://subhaan-portfolio.vercel.app/admin`
2. Enter your GitHub Personal Access Token (needs `repo` scope)
3. Token is saved in browser localStorage — you only enter it once per device

### What you can manage

| Tab | What it does |
|---|---|
| **Thoughts** | Post short thoughts with auto-timestamp. Archive or delete old ones. |
| **Reading** | Add links with title, URL, and optional commentary. Edit, archive, or delete. |
| **Blog** | Write posts in a rich text editor (Quill). Supports Ctrl+V image paste, headings, alignment, blockquotes, lists. Edit posts after publishing — shows original date + "Updated" date. |
| **Videos** | Add YouTube videos by URL or video ID. Shows as embedded grid. |
| **Currently** | Update the status line on the home page. |

### How blog publishing works

1. Fill in Title, Subtitle (optional), Slug (URL path), and write content in the editor
2. Hit **Publish Post** — this creates the HTML file in `posts/` and adds the entry to `posts.json` automatically
3. Vercel redeploys within ~1 minute and the post is live
4. To edit: click **Edit** on any post in the Published Posts list, make changes, hit **Update Post**

---

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later

### Install & run

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

Vercel picks up the push automatically and redeploys within ~1 minute.

---

## Project Structure

```
subhaan-portfolio/
├── public/
│   ├── data/
│   │   ├── currently.json     # Home page status
│   │   ├── posts.json         # Blog post index
│   │   ├── thoughts.json      # Thoughts entries
│   │   ├── reading.json       # Reading links
│   │   ├── videos.json        # YouTube video entries
│   │   └── archive.json       # Archived entries
│   ├── admin/
│   │   └── index.html         # Admin panel (self-contained, no build step)
│   ├── logo.png
│   └── favicon.png
├── posts/
│   └── robotics-roadmap.html  # Individual blog post pages
├── index.html                 # Home
├── building.html              # Building
├── blog.html                  # Blog listing
├── thoughts.html              # Thoughts
├── reading.html               # Reading
├── videos.html                # Videos
├── archive.html               # Archive
├── styles.css                 # All styles and CSS variables
├── script.js                  # Client-side rendering (fetches from /data/*.json)
├── vite.config.js             # Build config
├── vercel.json                # Vercel routing config
└── package.json
```

---

## Customization

Colors and typography are controlled via CSS variables at the top of `styles.css`:

```css
:root {
  --bg:        #F7F2EA;   /* cream background */
  --text:      #1A1A1A;   /* primary text */
  --secondary: #252220;   /* supporting text: labels, descriptions */
  --muted:     #6B6760;   /* subtle: dates, inactive nav, social links */
  --gold:      #C9A050;   /* accent color */
  --border:    #E8E0D5;   /* divider lines */
}
```
