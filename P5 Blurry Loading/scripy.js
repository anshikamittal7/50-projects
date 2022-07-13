let percentage = document.querySelector('.load');
let bkg = document.querySelector('.bkg');
let i = 0;
let interval = setInterval(() => {
    bkg.style.filter = `blur(${30 - (i / 2.5)}px)`;
    percentage.innerHTML = `${i}%`
    i++;
    console.log(i);
    if (i == 100) {
        percentage.remove();
        clearInterval(interval);
    }
}, 3)