// ROCK PAPER SCISSORS

const choises = ["stone", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
  
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const  computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoise) {
    const computerChoice = choises[Math.floor(Math.random() * 3)];


    let result = "";

    if (playerChoise === computerChoice) {
        result = "IT'S A TIE!";

    }
    else {

        switch (playerChoise) {
            case "stone":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper":
                result = (computerChoice === "stone") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;

        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoise}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;



    resultDisplay.classList.remove("greenText", "redText");


    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
             playerScore++;
             playerScoreDisplay.textContent = playerScore;


            break;


            case "YOU LOSE!":
                resultDisplay.classList.add("redText");
                computerScore++;
         computerScoreDisplay.textContent = computerScore;

                break;

    }

}