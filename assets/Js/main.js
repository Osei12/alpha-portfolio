const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
});


window.addEventListener('scroll', () => {
    if (window.scrollY >= 30) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled')
    }
})
window.addEventListener('scroll', function () {
    let header = this.document.querySelector('header');

    header.classList.toggle('scrolling-active', window.scrollY > 30);
});