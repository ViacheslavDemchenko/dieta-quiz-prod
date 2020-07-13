$(document).ready(function () {

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

        console.log(body_Mass_Index);
        console.log(recommendedCaloriesStart);
        console.log(recommendedCaloriesEnd);
        console.log(userMetabolism);
        console.log(BMI_Message);
        console.log(targetType);
        console.log(targetWeight);
        console.log(weight);

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

});