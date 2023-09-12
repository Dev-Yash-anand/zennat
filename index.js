const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');
        searchIcon.addEventListener('click', () => {
            searchBox.style.display = 'block';
            searchIcon.style.display = 'none';
            searchBox.querySelector('input').focus(); // Focus on the input field
        });

        // JavaScript to close the search box when clicking anywhere on the document
        document.addEventListener('click', (event) => {
            if (!searchIcon.contains(event.target) && !searchBox.contains(event.target)) {
                searchBox.style.display = 'none';
                searchIcon.style.display = 'block';
            }
        });


const nav = document.querySelector(".nav");
let lastScrollPosition = 0;

function toggleNavbarBackground() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        nav.classList.add('sticky'); // Set the background color when scrolling down
    } else {
        // Scrolling up
        nav.classList.remove('sticky') // Set the background color to transparent when scrolling up
    }

    lastScrollPosition = currentScrollPosition;
}

window.addEventListener("scroll", toggleNavbarBackground);


var elem1 = document.querySelector("#elem1");
var elem1img = document.querySelector("#elem1 img");
var elem2 = document.querySelector("#elem2");
var elem2img = document.querySelector("#elem2 img");
var elem3 = document.querySelector("#elem3");
var elem3img = document.querySelector("#elem3 img");
var elem4 = document.querySelector("#elem4");
var elem4img = document.querySelector("#elem4 img");

elem1.addEventListener("mousemove",function(dets){
    elem1img.style.left = dets.x + "px"
    elem1img.style.top = dets.y + "px"
})
elem1.addEventListener("mouseenter",function(dets){
    elem1img.style.opacity = 1
})
elem1.addEventListener("mouseleave",function(dets){
    elem1img.style.opacity = 0
})
elem2.addEventListener("mousemove",function(dets){
    elem2img.style.left = dets.x + "px"
    elem2img.style.top = dets.y + "px"
})
elem2.addEventListener("mouseenter",function(dets){
    elem2img.style.opacity = 1
})
elem2.addEventListener("mouseleave",function(dets){
    elem2img.style.opacity = 0
})
elem3.addEventListener("mousemove",function(dets){
    elem3img.style.left = dets.x + "px"
    elem3img.style.top = dets.y + "px"
})
elem3.addEventListener("mouseenter",function(dets){
    elem3img.style.opacity = 1
})
elem3.addEventListener("mouseleave",function(dets){
    elem3img.style.opacity = 0
})
elem4.addEventListener("mousemove",function(dets){
    elem4img.style.left = dets.x + "px"
    elem4img.style.top = dets.y + "px"
})
elem4.addEventListener("mouseenter",function(dets){
    elem4img.style.opacity = 1
})
elem4.addEventListener("mouseleave",function(dets){
    elem4img.style.opacity = 0
})

// const sr = ScrollReveal ({
//     distance: '30px',
//     duration: 1000,
//     reset: true
// })

// sr.reveal('.page1', {delay:150, origin:'bottom'})
// sr.reveal('.page2,.page3,.page4',{delay:400, origin:'bottom'})