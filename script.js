// Custom JavaScript for ColorCrest Paints

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const navbarHeight = document.querySelector(".navbar").offsetHeight
    const elementPosition = element.offsetTop - navbarHeight

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}

// Handle navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg")
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.classList.remove("shadow-lg")
    navbar.style.backgroundColor = "white"
    navbar.style.backdropFilter = "none"
  }
})

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = this.querySelector('input[type="text"]').value
  const email = this.querySelector('input[type="email"]').value
  const message = this.querySelector("textarea").value

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.")
    return
  }

  // Simulate form submission
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Thank you for your message! We'll get back to you soon.")
    this.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Add click handlers for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Handle navigation clicks
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })

  // Handle product card interactions
  const productCards = document.querySelectorAll(".product-card")
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Handle feature icon hover effects
  const featureItems = document.querySelectorAll(".feature-item")
  featureItems.forEach((item) => {
    const icon = item.querySelector(".feature-icon")

    item.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.1)"
      icon.style.transition = "transform 0.3s ease"
    })

    item.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1)"
    })
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-on-scroll")
      }
    })
  }, observerOptions)

  // Observe sections for animation
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    observer.observe(section)
  })
})

// Handle button clicks for product cards
function handleProductClick(productType) {
  alert(`Learn more about ${productType} - Coming soon!`)
}

// Add click handlers to product buttons
document.addEventListener("DOMContentLoaded", () => {
  const productButtons = document.querySelectorAll(".btn-product")
  const productTitles = ["Interior Paints", "Exterior Paints", "Wood Coatings", "Metal Paints"]

  productButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      handleProductClick(productTitles[index])
    })
  })
})

// Mobile menu handling
document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar-toggler")
  const navbarCollapse = document.querySelector(".navbar-collapse")

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll(".navbar-nav .nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click()
      }
    })
  })
})
