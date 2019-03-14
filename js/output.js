$(document).ready(function () {

    function inView() {
        var desktopOffset = 60;
        var caseBackgrd = $('[data-name="hnm"]').children(".o-featured__background").eq(0);
        var caseWidth = caseBackgrd.width();
        var caseLeftEdgePos = caseBackgrd.offset().left;
        var maxPos = $(window).width() - desktopOffset;
        var minPos = maxPos - caseWidth;
        var inView = ((caseLeftEdgePos >= minPos) && (caseLeftEdgePos <= maxPos));
        return inView;
    }

    function invertir() {
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
		});

	$(window).on('wheel', function (event) {
		invertir();
	});
});