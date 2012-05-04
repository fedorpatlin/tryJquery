(function($) {

	var OPTIONS, DEFAULTS = null;
	var LIST_ARRAY = new Array();

	var methods = {
		init : function(options) {
			root = $(this);
			initdefaults();
			OPTIONS = $.extend(DEFAULTS, options);
			root.html("<ul id=\'slideShow\'></ul>");
			var ul = root.find("ul:first");
			setImages(ul, options.sliderImages);
			root.find("li:first").addClass('top');
			root.find("li:last").addClass('rest');
		}
	}

	function initdefaults() {
		DEFAULTS = {
			time : 7000,
			width : 900,
			height : 400,
			bg : '#ffffff',
			border : '1px solid #ffffff',
			callback : function() {
			}
		};
	}

	function setImages(element, jsonArray) {
		for( i = 0; i < jsonArray.length; i++) {
			var image = jsonArray[i];
			//ul.html(ul.html()+"<li id="+"slide-"+i+"><img class=\"slides\" src="+image.url+ "></img></li>")
			element.append("<li id=" + "slide-" + i + "><img class=\"slides\" src=" + image.url + "></img></li>");
			element.find("img:last").height(OPTIONS.height).width(OPTIONS.width);
			LIST_ARRAY[i]=element.find("li:last");
		}
	}


	$.fn.squaresMask = function(method) {
		if(methods[method]) {
			methods[method].apply(Array.prototype.slice.call(arguments, 1))
		} else if( typeof method === 'object' || !method) {
			methods['init'].apply(this, arguments)
		} else {
			console.log('method ' + method + 'does not exists in squaresMask')
		}
	}
})(jQuery);

