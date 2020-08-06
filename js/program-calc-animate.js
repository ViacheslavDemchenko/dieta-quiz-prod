$(document).ready(function () {

    const dish = document.querySelector('.program-calc__dish');
    let src = './img/dish-';
    let imgType;
    let timer;

    function bgImageChange() {
        let screenWidth = window.screen.width;

        if (screenWidth <= 480 && window.devicePixelRatio == 1) {
            imgType = '-480@1x.png';
        } else if (screenWidth <= 480 && window.devicePixelRatio > 1) {
            imgType = '-480@2x.png';
        } else if (screenWidth > 480 && window.devicePixelRatio == 1) {
            imgType = '-1920@1x.png';
        } else if (screenWidth > 480 && window.devicePixelRatio > 1) {
            imgType = '-1920@2x.png';
        }
    }
    bgImageChange();

    function bgImgChange() {
        let i = 1;

        timer = setInterval(() => {
            if (i >= 3) {
                i = 0;
            }
            dish.style.backgroundImage = `url(${src}${i+1}${imgType}`;
            i++;
        }, 1500);
    }
    bgImgChange();

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

});