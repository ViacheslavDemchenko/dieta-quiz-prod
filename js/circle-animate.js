;
(function () {

    if ($('#circle').length) {
        let el = document.querySelector('#circle');
        let myAnimation = new LazyLinePainter(el, {
            "ease": "easeLinear",
            "strokeWidth": 6,
            "strokeOpacity": 1,
            "strokeColor": "linear-gradient(90deg, #ebb845 0%, #f7c754 100%)",
            "strokeCap": "square"
        });
        myAnimation.paint();
    }

})();