let target;

// Declaration of all the important variables
const targetNumberDisplay = document.getElementById('target-number');
const computerScoreDisplay = document.getElementById('computer-score');
const computerGuessDisplay = document.getElementById('computer-guessing');
const userScoreDisplay = document.getElementById('user-score');
const userGuessInput = document.getElementById('user-guess');
const roundNumberDisplay = document.getElementById('round');
const computerWinsDisplay = document.getElementById('computer-wins');


// Declaration of the +/- button
const numberDecrease = document.getElementById('number-decrease');
const numberIncrease = document.getElementById('number-increase');

// Declaration of all the buttons
const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round');

// Implementing the functionality of the guess button

guessButton.addEventListener('click', () => {
    // generate the target value
    target = generateTarget();

    // retrieve the user input
    const currentUserGuess = userGuessInput.value;
    // create the computer guess
    const computerGuess = Math.floor(Math.random() * 10);

    // display the computer guess and target number
    computerGuessDisplay.innerText = computerGuess;
    targetNumberDisplay.innerText = target;

    var winner = compareGuesses(currentUserGuess, computerGuess, target);

    // update the score of the winner
    updateScore(winner);

    if (winner === 'human') {
        guessButton.innerText = 'You win!';
        guessButton.classList.toggle('winning-text');
    } else {
        computerWinsDisplay.innerText = 'Computer wins.';
    }

    // display the updated user and computer score
    computerScoreDisplay.innerText = computerScore;
    userScoreDisplay.innerText = userScore;

    // set the button activities
    nextRoundButton.removeAttribute('disabled');
    guessButton.setAttribute('disabled', true);
});

nextRoundButton.addEventListener('click', () => {
    // increasing the round number
    advanceRound();
    // displaying the new round
    roundNumberDisplay.innerText = currentRoundNumber;
    // setting the attributes for the buttons
    guessButton.removeAttribute('disabled');
    nextRoundButton.setAttribute('disabled', true);

    // resetting the whole guessing area for the new round
    targetNumberDisplay.innerText = '?';
    computerGuessDisplay.innerText = '?';
    userGuessInput.value = '';
    guessButton.innerText = 'Make a Guess';
    computerWinsDisplay.innerText = '';
});


// setting the +/- button under the input field
const addButton = document.getElementById('number-increase');
const subtractButton = document.getElementById('number-decrease');

addButton.addEventListener('click', () => {
    userGuessInput.value++;
    handleValueChange(userGuessInput.value);
});

subtractButton.addEventListener('click', () => {
    userGuessInput.value--;
    handleValueChange(userGuessInput.value);
});

// disable a button if a certain value is reached
const handleValueChange = (value) => {
    if (value > 0 && value <= 10) {
        subtractButton.removeAttribute('disabled');
        addButton.removeAttribute('disabled');
    } else if (value > 10) {
        addButton.setAttribute('disabled', true);
    } else if (value <= 0) {
        subtractButton.setAttribute('disabled', true);
    }
};

userGuessInput.addEventListener('input', function(e) {
    handleValueChange(e.target.value);
  });
