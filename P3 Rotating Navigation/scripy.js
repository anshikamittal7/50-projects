const box = document.getElementById('box');
const bar = document.querySelector('#bar');
const nav = document.querySelector('nav');
const navtool = document.querySelectorAll('.navTools');
bar.addEventListener('click', () => {
    box.classList.toggle('active');
    bar.classList.toggle('activeBar')
    nav.classList.toggle('activeNav')
})