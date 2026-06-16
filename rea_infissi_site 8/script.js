const hamb = document.getElementById('hamb');
const nav = document.querySelector('.navbar');
hamb?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
