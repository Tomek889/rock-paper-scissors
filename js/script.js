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
    return prompt('Write "rock", "paper", or "scissors":').trim().toLowerCase();
}


let humanScore = 0;
let computerScore = 0;
