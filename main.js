tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#8B0000",
        secondary: "#DC143C",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px",
      },
    },
  },
};

// mobile menu script
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});

// gallery flter
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterBtns.forEach((b) =>
        b.classList.remove("active", "bg-primary", "text-white")
      );
      btn.classList.add("active", "bg-primary", "text-white");

      galleryItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);
  document.querySelectorAll(".scroll-fade").forEach((el) => {
    observer.observe(el);
  });
});

// back to top
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
      backToTopBtn.classList.add("opacity-100");
    } else {
      backToTopBtn.classList.add("opacity-0", "pointer-events-none");
      backToTopBtn.classList.remove("opacity-100");
    }
  });
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;
      const requiredFields = form.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="tel"], input[type="number"], textarea'
      );
      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("border-red-500");
        } else {
          field.classList.remove("border-red-500");
        }
      });
      const checkboxes = form.querySelectorAll('input[type="checkbox"]');
      let checkedCount = 0;
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) checkedCount++;
      });
      if (checkedCount === 0) {
        isValid = false;
        checkboxes.forEach((checkbox) => {
          checkbox.closest("label").classList.add("border-red-500");
        });
      } else {
        checkboxes.forEach((checkbox) => {
          checkbox.closest("label").classList.remove("border-red-500");
        });
      }
      if (isValid) {
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = "Submitting...";
        setTimeout(() => {
          submitButton.innerHTML = "Quote Request Sent!";
          submitButton.classList.add("bg-green-500");
          setTimeout(() => {
            form.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = "Submit Quote Request";
            submitButton.classList.remove("bg-green-500");
          }, 3000);
        }, 1500);
      }
    });
  }
});

// smooth scroll
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
