$(document).ready(function () {
    let green = false;
    $('.scroll-right').click(function () {
        if (green) {
            return;
        } else {
            green = true;
            $('.green').hide();
            $('.brown').show();
            $('.product').css({
                '-webkit-transform': 'translateX(-100%)',
                '-moz-transform': 'translateX(-100%)',
                '-ms-transform': 'translateX(-100%)',
                '-o-transform': 'translateX(-100%)',
                'transform': 'translateX(-100%)'
            });
        }
    });
    $('.scroll-left').click(function () {
        if (!green) {
            return;
        } else {
            green = false;
            $('.brown').hide();
            $('.green').show();
            $('.product').css({
                '-webkit-transform': 'translateX(0%)',
                '-moz-transform': 'translateX(0%)',
                '-ms-transform': 'translateX(0%)',
                '-o-transform': 'translateX(0%)',
                'transform': 'translateX(0%)'
            });
        }
    });
});