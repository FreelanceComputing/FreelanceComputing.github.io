$(document).ready(function () {

	function inView() {
		var views = [];
        var desktopOffset = 60;
		var cases = $('[data-isDark="0"]');
		for (var i = 0; i < cases.length; i++)
		{
			var caseBackgrd = cases.eq(i).children(".o-featured__background").eq(0);
			var caseWidth = caseBackgrd.width();
			var caseLeftEdgePos = caseBackgrd.offset().left;
			var maxPos = $(window).width() - desktopOffset;
			var minPos = maxPos - caseWidth;
			views.push((caseLeftEdgePos >= minPos) && (caseLeftEdgePos <= maxPos));
		}
		return views;
    }

	/*function invertir() {
		var le = inView().length;
        if (inView()) {
            $(".c-ui__logo").html("Aye");
        }
        else {
            $(".c-ui__logo").html("Nay");
        }
    }

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
		});*/

	$(window).on('wheel', function (event) {
		var views = inView();
		if (views.indexOf(true) > -1) {
			$(".c-ui__logo").html("Aye");
		}
		else {
			$(".c-ui__logo").html("Nay");
		}
	});
});