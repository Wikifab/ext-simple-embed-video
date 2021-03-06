
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

		var instanceMax = $('.multipleTemplateHideButton .multipleTemplateList').attr('maximuminstances');
			
		var nbInstance = $('.multipleTemplateHideButton .multipleTemplateList .multipleTemplateInstance').length;

		if (nbInstance >= instanceMax){
			$('.multipleTemplateHideButton .multipleTemplateAdder').hide();
		}

		$('.multipleTemplateHideButton .removeButton').click(function(){
				$('.multipleTemplateHideButton .multipleTemplateAdder').show();
			});

		function addNewVideoForm (div) {

			var instanceMax = $('.multipleTemplateHideButton .multipleTemplateList').attr('maximuminstances');
			
			var nbInstance = $('.multipleTemplateHideButton .multipleTemplateList .multipleTemplateInstance').length;

			if (nbInstance >= instanceMax){
				$('.multipleTemplateHideButton .multipleTemplateAdder').hide();
			}

			$('.multipleTemplateHideButton .removeButton').click(function(){
				$('.multipleTemplateHideButton .multipleTemplateAdder').show();
			});

			if ($(div).find('.embedVideoUrlInput').val() != ''){
				var serviceNameSelected = $(div).find('.embedVideoDropdown').val();
//				$(div).parents('.multipleTemplateHideButton').find('.multipleTemplateAdder').hide();
				$(div).find('.embedVideoUrlInput').show();
				$(div).find(".embedVideoLogos[data-servicename='" + serviceNameSelected + "']").addClass('active');
			}
			else {
				$(div).find('.embedVideoUrlInput').hide();
			}
			// Quand on clique sur l'un des logos, la valeur du dropdown est modifiée
			$(div).find('.embedVideoLogos').click(function(){
				$(div).find('.embedVideoLogos').removeClass('active');
				$(this).addClass('active');
				$(div).find('.embedVideoDropdown').val($(this).attr("data-serviceName")).trigger('change');
				$(div).find('.embedVideoUrlInput').show();
				$(div).find('.embedVideoUrlInput').attr("placeholder", $(this).attr("data-placeholder"));
				//Lorsque l'on change de service la valeur du champ est remise à 0
				$(div).find('.embedVideoUrlInput').val('');
			});

		}



		// Hook qui permet d'appeler le JS au moment où les div sont ajoutées au HTML
		mw.hook( 'pf.addTemplateInstance' ).add( function(div) {

			if ( $(div).parents('.multipleTemplateHideButton').length > 0 ) {
				addNewVideoForm($(div).find('.formLinkVideo'));
			}

		});

		$('.formLinkVideo').each(function (){
				addNewVideoForm(this);
		});

	});

})();