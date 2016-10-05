$(document).ready(function() {
    $("#menuHolder").load("menu.html");
    $("#footer").load("footer.html");
    fixedButton();
    hoverImage();
    accessibleDropDown();
    showDetail();
    showOtherText();
    showBounus();
    showChildAge();

    setTimeout(function () {
        monthlyPaymentShow();
    }, 3000);


    $('form input[type="text"]').each(function() {
        var value = $(this).val();
        $(this).after("<span class='valueInput'>"+value+"</span>");
    });

    helpBubbleShow();
    checkedCheckboxes();

    $.datepicker.regional['cs'] = {
        closeText: 'Zavřít',
        prevText: '&#x3c;Dříve',
        nextText: 'Později&#x3e;',
        currentText: 'Nyní',
        monthNames: ['leden','únor','březen','duben','květen','červen',
            'červenec','srpen','září','říjen','listopad','prosinec'],
        monthNamesShort: ['led','úno','bře','dub','kvě','čer',
            'čvc','srp','zář','říj','lis','pro'],
        dayNames: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
        dayNamesShort: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
        dayNamesMin: ['ne','po','út','st','čt','pá','so'],
        weekHeader: 'Týd',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['cs']);

    $( ".datePicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd.mm.yy'

    });

    $(".firstTable").click(function () {
        $('#divAlokace1').toggle();
        return false;
    });

    $(".secondTable").click(function () {
        $('#divAlokace2').toggle();
        return false;
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

function monthlyPaymentShow() {
    if($("#monthlyPaymentAnchor").length > 0) {
        var offMonthlyTop = $("#monthlyPaymentAnchor").offset();
        var heightMonthlyElement = $("#monthlyPaymentAnchor").height();
        var offMonthlyBottom = offMonthlyTop.top + heightMonthlyElement;


        $(window).scroll(function() {
            var windowScroll2 = $(window).scrollTop();
            if(windowScroll2 > offMonthlyBottom) {
                $("#monthlyPayment").fadeIn();
            }
            else {
                $("#monthlyPayment").fadeOut();
            }
        });
    }
}

function showChildAge() {
    if ($('#childCheckbox').is(':checked')) {
        $('#showChildAge').show();
    }

    $('#childCheckbox').click(function() {
        if ($(this).is(':checked')) {
            $('#showChildAge').show();
        }
        else{
            $('#showChildAge').hide();
        }
    });
}

function checkedCheckboxes() {
    $('.itemsHolder input[type=checkbox]').each(function() {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('checkedCheckbox');
        }
    });

    $('.itemsHolder input[type=checkbox]').on('click', function(){
        if ($(this).is(':checked')) {
            $(this).parent().addClass('checkedCheckbox');
        }
        else {
            $(this).parent().removeClass('checkedCheckbox');
            $(this).parent().find('input[type=text]').val(0);
        }
    });
}

function helpBubbleShow() {
    if($(".helpBubble").length > 0) {
        var offTop = $("#anchor").offset().top;
        $(window).scroll(function() {
            var windowScroll = $(window).scrollTop();
            if(windowScroll >= offTop && $(".helpBubble").hasClass('hide')) {
                $(".helpBubble").fadeIn();
            }
        });

        $(".helpBubble .close").click(function() {
            $('.helpBubble').fadeOut();
            $('.helpBubble').removeClass('hide');
            return false;
        });
    }
}

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

function showBounus() {
    $("table tr.moreBonus").addClass('hide');
    $( ".moreBonusLink" ).click(function() {
        if($(this).closest('table').find('.moreBonus').hasClass('hide')) {
            $(this).closest('table').find('.moreBonus').slideDown('fast');
            $(this).closest('table').find('.moreBonus').removeClass('hide');
            $(this).addClass('arrowUp');
        }

        else {
            $(this).closest('table').find('.moreBonus').slideUp('fast');
            $(this).closest('table').find('.moreBonus').addClass('hide');
            $(this).removeClass('arrowUp');
        }

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