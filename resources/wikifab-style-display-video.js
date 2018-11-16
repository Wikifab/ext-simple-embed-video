(function() {
	
	$(document).ready(function() {
		
		$('.mediumButton').addClass('active');
		$('.videoContainer').addClass("mediumSize");
		
		$('.smallButton').click(function(){
			
			var container = $(this).parents().siblings().children();
			container.addClass("smallSize");
			container.removeClass('mediumSize');
			container.removeClass('largeSize');
			
			$(this).addClass('active');
			$(this).siblings('.mediumButton').removeClass('active');
			$(this).siblings('.largeButton').removeClass('active');

		});
		
		$('.mediumButton').click(function(){
			
			var container = $(this).parents().siblings().children();
			container.addClass("mediumSize");
			container.removeClass('smallSize');
			container.removeClass('largeSize');
			
			$(this).addClass('active');
			$(this).siblings('.largeButton').removeClass('active');
			$(this).siblings('.smallButton').removeClass('active');

		});
		
		$('.largeButton').click(function(){
			
			var container = $(this).parents().siblings().children();
			container.addClass("largeSize");
			container.removeClass('smallSize');
			container.removeClass('mediumSize');
			
			$(this).addClass('active');
			$(this).siblings('.mediumButton').removeClass('active');
			$(this).siblings('.smallButton').removeClass('active');
		});
	});
		
})();

				