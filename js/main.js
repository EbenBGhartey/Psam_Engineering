(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


// Service Centre
    let i=2;

    
    $(document).ready(function(){
        var radius = 200;
        var fields = $('.itemDot');
        var container = $('.dotCircle');
        var width = container.width();
 radius = width/2.5;
 
         var height = container.height();
        var angle = 0, step = (2*Math.PI) / fields.length;
        fields.each(function() {
            var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
            var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
            if(window.console) {
                console.log($(this).text(), x, y);
            }
            
            $(this).css({
                left: x + 'px',
                top: y + 'px'
            });
            angle += step;
        });
        
        
        $('.itemDot').click(function(){
            
            var dataTab= $(this).data("tab");
            $('.itemDot').removeClass('active');
            $(this).addClass('active');
            $('.CirItem').removeClass('active');
            $( '.CirItem'+ dataTab).addClass('active');
            i=dataTab;
            
            $('.dotCircle').css({
                "transform":"rotate("+(360-(i-1)*36)+"deg)",
                "transition":"2s"
            });
            $('.itemDot').css({
                "transform":"rotate("+((i-1)*36)+"deg)",
                "transition":"1s"
            });
            
            
        });
        
        setInterval(function(){
            var dataTab= $('.itemDot.active').data("tab");
            if(dataTab>6||i>6){
            dataTab=1;
            i=1;
            }
            $('.itemDot').removeClass('active');
            $('[data-tab="'+i+'"]').addClass('active');
            $('.CirItem').removeClass('active');
            $( '.CirItem'+i).addClass('active');
            i++;
            
            
            $('.dotCircle').css({
                "transform":"rotate("+(360-(i-2)*36)+"deg)",
                "transition":"2s"
            });
            $('.itemDot').css({
                "transform":"rotate("+((i-2)*36)+"deg)",
                "transition":"1s"
            });
            
            }, 5000);
        
    });




