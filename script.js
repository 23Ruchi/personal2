// /==CHANGE BACKGROUND HEADER====/


function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height add

    if(this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll, scrpllHeader')

// MIXITUP FILTER PORTFOLIO//
let mixerPortfolio = mixitup('work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});