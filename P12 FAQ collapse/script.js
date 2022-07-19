const downs = document.querySelectorAll('.down');
const crosses = document.querySelectorAll('.cross');
const quesBox = document.querySelectorAll('.quesBox');
const ans = document.querySelectorAll('.ans');

for (let i = 0; i < downs.length; i++) {
    downs[i].addEventListener('click', () => {
        downs[i].classList.toggle('inactivedown')
        downs[i].classList.toggle('activedown')
        crosses[i].classList.toggle('activecross');
        quesBox[i].classList.add('activequesBox');
        ans[i].style.display = 'flex';
    })
}

for (let i = 0; i < downs.length; i++) {
    crosses[i].addEventListener('click', () => {
        downs[i].classList.toggle('inactivedown')
        downs[i].classList.toggle('activedown')
        crosses[i].classList.toggle('activecross');
        quesBox[i].classList.remove('activequesBox');
        ans[i].style.display = 'none';
    })
}

