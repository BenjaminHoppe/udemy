// create secretNumber

var secretNumber = 4

// ask uer for guess

var guess = Number(prompt("Guess a number"));


// check if guess is right

if(guess === secretNumber) {
  alert("you got it right!")
}

// otherwise, you got it wrong
else if (guess > secretNumber){
  alert("too high, guess again");
}

else {
  alert('too low, guess again');
}
