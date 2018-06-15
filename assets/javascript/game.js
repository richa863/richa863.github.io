var abcdef = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var guessesWrong = [];
var userEntry = null
var win = 0;
var loss = 0;
var guessesRemaining = 9;
var letterToGuess = abcdef[Math.floor(Math.random() * abcdef.length)];
console.log("win: " + win + " Losses: " + loss + " GuessesRemaining: " + guessesRemaining + " Guesses: " + guessesWrong + " Computer picked: " + letterToGuess);


document.onkeypress = function(event) {




	var userEntry = String.fromCharCode(event.keyCode).toLowerCase();


	        if (guessesWrong.indexOf(userEntry) < 0 && abcdef.indexOf(userEntry) >= 0) {
		guessesWrong[guessesWrong.length]=userEntry;

        guessesRemaining--;
        console.log("win: " + win + " loss: " + loss + " guessesRemaining: " + guessesRemaining + " Guesses so far: " + guessesWrong + " Computer picked: " + letterToGuess);
	}


	if (letterToGuess == userEntry) {
		win++;
		    alert("You won!");
		guessesRemaining = 9;
		    guessesWrong = [];
		letterToGuess = abcdef[Math.floor(Math.random() * abcdef.length)];
		console.log("win: " + win + " loss: " + loss + " guessesRemaining: " + guessesRemaining + " Guesses so far: " + guessesWrong + " Computer picked: " + letterToGuess);
	}


	        if (guessesRemaining == 0) {
		    loss++;
		    alert("You lost!");
		    guessesRemaining = 9;
		    guessesWrong = [];
		    letterToGuess = abcdef[Math.floor(Math.random() * abcdef.length)];
		    console.log("win: " + win + " loss: " + loss + " guessesRemaining: " + guessesRemaining + " Guesses so far: " + guessesWrong + " Computer picked: " + letterToGuess);
	}

	
	var html = "<p><h1>Spooky Psychic Game</h1></p>" + "<p><h2>Read My Mind: Guess The Letter</h2></p>" + "<p><h2>Wins: " + win + "</h2></p>" + "<p><h2>Losses: " + loss + "</h2></p>" + "<p><h2>Guesses Remaing: " + guessesRemaining + "</h2></p>" + "<p><h2>Letters a non-Psychic Would Say: " + guessesWrong + "</h2></p>";
	document.querySelector("#playarea").innerHTML = html;
}