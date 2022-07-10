let panels = document.querySelectorAll('.panel');
let prevActive = document.querySelector('.activePanel');
for (let block of panels) {
    block.addEventListener('click', () => {
        block.classList.toggle('activePanel');
        prevActive.classList.toggle('activePanel')
        prevActive = block;
    })
}