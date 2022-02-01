const inventory = document.querySelector('.last');
const dropdown = document.querySelector('.dropdown');


inventory.addEventListener('click', ()=>{
    dropdown.classList.toggle('display')
})