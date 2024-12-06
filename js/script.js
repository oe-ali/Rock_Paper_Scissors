const   moves               =   [
                                "rock", 
                                "paper", 
                                "scissors"
                                ];
let     humanScore          = 0;
let     computerScore       = 0;


const getComputerChoice = () => 
{
    let randomChoice = Math.floor(Math.random() * moves.length);
    return moves[randomChoice];
};


const getHumanChoice    = () => 
{
    let action = prompt("What is your move?");

    if (!["rock", "paper", "scissors"].includes(action))
    {
        alert("You may only enter the words 'rock', 'paper' or 'scissors'!");
        return null;
    }
    else
    {
        return action;
    }
}


const playRound         = (humanChoice, computerChoice) =>
{
    let winMessage      =   "You win!";
    let loseMessage     =   "You lose!";
    let tieMessage      =   "It's a tie! Try again!"; 

    if 
    (
        humanChoice == moves[0] && computerChoice == moves[2] ||
        humanChoice == moves[1] && computerChoice == moves[0] ||
        humanChoice == moves[2] && computerChoice == moves[1]
    )
    {
        humanScore++;
        console.log(humanScore);
        console.log(winMessage + " " + `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
    }
    else if 
    (
        humanChoice == moves[0] && computerChoice == moves[1] ||
        humanChoice == moves[1] && computerChoice == moves[2] ||
        humanChoice == moves[2] && computerChoice == moves[0]
    )
    {
        computerScore++;
        console.log(computerScore);
        console.log(loseMessage  + " " + `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} is beaten by ${computerChoice}.`);
    }
    else
    {
        console.log(tieMessage);
        return;
    }
}

const playGame = () => 
    {
        for (let i = 0; i < 5; i++)
        {
            const humanSelection    = getHumanChoice();
            if (!humanSelection)
            {
                console.log("Invalid input. Skipping the round.")
                continue;
            }

            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);
            console.log(`Round ${i + 1}: Human Score = ${humanScore}, Computer Score = ${computerScore}`);

        }
    
        if (humanScore > computerScore)
        {
            console.log("Game over! You win!");
        }
        else if (computerScore > humanScore)
        {
            console.log("Game over! You lose!");
        }
        else
        {
            console.log("Game over! It's a tie!");
        }
    }

    playGame();
    