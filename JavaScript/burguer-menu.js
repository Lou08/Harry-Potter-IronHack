const btnMenu = document.getElementById('burguer-btn');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click', () => {
  nav.classList.toggle('mostrar');
});