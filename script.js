function toggleMenu() {
    const icon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu-links");

    icon.classList.toggle("open");
    menu.classList.toggle("open");
}