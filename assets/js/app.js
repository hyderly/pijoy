

const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');



icon.addEventListener('click', function(){
    navbar.classList.toggle('display-nav');
    menu.classList.toggle('menu-active');
})






