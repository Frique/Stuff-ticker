/*
 * Title: Stuff-ticker jQuery plugin
 * Author: Berend de Jong, Frique
 * Author URI: http://www.frique.me/
 * Version: 0.1 (20120729.1)
 */

;(function($, window, document, undefined){

	var defaults = {
		seperator: '-'
	};

	$.fn.stuffticker = function(options){
		$.each(this, function(){

			var o = $.extend(defaults, options),
				$source = $(this).hide(),
				container_classes = $source.attr('class'),
				container_id = $source.attr('id');
			$source.removeAttr('id');

			var $container = $('<div>Its not quite functional yet.</div>').attr('id', container_id).attr('class', container_classes)
				.insertAfter($source);

			//

		});
		return this;
	};
})(jQuery);