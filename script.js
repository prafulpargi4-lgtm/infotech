// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ================= SCROLL TO TOP =================

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
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

// ================= SCROLL ANIMATION =================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(
".hero-text, .about-text, .service-card, .project-card, .contact-container"
).forEach((el) => observer.observe(el));
// ================= STATS COUNTER =================

const counters = document.querySelectorAll(".stat-box h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const targetText = counter.innerText;

            if (targetText.includes("+")) {

                const target = parseInt(targetText);

                let count = 0;

                const updateCounter = () => {

                    const increment = Math.ceil(target / 80);

                    count += increment;

                    if (count >= target) {
                        counter.innerText = target + "+";
                    } else {
                        counter.innerText = count + "+";
                        requestAnimationFrame(updateCounter);
                    }

                };

                updateCounter();

            }

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));