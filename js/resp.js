const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const rightNav = document.querySelector(".rightNav");
const navlist = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
    rightNav.classList.toggle("v-class-resp");
    navlist.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-nav-resp");
});