var ini = 0;
$(document).on('ready', function(){
	$('.left').on('click',function(e)
	{
		e.preventDefault();
		moveSlider('left')
	});
	$('.right').on('click',function(e){
		e.preventDefault();
		moveSlider('right')
	});
	funcionSize();
});
$(window).on('resize',funcionSize);
function funcionSize()
{
	$('.container .slider').each(function(i, stl){
	    $(stl).css({
	 	'background-image': "url("+$(stl).data("background")+")",
	 	'height': ($('.container').width()* 0.45)+'px',
	 	'width': ($('.container').width())+'px',
	 	});
	 });
	 $('.container .sliderContainer').css({
		'margin-left': -(ini * $('.container').width())+'px'
	});	
}

function moveSlider(direccion)
{
	var limite = $('.container .slider').length;
	ini = (direccion == 'right') ? ini + 1 : ini -1;
	ini = (ini >= limite ) ? 0 : ini;
	ini = (ini < 0) ? limite - 1 : ini;

	$('.container .sliderContainer').animate({
		'margin-left': -(ini * $('.container').width())+'px'
	});

}
