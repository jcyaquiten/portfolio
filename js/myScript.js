$(document).ready(function() {
	//force page scroll position to top at page refresh
	$(this).scrollTop(0);

	var scrollLink = $('.scroll');
	//smooth scrolling
	scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});

	//active link switching
	$(window).scroll(function() {
		var scrollbarLocation = $(this).scrollTop() + 20;
		// console.log(scrollbarLocation);
		scrollLink.each(function() {
			var sectionOffset = $(this.hash).offset().top;
			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});
})