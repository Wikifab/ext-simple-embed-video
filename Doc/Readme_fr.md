# SimpleEmbedVideo

## Description : 

Cette extension permet d'afficher une vidéo en ligne en ne donnant que son service et son URL dans un formulaire de PageForm. L'utilisateur doit choisir à l'aide de boutons un service puis le champ de l'URL apparaît. 

## Installation 

Tout d'abord l'extension SimpleEmbedVideo ne peut fonctionner si PageForm et EmbedVideo ne sont pas installées. 

Télécharger et extraire l'extension. La placer dans le dossier "extension" de votre projet, et le dossier de l'extension en elle-même doit aussi se nommer : SimpleEmbedVideo.

Une fois l'extension chargée, à la fin du fichier LocalSettings.php entrez la ligne suivante : 

	wfLoadExtension( 'SimpleEmbedVideo' );

## Utilisation

Dans votre formulaire de PageForm où vous désirez afficher une vidéo à partir d'un lien et d'un service, écrivez le code suivant : 

	{{#formLinkVideo:{{{field|service|dropdown|class=embedVideoDropdown}}} | {{{field|url|class=embedVideoUrlInput}}}}} 

Ce bout de code ne permet que d'afficher le formulaire où l'utilisateur choisit le service et entre le lien. 

Ensuite veuillez écrire ce code dans le modèle correspondant :

	{{#ev:{{{service|}}} | {{{url|}}} }}
