$(document).ready(function() {
    $("#menuHolder").load("menu.html");
    submenuHover();
    fixedButton();
    hoverImage();

    $( ".firstTable" ).click(function() {
        $('#divAlokace1').toggle();
        return false;
    });

    $( ".secondTable" ).click(function() {
        $('#divAlokace2').toggle();
        return false;
    });

    $('input:checkbox').checkbox();

    $('.videos li:nth-child(2n)').css({"padding-right":"0","padding-left":"15px","float":"right"});

    $('#sliderBackground').bxSlider({
        auto: true,
        autoControls: false,
        mode: 'fade',
        controls: false,
        pager: false,
        speed: 1000
    });
});

function hoverImage() {
    $('#needsNavigation .needBox').on({
        mouseenter: function() {
        $(this).find('.mainNeedsHover').stop().animate({opacity:1}, 100);
        $(this).find('.needImageHover img').animate({"width": "100%"}, 100);
    },
        mouseleave: function() {
        $(this).find('.mainNeedsHover').stop().animate({opacity:0}, 100);
        $(this).find('.needImageHover img').animate({"width": "0"}, 100);
        }
    });
}

function fixedButton() {
    if($('.backCount').length>0) {
        var offset = $('.backCount').offset().top;
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= offset) {
                $(".backCount").addClass("fixed");
            }

            else {
                $(".backCount").removeClass("fixed");
            }
        });
    }
}

function submenuHover() {
    $("#menu li").on({
        mouseenter: function () {
        $(this).children(".subMenu").stop().slideDown('fast');
        $(this).find( ".hasSubmenu" ).addClass("hoverItem");
    },
        mouseleave: function () {
        $(this).children(".subMenu").stop().slideUp('fast');
        $(this).find( ".hasSubmenu" ).removeClass("hoverItem");
        }
    });
}
