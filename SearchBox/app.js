const inputEl = document.getElementById("search-box");
const showEl = document.getElementById("toggle");

console.log(showEl, inputEl);

showEl.addEventListener("click", () => {
    inputEl.classList.toggle("active");
});
