$(document).ready(function () {
	$(".o-featured__case").hover(function () {
		var dark = $(this).attr("data-isDark");
		if (dark == "0")
		{
			$(".c-ui__nav-items.js-invert").addClass("invert");
		}
		else
		{
			$(".c-ui__nav-items.js-invert").removeClass("invert");
		}
	}, function () {
		var dark = $(this).attr("data-isDark");
		if (dark == "0") {
			$(".c-ui__nav-items.js-invert").addClass("invert");
		}
		else
		{
			$(".c-ui__nav-items.js-invert").removeClass("invert");
		}
	});

	$(function () {
	    var element = $(".o-featured__case");
	    if (element.attr("data-name") == "hnm") {
	        var caseOffset = element.offset();
	        var caseLeft = caseOffset.left - $(window).scrollLeft();
	        var caseWidth = element.width();
	        $(window).scroll(function () { //when window is scrolled
	            $(".c-ui__logo").html("left index: <b>" + caseLeft + "</b>px, case width: <b>" + caseWidth + "</b>px.");
	        });
	    }
	});
});