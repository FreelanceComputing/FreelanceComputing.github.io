$(document).ready(function () {

    function caseWidth() {
        return $('[data-name="hnm"]').width();
    }

    $(function () {
        $(".c-ui__logo").html("Case width: <b>" + caseWidth() + "</b>px.");
    });

	$(".o-featured__case").hover(function () {
	    var dark = $(this).attr("data-isDark");
	    if (dark == "0") {
	        $(".c-ui__nav-items.js-invert").addClass("invert");
	    }
	    else {
	        $(".c-ui__nav-items.js-invert").removeClass("invert");
	    }
	}, function () {
	    var dark = $(this).attr("data-isDark");
	    if (dark == "0") {
	        $(".c-ui__nav-items.js-invert").addClass("invert");
	    }
	    else {
	        $(".c-ui__nav-items.js-invert").removeClass("invert");
	    }
	});
});

/*($('[data-name="hnm"]').offset().left > $(window).width() - 60 - $('[data-name="hnm"]').width()) && ($('[data-name="hnm"]').offset().left < $(window).width() - 60)
var child = o - featured__background
$('[data-name="hnm"]').children(".o-featured__background").eq(0).width();*/