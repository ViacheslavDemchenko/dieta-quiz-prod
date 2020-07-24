document.addEventListener('DOMContentLoaded', function () {

    const dietaBlockTop = document.querySelectorAll('.dieta__item-top');
    const caloriesQuantity = document.querySelectorAll('.calories-quantity');
    const caloriesText = document.querySelectorAll('.calories-text');
    const dietaBlockBottom = document.querySelectorAll('.dieta__item-bottom');
    const dietaItem = document.querySelectorAll('.dieta__item');
    const modalOpen = document.querySelectorAll('.question-mark--payment');
    const modalClose = document.querySelectorAll('.modal .close');
    const modals = document.querySelectorAll('.modal');
    const overlay = document.querySelector('.overlay');
    const body = document.getElementsByTagName('body')[0];
    const modalFirstText = document.querySelector('.modal-first__text');
    const modalSecondtText = document.querySelector('.modal-second__text');

    let targetUser = localStorage.getItem('target');

    function dietaTypeTextModals() {
        if (targetUser == 'Похудеть') {
            modalFirstText.innerHTML = `Рацион для тех, кто хочет <span class="modal-first__text--bold">худеть быстрее</span>`;
            modalSecondtText.innerHTML = `Рацион для тех, кто хочет <span class="modal-first__text--bold">питаться сытно и худеть медленно, но верно</span>`;
        } else if (targetUser == 'Удержать вес') {
            modalFirstText.innerHTML = `Рацион для тех, кто боится <span class="modal-first__text--bold">поправиться и не любит переедать</span>`;
            modalSecondtText.innerHTML = `Рацион для тех, кто предпочитает <span class="modal-first__text--bold">питаться сытно</span>`;
        } else if (targetUser == 'Набрать вес') {
            modalFirstText.innerHTML = `Рацион для тех, кто хочет <span class="modal-first__text--bold">набирать вес медленно и не любит переедать</span>`;
            modalSecondtText.innerHTML = `Рацион для тех, кто хочет <span class="modal-first__text--bold">набирать вес быстрее</span>`;
        }
    }

    function dietaTypeChoice() {
        dietaItem.forEach((el, i) => {
            el.addEventListener('click', (e) => {
                dietaBlockTop.forEach(el => {
                    el.classList.remove('dieta__item-top--active');
                });
                caloriesQuantity.forEach(el => {
                    el.classList.remove('calories-quantity--active');
                });
                caloriesText.forEach(el => {
                    el.classList.remove('calories-text--active');
                });
                dietaBlockBottom.forEach(el => {
                    el.classList.remove('dieta__item-bottom--active');
                });
                dietaBlockTop[i].classList.add('dieta__item-top--active');
                caloriesQuantity[i].classList.add('calories-quantity--active');
                caloriesText[i].classList.add('calories-text--active');
                dietaBlockBottom[i].classList.add('dieta__item-bottom--active');
            });
        });
    }
    dietaTypeChoice();

    function dietaModalOpen() {
        modalOpen.forEach((el, i) => {
            el.addEventListener('click', () => {
                overlay.classList.add('overlay--active');
                body.classList.add('no-scroll');
                modals[i].classList.add('modal--active');
                dietaTypeTextModals();
            });
        });
    }
    dietaModalOpen();

    function dietaModalClose() {
        modalClose.forEach((el, i) => {
            el.addEventListener('click', () => {
                overlay.classList.remove('overlay--active');
                body.classList.remove('no-scroll');
                modals[i].classList.remove('modal--active');
            });
        });
    }
    dietaModalClose();

    let firstDieta = localStorage.getItem('caloriesDeficiteEnd');
    let dietaCal;
    let secondDieta;
    let thirdDieta;

    function caloriesRound() {
        let num = +firstDieta.substr(2, 2);

        if (num >= 70) {
            dietaCal = (+firstDieta.substr(0, 2) + 1) * 100;
            secondDieta = dietaCal + 100;
            thirdDieta = dietaCal + 200;
        } else {
            dietaCal = +firstDieta.substr(0, 2) * 100;
            secondDieta = dietaCal + 100;
            thirdDieta = dietaCal + 200;
        }

        caloriesQuantity.forEach((cal, i) => {
            if (i == 0) {
                cal.textContent = dietaCal;
            }

            if (i == 1) {
                cal.textContent = secondDieta;
            }

            if (i == 2) {
                cal.textContent = thirdDieta;
            }
        });
    }
    caloriesRound();

});