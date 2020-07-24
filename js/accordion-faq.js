document.addEventListener('DOMContentLoaded', function () {

    let accordItems = document.querySelectorAll('.faq-item__title'),
        active = document.getElementsByClassName('faq-item__title--active');

    Array.from(accordItems).forEach(item => {
        item.addEventListener('click', function () {
            if (active.length > 0 && active[0] !== this)
                active[0].classList.remove('faq-item__title--active');

            this.classList.toggle('faq-item__title--active');
        });
    });

});