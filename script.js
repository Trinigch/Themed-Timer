
const themeButtonD = document.querySelector('#darkB');
const themeButtonL = document.querySelector('#lightB');
const themeButtonW = document.querySelector('#warmB');
const themeButtonC = document.querySelector('#coolB');

let currentTheme = localStorage.getItem('theme') || "dark";

function changeTheme (theme) {
    document.body.className = '';
    document.body.classList.add(theme);
    currentTheme = theme;
    localStorage.setItem('theme', theme);
}

themeButtonD.addEventListener('click', function () {
    changeTheme('dark');
}
)

themeButtonL.addEventListener('click', function () {
    changeTheme('light');
}
)

themeButtonW.addEventListener('click', function () {
    changeTheme('warm');
}
)

themeButtonC.addEventListener('click', function () {
    changeTheme('cool');
}
)

changeTheme(currentTheme);