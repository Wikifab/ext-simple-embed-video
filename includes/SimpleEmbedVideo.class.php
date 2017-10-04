<?php
class SimpleEmbedVideo {
   // Register any render callbacks with the parser
   public static function onParserSetup( &$parser ) {

      // Create a function hook associating the "example" magic word with renderExample()
      $parser->setFunctionHook( 'formLinkVideo', 'SimpleEmbedVideo::renderFormLinkVideo' );
   }

	// 
	public static function renderFormLinkVideo( $parser, $param1 = '', $param2 = '') {

	  $out = '<div class="formLinkVideo">'."\n";
	  $out .= '  <span class="embedVideoLogos embedVideoYoutube" data-servicename="youtube" data-placeholder="Entrez une vidéo Youtube" > Youtube </span>';
	  $out .= '  <span class="embedVideoLogos embedVideoVimeo" data-servicename="vimeo" data-placeholder="Entrez une vidéo Vimeo" > Vimeo </span>';
      $out .= '  <span class="embedVideoLogos embedVideoDailymotion" data-servicename="dailymotion" data-placeholder="Entrez une vidéo Daylimotion"> Daylimotion </span>';
      
      $out .= '  <div class="embedVideoForm">'."\n";
      $out .= $param1;
      $out .= '  </div>'."\n";
      
      $out .= '  <div class="embedVideoFieldLink">'."\n";
      $out .= $param2;
      $out .= '  </div>'."\n";
      
      $out .='</div>'."\n";
      
      return array( $out, 'noparse' => true, 'isHTML' => true );
   }
   
   public static function renderSimpleEmbedVideo () {
   	
   }
   
   public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
       $out->addModules('ext.simpleembedvideo.js');
       $out->addModuleStyles('ext.simpleembedvideo.css');
       
   }
}
?>

