
// ==========================================
// PERSONAL PORTFOLIO
// MAIN JAVASCRIPT
// ==========================================


// ==========================================
// 1. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element, index) => {

        element.style.transitionDelay = `${index * 100}ms`;

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("is-visible");

    });

}


// ==========================================
// 2. ABOUT SECTION TEXT HOVER EFFECT
// ==========================================

const aboutParagraphs = document.querySelectorAll(
    ".about-description p"
);

aboutParagraphs.forEach((paragraph) => {

    paragraph.addEventListener("mouseenter", () => {

        paragraph.classList.add("paragraph-active");

    });

    paragraph.addEventListener("mouseleave", () => {

        paragraph.classList.remove("paragraph-active");

    });

});


// ==========================================
// 3. ABOUT TITLE INTERACTION
// ==========================================

const aboutTitle = document.querySelector(".about-title");

if (aboutTitle) {

    aboutTitle.addEventListener("mouseenter", () => {

        aboutTitle.classList.add("title-active");

    });

    aboutTitle.addEventListener("mouseleave", () => {

        aboutTitle.classList.remove("title-active");

    });

}


// ==========================================
// 4. SMOOTH SECTION NAVIGATION
// ==========================================

const sectionLinks = document.querySelectorAll(
    '.explore-card[href^="#"]'
);

sectionLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        event.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        history.pushState(null, "", targetId);

    });

});


// ==========================================
// 5. CURRENT YEAR HELPER
// ==========================================

const currentYear = new Date().getFullYear();

console.log(`Portfolio loaded - ${currentYear}`);


// ==========================================
// 6. FOOTER
// ==========================================

// Automatically update copyright year

const copyrightYear = document.getElementById("current-year");

if (copyrightYear) {
    copyrightYear.textContent = currentYear;
}


// ==========================================
// 7. BACK TO TOP BUTTON
// ==========================================

const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }

    }, { passive: true });


    backToTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==========================================
// 8. LIGHT / DARK THEME TOGGLE
// ==========================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

document.documentElement.setAttribute("data-theme", savedTheme);

if (themeIcon) {
    themeIcon.textContent = savedTheme === "dark" ? "☀" : "☾";
}

if (themeToggle) {

    themeToggle.setAttribute(
        "aria-label",
        savedTheme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme"
    );

    themeToggle.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute("data-theme") || "dark";

        const newTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);

        localStorage.setItem("portfolio-theme", newTheme);

        if (themeIcon) {
            themeIcon.textContent = newTheme === "dark" ? "☀" : "☾";
        }

        themeToggle.setAttribute(
            "aria-label",
            newTheme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
        );

    });

}


// ==========================================
// 9. MOBILE NAVIGATION
// ==========================================

const navMenuToggle = document.getElementById("nav-menu-toggle");
const navLinks = document.getElementById("nav-links");

if (navMenuToggle && navLinks) {

    navMenuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        navMenuToggle.setAttribute("aria-expanded", isOpen);

        navMenuToggle.textContent = isOpen ? "✕" : "☰";

    });

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            navMenuToggle.setAttribute("aria-expanded", "false");

            navMenuToggle.textContent = "☰";

        });

    });

}
