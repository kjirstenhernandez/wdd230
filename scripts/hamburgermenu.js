const mainmenu = document.querySelector('.menu');
const hambutton = document.querySelector('#navMenu');

hambutton.addEventListener('click', () => {
    mainmenu.classList.toggle('open');
    hambutton.classList.toggle('open');
});