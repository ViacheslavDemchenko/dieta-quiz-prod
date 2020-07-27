document.addEventListener('DOMContentLoaded', function () {

    let accordItems = document.querySelectorAll('.about-item__title'),
        active = document.getElementsByClassName('about-item__title--active');

    Array.from(accordItems).forEach(item => {
        item.addEventListener('click', function () {
            if (active.length > 0 && active[0] !== this)
                active[0].classList.remove('about-item__title--active');

            this.classList.toggle('about-item__title--active');
        });
    });

    /* КОРРЕКТИРОВКА ПОД АЙФОНЫ */

    const iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
    const titles = document.querySelector('.about-item__title');
    const arrowDown = document.querySelector('.arrow-down');

    if (iOS) {
        titles.classList.add('about-item__title--ios');
        arrowDown.classList.add('arrow-down--ios');
        console.log('iOS');
    } else {
        console.log('no iOS');
    }

});