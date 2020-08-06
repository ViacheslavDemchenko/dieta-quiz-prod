$(document).ready(function () {

    if ($(window).width() >= 1365) {

        $('.reviews-slider-desktop-inner').owlCarousel({
            items: 1,
            nav: true,
            autoWidth: true,
            center: true,
            loop: true,
            lazyLoad: true
        });

        $('.arrow-right').click(function () {
            console.log('next');
            $('.reviews-slider-desktop-inner').trigger('next.owl.carousel');
        });
        $('.arrow-left').click(function () {
            console.log('prev');
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
            dots: false,
            dotClass: 'owl-dot'
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
                autoWidth: true,
                center: true,
                loop: true,
                lazyLoad: true,
                dotClass: 'owl-dot'
            });

            $('.arrow-right').click(function () {
                console.log('next');
                $('.reviews-slider-desktop-inner').trigger('next.owl.carousel');
            });
            $('.arrow-left').click(function () {
                console.log('prev');
                $('.reviews-slider-desktop-inner').trigger('prev.owl.carousel');
            });
        }

    });

});