/*
//Create am array of words
		var words = [
		"supercalifragilisticexpialidocious",
		"fabulous",
		"facetious",
		"brownies"
		];
		
		//Pick a random word
		var word = words[Math.floor(Math.random()* words.length)];
		
		//Set up the answer array
		var answerArray = [];
		for (var i=0; i < word.length; i++) {
		   answerArray[i]="_";
		}
		
		var remainingLetters = word.length;
		
		//The game loop
		while (remainingLetters > 0) {
		// Show the player their progress
		alert(answerArray.join(" "));
		document.write(answerArray.join(" "));
		document.write("<br>");
		
		// Get a guess from the player
		var guess = prompt("Guess a letter, or click Cancel to stop playing.");
		if (guess === null) {
		//Exit the game loop
		break;
		} else if (guess.length !== 1) {
		alert("Please enter a single letter.");
		} else {
		//Update the game state with the guess
		for (var j=0; j < word.length; j++) {
			if(word[j] === guess) {
		answerArray[j] = guess;
		remainingLetters -- ;
			   }
		}
	}
	// The end of the game loop
	}
	
	//Show the answer and congratulate the player
	alert(answerArray.join(" "));
	document.write(answerArray.join(" "));
	document.write("<br>");
	alert("Good job! The answer was " + word);
	document.write("<h2>"+"Good job! The answer was " + word+"</h2>");
*/
//OLD CODE ENDS HERE


//NEW CODE GOES HERE

//Write your functions here
var pickWord = function () {
	//Create am array of words
	var words = [
		"supercalifragilisticexpialidocious",
		"fabulous",
		"facetious",
		"brownies"
		];
		
		//Pick a random word
		var word = words[Math.floor(Math.random()* words.length)];
		
		return word;
};

var setupAnswerArray = function (word) {
		//Set up the answer array
		var answerArray = [];
		for (var i=0; i < word.length; i++) {
		   answerArray[i]="_";
		}
		
		return answerArray;
};

var showPlayerProgress = function (answerArray) {
		
		// Show the player their progress
		alert(answerArray.join(" "));
		document.write(answerArray.join(" "));
		document.write("<br>");
		
};

var getGuess = function () {
			// Get a guess from the player
		var guess = prompt("Guess a letter, or click Cancel to stop playing.");
		
		return guess;
};

var updateGameState = function (guess, word, answerArray) {
			//Update answerArray and return a number showing how many
			//times the guess appears in the word so remainingLetters
			//can be updated
		var correctGuesses = 0
		for (var j=0; j < word.length; j++) {
			if(word[j] === guess) {
		answerArray[j] = guess;
		correctGuesses++ ;
			   }
		}
		return correctGuesses
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
		//Show the answer and congratulate the player
	alert(answerArray.join(" "));
	document.write(answerArray.join(" "));
	document.write("<br>");
	alert("Good job! The answer was " + word);
	document.write("<h2>"+"Good job! The answer was " + word+"</h2>");
};

//Functions ends here


//Main code starts here
//Page 139 code
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;


while (remainingLetters > 0) {
	showPlayerProgress(answerArray);
	var guess = getGuess();
	if(guess === null) {
		break;
	} else if (guess.length !== 1) {
	  alert("Please enter a single letter.");
	} else {
	  var correctGuesses = updateGameState(guess, word, answerArray);
	  remainingLetters -= correctGuesses;
	}
}

showAnswerAndCongratulatePlayer(answerArray);
