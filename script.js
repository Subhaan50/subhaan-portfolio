// Highlight active nav link based on current path
function setActiveNav() {
  const path = window.location.pathname
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href')
    if (href === path || (path === '/' && href === '/')) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

// Subtle fade-in on load
function fadeIn() {
  document.body.style.opacity = '0'
  document.body.style.transition = 'opacity 0.4s ease'
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1'
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav()
  fadeIn()
})
