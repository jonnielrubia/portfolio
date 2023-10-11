const toggleSwitch = document.getElementById('mode-toggle');
const body = document.body;
const navbar = document.querySelector('.nav-bar');
const a = document.querySelectorAll('a');
const footer = document.querySelector('.footer');
const barLine = document.querySelector('.nav-icon1 span');


toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        // Enable dark mode

        // a.forEach((element) =>{
        //     element.classList.add('dark-mode');
        //     element.classList.remove('light-mode');
        // })

        document.body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        footer.classList.add('dark-mode')
        barLine.classList.add('dark-mode')

        document.body.classList.remove('light-mode');
        navbar.classList.remove('light-mode');
        footer.classList.remove('light-mode');
        barLine.classList.remove('light-mode');

        
    } else {
        // Enable light mode

        // a.forEach((element) =>{
        //     element.classList.add('light-mode');
        //     element.classList.remove('dark-mode');
        // })

        document.body.classList.add('light-mode');
        navbar.classList.add('light-mode');
        footer.classList.add('light-mode')
        barLine.classList.add('light-mode')

        document.body.classList.remove('dark-mode');
        navbar.classList.remove('dark-mode');
        footer.classList.remove('dark-mode')
        barLine.classList.remove('dark-mode');

        
    }
});