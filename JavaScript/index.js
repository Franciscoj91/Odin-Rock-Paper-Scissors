function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  switch (computerChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!!!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  }
}

let buttons = document.querySelectorAll("button");
let resultsSection = document.querySelector("#results h2");
let finalResultSection = document.querySelector("#results h1");
let computerScoreSpan = document.querySelector("#computer-score span");
let playerScoreSpan = document.querySelector("#player-score span");

function game() {
  let computerScore = 0;
  let playerScore = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (computerScore == 5 || playerScore == 5) {
        return;
      }
      let playerSelection = button.innerText.toLowerCase();
      let roundResult = playRound(playerSelection, getComputerChoice());

      resultsSection.innerText = `${roundResult}`;

      switch (roundResult) {
        case "It's a tie!!!":
          break;
        case "You lose! Paper beats Rock":
          computerScore++;
          computerScoreSpan.innerText = computerScore;
          break;
        case "You win! Rock beats Scissors":
          playerScore++;
          playerScoreSpan.innerText = playerScore;
          break;
        case "You win! Paper beats Rock":
          playerScore++;
          playerScoreSpan.innerText = playerScore;
          break;
        case "You lose! Scissors beats Paper":
          computerScore++;
          computerScoreSpan.innerText = computerScore;
          break;
        case "You lose! Rock beats scissors":
          computerScore++;
          computerScoreSpan.innerText = computerScore;
          break;
        case "You win! Scissors beats Paper":
          playerScore++;
          playerScoreSpan.innerText = playerScore;
          break;
        default:
          break;
      }
      if (computerScore == 5 || playerScore == 5) {
        finalResultSection.innerHTML = `The winner is... ${
            computerScore > playerScore ? `THE COMPUTER!!! with ${computerScore} points` : `YOU!!! with ${playerScore} points`
          }`;
      }
      
    });
  });
}

game();
