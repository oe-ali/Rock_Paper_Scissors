const moves = ["rock", "paper", "scissors"];

const getComputerChoice = () => 
{
    let randomChoice = Math.floor(Math.random() * moves.length.toString());
    return moves[randomChoice];
};

console.log(getComputerChoice());