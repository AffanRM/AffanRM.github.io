let navAnchorTags = document.querySelectorAll('.nav-container a');

navAnchorTags.forEach(anchorTag => {

    anchorTag.addEventListener('click', function(e){
        console.log(e.target)
        navAnchorTags.forEach(anchor => {
            if(anchor !== e.target && anchor.parentElement.classList.contains('nav-active')){
                anchor.parentElement.classList.remove('nav-active');
            }
        })
        e.target.parentElement.classList.add('nav-active');
    })

})

let project1 = document.querySelector('.project-1-back');
project1.addEventListener('click', function(){
    window.open("https://affanrm.github.io/social-media-dashboard/");
})

let project2 = document.querySelector('.project-2-back');
project2.addEventListener('click', function(){
    window.open("https://affanrm.github.io/space-tourism-website/");
})

let project3 = document.querySelector('.project-3-back');
project3.addEventListener('click', function(){
    window.open('https://affanrm.github.io/sunnyside-agency-landing-page/');
})

let project4 = document.querySelector('.project-4-back');
project4.addEventListener('click', function(){
    window.open('https://affanrm.github.io/order-summary-component/');
})

// The dark mode 
let themeSwitch = document.querySelector('.check-box');
let desktopNav = document.querySelector('.desktop-nav');
let body = document.querySelector('body');
let svgs = document.querySelectorAll('svg');
let planContainers = document.querySelectorAll('.plan');
let sec1 = document.querySelector('.sec-1');
let sec2 = document.querySelector('.sec-2');
let sec3 = document.querySelector('.sec-3');

themeSwitch.addEventListener('click', function(e){
    if (themeSwitch.checked){
        desktopNav.style.backgroundColor = 'black';
        desktopNav.style.color = 'white';
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        sec1.style.borderColor = 'white';
        sec2.style.borderColor = 'white';
        sec3.style.borderColor = 'white';

        let workHeading = document.querySelector('.work-heading');
        workHeading.borderBottomColor = 'white';

        svgs.forEach(svg => {
            svg.style.fill = 'white'
        })

        planContainers.forEach(container => {
            container.style.borderColor = 'white';
            container.style.backgroundColor = 'black';
        })

    } else{
        desktopNav.style.backgroundColor = '#f2f3f7';
        desktopNav.style.color = 'black';
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        sec1.style.borderColor = 'black';
        sec2.style.borderColor = 'black';
        sec3.style.borderColor = 'black';
        workHeading.borderColor = 'black';

        svgs.forEach(svg => {
            svg.style.fill = 'black';
        })
        //#fdfdff;//
        planContainers.forEach(container => {
            container.style.borderColor = 'black';
            container.style.backgroundColor = '#fdfdff';
        })

    }
})

let paymentButtons = document.querySelectorAll('.popup');

paymentButtons.forEach(button => {
    button.addEventListener('mouseover', function(e){
        let popup = document.querySelector(`[data-pop-id="${e.target.parentElement.dataset.id}"]`)
        
        if (popup !== null){
            popup.classList.add("show");
        }
        
    });
})

paymentButtons.forEach(button => {
    button.addEventListener('mouseleave', function(e){
        console.log(e.target)
        let popup = document.querySelector(`[data-pop-id="${e.target.dataset.id}"]`)
        console.log(popup)
        popup.classList.remove("show");
    });
})

// Open fiverr.com when a user selects a package
paymentButtons.forEach(button => {
    button.addEventListener('click', function(){
        window.open('https://www.fiverr.com')
    })
})

let hamburgerLogo = document.querySelector('.hamburger-logo');
let closeLogo = document.querySelector('.close-logo');
// let desktopNav = document.querySelector('.desktop-nav');
hamburgerLogo.addEventListener('click', function(){
    // desktopNav.style.display = 'block';
    desktopNav.style.visibility = 'visible';
    desktopNav.style.opacity = 1;
})
closeLogo.addEventListener('click', function(){
    // desktopNav.style.display = 'none';
    desktopNav.style.visibility = 'hidden';
    desktopNav.style.opacity = 0;
})
