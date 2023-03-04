function getComputerChoice () {
    let randomN = Math.floor(Math.random()*3) + 1;
    if (randomN == 1) {
        return ("rock")
    }
    if (randomN == 2) {
        return ("paper")
    }
    if (randomN == 3) {
        return ("scissors")
    }
}


function playRound () {
    let playerchoice = this.id
    let computerChoice = getComputerChoice();
    let scoreLog = document.querySelector('.score')
    let scoreRound = document.querySelector('.roundscore')
    let currentRound = document.querySelector('.currentscore')
    scoreRound.textContent = ""
    if (playerchoice == computerChoice) {
        scoreLog.textContent = "TIE both picked " + computerChoice
    }
    else if ((playerchoice == "rock" & computerChoice == "paper") | (playerchoice == "paper" & computerChoice == "scissors") | (playerchoice == "scissors" & computerChoice == "rock")) {
        computerWins++
        scoreLog.textContent ="You Lose " + computerChoice +" beats " + playerchoice
    }
    else if ((playerchoice == "paper" & computerChoice == "rock") | (playerchoice == "scissors" & computerChoice == "paper") | (playerchoice == "rock" & computerChoice == "scissors")) {
        playerWins++
        scoreLog.textContent = "You Win " + playerchoice + " beats " + computerChoice
    }
    
    if (playerchoice == "reset")
    {
        scoreLog.textContent = " "
        resetRound(scoreRound, "reset");
    }
    currentRound.textContent = "Current score: " + playerWins + " : " + computerWins;
    if (playerWins == 5)
    {
        scoreRound.textContent ="YOU WIN!"
        scoreRound.classList.add("win")
        resetRound(scoreRound, "lose")
    }
    else if (computerWins == 5)
    {
        scoreRound.textContent = "YOU LOSE!"
        scoreRound.classList.add("lose")
        resetRound(scoreRound, "win")
    }
    
}

// function Game () {
//     playerWins = 0;
//     computerWins = 0;
//     for (let i = 0; i < 5; i++)
//     {
//         let result = playRound(playerSelection(), getComputerChoice());
//         console.log(result);
//     }
//     console.log("Final score, you: " + playerWins + " computer: " + computerWins)
// }

function resetRound (scoreRound, word) {
    playerWins = 0;
    computerWins = 0;
    if(word == "reset"){
    scoreRound.textContent = ""
    }
    scoreRound.classList.remove(word)
}




let playerWins = 0;
let computerWins = 0;
const playGame = document.querySelectorAll('.player')
console.log(playGame)
playGame.forEach((button) => {

button.addEventListener('click', playRound)
})


// Game();
// console.log(playerWins, computerWins)