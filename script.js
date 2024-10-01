
const themeButton1 = document.querySelector('#darkB');
const themeButton2 = document.querySelector('#lightB');
const themeButton3 = document.querySelector('#warmB');
const themeButton4 = document.querySelector('#coolB');

let currentTheme = "none";

themeButton1.addEventListener('click', function () {
    alert('button clicked');
}
)

themeButton2.addEventListener('click', function () {
    alert('button clicked');
}
)

themeButton3.addEventListener('click', function () {
    alert('button clicked');
}
)

themeButton4.addEventListener('click', function () {
    alert('button clicked');
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