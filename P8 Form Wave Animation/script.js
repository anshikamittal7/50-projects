
const email = document.querySelector('.mail');
const password = document.querySelector('.pw');
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {

    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span id='span' style="transition-delay:${idx * 50}ms">${letter}</span>`).join('');
    console.dir(label);

})
let span = document.querySelectorAll('#span');
email.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        span[i].classList.toggle('wave');
    }
})
password.addEventListener('click', () => {
    for (let i = 5; i < 13; i++) {
        span[i].classList.toggle('wave');
    }
})