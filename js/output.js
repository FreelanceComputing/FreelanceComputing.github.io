$(document).ready(function () {

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

$(function caseLeft() {
    return $('[data-name="hnm"]').offset().left - $(window).scrollLeft();
});

$(function caseWidth() {
    return $('[data-name="hnm"]').width();
});

$(window).scroll(function () { //when window is scrolled
    $(".c-ui__logo").html("left index: <b>" + caseLeft() + "</b>px, case width: <b>" + caseWidth() + "</b>px.");
});