const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(function(item){

    item.addEventListener('click', function(){
        menu.classList.toggle('active');
    })

})
// const alllinks = pour tous les liens je renvoie une fonction,