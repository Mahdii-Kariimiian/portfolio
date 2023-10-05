const $ = document
// hamburger menu
const navToggle = $.querySelector(".nav-toggle")
const nav = $.querySelector(".nav")
const hamburger = $.querySelector(".hamburger")
const XSign = $.querySelector(".X-sign")

navToggle.addEventListener ("click" , ()=>{
        navToggle.classList.add("hidden")
        nav.classList.add('hamburger-menu-style')
        nav.classList.remove("hidden")
        navToggle.classList.add("fadeout")
        XSign.classList.add("fadein")
        $.body.classList.add("overlay")
})

XSign.addEventListener("click" , ()=>{
    navToggle.classList.remove("hidden")
    nav.classList.remove('hamburger-menu-style')
    nav.classList.add("hidden")
    XSign.classList.add("fadeout")
    navToggle.classList.add("fadein")
})

const portfolioItem = document.querySelectorAll(".portfolio__item")
const portfolioDetail = document.querySelectorAll(".portfolio__detail")

portfolioItem.forEach(portfolio => {
    portfolio.addEventListener("mouseover" , ()=>{
            portfolio.lastElementChild.classList.remove("hidden-visibility")
        })
})

portfolioItem.forEach(portfolio => {
    portfolio.addEventListener("mouseout" , ()=>{
        portfolio.lastElementChild.classList.add("hidden-visibility")
    })
})
    