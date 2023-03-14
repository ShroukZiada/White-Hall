var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    autoplay: true,
    centeredSlides: false,
    spaceBetween: 0,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(document).ready(function() {
    $(".your-class").slick({
        dots: false,
        speed: 800,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    });
});

$(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
            },
        },
    ],
});


/* ****************************************scroll-UP**************************************************** */
$(".scroll-up").click(function() {
    $("html , body").animate({ scrolTop: "0" }, 500);
});

let AboutTop = $("#About").offset().top;

$(window).scroll(function() {
    let scrollValue = $(window).scrollTop();
    if (scrollValue >= AboutTop) {
        $(".scroll-up").css("bottom", "10px");
    } else {
        $(".scroll-up").css("bottom", "1700px");
    }
});

/* ************************************************Loading*************************************************************** */

$(document).ready(function() {
    $("#loading").fadeOut(2000);
    $("body").css("overflow", "auto");
});

/* ************************************************increaseNumber*************************************************************** */

let nums = document.querySelectorAll(".block-one-counter  .num");
let section = document.querySelector("#News");
let started = false; //function started? NO


window.onscroll = function() {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal)
};

new WOW().init();