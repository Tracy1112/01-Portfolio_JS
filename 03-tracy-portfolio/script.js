document.addEventListener('DOMContentLoaded', () => {
  const sunIcon = document.getElementById('sun_icon')
  const moonIcon = document.getElementById('moon_icon')
  const body = document.body
  const themeToggleButton = document.querySelector('.toggle-theme') // Assuming the button exists

  // Load theme from localStorage or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark'
  setTheme(savedTheme)

  function setTheme(theme) {
    body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    updateIcons(theme)
  }

  function updateIcons(theme) {
    const isDark = theme === 'dark'
    sunIcon.style.display = isDark ? 'block' : 'none'
    moonIcon.style.display = isDark ? 'none' : 'block'
  }

  function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme')
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  // Attach event listener to the toggle button if it exists
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme)
  }

  // Ensure `toggleTheme` is accessible globally (optional)
  window.toggleTheme = toggleTheme

  // Add glow effect to CTA button if it exists
  document.querySelector('.cta-button')?.classList.add('glow')
})
