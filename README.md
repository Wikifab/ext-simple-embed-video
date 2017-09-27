# SimpleEmbedVideo

## Description : 
This extension allow you to display a video with just its link and service (as Youtube, Vimeo and Dailymotion).
The user has to choose with some buttons a service and then the link's field appears.
 

##Installation 

Firstly this extension requires PageForm, an other Mediawiki's extension. 

Download and extract the extension in the "extension" repository of your project. Your extension repository name has to be : SimpleEmbedVideo. 

Once it's done,find the file LocalSettings.php and write at the end :

	wfLoadExtension( 'SimpleEmbedVideo' );

##Use

On your MediaWiki page, where you want display a video from its link, enter this code :

	{{#formLinkVideo:{{{field|service|dropdown|class=embedVideoDropdown}}} | {{{field|URL|class=embedVideoUrlInput}}}}} 

This code will display just the form where users choose service and put links.
Then you enter this one : 

	