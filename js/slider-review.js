$(document).ready(function () {

    if ($(window).width() >= 1365) {

        $('.reviews-slider-desktop-inner').owlCarousel({
            items: 1,
            nav: true,
            autoWidth: true,
            center: true,
            loop: true,
            lazyLoad: true,
            // navClass: 'reviews-slider-arrow',
            // navContainerClass: 'reviews-slider-desktop-arrows',
            navText: ["<span class='arrow-left'>", "<span class='arrow-right'>"]
        });
    } else if ($(window).width() < 1365) {
        $('.reviews-slider-desktop-inner').trigger('destroy.owl.carousel');
    }

    if ($(window).width() < 1365) {

        $('.reviews-slider.owl-carousel').owlCarousel({
            items: 1,
            autoWidth: true,
            nav: false,
            center: true,
            loop: true,
            stagePadding: 20,
            margin: 10
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
                nav: false,
                center: true,
                loop: true,
                stagePadding: 20,
                margin: 10,
                lazyLoad: true
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
                // navClass: 'reviews-slider-arrow',
                // navContainerClass: 'reviews-slider-desktop-arrows',
                navText: ["<span class='arrow-left'>", "<span class='arrow-right'>"]
            });
        }

    });

});