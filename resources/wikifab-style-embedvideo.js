(function() {
	// Déclarations des variables
	var videoForm;
	var ValeurCochee;
	var dropdown;
	
	$(document).ready(function() {

		videoForm = $('.embedVideoLogos'); // Variable qui contient les logos
		dropdown = $('.embedVideoDropdown'); // Variable de la dropdown cachée
		
				
		$('.embedVideoUrlInput').hide();
		dropdown.hide();
		
		$('.multipleTemplateHideButton .multipleTemplateAdder').click(function(){
			$(this).hide();
		});
		
		
		function addNewVideoForm () {
			$('.multipleTemplateHideButton .removeButton').click(function(){
				$('.multipleTemplateHideButton .multipleTemplateAdder').show();			
			});
			
			if ($('.embedVideoUrlInput').val() != ''){
				$('.multipleTemplateHideButton .multipleTemplateAdder').hide();	
				$('.embedVideoUrlInput').show();
			}
			else { 
				$('.embedVideoUrlInput').hide();
			}
								
				
			// Quand on clique sur l'un des logos, la valeur du dropdown est modifiée   
			$('.embedVideoYoutube').click(function(){ 
				$(this).addClass('active');
				$('.embedVideoVimeo').removeClass('active');
				$('.embedVideoDailymotion').removeClass('active');
				$('.embedVideoDropdown').val('youtube').trigger('change');
				//On fait apparître le champ lien avec le placeholder et sa valeur 
				$('.embedVideoUrlInput').show();
				$('.embedVideoUrlInput').attr("placeholder", "Entrez le lien Youtube");
				//Lorsque l'on change de service la valeur du champ est remise à 0
				$('.embedVideoUrlInput').val(''); 
			})
			
			$('.embedVideoVimeo').click(function(){
				$(this).addClass('active');
				$('.embedVideoYoutube').removeClass('active');
				$('.embedVideoDailymotion').removeClass('active');
				$('.embedVideoDropdown').val('vimeo').trigger('change');
				$('.embedVideoUrlInput').show();//
				$('.embedVideoUrlInput').attr("placeholder", "Entrez le lien Vimeo");
				$('.embedVideoUrlInput').val('');
			})
			$('.embedVideoDailymotion').click(function(){
				$(this).addClass('active');
				$('.embedVideoYoutube').removeClass('active');
				$('.embedVideoVimeo').removeClass('active');
				$('.embedVideoDropdown').val('dailymotion').trigger('change');
				$('.embedVideoUrlInput').show();
				$('.embedVideoUrlInput').attr("placeholder", "Entrez le lien Dailymotion");
				$('.embedVideoUrlInput').val('');
			})
				
		}
		
		
		// Hook qui permet d'appeler le HTML au début de façon à ce que les div existent 
		mw.hook( 'pf.addTemplateInstance' ).add( function(div) {
			
			addNewVideoForm();
			
		});
		
		addNewVideoForm();

	});
		
})();
