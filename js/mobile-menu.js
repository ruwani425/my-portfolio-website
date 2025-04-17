document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".burger-button")
  const mobileMenu = document.querySelector(".mobile-menu")
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-list a")

  // Toggle mobile menu when burger button is clicked
  burgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    burgerButton.classList.toggle("active")
    document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : ""
  })

  // Close mobile menu when a link is clicked
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      burgerButton.classList.remove("active")
      document.body.style.overflow = ""

      // Add active class to the clicked link
      mobileMenuLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")
    })
  })

  // Update active link based on scroll position
  function updateActiveLink() {
    const scrollPosition = window.scrollY

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        mobileMenuLinks.forEach((link) => {
          link.classList.remove("active")
        })

        const activeLink = document.querySelector(`.mobile-menu-list a[href="#${sectionId}"]`)
        if (activeLink) {
          activeLink.classList.add("active")
        }
      }
    })
  }

  // Update active link on scroll
  window.addEventListener("scroll", updateActiveLink)

  // Initial update of active link
  updateActiveLink()
})
