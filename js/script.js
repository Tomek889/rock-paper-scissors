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
        if (computerChoice === 'rock') {
            return 'Human choice: rock, computer choice: rock\nIt\'s a tie.';
        } else if (computerChoice === 'scissors') {
            humanScore++;
            return 'Human choice: rock, computer choice: scissors\nYou\'ve won!';
        } else {
            computerScore++;
            return 'Human choice: rock, computer choice: paper\nYou\'ve lost!';
        }
    } else if (humanSelection === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++;
            return 'Human choice: paper, computer choice: rock\nYou\'ve won!';
        } else if (computerChoice === 'scissors') {
            computerScore++;
            return 'Human choice: paper, computer choice: scissors\nYou\'ve lost!';
        } else {
            return 'Human choice: paper, computer choice: paper\nIt\'s a tie.';
        }
    } else {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'Human choice: scissors, computer choice: rock\nYou\'ve lost!';
        } else if (computerChoice === 'scissors') {
            return 'Human choice: scissors, computer choice: scissors\nIt\'s a tie.';
        } else {
            humanScore++;
            return 'Human choice: scissors, computer choice: paper\nYou\'ve won!';
        }
    }
}


function playGame() {
    for (i = 1; i <= 5; i++) {
        
    }
}


let humanScore = 0;
let computerScore = 0;


let humanChoice;
let computerChoice;


alert(getHumanChoice());