(function() {
	
	$(document).ready(function() {
		
		$('.mediumButton').addClass('active');
		
		$('.smallButton').click(function(){
			
			$('.videoContainer').addClass("smallSize");
			$('.videoContainer').removeClass('mediumSize');
			$('.videoContainer').removeClass('largeSize');
			
			$('.smallButton').addClass('active');
			$('.mediumButton').removeClass('active');
			$('.largeButton').removeClass('active');

		});
		
		$('.mediumButton').click(function(){
			
			$('.videoContainer').addClass("mediumSize");
			$('.videoContainer').removeClass('smallSize');
			$('.videoContainer').removeClass('largeSize');
			
			$('.mediumButton').addClass('active');
			$('.largeButton').removeClass('active');
			$('.smallButton').removeClass('active');

		});
		
		$('.largeButton').click(function(){
			
			$('.videoContainer').addClass("largeSize");
			$('.videoContainer').removeClass('smallSize');
			$('.videoContainer').removeClass('mediumSize');
			
			$('.largeButton').addClass('active');
			$('.mediumButton').removeClass('active');
			$('.smallButton').removeClass('active');
		});
	});
		
})();

				