;
(function () {

    // if ($('#circle').length) {
    //     let el = document.querySelector('#circle');
    //     let myAnimation = new LazyLinePainter(el, {
    //         "ease": "easeLinear",
    //         "strokeWidth": 6,
    //         "strokeOpacity": 1,
    //         "strokeColor": "linear-gradient(90deg, #ebb845 0%, #f7c754 100%)",
    //         "strokeCap": "square"
    //     });
    //     myAnimation.paint();
    // }

    function webpSupportCheck() {
        let webp = true;
        Modernizr.on('webp', (result) => {
            if (result) {
                webp = true;
            } else {
                webp = false;
            }
        });
        return webp;
    }

    if ($('.program-calc__dish').length) {
        const dish = document.querySelector('.program-calc__dish');
        let src = './img/dish-';
        let imgType;
        let timer;

        function bgImageChange() {
            let screenWidth = window.screen.width;

            if (webpSupportCheck() && screenWidth < 481 && window.devicePixelRatio == 1) {
                // console.log('WEBP');
                // console.log('< 481');
                // console.log('window.devicePixelRatio 1');
                // src = './img/dish-';
                imgType = '-480@1x.webp';
            }

            if (webpSupportCheck() && screenWidth < 481 && window.devicePixelRatio > 1) {
                // console.log('WEBP');
                // console.log('< 481');
                // console.log('window.devicePixelRatio > 1');
                // src = './img/dish-';
                imgType = '-480@2x.webp';
            }

            if (!webpSupportCheck() && screenWidth < 481 && window.devicePixelRatio == 1) {
                // console.log('jpg');
                // console.log('< 481');
                // console.log('window.devicePixelRatio 1');
                // src = './img/dish-';
                imgType = '-480@1x.jpg';
            }

            if (!webpSupportCheck() && screenWidth < 481 && window.devicePixelRatio > 1) {
                // console.log('jpg');
                // console.log('< 481');
                // console.log('window.devicePixelRatio > 1');
                // src = './img/dish-';
                imgType = '-480@2x.jpg';
            }
        }
        bgImageChange();

        function bgImgChange() {
            let i = 1;

            timer = setInterval(() => {
                if (i >= 3) {
                    i = 0;
                }
                // console.log(`url(${src}${i}${imgType})`);
                dish.style.backgroundImage = `url(${src}${i+1}${imgType}`;
                i++;
            }, 1500);
        }
        bgImgChange();

        if ($('.progress').length) {
            const percentage = document.querySelector('.progress');
            $('.progress').animate({
                num: 100 - 0
            }, {
                duration: 5000,
                step: function (num) {
                    this.innerHTML = (num + 0).toFixed(0) + '%';
                    if (this.innerHTML == '100%') {
                        clearInterval(timer);
                        window.location.href = 'personal-profile.html';
                    }
                }
            });
        }
    }

})();