$(document).ready(function () {
    /* ПЕРЕМЕННЫЕ  */

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
        calcBtn = document.querySelector('.arrow__right--last');

    // Данные
    let userSex,
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

    /* ОПРЕДЕЛЯЕМ ПОДДЕРЖКУ БРАУЗЕРОМ WEBP ФОРМАТА */

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


    /* ФУНКЦИИ ДЛЯ РАСЧЕТОВ */

    function userParams(webp) {
        let screenWidth = window.screen.width;
        const bgImage = document.querySelector('.quiz-slide-first');
        let src = './img/first-slide-bg-';
        let imgType;

        if (webpSupportCheck() && window.devicePixelRatio == 1) {
            // console.log('WEBP');
            // console.log('< 481');
            // console.log('window.devicePixelRatio 1');
            // src = './img/first-slide-bg-';
            imgType = '-480@1x.webp';
        }

        if (webpSupportCheck() && window.devicePixelRatio > 1) {
            // console.log('WEBP');
            // console.log('< 481');
            // console.log('window.devicePixelRatio > 1');
            /////
            imgType = '-480@2x.webp';
        }

        if (!webpSupportCheck() && window.devicePixelRatio == 1) {
            // console.log('jpg');
            // console.log('< 481');
            // console.log('window.devicePixelRatio 1');
            // src = './img/first-slide-bg-';
            imgType = '-480@1x.jpg';
        }

        if (!webpSupportCheck() && window.devicePixelRatio > 1) {
            // console.log('jpg');
            // console.log('< 481');
            // console.log('window.devicePixelRatio > 1');
            // src = './img/first-slide-bg-';
            imgType = '-480@2x.jpg';
        }

        femaleBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                femaleBtns.forEach(btn => {
                    btn.classList.remove('sex--active');
                });
                sexCheckIcons.forEach(icon => {
                    icon.classList.remove('check-icon--active');
                });
                quizSlideTitle.forEach(title => {
                    title.classList.remove('quiz-slide__title--active');
                });
                btn.classList.add('sex--active');
                sexCheckIcons[i].classList.add('check-icon--active');
                quizSlideTitle[i].classList.add('quiz-slide__title--active');
                // console.log(`url(${src}${i}${imgType})`);
                bgImage.style.backgroundImage = `url(${src}${i}${imgType})`;
                userSex = btn.value;
                console.log(`Пол: ${userSex}`);
            });
            return userSex;
        });

        targetBtns.forEach(radio => {
            radio.addEventListener('click', () => {
                target = radio.value;
                console.log(`Цель: ${target}`);

                if (target == 1) {
                    localStorage.setItem('target', 'Похудеть');
                }
                if (target == 2) {
                    localStorage.setItem('target', 'Набрать вес');
                }
                if (target == 3) {
                    localStorage.setItem('target', 'Удержать вес');
                }
            });
            return target;
        });

        age.addEventListener('keyup', () => {
            age.value = age.value.replace(/[^0-9]/g, '');
            userAge = Number(age.value);
            console.log("Возраст: ");
            console.log(userAge);
            return userAge;
        });

        weight.addEventListener('keyup', () => {
            weight.value = weight.value.replace(/[^0-9]/g, '');
            userWeight = Number(weight.value);
            console.log("Вес: ");
            console.log(userWeight);
            return userWeight;
        });

        height.addEventListener('keyup', () => {
            height.value = height.value.replace(/[^0-9]/g, '');
            userHeight = Number(height.value);
            console.log("Рост: ");
            console.log(userHeight);
            return userHeight;
        });

        formField.forEach((input, i) => {
            input.addEventListener('change', () => {
                if (input.value != '') {
                    inputWrap[i].classList.add('input-wrap--active');
                } else {
                    inputWrap[i].classList.remove('input-wrap--active');
                }
            });
        });
    }
    userParams(webpSupportCheck());

    function activity() {
        activityBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                activityBtns.forEach(btn => {
                    btn.classList.remove('quantaty--active');
                });
                exerciceNum.forEach(num => {
                    num.classList.remove('exercice-num--active');
                });
                exerciceText.forEach(text => {
                    text.classList.remove('exercice-text--active');
                });
                quantatyCheckIcon.forEach(icon => {
                    icon.classList.remove('quantaty-check-icon--active');
                });
                intensity.forEach(text => {
                    text.classList.remove('intensity--active');
                });
                btn.classList.add('quantaty--active');
                exerciceNum[i].classList.add('exercice-num--active');
                exerciceText[i].classList.add('exercice-text--active');
                quantatyCheckIcon[i].classList.add('quantaty-check-icon--active');
                intensity[i].classList.add('intensity--active');
                if (i == 0) {
                    userActivity = 1.2;
                    console.log("Коэф. активности: ");
                    console.log(userActivity);
                } else if (i == 1) {
                    userActivity = 1.3;
                    console.log("Коэф. активности: ");
                    console.log(userActivity);
                } else if (i == 2) {
                    userActivity = 1.4;
                    console.log("Коэф. активности: ");
                    console.log(userActivity);
                } else if (i == 3) {
                    userActivity = 1.5;
                    console.log("Коэф. активности: ");
                    console.log(userActivity);
                } else if (i == 4) {
                    userActivity = 1.6;
                    console.log("Коэф. активности: ");
                    console.log(userActivity);
                } else if (i == 5) {
                    userActivity = 1.9;
                    console.log("Коэф. активности: ");
                    console.log(userActivity);
                }
            });
        });
        return userActivity;
    }
    activity();

    function weightIndexCalc() {
        userHeightMeters = userHeight / 100;
        console.log("Вес в метрах: ");
        console.log(userHeightMeters);
        weightIndex = Number(
            Math.round(userWeight / (userHeightMeters * userHeightMeters))
        );
        console.log("ИМТ: ");
        console.log(weightIndex);

        localStorage.setItem('BMI', weightIndex);

        if (weightIndex >= 0 && weightIndex < 16) {
            console.log("ИМТ: Выраженный дефицит массы тела");
            weightIndexMessage = "Выраженный дефицит массы тела";
        }
        if (weightIndex >= 16 && weightIndex < 19) {
            console.log("ИМТ: Недостаточная масса тела");
            weightIndexMessage = "Недостаточная масса тела";
        }
        if (weightIndex >= 20 && weightIndex < 25) {
            console.log("ИМТ: Нормальная масса тела");
            weightIndexMessage = "Нормальная масса тела";
        }
        if (weightIndex >= 25 && weightIndex < 30) {
            console.log("ИМТ: Избыточная масса тела (предожирение)");
            weightIndexMessage = "Избыточная масса тела (предожирение)";
        }
        if (weightIndex >= 30 && weightIndex < 35) {
            console.log("ИМТ: Ожирение 1-ой степени");
            weightIndexMessage = "Ожирение 1-ой степени";
        }
        if (weightIndex >= 35 && weightIndex <= 40) {
            console.log("ИМТ: Ожирение 2-ой степени");
            weightIndexMessage = "Ожирение 2-ой степени";
        }
        if (weightIndex > 40) {
            console.log("ИМТ: Ожирение 3-ой степени");
            weightIndexMessage = "Ожирение 3-ой степени";
        }
        localStorage.setItem('weightIndexMessage', weightIndexMessage);
        return weightIndex;
    }

    function minCalories() {
        if (weightIndex > 29 || (weightIndex >= 0 && weightIndex <= 19)) {
            normalWeight = userHeight - 100;
            console.log("Нормальный вес: ");
            console.log(normalWeight);

            if (userSex == "male") {
                metabolism = Math.round(
                    9.9 * normalWeight + 6.25 * userHeight - 4.92 * userAge + 5
                );
            } else if (userSex == "female") {
                metabolism = Math.round(
                    9.9 * normalWeight + 6.25 * userHeight - 4.92 * userAge - 161
                );
            }
        } else {
            if (userSex == "male") {
                metabolism = Math.round(
                    9.9 * userWeight + 6.25 * userHeight - 4.92 * userAge + 5
                );
            } else if (userSex == "female") {
                metabolism = Math.round(
                    9.9 * userWeight + 6.25 * userHeight - 4.92 * userAge - 161
                );
            }
        }
        localStorage.setItem('metabolism', metabolism);
        console.log("Минимальная калорийность (основной обмен): ");
        console.log(metabolism);
        return metabolism;
    }

    function dailyCaloriesCalc() {
        dailyCalories = Math.round(metabolism * userActivity);
        console.log("Дневная калорийность: ");
        console.log(dailyCalories);

        if (weightIndex >= 0 && weightIndex < 19) {
            dailyCalories = Math.round(metabolism * userActivity);
            localStorage.setItem('dailyCalories', dailyCalories);
        }

        if (target == 1) {
            if (weightIndex >= 19 && weightIndex < 25) {
                caloriesDeficiteStart = Math.round(
                    dailyCalories - (dailyCalories / 100) * 10
                );
                caloriesDeficiteEnd = Math.round(
                    dailyCalories - (dailyCalories / 100) * 15
                );
                console.log("Кал. для похудения: ");
                console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
                userCaloriesResult = `${caloriesDeficiteStart} - ${caloriesDeficiteEnd}`;
                localStorage.setItem('userCaloriesResult', userCaloriesResult);
            } else if (weightIndex >= 25 && weightIndex < 30) {
                caloriesDeficiteStart = Math.round(
                    dailyCalories - (dailyCalories / 100) * 15
                );
                caloriesDeficiteEnd = Math.round(
                    dailyCalories - (dailyCalories / 100) * 20
                );
                console.log("Кал. для похудения: ");
                console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
                userCaloriesResult = `${caloriesDeficiteStart} - ${caloriesDeficiteEnd}`;
                localStorage.setItem('userCaloriesResult', userCaloriesResult);
            } else if (weightIndex >= 30) {
                caloriesDeficiteStart = Math.round(
                    dailyCalories - (dailyCalories / 100) * 10
                );
                caloriesDeficiteEnd = Math.round(
                    dailyCalories - (dailyCalories / 100) * 15
                );
                console.log("Кал. для похудения: ");
                console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
                userCaloriesResult = `${caloriesDeficiteStart} - ${caloriesDeficiteEnd}`;
                localStorage.setItem('userCaloriesResult', userCaloriesResult);
            }
        } else if (target == 2) {
            caloriesDeficiteStart = dailyCalories + 100;
            caloriesDeficiteEnd = dailyCalories + 200;
            console.log("Кал. для набора веса: ");
            console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
            userCaloriesResult = `${caloriesDeficiteStart} - ${caloriesDeficiteEnd}`;
            localStorage.setItem('userCaloriesResult', userCaloriesResult);
        }
    }


    calcBtn.addEventListener("click", () => {
        weightIndexCalc();
        minCalories();
        dailyCaloriesCalc();
    });

});