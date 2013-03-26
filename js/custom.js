jQuery(document).ready(function(){ 
	jQuery.noConflict();
	
	jQuery('ul.slides').cycle({
		fx:	'scrollHorz',
		next: '#next-slide',
		prev: '#previous-slide',
		pause: 1
		});

});