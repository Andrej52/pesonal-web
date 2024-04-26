
let slideIndex = 1;
let sliderInterval;
let slideDelay = 30 //seconds
var clicked = 0;
const height = document.querySelector("header").offsetHeight;
var bars_loaded= false;
const skills = [
    { name: "C++",         width: "25%", color: "#FF5722" },
    { name: "Java",        width: "25%", color: "#22ff4a" },
    { name: "C",           width: "30%", color: "#2196F3" },
    { name: "PHP",         width: "52%", color: "#9C27B0" },
    { name: "JS",          width: "40%", color: "#FFEB3B" },
    { name: "CSS",         width: "43%", color: "#FF9800" },
    { name: "SQL",         width: "45%", color: "#795548" },
    { name: "Python",      width: "39%", color: "#607D8B" },
    { name: "3D-modeling", width: "30%", color: "#FFC107" },
    { name: "PLC-siemens", width: "48%", color: "#9E9E9E" },
    { name: "Eagle",     width: "30%", color: "#cc3b0b" },
    { name: "Laravel",       width: "48%", color: "#0bbfcc" },
    { name: "Flutter",     width: "26%", color: "rgb(0, 40, 5)" }
];

const bars = document.querySelectorAll('.bar');

document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            slideIdx(-1);
        } else if (event.key === "ArrowRight") {
            slideIdx(1);
        }
    });
    
window.onscroll = function() {
    topb();
}
window.onload = function() {
    showSlides(1);
}

const elem = document.querySelector("#skills");
window.addEventListener("scroll",function()
{
    var scrollPos = document.body.scrollTop;
    console.log(scrollPos >= elem.getBoundingClientRect().top - (elem.offsetHeight * 0.5) );
    console.log(scrollPos <= elem.getBoundingClientRect().top + (elem.offsetHeight * 0.49 ));
    if (scrollPos >= elem.getBoundingClientRect().top - (elem.offsetHeight * 0.5)  && (scrollPos <= elem.getBoundingClientRect().top + (elem.offsetHeight * 0.49 ))) {
       loadBars(1);
    }
    else
    {
        loadBars(0)
    }
});


sliderInterval = setInterval(() => {
    slideIdx(1);
    }, slideDelay *1000)

function slideIdx(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide-item");
    let dots = document.querySelectorAll(".slide-box");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

document.querySelector("header").addEventListener("scroll", function() {
    var scrollPosition = specificElement.scrollTop;
    
    if (scrollPosition >= specificElement.scrollHeight - specificElement.clientHeight) {
        document.querySelector(".top-button").style.display = "block";
    } else {
        document.querySelector(".top-button").style.display = "none";
    }
});

document.querySelector(".top-button").addEventListener("click", function() {  
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;
});

function loadBars(show)
{   
                        bars.forEach((bar, index) => {
                            setTimeout(() => {
                                if (show) {
                                    bar.style.width = skills[index].width;
                                    bar.style.backgroundColor = skills[index].color;
                                    if (!bars_loaded) {
                                        bars_loaded= true;;
                                    }
                                }
                                else
                                {
                                    bar.style.width = "0%";
                                    if (bars_loaded) {
                                        bars_loaded= false;
                                    }
                                }
                            }, index * 100);
                        });
}

function goTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 

    if (clicked != 1) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        alert('u still here?.. fine');
        clicked = 1; 
    }
}

function topb() {
    let topbutton = document.querySelector(".top-button");
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height)
        topbutton.style.display = "block";
    else
        topbutton.style.display = "none";
}

const images = document.querySelectorAll('#photos img');

images.forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('fullscreen');
        const fullscreenImages = document.querySelectorAll('#photos img.fullscreen');
        fullscreenImages.forEach(fullscreenImg => {
            if (fullscreenImg !== this) {
                fullscreenImg.classList.remove('fullscreen');
            }
        });
    
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.matches('#photos img') && !e.target.closest('.fullscreen')) {
        images.forEach(img => {
            img.classList.remove('fullscreen');
        });
    }
});
