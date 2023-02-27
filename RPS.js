

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

function playerSelection () {
    let userChoice = prompt("R/P/S?");
    let tempuserChoice = userChoice.toLowerCase()
    // let userChoice = "Rock"
    if (tempuserChoice != "rock" & tempuserChoice != "paper" & tempuserChoice != "scissors") {
        console.log(tempuserChoice)
        console.log("error")
        }
    return tempuserChoice
}

function playRound (playerchoice, computerChoice) {
    if (playerchoice == computerChoice) {
        return ("TIE both picked " + computerChoice)
    }
    else if ((playerchoice == "rock" & computerChoice == "paper") | (playerchoice == "paper" & computerChoice == "scissors") | (playerchoice == "scissors" & computerChoice == "rock")) {
        computerWins++
        return ("You lose " + computerChoice +" beats " + playerchoice)
    }
    else {
        playerWins++
        return ("You Win " + playerchoice +" beats " + computerChoice)
    }
}

function Game () {
    playerWins = 0;
    computerWins = 0;
    for (let i = 0; i < 5; i++)
    {
        let result = playRound(playerSelection(), getComputerChoice());
        console.log(result);
    }
    console.log("Final score, you: " + playerWins + " computer: " + computerWins)
}

let playerWins = 0;
let computerWins = 0;
Game();
// console.log(playerWins, computerWins)