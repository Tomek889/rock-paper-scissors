function getComputerChoice() {
    let random_number = Math.random();

    if (random_number <= (1 / 3)) {
        return 'scissors';
    } else if (random_number <= (2 / 3)) {
        return 'rock';
    } else {
        return 'paper';
    }
}


function getHumanChoice(gameNumber) {
    let humanSelection = prompt(`Game ${gameNumber}. Write "rock", "paper", or "scissors":`).trim().toLowerCase();

    while (humanSelection !== 'rock' && humanSelection !== 'paper' && humanSelection !== 'scissors') {
        humanSelection = prompt(`Invalid input! Game ${gameNumber}. Write "rock", "paper", or "scissors":`);
    }

    return humanSelection;
}


function playRound(humanSelection, computerSelection) {
    if (humanSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'Human choice: rock, computer choice: rock\nIt\'s a tie.';
        } else if (computerSelection === 'scissors') {
            humanScore++;
            return 'Human choice: rock, computer choice: scissors\nYou\'ve won!';
        } else {
            computerScore++;
            return 'Human choice: rock, computer choice: paper\nYou\'ve lost!';
        }
    } else if (humanSelection === 'paper') {
        if (computerSelection === 'rock') {
            humanScore++;
            return 'Human choice: paper, computer choice: rock\nYou\'ve won!';
        } else if (computerSelection === 'scissors') {
            computerScore++;
            return 'Human choice: paper, computer choice: scissors\nYou\'ve lost!';
        } else {
            return 'Human choice: paper, computer choice: paper\nIt\'s a tie.';
        }
    } else {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'Human choice: scissors, computer choice: rock\nYou\'ve lost!';
        } else if (computerSelection === 'scissors') {
            return 'Human choice: scissors, computer choice: scissors\nIt\'s a tie.';
        } else {
            humanScore++;
            return 'Human choice: scissors, computer choice: paper\nYou\'ve won!';
        }
    }
}


function playGame() {
    for (i = 1; i <= 5; i++) {
        humanChoice = getHumanChoice(i);
        computerChoice = getComputerChoice();

        result = playRound(humanChoice, computerChoice);
        console.log(result);
    }

    console.log(`\nYour score: ${humanScore}, computer's score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log('You\'ve won the game!');
    } else if (humanScore === computerScore) {
        console.log('It\'s a tie.');
    } else {
        console.log('Computer\'s won the game!');
    }
}


let humanScore = 0;
let computerScore = 0;


let humanChoice;
let computerChoice;


playGame();
