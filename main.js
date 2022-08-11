const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    if(!aside.classList.contains('inactive')){
        aside.classList.toggle('inactive');
    }
}

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    if(!aside.classList.contains('inactive')){
        aside.classList.toggle('inactive');
    }
}

menuCarritoIcon.addEventListener('click', toggleAside);
function toggleAside(){
    aside.classList.toggle('inactive');
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive'); 
    }
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.toggle('inactive'); 
    }
}