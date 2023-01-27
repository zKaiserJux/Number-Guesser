let userScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// function that generates the target
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// compares the guesses and returns the winner
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (Math.abs(targetNumber - humanGuess) < Math.abs(targetNumber - computerGuess)) {
        return 'human';
    } else if (Math.abs(targetNumber - humanGuess) > Math.abs(targetNumber - computerGuess)) {
        return 'computer';
    } else {
        return 'human';
    }
};

// update the score after the comparison
const updateScore = (winner) => {
    if (winner === 'human') {
        return userScore += 1;
    } else {
        return computerScore += 1;
    }
};

// update the round number if the winner is determined
const advanceRound = () => {
    currentRoundNumber += 1;
    return currentRoundNumber;
};