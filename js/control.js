$(document).ready(function() {
    $("#menuHolder").load("menu.html");
    $("#footer").load("footer.html");
    fixedButton();
    hoverImage();
    accessibleDropDown();
    showDetail();
    showOtherText();

    $( ".firstTable" ).click(function() {
        $('#divAlokace1').toggle();
        return false;
    });

    $( ".secondTable" ).click(function() {
        $('#divAlokace2').toggle();
        return false;
    });

    $('input:checkbox').checkbox();
    $('input:radio').checkbox({
        cls:'jquery-radio'
    });

    $("select").selectbox();

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

function showOtherText() {
    $('.hideText').addClass('hide');
    $( ".showText" ).click(function() {
        if($(this).parent().find('.hideText').hasClass('hide')) {
            $(this).parent().find('.hideText').slideDown('fast');
            $(this).parent().find('.hideText').removeClass('hide');
            $(this).addClass('arrowUp');
        }

        else {
            $(this).parent().find('.hideText').slideUp('fast');
            $(this).parent().find('.hideText').addClass('hide');
            $(this).removeClass('arrowUp');
        }

        return false;
    });
}

function accessibleDropDown() {

    var el = $('.nav');
    $(".nav li a").attr("tabindex", "1");

    $("li", el).mouseover(function() {
        $(this).addClass("hover");
        $(this).find( ".hasSubmenu" ).addClass("hoverItem");
    }).mouseout(function() {
        $(this).removeClass("hover");
        $(this).find( ".hasSubmenu" ).removeClass("hoverItem");
    });

    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
        $(this).parents("li").find(".hasSubmenu" ).addClass("hoverItem");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
        $(this).parents("li").find(".hasSubmenu" ).removeClass("hoverItem");
    });
}

function showDetail() {
    $("table tr.detail").addClass('hide');

    $( ".viewMore" ).click(function() {
        if($(this).closest('table').find('.detail').hasClass('hide')) {
            $(this).closest('table').find('.detail').show();
            $(this).text('Skrýt podrobnosti');
            $(this).closest('table').find('.detail').removeClass('hide');
        }

        else {
            $(this).closest('table').find('.detail').hide();
            $(this).text('Zobrazit podrobnosti');
            $(this).closest('table').find('.detail').addClass('hide');
        }
        return false;
    });

}

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