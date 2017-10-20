# SimpleEmbedVideo

## Description : 

Cette extension permet d'afficher une vidéo en ligne en ne donnant que son service et son URL dans un formulaire de PageForm. L'utilisateur doit choisir à l'aide de boutons un service puis le champ de l'URL apparaît. 

## Installation 

Tout d'abord l'extension SimpleEmbedVideo ne peut fonctionner si PageForm et EmbedVideo ne sont pas installées. 

Télécharger et extraire l'extension. La placer dans le dossier "extension" de votre projet, et le dossier de l'extension en elle-même doit aussi se nommer : SimpleEmbedVideo.

Une fois l'extension chargée, à la fin du fichier LocalSettings.php entrez la ligne suivante : 

	wfLoadExtension( 'SimpleEmbedVideo' );

## Utilisation

### Créer les propriétés Semantic 

First, you need to create the following Semantic Properties:
* TutoVideoService (Text)
* TutoVideoURL (Text)

### Créer le modèle Semantic
Veuillez écrire ce code dans le modèle correspondant :


	<div class="allSizeScreenButton">
	<span class="resizeButton smallButton"> </span>
	<span class="resizeButton mediumButton"></span>
	<span class="resizeButton largeButton"></span>
	</div>
	<div class="videoContainer">
	{{#ev:{{{service|}}} | {{{URL|}}} }}
	</div>
	
Celui-ci permet d'afficher la vidéo et de créer trois boutons permettant de redimensionner la taille de la vidéo. 

### Créer le formulaire Semantic

Dans votre formulaire de PageForm où vous désirez afficher une vidéo à partir d'un lien et d'un service, écrivez le code suivant : 

	<div class="multipleTemplateHideButton">
	{{{for template|TutoVideo|multiple|minimum=0|maximum instances=1|add button text=+ Ajouter une vidéo}}}
	{{#formLinkVideo:{{{field|service|dropdown|class=embedVideoDropdown}}} | {{{field|URL|class=embedVideoUrlInput}}}}} 
	{{{end template}}}
	</div>
	
Ce bout de code ne permet que d'afficher le formulaire où l'utilisateur choisit le service et entre le lien. 

