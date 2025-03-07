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


function getHumanChoice() {
    let humanSelection = prompt('Write "rock", "paper", or "scissors":').trim().toLowerCase();

    while (humanSelection !== 'rock' && humanSelection !== 'paper' && humanSelection !== 'scissors') {
        humanSelection = prompt('Invalid input. Write "rock", "paper", or "scissors":');
    }

    return humanSelection;
}


function playRound(humanSelection, computerSelection) {
    // todo
}


let humanScore = 0;
let computerScore = 0;


let humanChoice;
let computerChoice;


alert(getHumanChoice());