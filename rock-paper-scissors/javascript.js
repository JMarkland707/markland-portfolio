


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
// Create a score keeper
let playerScore = 0;
let computerScore = 0;

// Create a function to simulate a round

function playRound(){
    console.log("Rock, Paper, Scissors..BOOM!");
    getPlayerChoice();
    getComputerChoice();
    let win = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    }
    if (win[playerSelection] === computerSelection) {
        console.log(`You Win!! ${playerSelection} beats ${computerSelection}`);
    } else if (win[computerSelection] === playerSelection) {
        console.log(`You lose.  ${computerSelection} beats ${playerSelection}`);
    } else if (win[computerSelection] === win[playerSelection]) {
        console.log(`Tie game!  Try Again.`);
    }
}


playRound();