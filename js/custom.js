$(function () {

    $('#content').fullpage({
        anchors: ['main', '02', '03'],
        responsiveWidth: 1200,
        responsiveHeight: 700,
        afterLoad: function (name, idx) {
            $('#aside .lnb li')
                .eq(idx - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');

            if (idx === 3 || idx === 4) {
                $('#header').addClass('on');
                $('#aside').addClass('on');
            } else {
                $('#header').removeClass('on');
                $('#aside').removeClass('on');
            }
        },
    });

    $('#header .utils .lang>a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('on')
        $(this).next().toggle();
    });

    const mainVisualSlide = new Swiper('.main_visual_slide', {
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.main_visual_slide .dots',
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    const mainContentSlide01 = new Swiper('#main_content .tab_slide01', {
        loop: true,
        on: {
            slideChangeTransitionStart: function () {
                $('#main_content .itm01 .line').removeClass('on');
            },
            slideChangeTransitionEnd: function () {
                $('#main_content .tab_con .itm01 .list li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');

                $('#main_content .line').addClass('on')
            }
        }
    });

    $('#main_content .tab_con .itm01 .list li').on('click', function () {
        let idx = $(this).index();
        mainContentSlide01.slideToLoop(idx, 400);
    });

    $('#main_content .itm01 .line .prev').on('click', function () {
        mainContentSlide01.slidePrev(1000);
    });

    $('#main_content .itm01 .line .next').on('click', function () {
        mainContentSlide01.slideNext(1000);
    })


    const mainContentSlide02 = new Swiper('#main_content .tab_slide02', {
        loop: true,
        on: {
            slideChangeTransitionStart: function () {
                $('#main_content .itm02 .line').removeClass('on');
            },
            slideChangeTransitionEnd: function () {
                $('#main_content .tab_con .itm02 .list li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');
                $('#main_content .itm02 .line').addClass('on');
            }
        }
    });



    $('#main_content .tab_con .itm02 .list li').on('click', function () {
        let idx = $(this).index();
        mainContentSlide02.slideToLoop(idx, 400);
    });

    $('#main_content .itm02 .line .prev').on('click', function () {
        mainContentSlide02.slidePrev(1000);
    });

    $('#main_content .itm02 .line .next').on('click', function () {
        mainContentSlide02.slideNext(1000);
    })




    $('#main_content .tab_menu li button').on('click', function () {
        $(this)
            .parent()
            .addClass('on')
            .siblings()
            .removeClass('on');

        let idx = $(this).parent().index();

        $('#main_content .tab_con .itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')
    });


    const palyList = ['cmjEMkJqxTI', 'HcFq9dTlsXE', '8oZ5ia6mRLs', 'rn5sDesgLqg'];

    $('#main_promotion .movie').YTPlayer({
        videoURL: 'cmjEMkJqxTI',
        containment: 'self',
        optimizeDisplay: false,
    });


    $('#main_promotion .play_list li button').on('click', function () {

        let idx = $(this).parent().index();

        $(this)
            .parent()
            .addClass('on')
            .siblings()
            .removeClass('on');

        $('#main_promotion .movie').YTPlayer({
            videoURL: palyList[idx],
            containment: 'self',
            optimizeDisplay: false,
        });
    })







})