// window.addEventListener("load", () => document.querySelector(".preloader").classList.add("hidePreloader"));

// script for side navigation, you can use side navigation in mobile and tablet screen size
var sidenav = document.getElementById("sidenav");
var Right;
window.addEventListener("load", function () {
    var winWidth = $(window).width();
    var sideNavWidth = $(sidenav).width();

    if (winWidth >= 768) {
        Right = -400;

    } else {
        Right = -sideNavWidth;
    }

    sidenav.style.right = Right + "px";
});

function openSidenav(doCommand) {
    if (doCommand === "open") {
        sidenav.style.right = "0";
    }
    else {
        sidenav.style.right = ("-" + $(sidenav).width() + "px");
    }
}
$(window).resize(function () {
    sidenav.style.right = ("-" + $(sidenav).width() + "px");
});

// windowScrolled() function uses to make header smaller when window scrolled to bottom
document.addEventListener("scroll", windowScrolled)
var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");

function windowScrolled() {

    var posY = window.scrollY;
    if (posY > 100) {
        navbar.classList.add("navbar-scrolled")
    }
    else if (posY <= 100) {
        navbar.classList.remove("navbar-scrolled");
    }
}

// script for expand sideT navigation items that have sub-items
var sideNavs = document.getElementsByClassName("sidenav-item");

for (let i = 0; i < sideNavs.length; i++) {
    sideNavs[i].addEventListener("click", function () {
        var menu = this.querySelector(".sidenav-dropdown-menu");
        if (menu != null) {
            this.classList.toggle("active");

            if (menu.style.maxHeight) {
                menu.classList.remove("pe-4");
                menu.classList.remove("pb-4");
                menu.style.maxHeight = null;
            } else {
                menu.classList.add("pe-4");
                menu.classList.add("pb-4");
                menu.style.maxHeight = (menu.scrollHeight + 24) + "px";
            }
        }
    });
}

// script for expanding search box
function openSearchBar() {
    var searchBar = document.getElementById("search-bar");
    if (searchBar.style.top === "100%") {
        searchBar.style.top = "-10%";
    } else {
        searchBar.style.top = "100%";
    }
}

// owl carousel config
$(".owl-carousel").owlCarousel({
    touchDrag: true,
    items: 1,
    margin: 0,
    center: true,
    loop: true,
    slideTransition: "ease",
    dots: true,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    smartSpeed: 1000
});

var carouselDots = document.getElementsByClassName("owl-dot");
for (var i = 0; i < carouselDots.length; i++) {
    carouselDots[i].innerHTML = "0" + (i + 1) + ".";
}


function setFooterOverlayHeight() {
    var height = $('.footer').height();
    $('.footer-overlay').height(height);
}

setFooterOverlayHeight();

$(window).on('resize', function () {
    setFooterOverlayHeight();
});



$('.products-sorting').hover(
    function () {
        $('.sorting-dropdown').css({
            "visibility": "visible",
            "opacity": "1",
            "top": "100%"
        });

    },
    function () {
        $('.sorting-dropdown').css({
            "visibility": "hidden",
            "opacity": "0",
            "top": "120%"
        });
    }
);

$('.sorting-type').click(function (e) {
    $('.sorting-interface p').text($(this).text());
});


$('.numeric-button').on("mousedown", function () {
    $(this).css({
        "border": "solid 1px rgba(14, 140, 228, 0.2)",
        "padding": function () {
            if ($(this).prop("id") === "numUp") {
                return "0px 10px 1px 10px";
            } else {
                return "1px 10px 0px 10px";
            }
        }
    });

}).bind("mouseup", function (e) {
    $(this).css({
        "border": "solid 1px transparent",
        "padding": function () {
            var numeric = $(this).parent().siblings('.numeric-number');
            var value = parseInt($(numeric).val());

            if ($(this).prop("id") === "numUp") {
                $(numeric).val(value + 1);
                return "0px 10px 0px 10px";
            } else {
                if (value > 0) {
                    $(numeric).val(value - 1);
                }
                return "0px 10px 0px 10px";
            }
        }
    });
});

$('.details-thumbnail').click(function (e) {
    var thumbnail = $(this).children('img');
    $('#details-image').prop("src", $(thumbnail).prop("src"));
    $('.details-thumbnail.active').removeClass("active");
    $(this).addClass("active");
});


$('.sublime-radio').click(function (e) {
    var radio = $(this).children("input");
    $(radio).prop("checked", true);
});

$('.sublime-checkbox').click(function (e) {
    var checkbox = $(this).children("input");
    $(checkbox).prop("checked", !$(checkbox).prop("checked"));
});
