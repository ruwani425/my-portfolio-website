document.addEventListener("DOMContentLoaded", () => {
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  
    // Get all skill progress bars
    const skillBars = document.querySelectorAll(".skill-progress")
  
    // Function to animate skill bars
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        if (isInViewport(bar) && !bar.classList.contains("animate")) {
          // Get percentage from data attribute
          const percent = bar.getAttribute("data-percent")
  
          // Set custom property for CSS animation
          bar.style.setProperty("--percent", percent + "%")
  
          // Add animation class
          bar.classList.add("animate")
  
          // Animate percentage counter
          const percentElement = bar.closest(".skill-item").querySelector(".skill-percent")
          const startValue = 0
          const endValue = Number.parseInt(percent)
          const duration = 1500
  
          let startTime = null
  
          function animateCounter(timestamp) {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const value = Math.floor((progress / duration) * endValue)
  
            if (value <= endValue) {
              percentElement.textContent = Math.min(value, endValue) + "%"
              requestAnimationFrame(animateCounter)
            } else {
              percentElement.textContent = endValue + "%"
            }
          }
  
          requestAnimationFrame(animateCounter)
        }
      })
    }
  
    // Run animation when page loads
    animateSkillBars()
  
    // Run animation when scrolling
    window.addEventListener("scroll", animateSkillBars)
  })