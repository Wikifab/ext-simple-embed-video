# SimpleEmbedVideo

## Description : 
This extension allow you to display a video with just its link and service (as Youtube, Vimeo and Dailymotion).
The user has to choose with some buttons a service and then the link's field appears.
 

## Installation 

Firstly this extension requires PageForm and EmbedVideo, two Mediawiki's extensions. 

Download and extract the extension in the "extension" repository of your project. Your extension repository name has to be : SimpleEmbedVideo. 

Once it's done,find the file LocalSettings.php and write at the end :

	wfLoadExtension( 'SimpleEmbedVideo' );

## Use

### Create the Semantic Properties

First, you need to create the following Semantic Properties:
* TutoVideoService (Text)
* TutoVideoURL (Text)

### Create the Semantic Template

Then, you need to create a Semantic template (called "TutoVideo") with the following code: 

	{{#ev:{{{TutoVideoService|}}} | {{{TutoVideoURL|}}} }}

This code will display the video.

For more information, refer to the MediaWiki PageForm extension.

### Create the Semantic Form

On your MediaWiki page, where you want display a video from its link, enter this code :

	<div class="multipleTemplateHideButton">
	{{{for template|TutoVideo|multiple|minimum=0|maximum instances=1|add button text=+ Ajouter une vidéo}}}
	{{#formLinkVideo:{{{field|service|dropdown|class=embedVideoDropdown}}} | {{{field|URL|class=embedVideoUrlInput}}}}} 
	{{{end template}}}
	</div>
	 

	
