const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
const url = 'GET https://icanhazdadjoke.com/';