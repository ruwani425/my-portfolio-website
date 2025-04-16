document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navigation a")

  function setActiveLink() {
    const scrollPosition = window.scrollY

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
        })

        const activeLink = document.querySelector(`.navigation a[href="#${sectionId}"]`)
        if (activeLink) {
          activeLink.classList.add("active")
        }
      }
    })
  }

  setActiveLink()

  window.addEventListener("scroll", setActiveLink)
})
