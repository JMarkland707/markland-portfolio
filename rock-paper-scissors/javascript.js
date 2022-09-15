


/* Write a program that will randomly return a single choice of rock,paper,scissor.
If rock and paper then display message "paper  beats rock"
if rock and scissors then display message "rock beats scissors"
If rock and rock then display message "tie, try again"



/* Create three values for the computer to return */
const gameChoices = ["rock", "paper", "scissors"];


/* When a function (getComputerChoice) is called the computer will randomly return one of three values 
(rock, paper, scissors)*/
// Get computer Choice
function getComputerChoice() {
    const randomChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
   // maybe needs to move into playround function
    console.log("Computer selects " + randomChoice);
}

// Get player input
function getPlayerChoice() {
    let playerSelection = prompt("Choose Rock, Paper or Scissors");
// prompt input will be stored in playerSelection, this needs to be converted to lowercase and then use this to compare against comp choice
  console.log("You picked " + playerSelection.toLowerCase());
}


//Combine playerchoice and computer choice into rounds.  Call this function playRound

function playRound(){
    console.log("Rock, Paper, Scissors..BOOM!");
    getPlayerChoice();
    getComputerChoice();
// Create outcomes of matches here

}
playRound();
