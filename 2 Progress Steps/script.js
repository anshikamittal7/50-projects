const next = document.getElementById('next');
const prev = document.getElementById('previous');
const steps = document.querySelectorAll('.steps');
const space = document.querySelectorAll('.space');
let max = steps.length;
let count = 0;
function check() {
    if (count <= 0) {
        prev.disabled = true;
    }
    else if (count >= max - 1) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}
check();
next.addEventListener('click', () => {

    count++;
    check();
    space[count - 1].classList.toggle('blueBkg')
    steps[count].classList.toggle('blueBorder');
})
prev.addEventListener('click', () => {

    count--;
    check();
    steps[count + 1].classList.toggle('blueBorder');
    space[count].classList.toggle('blueBkg');
})