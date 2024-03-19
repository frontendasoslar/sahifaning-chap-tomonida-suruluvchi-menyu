const elMenubtn = document.querySelector('.menu-btn');
const elMenu = document.querySelector('.menu');
const elContent = document.querySelector('.content');


elMenubtn.addEventListener('click', function() {
  elMenu.classList.toggle('menu-active');
  elContent.classList.toggle('content-active')
})