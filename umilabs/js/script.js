let scrollToAnket = document.getElementById('anketScroll');
let anket = document.getElementById('anket');
scrollToAnket.addEventListener('click', function(){
		slowScroll(anket)
	}
);
		
		
function slowScroll (id){
	var offset = 0;
	$('html, body').animate({
		scrollTop: $(id).offset ().top - offset
	}, 1000);
	return false;
}

jQuery(function($){
	$("#phone").mask("+7 (999) 999-9999");
				
});