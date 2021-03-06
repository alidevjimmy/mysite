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
            $('#goup').css({
                opacity : 0
            })
        }
        else {
            $('.header').css({
                opacity : 1
            })
            $('#goup').css({
                opacity : 1
            })
        }
    });
    $('#aboutbtn , #knowme').click(function () {
        $('html, body').animate({
            scrollTop : $('#about').offset().top
        } , 1000)
    })
    $('#refrencebtn').click(function () {
        $('html, body').animate({
            scrollTop : $('#refrence').offset().top
        } , 1000)
    })
    $('#contactbtn , #sefaresh').click(function () {
        $('html, body').animate({
            scrollTop : $('#contact').offset().top
        } , 1000)
    })
    $('#gome').click(function () {
        $('html, body').animate({
            scrollTop : $('.me').offset().top
        } , 1000)
    })
    $('#goup').click(function () {
        $('html, body').animate({
            scrollTop : $('.me').offset().top
        } , 1000)
    })
    $('.splash').css({
        display : 'none'
    })

    $('#pasbede').click(function () {
        $('#pasbede_info').css({
            display: 'none'
        })
        $('#pasbede_content').css({
            display: 'block',
        })
    })
    $('#mehrgram').click(function () {
        $('#mehrgram_info').css({
            display: 'none'
        })
        $('#mehrgram_content').css({
            display: 'block',
        })
    })
    $('#pishgam').click(function () {
        $('#pishgam_info').css({
            display: 'none'
        })
        $('#pishgam_content').css({
            display: 'block',
        })
    })
    $('#rest').click(function () {
        $('#rest_info').css({
            display: 'none'
        })
        $('#rest_content').css({
            display: 'block',
        })
    })
    $('#adminpanel').click(function () {
        $('#adminpanel_info').css({
            display: 'none'
        })
        $('#adminpanel_content').css({
            display: 'block',
        })
    })
    $('#ramanmarket').click(function () {
        $('#ramanmarket_info').css({
            display: 'none'
        })
        $('#ramanmarket_content').css({
            display: 'block',
        })
    })
});
