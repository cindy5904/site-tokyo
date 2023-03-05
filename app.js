document.addEventListener('DOMContentLoaded', () => {

    const btnMenu = document.querySelector('.logo-menu');
    const menu = document.querySelector('.liste-nav');

    btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    })

    const allLinks = document.querySelectorAll('.item-nav');

    allLinks.forEach(function(item){

    item.addEventListener('click', () => {
        menu.classList.toggle('active');
    })

    })
})
console.log('hello');