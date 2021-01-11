let ball =document.querySelector('.ball');

function buttonchangecolor(){
    if (document.querySelector('input[type="checkbox"]:checked')){
    
        document.querySelector('.ball').classList.add('active');
        document.querySelector('body').classList.add('bgcolor');

    }else{
        document.querySelector('.ball').classList.remove('active');
        document.querySelector('body').classList.remove('bgcolor');
    }
        
    
}