$(document).ready(function () {

    if ($(window).width() >= 1365) {

        $('.reviews-slider-desktop-inner').owlCarousel({
            items: 1,
            nav: true,
            autoHeight: true,
            autoWidth: true,
            center: true,
            loop: true,
            lazyLoad: true,
            touchDrag: false,
            mouseDrag: false,
            pullDrag: false,
            dots: true,
            dotsClass: 'reviews-slider-dots',
            dotClass: 'reviews-slider-dot'
        });


        $('.arrow-right').click(function () {
            $('.reviews-slider-desktop-inner').trigger('next.owl.carousel');
        });
        $('.arrow-left').click(function () {
            $('.reviews-slider-desktop-inner').trigger('prev.owl.carousel');
        });

    } else if ($(window).width() < 1365) {
        $('.reviews-slider-desktop-inner').trigger('destroy.owl.carousel');
    }

    if ($(window).width() < 1365) {

        $('.reviews-slider.owl-carousel').owlCarousel({
            items: 1,
            autoWidth: true,
            autoHeight: true,
            nav: false,
            center: true,
            loop: true,
            stagePadding: 20,
            margin: 10,
            dots: false
        });
    } else if ($(window).width() >= 1365) {
        $('.reviews-slider.owl-carousel').trigger('destroy.owl.carousel');
    }

    $(window).resize(function () {

        if ($(window).width() < 1365) {
            $('.reviews-slider-desktop-inner').trigger('destroy.owl.carousel');
            $('.reviews-slider.owl-carousel').owlCarousel({
                items: 1,
                autoWidth: true,
                autoHeight: true,
                nav: false,
                center: true,
                loop: true,
                stagePadding: 20,
                margin: 10,
                lazyLoad: true,
                dots: false
            });
        }

        if ($(window).width() >= 1365) {
            $('.reviews-slider.owl-carousel').trigger('destroy.owl.carousel');
            $('.reviews-slider-desktop-inner').owlCarousel({
                items: 1,
                nav: true,
                autoHeight: true,
                autoWidth: true,
                center: true,
                loop: true,
                touchDrag: false,
                mouseDrag: false,
                pullDrag: false,
                lazyLoad: true,
                dots: true,
                dotsClass: 'reviews-slider-dots',
                dotClass: 'reviews-slider-dot'
            });

            $('.arrow-right').click(function () {
                $('.reviews-slider-desktop-inner').trigger('next.owl.carousel');
            });
            $('.arrow-left').click(function () {
                $('.reviews-slider-desktop-inner').trigger('prev.owl.carousel');
            });
        }

    });

});