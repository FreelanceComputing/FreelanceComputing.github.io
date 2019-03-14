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

    $(function () {
        if (inView()) {
            $(".c-ui__logo").html("Aye");
        }
        else {
            $(".c-ui__logo").html("Nay");
        }
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

	$('body').on('mousewheel DOMMouseScroll', function (e) {
		if (typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
			if (e.originalEvent.detail > 0) {
				console.log('Down');
			} else if (e.originalEvent.detail < 0) {
				console.log('Up');
			}
		} else if (typeof e.originalEvent.wheelDelta == 'number') {
			if (e.originalEvent.wheelDelta < 0) {
				console.log('Down');
			} else if (e.originalEvent.wheelDelta > 0) {
				console.log('Up');
			}
		}
	});
});


/*($('[data-name="hnm"]').offset().left > $(window).width() - 60 - $('[data-name="hnm"]').width()) && ($('[data-name="hnm"]').offset().left < $(window).width() - 60)
var child = o - featured__background
$('[data-name="hnm"]').children(".o-featured__background").eq(0).width();*/