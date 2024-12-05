const moves = ["rock", "paper", "scissors"];


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