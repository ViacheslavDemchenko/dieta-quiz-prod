$(document).ready(function () {

    function validateEmail(email) {
        const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return re.test(email);
    }

    function validate() {
        const email = $("#email").val();

        // if (validateEmail(email)) {
        //     $('.form__label-email').css('color', 'rgb(58, 65, 72)');
        //     $('.form__label-email').css('left', '180px');
        //     $('.form__label-email').text('Ваш email*');
        // } else {
        //     $('.form__label-email').css('color', 'red');
        //     $('.form__label-email').text('неверный формат');
        // }
        return false;
    }

    $('#form-email').on('keyup', validate);

});