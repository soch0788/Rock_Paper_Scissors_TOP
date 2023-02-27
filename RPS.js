

function getComputerChoice () {
    let randomN = Math.floor(Math.random()*3) + 1;
    if (randomN == 1) {
        return ("Rock")
    }
    if (randomN == 2) {
        return ("Paper")
    }
    if (randomN == 3) {
        return ("Scissors")
    }
}

function playerSelection () {
    let userChoice = prompt("R/P/S?");
    // let userChoice = "Rock"
    if (userChoice != "Rock" & userChoice != "Paper" & userChoice != "Scissors") {
        console.log("error")
        }
    return userChoice
}

function playRound (playerchoice, computerChoice) {
    if (playerchoice == computerChoice) {
        return ("TIE both picked " + computerChoice)
    }
    else if ((playerchoice == "Rock" & computerChoice == "Paper") | (playerchoice == "Paper" & computerChoice == "Scissors") | (playerchoice == "Scissors" & computerChoice == "Rock")) {
        computerWins++
        return ("You lose " + computerChoice +" beats " + playerchoice)
    }
    else {
        playerWins++
        return ("You Win " + playerchoice +" beats " + computerChoice)
    }
}

function Game () {
    for (let i = 0; i < 5; i++)
    {
        let result = playRound(playerSelection(), getComputerChoice());
        console.log(result);
    }
    console.log(playerWins, computerWins)
}

let playerWins = 0;
let computerWins = 0;
Game();
// console.log(playerWins, computerWins)