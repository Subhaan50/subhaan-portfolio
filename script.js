// ── Active nav link ────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href')
    const isHome = (href === 'index.html' || href === './index.html' || href === '../index.html') &&
                   (path === '/' || path.endsWith('index.html'))
    const isMatch = path.endsWith(href.replace('../', ''))
    link.classList.toggle('active', isHome || isMatch)
  })
}

// ── Render: Currently (home page) ─────────────────────────
async function renderCurrently() {
  const container = document.querySelector('.currently')
  if (!container) return
  try {
    const res = await fetch('/data/currently.json')
    const data = await res.json()
    let html = `<p class="section-label">Currently</p>
      <p class="currently-line"><span class="arrow">→</span> ${data.text}</p>`
    if (data.reading)
      html += `<p class="currently-line"><span class="arrow currently-icon">📖</span> ${data.reading}</p>`
    if (data.thinking)
      html += `<p class="currently-line"><span class="arrow currently-icon">💭</span> ${data.thinking}</p>`
    container.innerHTML = html
  } catch (e) {}
}

// ── Render: Archive ────────────────────────────────────────
async function renderArchive() {
  const container = document.getElementById('archive-content')
  if (!container) return
  try {
    const res = await fetch('/data/archive.json')
    const archive = await res.json()
    if (archive.length === 0) {
      container.innerHTML = '<p class="empty-state">Nothing archived yet.</p>'
      return
    }
    const items = archive.slice().reverse().map(entry => `
      <li class="entry-item">
        <span class="entry-text">${entry.text}</span>
        <span class="entry-date">${entry.from} — ${entry.to}</span>
      </li>`).join('')
    container.innerHTML = `<ul class="entry-list">${items}</ul>`
  } catch (e) {
    container.innerHTML = '<p class="empty-state">Nothing archived yet.</p>'
  }
}

// ── Render: Blog ───────────────────────────────────────────
async function renderBlog() {
  const container = document.getElementById('blog-content')
  if (!container) return
  try {
    const res = await fetch('/data/posts.json')
    const posts = await res.json()
    if (posts.length === 0) {
      container.innerHTML = '<p class="empty-state">Nothing here yet.</p>'
      return
    }
    const items = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => {
      const d = new Date(post.date)
      const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      return `
        <li class="entry-item">
          <a class="entry-link entry-link--post" href="${post.url}">${post.title}</a>
          <span class="entry-date">${label}</span>
        </li>`
    }).join('')
    container.innerHTML = `<ul class="entry-list" style="margin-top:0">${items}</ul>`
  } catch (e) {
    container.innerHTML = '<p class="empty-state">Nothing here yet.</p>'
  }
}

// ── Render: Thoughts ───────────────────────────────────────
async function renderThoughts() {
  const container = document.getElementById('thoughts-content')
  if (!container) return
  try {
    const res = await fetch('/data/thoughts.json')
    const thoughts = await res.json()
    if (thoughts.length === 0) {
      container.innerHTML = '<p class="empty-state">Nothing here yet.</p>'
      return
    }
    const items = thoughts.slice().reverse().map(t => {
      const dt = new Date(t.datetime)
      const dateStr = dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      const timeStr = dt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      return `
        <li class="thought-item">
          <p class="thought-text">${t.text}</p>
          <span class="entry-date">${dateStr} · ${timeStr}</span>
        </li>`
    }).join('')
    container.innerHTML = `<ul class="thought-list">${items}</ul>`
  } catch (e) {
    container.innerHTML = '<p class="empty-state">Nothing here yet.</p>'
  }
}

// ── Render: Reading ────────────────────────────────────────
async function renderReading() {
  const container = document.getElementById('reading-content')
  if (!container) return
  try {
    const res = await fetch('/data/reading.json')
    const reading = await res.json()
    if (reading.length === 0) {
      container.innerHTML = '<p class="empty-state">Nothing here yet.</p>'
      return
    }
    const items = reading.slice().reverse().map(r => {
      const d = new Date(r.date)
      const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      return `
        <li class="entry-item reading-entry">
          <div class="reading-main">
            <a class="entry-link entry-link--post" href="${r.url}" target="_blank" rel="noopener noreferrer">${r.title}</a>
            ${r.commentary ? `<p class="reading-commentary">${r.commentary}</p>` : ''}
          </div>
          <span class="entry-date">${dateStr}</span>
        </li>`
    }).join('')
    container.innerHTML = `<ul class="entry-list">${items}</ul>`
  } catch (e) {
    container.innerHTML = '<p class="empty-state">Nothing here yet.</p>'
  }
}

// ── Render: Videos ─────────────────────────────────────────
async function renderVideos() {
  const container = document.getElementById('videos-content')
  if (!container) return
  try {
    const res = await fetch('/data/videos.json')
    const videos = await res.json()
    if (videos.length === 0) {
      container.innerHTML = '<p class="empty-state">Nothing here yet.</p>'
      return
    }
    const items = videos.slice().reverse().map(v => `
      <div class="video-item">
        <div class="video-embed">
          <iframe src="https://www.youtube.com/embed/${v.youtubeId}" frameborder="0" allowfullscreen></iframe>
        </div>
        <p class="video-title">${v.title}</p>
      </div>`).join('')
    container.innerHTML = `<div class="video-grid">${items}</div>`
  } catch (e) {
    container.innerHTML = '<p class="empty-state">Nothing here yet.</p>'
  }
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav()
  renderCurrently()
  renderArchive()
  renderBlog()
  renderThoughts()
  renderReading()
  renderVideos()

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('loaded')
    })
  })
})
