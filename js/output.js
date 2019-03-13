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
});