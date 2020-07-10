// $(document).ready(function () {

const userB_M_IResult = document.querySelector('.result-block__number--bmi'),
    caloriesResult = document.querySelector('.result-block__number--energy'),
    recommendedCal = document.querySelector('.result-block__number--loose-weight'),
    userB_M_IMes = document.querySelector('.result-block__text--bmi'),
    targetMessage = document.querySelector('.result-block__text--target');
// userCaloriesMes = document.querySelector('.result-block__text--energy');

function resultShow() {
    let body_Mass_Index = localStorage.getItem('BMI');
    let recommendedCalories = localStorage.getItem('userCaloriesResult');
    let userMetabolism = localStorage.getItem('metabolism');
    let BMI_Message = localStorage.getItem('weightIndexMessage');
    let targetType = localStorage.getItem('target');

    console.log(body_Mass_Index);
    console.log(recommendedCalories);
    console.log(userMetabolism);
    console.log(BMI_Message);
    console.log(targetType);

    userB_M_IResult.innerHTML = body_Mass_Index;
    caloriesResult.innerHTML = userMetabolism;
    recommendedCal.innerHTML = recommendedCalories;
    userB_M_IMes.innerHTML = BMI_Message;
    targetMessage.innerHTML = targetType;

    // userCaloriesMes.innerHTML = "Норма калорий в день";
    // if (target == 3) {
    //   userCaloriesResult.innerHTML = dailyCalories;
    // } else {
    //   userCaloriesResult.innerHTML =
    //     caloriesDeficiteStart + " - " + caloriesDeficiteEnd;
    // }
    // userCaloriesMes.innerHTML = "Рекомендуемое суточное количество калорий";
}
resultShow();

// });