const btn = document.querySelector('button')
const jokediv = document.getElementById('joke');

function colorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

const getJokes = async () => {
    try {
        const res = await axios.get(" https://icanhazdadjoke.com", { headers: { Accept: 'application/json' } });
        return res.data.joke;
    }
    catch (e) {
        return "NO JOKES AVAILABLE!";
    }
}
const addJoke = async () => {
    const joke = await getJokes();
    jokediv.innerText = joke;
}
addJoke();
btn.addEventListener('click', () => {
    addJoke();
    document.body.style.background = `linear-gradient(to right, ${colorGenerator()}, ${colorGenerator()})`;

});