$(document).ready(function() {
	console.log('i am ready!');

	$('.box').on('click', function() {
    	$(this).toggleClass('spin');
  });

  $('.box').on('mouseenter', function() {
    	$(this).addClass('square');
  });




});