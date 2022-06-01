let playerSelection = prompt("Paper, Rock or Scissors?");

const computerPlay = ["Paper","Rock","Scissors"];
let computerSelection = computerPlay[Math.floor(Math.random() * computerPlay.length)];


    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {

       console.log("Tie game!");
       alert("Tie Game!");
    };
    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors")
    {
        console.log("You Lose! Scissors beat Paper.");
        alert("You Lose! Scissors beat Paper.");
    };
    if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        console.log("You Lose! Rock beat Scissors.");
        alert("You Lose! Rock beat Scissors.");
    };
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        console.log("You Lose! Paper beat Rock.");
        alert("You Lose! Paper beat Rock.");
};

 if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")
 {
     console.log("You Won! Scissors beat Paper.");
     alert("You Won! Scissors beat Paper.");
 };
 if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
     console.log("You Won! Rock beat Scissors.");
     alert("You Won! Rock beat Scissors.");
 };
 if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
     console.log("You won! Paper beat Rock.");
     alert("You won! Paper beat Rock.");
};