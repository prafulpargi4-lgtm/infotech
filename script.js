// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// ===============================
// STICKY HEADER
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
    } else {
        header.style.background = "#000";
        header.style.boxShadow = "none";
    }
});

// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".service-card, .project-card, .about-content")
.forEach(el => observer.observe(el));

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// TOP BUTTON STYLE
// ===============================

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00e5ff";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topBtn.style.transition = ".3s";

topBtn.addEventListener("mouseenter", () => {
    topBtn.style.transform = "scale(1.1)";
});

topBtn.addEventListener("mouseleave", () => {
    topBtn.style.transform = "scale(1)";
});

// ===============================
// PAGE LOADED
// ===============================

window.addEventListener("load", () => {
    console.log("✅ InfoTech Website Loaded Successfully!");
});
