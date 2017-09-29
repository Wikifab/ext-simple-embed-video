<?php
class SimpleEmbedVideo {
   // Register any render callbacks with the parser
   public static function onParserSetup( &$parser ) {

      // Create a function hook associating the "example" magic word with renderExample()
      $parser->setFunctionHook( 'formLinkVideo', 'SimpleEmbedVideo::renderFormLinkVideo' );
   }

	// 
	public static function renderFormLinkVideo( $parser, $param1 = '', $param2 = '') {

      $out ='<span id="returnVideoFormBtn"> Retour </span>';
      $out .= '<span id="showVideoFormBtn">Bouton</span>';
      $out .= '<span id ="embedVideoLogoYoutube" class="embedVideoLogos" > Youyou </span>';
      $out .= '<span id="embedVideoLogoVimeo" class="embedVideoLogos"> Vivi </span>';
      $out .= '<span id="embedVideoLogoDailymotion" class="embedVideoLogos"> Dada </span>';
      
      $out .= '<div id="embedVideoForm">';
      $out .= $param1;
      $out .= '</div>';
      
      $out .= '<div id="embedVideoFieldLink">';
      $out .= $param2;
      $out .= '</div>';
      
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
