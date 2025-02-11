const   results             =   document.getElementById("results");
const   moves               =   [
                                "rock", 
                                "paper", 
                                "scissors"
                                ];
let     humanScore          =   0;
let     computerScore       =   0;


const getComputerChoice = () => 
{
    let randomChoice = Math.floor(Math.random() * moves.length);
    return moves[randomChoice];
};


const getHumanChoice    = (indexOfArray) => 
{
   return moves[indexOfArray];
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
        results.innerHTML += `${humanScore}`;
        results.innerHTML += `${winMessage} ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    }
    else if 
    (
        humanChoice == moves[0] && computerChoice == moves[1] ||
        humanChoice == moves[1] && computerChoice == moves[2] ||
        humanChoice == moves[2] && computerChoice == moves[0]
    )
    {
        computerScore++;
        results.innerHTML += `${computerScore}`;
        results.innerHTML += `${loseMessage} ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} is beaten by ${computerChoice}.`;
    }
    else
    {
        results.innerHTML += `${tieMessage}`;
        return;
    }
}

const playGame = () => 
{
    
    
    if (humanScore > computerScore)
    {
        results.innerText = "Game over! You win!";
    }
    else if (computerScore > humanScore)
    {
        results.innerText = "Game over! You lose!";
    }
    else
    {
        results.innerText = "Game over! It's a tie!";
    }
};

document.getElementById("rock").addEventListener('click', () => 
{
    let humanChoice     = getHumanChoice(0);
    let computerChoice  = getComputerChoice();

    playRound(humanChoice, computerChoice);
});

document.getElementById("paper").addEventListener('click', () => 
{
    let humanChoice     = getHumanChoice(0);
    let computerChoice  = getComputerChoice();

    playRound(humanChoice, computerChoice);
});

document.getElementById("scissors").addEventListener('click', () => 
{
    let humanChoice     = getHumanChoice(0);
    let computerChoice  = getComputerChoice();

    playRound(humanChoice, computerChoice);
});
