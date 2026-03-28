import { currently, archive, posts } from './content.js'

// ── Active nav link ────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href')
    const isHome = (href === 'index.html' || href === './index.html') &&
                   (path === '/' || path.endsWith('index.html'))
    const isMatch = path.endsWith(href)
    link.classList.toggle('active', isHome || isMatch)
  })
}

// ── Render: Currently (home page) ─────────────────────────
function renderCurrently() {
  const line = document.querySelector('.currently-line')
  if (!line) return
  line.innerHTML = `<span class="arrow">→</span> ${currently.text}`
}

// ── Render: Archive ────────────────────────────────────────
function renderArchive() {
  const container = document.getElementById('archive-content')
  if (!container) return

  if (archive.length === 0) {
    container.innerHTML = '<p class="empty-state">Nothing archived yet.</p>'
    return
  }

  const items = archive
    .slice()
    .reverse() // newest first
    .map(entry => `
      <li class="entry-item">
        <span class="entry-text">${entry.text}</span>
        <span class="entry-date">${entry.from} — ${entry.to}</span>
      </li>
    `).join('')

  container.innerHTML = `<ul class="entry-list">${items}</ul>`
}

// ── Render: Blog ───────────────────────────────────────────
function renderBlog() {
  const container = document.getElementById('blog-content')
  if (!container) return

  if (posts.length === 0) {
    container.innerHTML = '<p class="empty-state">Nothing here yet.</p>'
    return
  }

  const items = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // newest first
    .map(post => {
      const d = new Date(post.date)
      const label = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      return `
        <li class="entry-item">
          <a class="entry-link entry-link--post" href="${post.url}">${post.title}</a>
          <span class="entry-date">${label}</span>
        </li>
      `
    }).join('')

  container.innerHTML = `<ul class="entry-list">${items}</ul>`
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav()
  renderCurrently()
  renderArchive()
  renderBlog()

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('loaded')
    })
  })
})
