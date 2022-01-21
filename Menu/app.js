const menuEl = document.getElementById("menu");
const hamburgerEl = document.getElementById("hamburger");

hamburgerEl.addEventListener("click", () => {
    menuEl.classList.toggle("active");
});
