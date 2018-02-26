$('.example-1').click(function () {
	$('.stage').append('<div class="player"></div>');
});

$('.example-2').click(function () {
	$('.player:last').remove();
});

$('.example-5').click(function () {
	$(".player:visible:last").fadeOut(2000);
});