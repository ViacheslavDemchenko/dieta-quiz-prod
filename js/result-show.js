// $(document).ready(function () {

const userB_M_IResult = document.querySelector('.result-block__number--bmi'),
    userB_M_IMes = document.querySelector('.result-block__text--bmi'),
    caloriesResult = document.querySelector('.result-block__number--energy');
// userCaloriesMes = document.querySelector('.result-block__text--energy');

function resultShow() {
    userB_M_IResult.innerHTML = weightIndex;
    userB_M_IMes.innerHTML = weightIndexMessage;
    caloriesResult.innerHTML = userCaloriesResult;
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