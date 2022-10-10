let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    const targetNumber = Math.floor(Math.random()*9);
    return targetNumber
}

const compareGuesses = (guess,computerGuess,targetNumber) => {
    if (guess===computerGuess) {
        return true
    }
    else if (Math.abs(guess-targetNumber)<Math.abs(computerGuess-targetNumber)) {
        return true
    }
    else {
        return false
    }
}

const updateScore = (param) => {
    if (param==='human') {
        return humanScore += 1;
    } else if (param==='computer') {
        return computerScore +=1;
    }
}

const advanceRound = () => {
    return currentRoundNumber +=1;
}

