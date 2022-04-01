'use strict';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const element = document.documentElement;

const toggleIcons = function (theme) {
    const mode = (theme === 'dark') ? 'Dark' : 'Light';
    const phase = (theme === 'dark') ? 'moon' : 'sun';
    const markup = `
    <span class="toggle-text">${mode} Mode</span>
    <i class="fa-solid fa-${phase}"></i>`;

    toggleIcon.innerHTML = markup;

};

const toggleImages = function (mode) {
    const theme = mode;
    image1.src = `img/undraw_proud_coder_${theme}.svg`;
    image2.src = `img/undraw_feeling_proud_${theme}.svg`;
    image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
};

const setTheme = function (setting) {
    localStorage.setItem('mode', setting);
    element.setAttribute('data-theme', setting);
    toggleIcons(setting);
    toggleImages(setting);
    setting === 'dark' ? toggleSwitch.checked = true : toggleSwitch.checked = false;
    if (setting === 'dark') {
        textBox.style.backgroundColor = 'rgb(255 255 255)';
        nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    } else {
        textBox.style.backgroundColor = 'rgb(0 0 0 /50%)';
        nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
    }
};

// const darkMode = function () {
//     element.setAttribute('data-theme', 'dark');
//     textBox.style.backgroundColor = 'rgb(255 255 255)';
//     nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
//     toggleIcons('dark');
//     toggleImages('dark');
//     setStorage('dark');

// };


// const lightMode = function () {
//     element.setAttribute('data-theme', 'light');
//     textBox.style.backgroundColor = 'rgb(0 0 0 /50%)';
//     nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
//     toggleIcons('light');
//     toggleImages('light');
//     setTheme('light');
// };

// Switch theme dynamically
const switchTheme = function (e) {

    if (e.target.checked) {
        setTheme('dark');

    } else {
        setTheme('light');

    }
};

toggleSwitch.addEventListener('change', switchTheme);

const getModeSetting = localStorage.getItem('mode');

if (getModeSetting === 'dark') {
    setTheme('dark');
} if (getModeSetting === 'light') {
    setTheme('light');
}


let pageTheme;

if (!getModeSetting) {
    pageTheme = confirm('Would you like to set your default screen to Dark Mode?');
    console.log(pageTheme);
    pageTheme === true ? setTheme('dark') : setTheme('light');
}









