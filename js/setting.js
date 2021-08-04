let ball =document.querySelector('.ball');
let bar = document.querySelector('.nav-icon1')
let navbar = document.querySelector('.nav-bar')
let navLink = document.querySelector('.right-nav-bar');
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};


document.querySelector('body').addEventListener('mousemove',eyeball);

function eyeball(){
    let eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1 ) + 270;
        eye.style.transform = "rotate("+ rot +"deg)"; 
    });
}

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

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}