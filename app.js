const menuBar = document.querySelector('.menubar');
const nav = document.querySelector('.nav-links');

menuBar.onclick = function () {
    nav.classList.toggle('nav-active')
}

