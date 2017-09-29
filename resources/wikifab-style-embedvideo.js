(function() {
	// Déclarations des variables
	var link;
	var videoForm;
	var ValeurCochee;

	$(document).ready(function() {

		link = $("#embedVideoFieldLink"); // Variable champ lien
		videoForm = $(".embedVideoLogos"); // Variable qui contient les logos
		
		// Bouton qui permet d'afficher les logos des services 
		$("#showVideoFormBtn").click(function() {
			videoForm.show();
		});
		
		// Quand on clique sur l'un des logos, la valeur du dropdown est modifiée
		$('#embedVideoLogoYoutube').click(function(){ 
		    $('.embedVideoDropdown').val('youtube').trigger('change');
		})
		
		$('#embedVideoLogoVimeo').click(function(){ 
			console.log('vimeo');
		    console.log(" val " + $('.embedVideoDropdown').val());
		    $('.embedVideoDropdown').val('vimeo').trigger('change');
		})
		
		$('#embedVideoLogoDailymotion').click(function(){ 
		    $('.embedVideoDropdown').val('dailymotion').trigger('change');
		})

		// Lorsque la valeur de la dropdown est modifiée alors on affiche un placeholder différent. 
		$(".embedVideoDropdown").change(function() {
			ValeurCochee = $(".embedVideoDropdown").val();
			
			if (ValeurCochee == 'youtube') {
				link.show();
				$(".embedVideoUrlInput").attr("placeholder", "Entrez le lien Youtube");
			}

			else if (ValeurCochee == 'vimeo') {
				link.show();
				$(".embedVideoUrlInput").attr("placeholder", "Entrez le lien Vimeo");			}
			
			else if (ValeurCochee == 'dailymotion') {
				link.show();
				$(".embedVideoUrlInput").attr("placeholder", "Entrez le lien Dailymotion");			}

			else {
				alert("Aucun service n'est sélectionné");
				link.css("display", "none");

			}
		});
		
		//Bouton retour qui permet de désafficher les logos et le champ url
		$("#returnVideoFormBtn").click(function() {
			videoForm.hide();
			link.hide(); 
		});
	});

})();
