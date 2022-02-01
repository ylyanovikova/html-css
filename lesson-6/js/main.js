const btn = document.querySelector('.mobile-btn');
const menu = document.querySelector('.header-menu-container');


btn.onclick = () => {
   menu.classList.toggle("active") === btn.classList.toggle("active")
}