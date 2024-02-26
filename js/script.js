// 웹 열떄 애니메이션 
$(document).ready(function () {
    setTimeout(function () {
        $('#main .main_slide .main_img').addClass('on');
        $('.fixed_side').addClass('on');
        $('#section1 .s1_list ul').addClass('on');
    }, 200);
});

// 스크롤시 화면 출력
$(window).scroll(function () {
    let initScroll = $(window).scrollTop();
    // if ($(window).width() < 768) {
    //     initScroll = $(window).scrollTop();
    // } else if ($(window).width() < 1024) {
    //     initScroll = $(window).scrollTop() + 200
    // } else if ($(window).width() < 1440) {
    //     initScroll = $(window).scrollTop() + 800
    // } else if ($(window).width() < 1920) {
    //     initScroll = $(window).scrollTop() + 1400
    // } else {
    //     initScroll = $(window).scrollTop() + 2000
    // }
    let news1Scroll = $('.news1').offset().top - 900;
    let news2Scroll = $('.news2').offset().top - 900;
    let news3Scroll = $('.news3').offset().top - 900;
    let news4Scroll = $('.news4').offset().top - 900;
    let news5Scroll = $('.news5').offset().top - 900;
    if (initScroll > 100) {
        $('#header').addClass('on');
    } else {
        $('#header').removeClass('on');
    }
    if (initScroll > news1Scroll) {
        $('.news1').addClass('on');
    } else {
        $('.news1').removeClass('on');
    }
    if (initScroll > news2Scroll) {
        $('.news2').addClass('on');
    } else {
        $('.news2').removeClass('on');
    }
    if (initScroll > news3Scroll) {
        $('.news3').addClass('on');
    } else {
        $('.news3').removeClass('on');
    }
    if (initScroll > news4Scroll) {
        $('.news4').addClass('on');
    } else {
        $('.news4').removeClass('on');
    }
    if (initScroll > news5Scroll) {
        $('.news5').addClass('on');
    } else {
        $('.news5').removeClass('on');
    }
})
// 햄버거메뉴 온오프
$('.menu').click(function (e) {
    e.preventDefault();
    $('.menu_side').addClass('on');
    $('body').css('overflow', 'hidden');
    $('.menu_side').css('overflow-y', 'scroll');
})
$('.ms_close').click(function () {
    $('.menu_side').removeClass('on');
    $('body').css('overflow', 'auto');
    $('.menu_side').css('overflow-y', 'hidden');
})

// 사이드바 내부메뉴
$('.ms_list .af .ml1').click(function (e) {
    e.preventDefault();
    $('.mls1').toggle(200)
})
$('.ms_list .af .ml2').click(function (e) {
    e.preventDefault();
    $('.mls2').toggle(200)
})
$('.ms_list .af .ml3').click(function (e) {
    e.preventDefault();
    $('.mls3').toggle(200)
})
$('.ms_list .af .ml4').click(function (e) {
    e.preventDefault();
    $('.mls4').toggle(200)
})
$('.ms_list .af .ml5').click(function (e) {
    e.preventDefault();
    $('.mls5').toggle(200)
})

// 메인 슬릭
$('.main_slide').slick({
    arrows: false,
    dots: true,
    appendDots: '.main_dots',
    autoplay: true,
    autoplaySpeed: 3000,
});

// 섹션1 슬릭
$('.s1_list ul').slick({
    centerMode: true,
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.5,
            }
        },
    ]
});

// 섹션3 슬릭
$('#section3 .s3_bg .s3_chicken_slide').slick({
    infinite: true,
    arrows: true,
    prevArrow: '.s3_prev',
    nextArrow: '.s3_next',
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    fadeSpeed: 1000,
});
