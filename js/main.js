// Menu Show
const showMenu = (toggle, navId) => {
    const toggleS = document.getElementById("nav-toggle"),
    nav = document.getElementById(navId)

    if(toggleS && nav){
        toggleS.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
};
showMenu('nav-toggle','nav-menu');

// Active and Remove menubar
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL REVEAL ANIMATION


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.home .home_img`, {
    origin: 'top',
    interval: 200
})

sr.reveal(`.about_img`,{
   origin:'light'
})

sr.reveal(`.skills__img`,{
    origin:'light'
 })

 sr.reveal(`.work .work-img`,{
    origin:'light'
 })
