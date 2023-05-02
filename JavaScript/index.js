function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!!!"
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    }
}

function game() {

    let computerScore = 0;
    let playerScore = 0;
    
    //play a new game of 5 rounds
    for(let i=1; i <= 5; i++) {
        let condition = true;
        let playerSelection = '';
        console.log(`this is round ${i}`);

        //ask for the player choice
        while (condition) {
            playerSelection = prompt(`Round ${i} - Write your choice: Rock, Paper or Scissors`).toLowerCase();
            // validate that choice
            if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
                condition = false;
            }
        }

    }

    return `The winner is...`;
}




// if player win add a point to player score

// if computer win add a point to computer score

// if it's a tie keep playing in the same round 

//at the end of the round return the score

//at the end of the game return the winner