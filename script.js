window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (header) {
    if (window.scrollY > 50) {
      header.style.background = "#08101f";
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
      header.style.background = "rgba(15,23,42,.9)";
      header.style.boxShadow = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");

  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});
