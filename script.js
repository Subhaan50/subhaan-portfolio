// Mark active nav link based on current page
function setActiveNav() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/'
    link.classList.toggle('active', href === path)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav()
  // Fade in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('loaded')
    })
  })
})
