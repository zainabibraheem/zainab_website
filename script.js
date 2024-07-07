document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');
    const year = document.getElementById('currentYear');
    const day = document.getElementById('currentDay');
    const time = document.getElementById('time');
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

    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDate = new Date();

    const dayIndex = currentDate.getDay();

    const currentDay = daysOfWeek[dayIndex];

    const calender = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds} UTC`;

    time.textContent = currentTime;


day.textContent = `${currentDay} ${calender}`;

})