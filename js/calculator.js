$(document).ready(function () {
  /* СЛАЙДЕР */

  window.onload = function () {
    localStorage.clear();
  }

  let owl = $('.quiz.owl-carousel');

  owl.owlCarousel({
    items: 1,
    autoHeight: true,
    touchDrag: false,
    mouseDrag: false,
    pullDrag: false,
    lazyLoad: true,
  });

  $('.arrow__right').click(function () {
    owl.trigger('next.owl.carousel');
  });
  $('.arrow__left').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  owl.on('changed.owl.carousel', function (e) {
    if ($('.owl-next').length) {
      let btnNext = document.querySelector('.owl-next');
      if (+e.page.index == e.item.count && +e.page.index != 0) {
        btnNext.classList.add('owl-next--last');
      } else {
        btnNext.classList.remove('owl-next--last');
      }
    }
  });

  /* ПЕРЕМЕННЫЕ */

  const femaleBtns = document.querySelectorAll('.sex'),
    sexCheckIcons = document.querySelectorAll('.check-icon'),
    quizSlideTitle = document.querySelectorAll('.quiz-slide__title'),
    targetBtns = document.getElementsByName('target'),
    activityBtns = document.querySelectorAll('.quantaty'),
    exerciceNum = document.querySelectorAll('.exercice-num'),
    exerciceText = document.querySelectorAll('.exercice-text'),
    quantatyCheckIcon = document.querySelectorAll('.quantaty-check-icon'),
    intensity = document.querySelectorAll('.intensity'),
    age = document.getElementById('age'),
    weight = document.getElementById('weight'),
    height = document.getElementById('height'),
    formField = document.querySelectorAll('.form__field'),
    inputWrap = document.querySelectorAll('.input-wrap'),
    checkMark = document.querySelectorAll('.check-mark'),
    calcBtn = document.querySelector('.arrow__right--last'),
    formLabel = document.querySelectorAll('.form__label');
  let screenWidth = window.screen.width;

  let userSex = 'female',
    userWeight,
    userHeightMeters,
    userHeight,
    userAge,
    weightIndex,
    userActivity,
    dailyCalories,
    metabolism,
    target,
    caloriesDeficiteStart,
    caloriesDeficiteEnd,
    weightIndexMessage,
    normalWeight;

  /* ФУНКЦИИ ДЛЯ РАСЧЕТОВ КВИЗА */

  function userParams() {
    screenWidth = window.screen.width;
    const bgImage = document.querySelector('.quiz-slide-first');
    let src = './img/first-slide-bg-';
    let imgType;

    if (window.devicePixelRatio == 1 && screenWidth <= 480) {
      imgType = '-480@1x.jpg';
    }

    if (window.devicePixelRatio > 1 && screenWidth <= 480) {
      imgType = '-480@2x.jpg';
    }

    if (window.devicePixelRatio == 1 && screenWidth > 1024) {
      imgType = '-1920@1x.jpg';
    }

    if (window.devicePixelRatio > 1 && screenWidth > 1024) {
      imgType = '-1920@2x.jpg';
    }

    femaleBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        femaleBtns.forEach((btn) => {
          btn.classList.remove('sex--active');
        });
        sexCheckIcons.forEach((icon) => {
          icon.classList.remove('check-icon--active');
        });
        quizSlideTitle.forEach((title) => {
          title.classList.remove('quiz-slide__title--active');
        });
        btn.classList.add('sex--active');
        sexCheckIcons[i].classList.add('check-icon--active');
        quizSlideTitle[i].classList.add('quiz-slide__title--active');
        bgImage.style.backgroundImage = `url(${src}${i}${imgType})`;
        userSex = btn.value;
      });
      return userSex;
    });

    targetBtns.forEach((radio) => {
      radio.addEventListener('click', () => {
        target = radio.value;

        if (target == 1) {
          localStorage.setItem('target', 'Похудеть');
          localStorage.setItem('target-weight', target);
        }
        if (target == 2) {
          localStorage.setItem('target', 'Набрать вес');
          localStorage.setItem('target-weight', target);
        }
        if (target == 3) {
          localStorage.setItem('target', 'Удержать вес');
          localStorage.setItem('target-weight', target);
        }
      });
      return target;
    });

    age.addEventListener('keyup', () => {
      age.value = age.value.replace(/[^0-9]/g, '');
      userAge = Number(age.value);
      if (userAge >= 18 && userAge <= 70) {
        formField[0].classList.remove('form__field--warning');
        inputWrap[0].classList.add('input-wrap--active');
        checkMark[0].classList.add('check-mark--active');
        formLabel[0].textContent = 'Ваш возраст*';
        formLabel[0].style.color = '#3a4148';
      } else {
        formField[0].classList.add('form__field--warning');
        inputWrap[0].classList.remove('input-wrap--active');
        checkMark[0].classList.remove('check-mark--active');
        formLabel[0].textContent = 'от 18 до 70 лет';
        formLabel[0].style.color = 'red';
      }
      return userAge;
    });

    weight.addEventListener('keyup', () => {
      weight.value = weight.value.replace(/[^0-9]/g, '');
      userWeight = Number(weight.value);
      if (userWeight >= 40 && userWeight <= 150) {
        formField[1].classList.remove('form__field--warning');
        inputWrap[1].classList.add('input-wrap--active');
        formLabel[1].textContent = 'Ваш вес*';
        formLabel[1].style.color = '#3a4148';
      } else {
        formField[1].classList.add('form__field--warning');
        inputWrap[1].classList.remove('input-wrap--active');
        formLabel[1].textContent = 'от 40 до 150 кг';
        formLabel[1].style.color = 'red';
      }
      localStorage.setItem('weight', userWeight);
      return userWeight;
    });

    height.addEventListener('keyup', () => {
      height.value = height.value.replace(/[^0-9]/g, '');
      userHeight = Number(height.value);
      if (userHeight >= 150 && userHeight <= 200) {
        formField[2].classList.remove('form__field--warning');
        inputWrap[2].classList.add('input-wrap--active');
        formLabel[2].textContent = 'Ваш рост*';
        formLabel[2].style.color = '#3a4148';
      } else {
        formField[2].classList.add('form__field--warning');
        inputWrap[2].classList.remove('input-wrap--active');
        formLabel[2].textContent = 'от 150 до 200 см';
        formLabel[2].style.color = 'red';
      }
      return userHeight;
    });
  }
  userParams();

  function activity() {
    activityBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        activityBtns.forEach((btn) => {
          btn.classList.remove('quantaty--active');
        });
        exerciceNum.forEach((num) => {
          num.classList.remove('exercice-num--active');
        });
        exerciceText.forEach((text) => {
          text.classList.remove('exercice-text--active');
        });
        quantatyCheckIcon.forEach((icon) => {
          icon.classList.remove('quantaty-check-icon--active');
        });
        intensity.forEach((text) => {
          text.classList.remove('intensity--active');
        });
        btn.classList.add('quantaty--active');
        exerciceNum[i].classList.add('exercice-num--active');
        exerciceText[i].classList.add('exercice-text--active');
        quantatyCheckIcon[i].classList.add('quantaty-check-icon--active');
        intensity[i].classList.add('intensity--active');
        if (i == 0) {
          userActivity = 1.2;
        } else if (i == 1) {
          userActivity = 1.3;
        } else if (i == 2) {
          userActivity = 1.4;
        } else if (i == 3) {
          userActivity = 1.5;
        } else if (i == 4) {
          userActivity = 1.6;
        } else if (i == 5) {
          userActivity = 1.9;
        }
      });
    });
    return userActivity;
  }
  activity();

  function weightIndexCalc() {
    userHeightMeters = userHeight / 100;
    weightIndex = Number(Math.round(userWeight / (userHeightMeters * userHeightMeters)));

    localStorage.setItem('BMI', weightIndex);

    if (weightIndex >= 0 && weightIndex < 16) {
      weightIndexMessage = 'Выраженный дефицит массы тела';
    }
    if (weightIndex >= 16 && weightIndex < 19) {
      weightIndexMessage = 'Недостаточная масса тела';
    }
    if (weightIndex >= 20 && weightIndex < 25) {
      weightIndexMessage = 'Нормальная масса тела';
    }
    if (weightIndex >= 25 && weightIndex < 30) {
      weightIndexMessage = 'Избыточная масса тела (предожирение)';
    }
    if (weightIndex >= 30 && weightIndex < 35) {
      weightIndexMessage = 'Ожирение 1-ой степени';
    }
    if (weightIndex >= 35 && weightIndex <= 40) {
      weightIndexMessage = 'Ожирение 2-ой степени';
    }
    if (weightIndex > 40) {
      weightIndexMessage = 'Ожирение 3-ой степени';
    }
    localStorage.setItem('weightIndexMessage', weightIndexMessage);
    return weightIndex;
  }

  function minCalories() {
    if (weightIndex > 29 || (weightIndex >= 0 && weightIndex <= 19)) {
      normalWeight = userHeight - 100;

      if (userSex == 'male') {
        metabolism = Math.round(9.9 * normalWeight + 6.25 * userHeight - 4.92 * userAge + 5);
      } else if (userSex == 'female') {
        metabolism = Math.round(9.9 * normalWeight + 6.25 * userHeight - 4.92 * userAge - 161);
      }
    } else {
      if (userSex == 'male') {
        metabolism = Math.round(9.9 * userWeight + 6.25 * userHeight - 4.92 * userAge + 5);
      } else if (userSex == 'female') {
        metabolism = Math.round(9.9 * userWeight + 6.25 * userHeight - 4.92 * userAge - 161);
      }
    }
    localStorage.setItem('metabolism', metabolism);
    return metabolism;
  }

  function dailyCaloriesCalc() {
    dailyCalories = Math.round(metabolism * userActivity);

    if (weightIndex >= 0 && weightIndex < 19) {
      dailyCalories = Math.round(metabolism * userActivity);
      localStorage.setItem('dailyCalories', dailyCalories);
    }

    if (target == 1) {
      if (weightIndex >= 19 && weightIndex < 25) {
        caloriesDeficiteStart = Math.round(dailyCalories - (dailyCalories / 100) * 10);
        caloriesDeficiteEnd = Math.round(dailyCalories - (dailyCalories / 100) * 15);
        localStorage.setItem('caloriesDeficiteStart', caloriesDeficiteStart);
        localStorage.setItem('caloriesDeficiteEnd', caloriesDeficiteEnd);
      } else if (weightIndex >= 25 && weightIndex < 30) {
        caloriesDeficiteStart = Math.round(dailyCalories - (dailyCalories / 100) * 15);
        caloriesDeficiteEnd = Math.round(dailyCalories - (dailyCalories / 100) * 20);
        localStorage.setItem('caloriesDeficiteStart', caloriesDeficiteStart);
        localStorage.setItem('caloriesDeficiteEnd', caloriesDeficiteEnd);
      } else if (weightIndex >= 30) {
        caloriesDeficiteStart = Math.round(dailyCalories - (dailyCalories / 100) * 10);
        caloriesDeficiteEnd = Math.round(dailyCalories - (dailyCalories / 100) * 15);
        localStorage.setItem('caloriesDeficiteStart', caloriesDeficiteStart);
        localStorage.setItem('caloriesDeficiteEnd', caloriesDeficiteEnd);
      }
    } else if (target == 2) {
      caloriesDeficiteStart = dailyCalories + 100;
      caloriesDeficiteEnd = dailyCalories + 200;
      localStorage.setItem('caloriesDeficiteStart', caloriesDeficiteStart);
      localStorage.setItem('caloriesDeficiteEnd', caloriesDeficiteEnd);
    }
  }

  /* ПРОВЕРКА ЗАПОЛНЕННОСТИ ВСЕХ ДАННЫХ КВИЗА ПЕРЕД ПЕРЕХОДОМ НА СТРАНИЦУ РАСЧЕТА */

  calcBtn.addEventListener('click', () => {
    if (userSex == undefined || userWeight == undefined || target == undefined || userActivity == undefined || userWeight == undefined || userHeight == undefined || userAge == undefined) {
      alert('Пожалуйста, введите все необходимые данные!');
    } else {
      weightIndexCalc();
      minCalories();
      dailyCaloriesCalc();
      window.location.href = 'program-calc.html';
    }
  });

  /* ФУНКЦИЯ ВОЗВРАТА КАЖДОЙ ПОСЛЕДУЮЩЕЙ СТРАНИЦЫ КВИЗА НАВЕРХ ИЗ-ЗА СДВИГА ВНИЗ ВИРТУАЛЬНОЙ КЛАВИАТУРОЙ НА МОБИЛКАХ */

  let goTopBtns = document.querySelectorAll('.arrow__right');

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  goTopBtns.forEach((btn) => {
    btn.addEventListener('click', backToTop);
  });

  /* МОДАЛЬНОЕ ОКНО НА ТРЕТЬЕМ СЛАЙДЕРЕ */

  const quizSlideThirdModal = document.querySelector('.quiz-slide-third-modal');
  const overlay = document.querySelector('.overlay');
  const body = document.getElementsByTagName('body')[0];
  const quizSlideThirdModalOpen = document.querySelector('.question-mark');
  const quizSlideThirdModalClose = document.querySelector('.third-slide-modal');

  quizSlideThirdModalOpen.addEventListener('click', openQuizSlideThirdModal);
  quizSlideThirdModalClose.addEventListener('click', closeQuizSlideThirdModal);

  function openQuizSlideThirdModal() {
    overlay.classList.add('overlay--active');
    quizSlideThirdModal.classList.add('quiz-slide-third-modal--active');
    body.classList.add('no-scroll');
  }

  function closeQuizSlideThirdModal() {
    overlay.classList.remove('overlay--active');
    quizSlideThirdModal.classList.remove('quiz-slide-third-modal--active');
    body.classList.remove('no-scroll');
  }
});