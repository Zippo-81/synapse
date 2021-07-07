$(function(){

    /* Top Slider */

    $('.carousel__main').flickity({
        cellAlign: 'center',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        fullscreen: true
    });

    $('.carousel__nav').flickity({
        cellAlign: 'center',
        asNavFor: '.carousel__main',
        contain: true,
        pageDots: false,
        arrowShape: {
            x0: 10,
            x1: 35, y1: 20,
            x2: 45, y2: 20,
            x3: 20
        }
    });

    /* After / Before Slider */

    $("#project__img").twentytwenty({
        default_offset_pct: 0.5
    });

    /* Menu */

    $('.hamburger').on('click', function() {
        let sideBar = $('.block__sidebar');

        if(sideBar.hasClass('active')) {
            sideBar.removeClass('active');

        } else {
            sideBar.addClass('active');
        }
    });

    /* FancyBox*/

    $('[data-fancybox="gallery"]').fancybox({});
    $('[data-fancybox="docs"]').fancybox({});
});

