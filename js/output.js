$(document).ready(function () {

	function inView() {
		var desktopOffset = 60;
		var views = [];
		var cases = $('[data-isDark="0"]');
		for (var i = 0; i < cases.length; i++)
		{
			var caseBackgrd = cases.eq(i).children(".o-featured__background").eq(0);
			var caseWidth = caseBackgrd.width();
			var caseRightEdgePos = caseBackgrd.offset().left + caseWidth;
			var maxPos = $(window).width() - desktopOffset;
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

	function inViewM() {
		var views = [];
		var cases = $('[data-isDark="0"]');
		for (var i = 0; i < cases.length; i++) {
			var caseBackgrd = cases.eq(i).children(".o-featured__background").eq(0);
			var rect = caseBackgrd.getBoundingClientRect();
			var inVp = (rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
			views.push(inVp);
		}
		return views;

		//var rect = el.getBoundingClientRect();

		//return (
		//	rect.top >= 0 &&
		//	rect.left >= 0 &&
		//	rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
		//	rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
		//);

		//return (rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
	}

	$(".o-featured").on('touchmove', function (event) {
		var views = inViewM();
		if (views.indexOf(true) < 0) {
			$(".c-ui__burger.js-invert").addClass("invert");
		}
		else {
			$(".c-ui__burger.js-invert").removeClass("invert");
		}
	});
});