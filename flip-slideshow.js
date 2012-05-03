(function($){
    $.fn.jMask = function(options,sliderImages){
        var defaults={time:7000, width:900, height:400, bg:'#ffffff',border:'1px solid #ffffff',callback:function(){  } };
        var options=$.extend(defaults, options);
        
        var root=$(this); 
        root.html("<ul id=\'slideShow\'></ul>");
        var ul=root.find("ul:first");
        setImages(sliderImages);
        
        
        
        function setImages(jsonArray){
        	for (i=0; i<jsonArray.length; i++) {
        		var image = JSON.parse(jsonArray[i]);
				ul.html(ul.html()+"<li id="+"slide-"+i+"><img class=\"slides\" src="+image.url+ "></img></li>")        		
        	}
        }
        root.slides.css()
        return root;
    }
    
    
})(jQuery);

