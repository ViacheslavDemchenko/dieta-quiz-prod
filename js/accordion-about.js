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

});