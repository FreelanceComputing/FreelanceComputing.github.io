$(document).ready(function () {

	function inView() {
		var views = [];
		var cases = $('[data-isDark="0"]');
		for (var i = 0; i < cases.length; i++)
		{
			var caseBackgrd = cases.eq(i).children(".o-featured__background").eq(0);
			var caseWidth = caseBackgrd.width();
			var caseRightEdgePos = caseBackgrd.offset().left + caseWidth;
			var maxPos = $(window).width();
			var minPos = maxPos - caseWidth;
			views.push((caseRightEdgePos >= minPos) && (caseRightEdgePos <= maxPos));
		}
		return views;
    }

	$(window).on('wheel', function (event) {
		var views = inView();
		if (views.indexOf(true) > -1) {
			$(".c-ui__nav-items.js-invert").addClass("invert");
		}
		else {
			$(".c-ui__nav-items.js-invert").removeClass("invert");
		}
	});
});