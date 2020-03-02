$(function () {
    AOS.init();
    $('#my_skills').click(function () {
        $('.chart').easyPieChart({
            barColor: '#d41b3f',
            trackColor: '#251c1a',
            scaleColor: '#251c1a',
            scaleLength: 0,
            lineCap: 'butt',
            lineWidth: 12,
            trackWidth: undefined,
            size: 110,
            rotate: 0, // in degrees
            animate: {
                duration: 2000,
                enabled: true
            },
            easing: function (x, t, b, c, d) { // easing function
                t = t / (d / 2);
                if (t < 1) {
                    return c / 2 * t * t + b;
                }
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            }
        });
    })
    $(window).scroll(function (event) {
        let scrolled_y = window.scrollY;
        if (scrolled_y <= 743) {
            $('.header').css({
                opacity : 0
            })
        }
        else {
            $('.header').css({
                opacity : 1
            })
        }
    });
});