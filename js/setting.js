let ball =document.querySelector('.ball');
let navbar = $('.nav-bar')
let navLink = $('.right-nav-bar');
let mybutton = document.getElementById("myBtn");
let form = document.querySelector(".contact-section form");
let statusTxt = form.querySelector(".button-area span");

// window.onscroll = ()=>{
//     scrollFunction()
// };


$(document).ready(()=>{
    $('.spinner-border').fadeOut();

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
        navbar.toggleClass('active-mobile-nav')
        navLink.toggleClass('active-mobile-link');
    });


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

form.onsubmit = (e) =>{
    // e.preventDefault();
    // statusTxt.style.display = "block";
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST","message.php", false);
    // xhr.onload = () =>{
    //     if(xhr.readyState == 4 && xhr.status == 200){
    //         let response = xhr.response;
    //         console.log(response);
    //     }
    // }
    // // let formData = new FormData();
    // xhr.send();
    // $.ajax({
    //     type: 'POST',
    //     url: 'message.php',
    //     data: {asdfa: 'sfasfd'},
    //     success: function(res){
    //         console.log(res)
    //     }
    // })
    // $('.button-area span').load('message.php');

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

// function bars(){
// }

// function scrollFunction() {
// }


// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
