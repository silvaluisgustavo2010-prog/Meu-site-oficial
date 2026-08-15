"use strict";

const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

function atualizarNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
}

function fecharMenu() {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

function alternarMenu() {
    const aberto = navMenu.classList.toggle("open");

    menuToggle.classList.toggle("active", aberto);
    menuToggle.setAttribute("aria-expanded", aberto);
    document.body.classList.toggle("menu-open", aberto);
}

window.addEventListener("scroll", atualizarNavbar, {
    passive: true
});

menuToggle.addEventListener("click", alternarMenu);

navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        fecharMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
        fecharMenu();
    }
});

atualizarNavbar();