// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



function page4Animation(){
    var elemC  = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elem1 = document.querySelector("#elem1")
elem1.addEventListener("mouseenter",function(){
    var image = elem1.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})

var elem2 = document.querySelector("#elem2")
elem2.addEventListener("mouseenter",function(){
    var image = elem2.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})

var elem3 = document.querySelector("#elem3")
elem3.addEventListener("mouseenter",function(){
    var image = elem3.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})

var elem4 = document.querySelector("#elem4")
elem4.addEventListener("mouseenter",function(){
    var image = elem4.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})

var elem5 = document.querySelector("#elem5")
elem5.addEventListener("mouseenter",function(){
    var image = elem5.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})


var elem6 = document.querySelector("#elem6")
elem6.addEventListener("mouseenter",function(){
    var image = elem6.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})


var elem7 = document.querySelector("#elem7")
elem7.addEventListener("mouseenter",function(){
    var image = elem7.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
}


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}


swiperAnimation()
page4Animation()































































// var elems = document.querySelectorAll(".elems")
// elems.forEach(function(e){
//     e.addEventListener("mouseenter" , function(){
//         var image = e.getAttribute("data-image")
//         fixed.style.backgroundImage = `url(${image})`
//     })
// })



var elem1 = document.querySelector("#elem1")
elem1.addEventListener("mouseenter",function(){
    var image = elem1.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})