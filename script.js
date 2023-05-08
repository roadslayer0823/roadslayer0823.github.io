$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.main_menu').addClass("sticky");
        }else
        {
            $('.main_menu').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up').addClass("show");
        }else{
            $('.scroll-up').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle(mean switching) menu/navbar script
    $('.menu-btn').click(function(){
        $('.main_menu .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0:{
                item: 1,
                nav: false
            },
            600:{
                item: 2,
                nav: false
            },
            1000:{
                item: 3,
                nav: false
            }
        }
    });
});

// typing animation script
var typed = new Typed(".typingSpeed",{
    strings: ["Developer", "Streamer", "Gamer", "Builder", "Teacher", "Translator"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});