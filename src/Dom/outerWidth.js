define(['$//$', './../Dom', '$//gist/html/pixelizeMargin'], function($, Dom, pixelizeMargin) {
	Dom.extend({
		outerWidth: function() {
			return $(this[0]).width()+pixelizeMargin(this[0],'left')+pixelizeMargin(this[0],'right');
		}
	});
});