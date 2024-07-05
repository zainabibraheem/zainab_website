document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');
    const year = document.getElementById('currentYear')
    let menuIsOpen = false;

    menuIcon.addEventListener('click', function () {
        if (menuIsOpen) {
            menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            navLinks.classList.add('active')
        } else {
            menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
            navLinks.classList.remove('active')
        }

        menuIsOpen = !menuIsOpen
    })

    const currentYear = new Date().getFullYear();

    Year.textContent = currentYear;

})