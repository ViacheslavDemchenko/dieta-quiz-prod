$(document).ready(function () {

    let owl = $('.reviews-slider.owl-carousel');

    owl.owlCarousel({
        items: 1,
        autoWidth: true,
        nav: false,
        center: true,
        responsive: {
            0: {
                margin: 5
            },
            1365: {
                margin: 0
            },
        }
    });

});