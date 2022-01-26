const asideButton = document.querySelectorAll(".aside-menu a");
const wrapper = document.querySelector(".slider-wrapper");

asideButton.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.style.transform = `translateX(${-80 * index}vw)`;
    });
});
