document.addEventListener('DOMContentLoaded', function () {

    const userB_M_IResult = document.querySelector('.result-block__number--bmi'),
        caloriesResult = document.querySelector('.result-block__number--energy'),
        recommendedCal = document.querySelector('.result-block__number--loose-weight'),
        userB_M_IMes = document.querySelector('.result-block__text--bmi'),
        targetMessage = document.querySelector('.result-block__text--target'),
        targetWeightResult = document.querySelector('.result-block__number--weight');

    function resultShow() {
        let body_Mass_Index = localStorage.getItem('BMI');
        let recommendedCaloriesStart = localStorage.getItem('caloriesDeficiteStart');
        let recommendedCaloriesEnd = localStorage.getItem('caloriesDeficiteEnd');

        let userMetabolism = localStorage.getItem('metabolism');
        let BMI_Message = localStorage.getItem('weightIndexMessage');
        let targetType = localStorage.getItem('target');
        let targetWeight = localStorage.getItem('target-weight');
        let weight = localStorage.getItem('weight');

        // console.log(body_Mass_Index);
        // console.log(recommendedCaloriesStart);
        // console.log(recommendedCaloriesEnd);
        // console.log(userMetabolism);
        // console.log(BMI_Message);
        // console.log(targetType);
        // console.log(targetWeight);
        // console.log(weight);

        userB_M_IResult.innerHTML = body_Mass_Index;
        caloriesResult.innerHTML = userMetabolism;
        recommendedCal.innerHTML = `${Math.min(recommendedCaloriesStart, recommendedCaloriesEnd)} - ${Math.max(recommendedCaloriesStart, recommendedCaloriesEnd)}`;
        userB_M_IMes.innerHTML = BMI_Message;
        targetMessage.innerHTML = targetType;

        if (targetWeight == 1) {
            targetWeightResult.innerHTML = '-4кг';
        } else if (targetWeight == 2) {
            targetWeightResult.innerHTML = '+2кг';
        } else if (targetWeight == 3) {
            targetWeightResult.innerHTML = `${weight}кг`;
        }
    }
    resultShow();

    const body = document.getElementsByTagName('body')[0];
    const overlay = document.querySelector('.overlay');
    const resultBlockModalBMI = document.querySelector('.result-block-modal--bmi');
    const openResultBlockModalBMI = document.querySelector('.question-mark--bmi');
    const closeResultBlockModalBMI = document.querySelector('.close-modal--bmi');

    openResultBlockModalBMI.addEventListener('click', openResultBlockModalB_M_I);
    closeResultBlockModalBMI.addEventListener('click', closeResultBlockModalB_M_I);

    function openResultBlockModalB_M_I() {
        overlay.classList.add('overlay--active');
        resultBlockModalBMI.classList.add('result-block-modal--bmi--active');
        body.classList.add('no-scroll');
    }

    function closeResultBlockModalB_M_I() {
        overlay.classList.remove('overlay--active');
        resultBlockModalBMI.classList.remove('result-block-modal--bmi--active');
        body.classList.remove('no-scroll');
    }

    const resultBlockModalEnergy = document.querySelector('.result-block-modal--energy');
    const openResultBlockModalEnergy = document.querySelector('.question-mark--energy');
    const closeResultBlockModalEnergy = document.querySelector('.close-modal--energy');

    openResultBlockModalEnergy.addEventListener('click', openResultBlockModal_Energy);
    closeResultBlockModalEnergy.addEventListener('click', closeResultBlockModal_Energy);

    function openResultBlockModal_Energy() {
        overlay.classList.add('overlay--active');
        resultBlockModalEnergy.classList.add('result-block-modal--energy--active');
        body.classList.add('no-scroll');
    }

    function closeResultBlockModal_Energy() {
        overlay.classList.remove('overlay--active');
        resultBlockModalEnergy.classList.remove('result-block-modal--energy--active');
        body.classList.remove('no-scroll');
    }

    const resultBlockModalWeight = document.querySelector('.result-block-modal--loose-weight');
    const openResultBlockModalWeight = document.querySelector('.question-mark--weight');
    const closeResultBlockModalWeight = document.querySelector('.close-modal--weight');

    openResultBlockModalWeight.addEventListener('click', openResultBlockModal_Weight);
    closeResultBlockModalWeight.addEventListener('click', closeResultBlockModal_Weight);

    function openResultBlockModal_Weight() {
        overlay.classList.add('overlay--active');
        resultBlockModalWeight.classList.add('result-block-modal--loose-weight--active');
        body.classList.add('no-scroll');
    }

    function closeResultBlockModal_Weight() {
        overlay.classList.remove('overlay--active');
        resultBlockModalWeight.classList.remove('result-block-modal--loose-weight--active');
        body.classList.remove('no-scroll');
    }

    const resultBlockModalResult = document.querySelector('.result-block-modal--result');
    const openResultBlockModalResult = document.querySelector('.question-mark--result');
    const closeResultBlockModalResult = document.querySelector('.close-modal--result');

    openResultBlockModalResult.addEventListener('click', openResultBlockModal_Result);
    closeResultBlockModalResult.addEventListener('click', closeResultBlockModal_Result);

    function openResultBlockModal_Result() {
        overlay.classList.add('overlay--active');
        resultBlockModalResult.classList.add('result-block-modal--result--active');
        body.classList.add('no-scroll');
    }

    function closeResultBlockModal_Result() {
        overlay.classList.remove('overlay--active');
        resultBlockModalResult.classList.remove('result-block-modal--result--active');
        body.classList.remove('no-scroll');
    }

});