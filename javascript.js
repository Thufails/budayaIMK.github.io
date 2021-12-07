//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function() {
        menu.toggle();
    });
    menu.click(function() {
        menu.toggle();
    });
}

$(document).ready(function() {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function() {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll
$(document).ready(function() {
    var scroll_pos = 0
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});


//efek button scroll horizontal
let currentScrollPosition1 = 0;
let scrollAmount1 = 320;

const sCont1 = document.querySelector(".gallery-container");
const hScroll1 = document.querySelector(".horizontal-scroll");

let maxScroll1 = -sCont1.offsetWidth + hScroll1.offsetWidth;

function scrollHorizontally(val) {
    currentScrollPosition1 += (val * scrollAmount1);

    if (currentScrollPosition1 > 0) {
        currentScrollPosition1 = 0
    }

    if (currentScrollPosition1 < maxScroll1) {
        currentScrollPosition1 = maxScroll1
    }
    sCont1.style.left = currentScrollPosition1 + "px";
};


let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".blog-container");
const hScroll = document.querySelector(".blog-scroll");

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollKananKiri(val) {
    currentScrollPosition += (val * scrollAmount);

    if (currentScrollPosition > 0) {
        currentScrollPosition = 0
    }

    if (currentScrollPosition < maxScroll) {
        currentScrollPosition = maxScroll
    }
    sCont.style.left = currentScrollPosition + "px";
};