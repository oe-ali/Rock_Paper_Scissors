const   moves               =   [
                                "rock", 
                                "paper", 
                                "scissors"
                                ];
let     humanScore          = 0;
let     computerScore       = 0;


const getComputerChoice = () => 
{
    let randomChoice = Math.floor(Math.random() * moves.length.toString());
    return moves[randomChoice];
};

console.log(getComputerChoice());


const getHumanChoice    = () => 
{
    let action = prompt("What is your move?");

    if (action != ("rock" || "paper" || "scissors"))
    {
        alert("You may only enter the words 'rock', 'paper' or 'scissors'!");
    }
    else
    {
        return action;
    }
}

console.log(getHumanChoice());


const playRound         = (humanChoice, computerChoice) =>
{
    let winMessage      =   "You win!";
    let loseMessage     =   "You lose!";
    let tieMessage      =   "It's a tie! Try again!"; 

    if 
    (
        humanSelection == moves[0] && computerSelection == moves[2] ||
        humanSelection == moves[1] && computerSelection == moves[0] ||
        humanSelection == moves[2] && computerSelection == moves[1]
    )
    {
        humanScore++;
        return winMessage   + `${humanSelection} beats ${computerSelection}.`;
    }
    else if 
    (
        humanSelection == moves[0] && computerSelection == moves[1] ||
        humanSelection == moves[1] && computerSelection == moves[2] ||
        humanSelection == moves[2] && computerSelection == moves[0]
    )
    {
        computerScore++;
        return loseMessage  + `${humanSelection} is beaten by ${computerSelection}.`;
    }
    else
    {
        return tieMessage;
    }
}

const   humanSelection      = getHumanChoice();
const   computerSelection   = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(playRound(humanSelection, computerSelection));