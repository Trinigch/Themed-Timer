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