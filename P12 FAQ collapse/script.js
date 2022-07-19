const downs = document.querySelectorAll('.down');
const crosses = document.querySelectorAll('.cross');
const quesBox = document.querySelectorAll('.quesBox');
let span = new Array(5);

for (let i = 0; i < downs.length; i++) {
    downs[i].addEventListener('click', () => {
        downs[i].classList.toggle('inactivedown')
        downs[i].classList.toggle('activedown')
        crosses[i].classList.toggle('activecross');
        quesBox[i].classList.add('activequesBox');
        const ans = document.createElement('span');
        span[i] = ans;
        ans.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit ea nihil id? Quas amet numquam deleniti similique iure debitis, sint nemo ratione omnis, cupiditate in porro unde distinctio dignissimos?';
        quesBox[i].appendChild(ans);
    })
}

for (let i = 0; i < downs.length; i++) {
    crosses[i].addEventListener('click', () => {
        downs[i].classList.toggle('inactivedown')
        downs[i].classList.toggle('activedown')
        crosses[i].classList.toggle('activecross');
        quesBox[i].classList.remove('activequesBox');
        // let ans = document.querySelector(`quesBox[${i}] span`);
        quesBox[i].removeChild(span[i]);
    })
}

