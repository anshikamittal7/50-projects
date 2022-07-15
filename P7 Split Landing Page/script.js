const ps5 = document.querySelector('.ps5');
const xbox = document.querySelector('.xbox');
ps5.addEventListener('mouseenter', () => {
    ps5.classList.remove('inactive');
    ps5.classList.add('active');
    xbox.classList.add('inactive');
    xbox.classList.remove('active');
    ps5.classList.remove('opacity')
    xbox.classList.add('opacity');

})
// ps5.addEventListener('mouseleave', () => {
//     ps5.classList.add('inactive');
//     ps5.classList.remove('active');
// })
xbox.addEventListener('mouseenter', () => {
    xbox.classList.remove('inactive');
    xbox.classList.add('active');
    ps5.classList.add('inactive');
    ps5.classList.remove('active');
    xbox.classList.remove('opacity')
    ps5.classList.add('opacity')
})
// xbox.addEventListener('mouseleave', () => {
// xbox.classList.add('inactive');
// xbox.classList.remove('active');
// })