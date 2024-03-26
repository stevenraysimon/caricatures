$(document).ready(function () {

    //Date function
    $('#date').text(new Date().getFullYear());

    //Sound
    var pop = $("#pop")[0];
    $('a').click(function () {
        pop.play();
    });

    //Menu
    $('.menu-icon').click(function () {

        if ($(".mainnav").css("display") == "block") {
            //Hide
            $('#barTwo').css('margin-top', '5px');
            $('#barOne').css({ 'transform': 'rotate(' + 0 + 'deg)' });
            $('#barTwo').css({ 'transform': 'rotate(' + 0 + 'deg)' });
            $('.mainnav').animate({ left: '-300px' }, function () {
                $(this).css('display', 'none');
            });
            $('.blackOverlay').fadeOut();
            $('.bar').removeClass('invert');
        } else {
            //Show
            $('.mainnav').css({ 'display': 'block' });
            $('.blackOverlay').fadeIn();
            $('#barTwo').css('margin-top', '-2px');
            $('#barOne').css({ 'transform': 'rotate(' + 45 + 'deg)' });
            $('#barTwo').css({ 'transform': 'rotate(' + -45 + 'deg)' });
            $('.mainnav').animate({ left: '0px' });
            $('.bar').addClass('invert');
        }

    });//Menu button

    $('.mainnav a').click(function () {
        //Hide
        $('#barTwo').css('margin-top', '5px');
        $('#barOne').css({ 'transform': 'rotate(' + 0 + 'deg)' });
        $('#barTwo').css({ 'transform': 'rotate(' + 0 + 'deg)' });
        $('.mainnav').animate({ left: '-300px' }, function () {
            $(this).css('display', 'none');
        });
        $('.blackOverlay').fadeOut();
        $('.bar').removeClass('invert');
    });//Main nav links

    // Smooth scroll to section when clicking on a navigation link
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var targetId = $(this).attr('href');
        var target = $(targetId);

        if (target.length) {
            // Calculate scroll position
            var scrollPosition;
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                // If on the homepage, simply scroll to the target section
                scrollPosition = target.offset().top;
            } else {
                // If on a subpage, scroll to the top of the section on the homepage
                scrollPosition = target.position().top;
            }

            // Scroll to the target section
            $('html, body').stop().animate({
                scrollTop: scrollPosition
            }, 1000);
        }
    });



    // Questions and Answers
    $('.answer').slideUp(0);
    $('.qa-fa').toggleClass('fa-minus fa-plus');

    $('.question').click(function () {
        $(this).next('.answer').slideToggle();
        $(this).find('.qa-fa').toggleClass('fa-minus fa-plus');
    });

});//doc ready
