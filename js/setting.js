let ball =document.querySelector('.ball');
let navLink = $('.right-nav-bar');
let mybutton = document.getElementById("myBtn");
let form = document.querySelector(".contact-section form");
let statusTxt = form.querySelector(".button-area span");


$(document).ready(()=>{

    $(document).on('scroll',()=>{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
    })

    $('#myBtn').on('click',()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    $('.nav-icon1').on('click',()=>{
        $('.nav-icon1').toggleClass('open');
        navbar.classList.toggle('active-mobile-nav')
        navLink.toggleClass('active-mobile-link');
    });

    $('.nav-bar-link li a').on('click',()=>{
        $('.nav-icon1').toggleClass('open');
        navbar.classList.toggle('active-mobile-nav')
        navLink.toggleClass('active-mobile-link');
    })

    $('.face').animate({
        opacity: 1
    },{
        duration: 800,
    });

    $('body').on('mousemove',()=>{
        let eye = document.querySelectorAll('.eye');
        eye.forEach(function (eye){
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = (radian * (180 / Math.PI) * -1 ) + 270;
            eye.style.transform = "rotate("+ rot +"deg)"; 
        });
    })
})


