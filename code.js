/*                   By @Zarinha Copyright 2022 
                    GAME: PAPER, ROCK OR SCISSORS
This game will play 5 rounds to define who win between User and Computer.
            The result details will appear in the console.*/
let playerSelection = prompt("Paper, Rock or Scissors?");
const computerPlay = ["Paper","Rock","Scissors"];

let computerSelection = computerPlay[Math.floor(Math.random() * computerPlay.length)];

function playRound(playerSelection,computerSelection){
   
    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors")
    {
        computerScore++;
        alert("You Lose! Scissors beat Paper.");
        return "You Lose! Scissors beat Paper."
       
    };

    if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
         computerScore++;
         alert("You Lose! Rock beat Scissors.");
         return "You Lose! Rock beat Scissors."
       
    };
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        alert("You Lose! Paper beat Rock.");
        return"You Lose! Paper beat Rock."
        
};

 if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")
 {
    playerScore++;
    alert ("You Won! Scissors beat Paper.");
     return "You Won! Scissors beat Paper."
    
 };
 if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
    playerScore++;
    alert("You Won! Rock beat Scissors.");
     return "You Won! Rock beat Scissors."
 };
 if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
    playerScore++;
    alert("You won! Paper beat Rock.");
     return"You won! Paper beat Rock."
     
}

else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {

    tieScore++;
    alert("Tie!")
    return "Tie game!"
}
 else {
     alert("You must input rock, paper or scissors");
    return "You must input rock, paper or scissors"
};
}


//define scores
let playerScore=0;
let computerScore=0;
let tieScore=0;

//define win, lose or tie
const win="You Win this round!\n -------";
const lose="You Lose this round!\n -------";
const tie= "This round is a tie!\n -------";

//define playround
console.log(playRound(playerSelection, computerSelection));


//loop
function game() {
   
 for (let i = 0; i <4; i++) {
 playerSelection = prompt("Lets play again:\nRock, Paper or Scissors?");

console.log ("you choose " +playerSelection.toLowerCase());
   
 
   
 console.log("The computer choose " +computerSelection.toLowerCase());

console.log(playRound(playerSelection, computerSelection)); 
 }
  if (playerScore>computerScore){
     alert("You Won the game.");
    return "You Won this game.\n -------";
   }
     if (playerScore==computerScore){
         alert("Tie Game.")
       return "This game is a tie.\n -------";
     }
    else{
        alert("You Lose the game.")
     return "You Lose this game.\n -------";
   }
}

console.log(game());

console.log( "Your final score is " +playerScore +" wins " +computerScore +" loses and " +tieScore +" draws.\n -------");
alert(`Your final score is ${playerScore} wins ${computerScore} loses and ${tieScore} draws.`);
score=playerScore+computerScore+tieScore;

console.log("You played this game " +score +" times.\n -------\nGame over.");
