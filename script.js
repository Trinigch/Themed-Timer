
const themeButton1 = document.querySelector('#theme1');
const themeButton2 = document.querySelector('#theme2');
const themeButton3 = document.querySelector('#theme3');
const themeButton4 = document.querySelector('#theme4');

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