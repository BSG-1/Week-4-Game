$(document).ready(function(){

	//Global variables
	var randomNumber = 0;
	var numberWins = 0;
	var numberLosses = 0;
	var isClicked = false;
	var userTotal = $('#userTotal');

//Random number generator
	/*what goes here to have the number generate 
	on page load?*/
	$('.gemImage').on('click', function(){ 

		var randomNumber = Math.floor(Math.random() * 120) + 19;
		$('#randomNum').html(randomNumber);
	})
	console.log();
//Crystals
	$('.gemImage').on("click", function(){
		isClicked = true;
		userTotal = $(this).attr('');
		var value = $(this).text();
		$('#').append()
	})

})