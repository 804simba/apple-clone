const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const overlay = document.getElementById('overlay');
const getYear = document.querySelector("#footer-year");

const currentYear = new Date().getFullYear();
getYear.innerHTML = currentYear;

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle(".stop-scrolling");
    menu.classList.toggle("show-menu");
})