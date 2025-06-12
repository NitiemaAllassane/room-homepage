const openBtn = document.querySelector(".menuButton");
const pageOverlay = document.querySelector(".mobileNav");
const mobileMenu = document.querySelector(".mobileNav__container");

const closeBtn = document.querySelector(".closeBtn");

function toggleMenu() {
    pageOverlay.classList.toggle("visible");
    mobileMenu.classList.toggle("show");
}

function hideMenu() {
    let isMenuOpened = pageOverlay.classList.contains("visible");

    if (!isMenuOpened) return;

    pageOverlay.classList.remove("visible");
    mobileMenu.classList.replace("show", "hidden");
   
}

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", hideMenu);