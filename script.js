
const themeButtonD = document.querySelector('#darkB');
const themeButtonL = document.querySelector('#lightB');
const themeButtonW = document.querySelector('#warmB');
const themeButtonC = document.querySelector('#coolB');

let currentTheme = "none";

function changeTheme (theme) {
    document.body.className = '';
    document.body.classList.add(theme);
    currentTheme = theme;
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
/*
const container = document.querySelector('.theme-container');
const button = document.querySelectorAll('button');

let themeStored = localStorage.getItem('themeStored') || 'light';
container.classList.add(themeStored);


buttons.forEach(button => {
    button.addEventListener('click', function(){
        const themeClass = this.className;

        container.classList.remove('light', 'dark', 'warm', 'cool');

        container.classList.add(themeClass.replace('B', ''));
        
        localStorage.setItem('themeStored', themeClass.replace('B', ''));
    });
});
*/