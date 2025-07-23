// Initialize AOS Animation Library
document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    })
  
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector(".mobile-menu-button")
    const closeMenuButton = document.querySelector(".close-menu-button")
    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu a")
  
    function toggleMobileMenu() {
      mobileMenu.classList.toggle("active")
      document.body.classList.toggle("no-scroll")
    }
  
    mobileMenuButton.addEventListener("click", toggleMobileMenu)
    closeMenuButton.addEventListener("click", toggleMobileMenu)
  
    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", toggleMobileMenu)
    })
  
    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("active")
      } else {
        backToTopButton.classList.remove("active")
      }
    })
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Header Scroll Effect
    const header = document.querySelector(".header")
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.style.padding = "10px 0"
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      } else {
        header.style.padding = "20px 0"
        header.style.boxShadow = "none"
      }
    })
  
    // Contact Form Submission
    const contactForm = document.getElementById("contact-form")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value
  
      // Simulate form submission
      const submitButton = contactForm.querySelector(".btn-submit")
      submitButton.textContent = "Sending..."
      submitButton.disabled = true
  
      setTimeout(() => {
        // Show success message
        showToast("Message sent successfully!")
  
        // Reset form
        contactForm.reset()
        submitButton.textContent = "Send Message"
        submitButton.disabled = false
      }, 1500)
    })
  
    // Toast Notification
    function showToast(message) {
      // Create toast element if it doesn't exist
      let toast = document.querySelector(".toast")
  
      if (!toast) {
        toast = document.createElement("div")
        toast.className = "toast"
        document.body.appendChild(toast)
      }
  
      toast.textContent = message
      toast.classList.add("show")
  
      setTimeout(() => {
        toast.classList.remove("show")
      }, 3000)
    }
  
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Add scroll reveal animation to project cards
    const projectCards = document.querySelectorAll(".project-card")
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1"
              entry.target.style.transform = "translateY(0)"
            }, index * 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
  
    projectCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      observer.observe(card)
    })
  
    // Skill badges animation
    const skillBadges = document.querySelectorAll(".skill-badge")
  
    skillBadges.forEach((badge, index) => {
      badge.style.animationDelay = `${index * 0.1}s`
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  })
  