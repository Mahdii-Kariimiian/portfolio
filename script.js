const $ = document

import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

// hamburger menu
const navToggle = $.querySelector(".nav-toggle")
const nav = $.querySelector(".nav")
// const hamburger = $.querySelector(".hamburger")
const XSign = $.querySelector(".X-sign")

navToggle.addEventListener ("click" , ()=>{
        nav.classList.remove('righttoleft')
        navToggle.classList.add("hidden")
        nav.classList.add('lefttoright')
        nav.classList.add('hamburger-menu-style')
        nav.classList.remove("hidden")
        navToggle.classList.add("fadeout")
        // XSign.classList.add("fadein")
})

XSign.addEventListener("click" , ()=>{
    nav.classList.remove('lefttoright')
    nav.classList.add('righttoleft')
    navToggle.classList.add("fadein")
    setTimeout(()=>{
    navToggle.classList.remove("hidden")
    nav.classList.remove('hamburger-menu-style')
    nav.classList.add("hidden")
    }, 300)
    
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
    

// scroll animation
const scrollTracker = $.querySelector(".scroll-tracker")
const scrollTrackingTimeline = new ScrollTimeline ({
    source: document.scrollingElement,
    orientation:'block',
    scrollofffsets: [CSS.percent(0),CSS.percent(100)]
})

scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX[1]']
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    },
)

// animation
const sectionSubtitle = $.querySelectorAll(".section__subtitle")
const observer = new IntersectionObserver(entry => {
    entry.forEach(en=>{
        if( en.isIntersecting) {
            en.target.classList.add("animationForSubtitle")
        }
    })
  })
  
sectionSubtitle.forEach(subtitle=>{
    observer.observe(subtitle)
})

