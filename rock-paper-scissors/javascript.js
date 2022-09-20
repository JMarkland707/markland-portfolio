


/* Write a program that will randomly return a single choice of rock,paper,scissor.
If rock and paper then display message "paper  beats rock"
if rock and scissors then display message "rock beats scissors"
If rock and rock then display message "tie, try again"



/* Create three values for the computer to return */
const gameChoices = ["rock", "paper", "scissors"];


/* When a function (getComputerChoice) is called the computer will randomly return one of three values 
(rock, paper, scissors)*/
// Get computer Choice
const computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
function getComputerChoice() {
    console.log("Computer selects " + computerSelection);
}

// Get player input
const playerSelection = prompt("Choose Rock, Paper or Scissors");

function getPlayerChoice() {
    if (playerSelection === 'rock' || playerSelection ==='paper' || playerSelection === 'scissors') {
    console.log("You picked " + playerSelection.toLowerCase());
    } else {
        console.log('Invalid input');
    }

}
/* if win = playerselection then increase playerscore by 1.  if win = computerselection then increase computer score by 1
when playerscore or computerscore reaches 5 announce, game Over!  blank is the winner */



// Create a function to simulate a round

function playRound(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Rock, Paper, Scissors..BOOM!");
    getPlayerChoice();
    getComputerChoice();
    let win = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    }
    if (win[playerSelection] === computerSelection) {
        console.log(`You Win!! ${playerSelection} beats ${computerSelection}`)
        playerScore++;
    } else if (win[computerSelection] === playerSelection) {
        console.log(`You lose.  ${computerSelection} beats ${playerSelection}`)
        computerScore++;
    } else if (win[computerSelection] === win[playerSelection]) {
        console.log(`Tie game!  Try Again.`);
    }
    for (let i = 1; playerScore < 6 && computerScore < 6; i++) {
        if (playerScore === 5 || computerScore === 5) {
            console.log("Game over, you have 5 points");
        } else if (win === playerScore++ || win === computerScore++) {
            console.log("Player has: " ${playerScore} " and Computer has: " ${computerScore});
        }
    
    }


}



playRound();