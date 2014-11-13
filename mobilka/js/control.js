$(document).ready(function() {
    $(".toAnchor").click(function () {
        var href = $(this).attr('href').replace('#', '');
        Anchor(href);
        return false;
    });
});

function Anchor(divId) {
    var dId = $("div[id='" + divId + "']");
    $('html,body').animate({scrollTop: dId.offset().top}, 'fast');
}