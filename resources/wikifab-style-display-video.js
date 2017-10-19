(function() {
	
	$(document).ready(function() {
		// Give to the iframe an id to allow to change the size 
		$(function(){
			$('iframe').attr('id','tutoVideoFrame');
		});
		$('.smallSize').click(function(){
			$('#tutoVideoFrame').attr("width","500px");
		});
		$('.mediumSize').click(function(){
			$('#tutoVideoFrame').attr("width","760px");
		});
		$('.largeSize').click(function(){
			$('#tutoVideoFrame').attr("width","960px");
		});
	});
		
})();

				