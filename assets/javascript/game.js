$(document).ready(function(){

//Global variables
	var numberWins = 0;
	var numberLosses = 0;
	var total = 0;
	var isClicked = false;
	var userTotal = $('#userTotal')


//Random number generator
 	var randomNumber = Math.floor(Math.random() * 120) + 19;
 	$('#randomNum').html(randomNumber);

//Clicking on and generating random numbers 1<x<12 for each crystal
	/*Problem is I don't know how to make each image the
	SAME value each time you click...*/

	//Blue
	$('#crystalOne').on("click", function(){
 		isClicked = true;
		var randomBlue = Math.floor(Math.random() * 12) + 1;
			$('#userTotal').html(randomBlue);
	})
	//Green
	$('#crystalTwo').on("click", function(){
 		isClicked = true;
		var randomGreen = Math.floor(Math.random() * 12) + 1;
			$('#userTotal').html(randomGreen);
	})	
	//Red
	$('#crystalThree').on("click", function(){
 		isClicked = true;
		var randomRed = Math.floor(Math.random() * 12) + 1;
			$('#userTotal').html(randomRed);
	})
	//Yellow
	$('#crystalFour').on("click", function(){
 		isClicked = true;
		var randomYellow = Math.floor(Math.random() * 12) + 1;
			$('#userTotal').html(randomYellow);
	})

//User Total/Results
	// switch (userTotal) {
	// 	case ''
	// }
	for (var i = 0; i < Things.length; i++) {
		Things[i]
	}
	switch (userTotal) {
		case '':
			total = randomYellow + randomRed + randomGreen + randomBlue;
			$('#userTotal').append(total);
		break;
	}

	if (userTotal == randomNumber) {
		alert("You win!");
		$('#numberWins').html(numberWins++);
	} else {
		alert("Sorry, you lose.");
		$('#numberLosses').html(numberLosses++);
	}
	

})

console.log()