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
		var mOffset = 0.1 * window.innerWidth;
		var mOffset_ = 0.1 * document.documentElement.clientWidth;
		var maxRt = window.innerWidth - mOffset;
		var maxLft = window.innerWidth - mOffset - mOffset;
		var maxRt_ = document.documentElement.clientWidth - mOffset_;
		var maxLft_ = document.documentElement.clientWidth - mOffset_ - mOffset_;
		var views = [];
		var cases = $('[data-isDark="1"]');
		for (var i = 0; i < cases.length; i++) {
			var caseBackgrd = cases.eq(i).children(".o-featured__background")[0];
			var rect = caseBackgrd.getBoundingClientRect();
			var leftInVp = (rect.left >= 0 && rect.left <= (maxLft || maxLft_));
			var rightInVp = (rect.right >= 0 && (rect.right <= (maxRt || maxRt_)));
			views.push(leftInVp || rightInVp);
		}

		var cont = $('[data-isdark="true"]')[0];
		var cRect = cont.getBoundingClientRect();
		var cLeftInVp = (cRect.left >= 0 && cRect.left <= (maxLft || maxLft_));
		var cRightInVp = (cRect.right >= 0 && (cRect.right <= (maxRt || maxRt_)));;
		views.push(cLeftInVp || cRightInVp);

		return views;
	}

	$(".o-featured").on('touchmove', function (event) {
		var views = inViewM();
		if (views.indexOf(true) > -1) {
			$(".c-ui__burger.js-invert").addClass("invert");
		}
		else {
			$(".c-ui__burger.js-invert").removeClass("invert");
		}
	});
});