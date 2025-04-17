document.addEventListener("DOMContentLoaded", () => {
  const typewriterElement = document.getElementById("typewriter")
  const roles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "UI UX Engineer",
    "Full Stack Developer",
  ]

  let roleIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 150

  roleIndex = 4

  function type() {
    const currentRole = roles[roleIndex % roles.length]

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1)
      charIndex--
      typingSpeed = 80
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1)
      charIndex++
      typingSpeed = 150
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true
      typingSpeed = 2000
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      roleIndex++
      typingSpeed = 500
    }

    setTimeout(type, typingSpeed)
  }

  type()
})