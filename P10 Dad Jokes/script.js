const btn = document.querySelector('button')
btn.addEventListener('click', () => {

    document.body.style.background = `linear-gradient(to right, ${colorGenerator()}, ${colorGenerator()})`
});

function colorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

const url = 'GET https://icanhazdadjoke.com/';