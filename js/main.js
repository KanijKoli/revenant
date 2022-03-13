
// Card All
$(document).ready(function(){
    $('.card-all').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        dots: false,
        items: 5,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    var owl = $('.card-all');
    owl.owlCarousel();
    // Go to the next item
    $('.nextNext').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.prevPrev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
});


// Image All
$(document).ready(function(){
    $('.image-all').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        dots: false,
        items: 5,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    var owl = $('.image-all');
    owl.owlCarousel();
    // Go to the next item
    $('.nextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.prevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
});






