let text_1 = $('.round-text-first').html();
let textLength_1 = text_1.length;

function wrapLettersInSpanFirst(text) {
    let arr = text.split('');
    for (let i = 0; i < textLength_1; i++) {
        arr[i] = "<span class='letter letter-first'>" + arr[i] + "</span>";
    }
    $('.round-text-first').html(arr.join(''));
}
wrapLettersInSpanFirst(text_1);

function addTransformCssFirst() {
    let transformStart = -90;
    let transformStep = 180 / (textLength_1 - 1);

    $('.letter-first').each(function (i, elem) {
        $(elem).css({
            transform: 'rotate(' + transformStart + 'deg)'
        });
        transformStart += transformStep;
    });
}
addTransformCssFirst();

let text_2 = $('.round-text-second').html();
let textLength_2 = text_2.length;

function wrapLettersInSpanSecond(text) {
    let arr = text.split('');
    for (let i = 0; i < textLength_2; i++) {
        arr[i] = "<span class='letter letter-second'>" + arr[i] + "</span>";
    }
    $('.round-text-second').html(arr.join(''));
}
wrapLettersInSpanSecond(text_2);

function addTransformCssSecond() {
    let transformStart = -90;
    let transformStep = 180 / (textLength_2 - 1);

    $('.letter-second').each(function (i, elem) {
        $(elem).css({
            transform: 'rotate(' + transformStart + 'deg)'
        });
        transformStart += transformStep;
    });
}
addTransformCssSecond();

let text_3 = $('.round-text-third').html();
let textLength_3 = text_3.length;

function wrapLettersInSpanThird(text) {
    let arr = text.split('');
    for (let i = 0; i < textLength_3; i++) {
        arr[i] = "<span class='letter letter-third'>" + arr[i] + "</span>";
    }
    $('.round-text-third').html(arr.join(''));
}
wrapLettersInSpanThird(text_3);

function addTransformCssThird() {
    let transformStart = -90;
    let transformStep = 180 / (textLength_3 - 1);

    $('.letter-third').each(function (i, elem) {
        $(elem).css({
            transform: 'rotate(' + transformStart + 'deg)'
        });
        transformStart += transformStep;
    });
}
addTransformCssThird();