

/* When a function (getComputerChoice) is called the computer will randomly return one of three values (rock, paper, scissors)*/

/* Write a program that will randomly return a single choice of rock,paper,scissor.
Computer only game that does not require user input or user selection yet
If rock and paper then display message "paper  beats rock"
if rock and scissors then display message "rock beats scissors"
If rock and rock then display message "tie, try again"



/* Create three values for the computer to return */
let gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    console.log("Rock, Paper, Scissors..BOOM!");
    console.log(randomChoice);
    console.log("Rock, Paper, Scissors..BOOM!");
    console.log(randomChoice);

}

getComputerChoice();