const search = document.querySelector('button');
let searchbar = document.querySelector('input');
let flag = true;
search.addEventListener('click', () => {
    // searchbar.classList.toggle('activeSearchBox')
    searchbar.classList.toggle('activeSearchBox')
    search.classList.toggle('activebtn')
})