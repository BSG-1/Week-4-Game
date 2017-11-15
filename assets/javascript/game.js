$(document).ready(function(){

//Global variables
	var numberWins = 0;
	var numberLosses = 0;
	// var total = 0;
	var isClicked = false;
	var userTotal = $('#userTotal')


//Random number generator
 	var randomNumber = Math.floor(Math.random() * 120) + 19;
 	$('#randomNum').html(randomNumber);

//Clicking on and generating random numbers 1<x<12 for each crystal
	/*Problem is I don't know how to make each image the
	SAME value each time you click...*/

	//Crystals
	// $('.gemImage').on("click", function(){
	// 	isClicked = true;
	// 	var randomBlue = Math.floor(Math.random() * 12) + 1;
	// 		$('#userTotal').html(randomBlue + randomGreen + randomRed + randomYellow);
	// 	var randomGreen = Math.floor(Math.random() * 12) + 1;
	// 		$('#userTotal').html(randomBlue + randomGreen + randomRed + randomYellow);
	// 	var randomRed = Math.floor(Math.random() * 12) + 1;
	// 		$('#userTotal').html(randomBlue + randomGreen + randomRed + randomYellow);
	// 	var randomYellow = Math.floor(Math.random() * 12) + 1;
	// 		$('#userTotal').html(randomBlue + randomGreen + randomRed + randomYellow);

	// })

	function randomCrystal(){
		return Math.floor(Math.random()*12) + 1;
	}

	//Crystals
	$('.gemImage').on("click", function(){
		isClicked = true;

	});

	//Blue
	$('#crystalOne').on("click", function(){
  		isClicked = true;
  		var blue = randomCrystal();
	 		$('#userTotal').html(blue);
	});
	 
	//Green
	$('#crystalTwo').on("click", function(){
  		isClicked = true;
  		var green = randomCrystal();
	 		$('#userTotal').html(green);
	});	
	 
	//Red
	$('#crystalThree').on("click", function(){
  		isClicked = true;
	 	var red = randomCrystal();
	 		$('#userTotal').html(red);
	});
	
	//Yellow
	$('#crystalFour').on("click", function(){
  		isClicked = true;
  		var yellow = randomCrystal();
	 		$('#userTotal').html(yellow);
	});

//User Total/Results	
	$(".gemImage").on("click", function(){
	 	switch (userTotal) {
	 		case 'plus':
	 			var total = randomYellow + randomRed + randomGreen + randomBlue;
	 			$('#userTotal').append(total);
	 		break;	
		}
	});

	console.log(userTotal)

//Alerts if Win/Lose
	if (userTotal == randomNumber) {
		console.log(userTotal = randomNumber);
		alert("You win!");
		$('#numberWins').html(numberWins++);

	} else {
		alert("Sorry, you lose.");
		$('#numberLosses').html(numberLosses++);
	}

});

console.log()