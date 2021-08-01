let ball =document.querySelector('.ball');
let bar = document.querySelector('.nav-icon1')
let navbar = document.querySelector('.nav-bar')
let navLink = document.querySelector('.right-nav-bar');

function buttonchangecolor(){
    if (document.querySelector('input[type="checkbox"]:checked')){
        document.querySelector('.ball').classList.add('active');
        document.querySelector('body').classList.add('bgcolor');

    }else{
        document.querySelector('.ball').classList.remove('active');
        document.querySelector('body').classList.remove('bgcolor');
    }
}

function bars(){
    bar.classList.toggle('open');
    navbar.classList.toggle('active-mobile-nav')
    navLink.classList.toggle('active-mobile-link');
}