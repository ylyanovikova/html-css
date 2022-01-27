const btn = document.querySelector('.mobile-button');
const menu = document.querySelector('.header-nav-menu');
const menu_btns = document.querySelector('.header-nav-buttons')


btn.onclick = () => {
   menu.classList.toggle("active") == menu_btns.classList.toggle("active")
};