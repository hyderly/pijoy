
let picon = document.querySelector('.icon');
let pmenu = document.querySelector('.menu');
let pnavbar = document.querySelector('.navbar');
let body = document.getElementsByTagName("body")[0];



picon.addEventListener('click', function(){
    pnavbar.classList.toggle('display-nav');
    pmenu.classList.toggle('menu-active');
    body.classList.toggle('overflow__hide');
})
