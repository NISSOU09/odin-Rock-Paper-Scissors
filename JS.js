/*let computerChoice
let humanChoice

function getComputerChoice(){
    return parseInt(Math.random() * (3 )  + 1);
}
*/
    const choice = document.querySelector("#rock");
    choice.addEventListener("click", () => {
        console.log("rock")
    })
/*
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a tie!";
    } else if(humanChoice === 1 && computerChoice === 2){
        return "Paper covers rock, you lose!";
    } else if(humanChoice === 1 && computerChoice === 3){
        return "Rock crushes scissors, you win!";
    } else if(humanChoice === 2 && computerChoice === 1){
        return "Paper covers rock, you win!";
    } else if(humanChoice === 2 && computerChoice === 3){
        return "Scissors cuts paper, you lose!";
    } else if(humanChoice === 3 && computerChoice === 1){
        return "Rock crushes scissors, you lose!";
    } else if(humanChoice === 3 && computerChoice === 2){
        return "Scissors cuts paper, you win!";
    }
}

const resultdiv = document.querySelector(".result")
*/

/*
console.log(getHumanChoice)
resultdiv.textContent = playRound(humanChoice, computerChoice);



let humanScore=0, computerScore=0,rounds;
//rounds = parseInt(prompt("Enter rounds number"));

    let result = playRound(humanChoice, computerChoice);
    console.log(result);
    if(result.includes("win")){
        humanScore++;
    } else if(result.includes("lose")){
        computerScore++;
    }
    console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);

console.log(`Final score - Human: ${humanScore} Computer: ${computerScore}`);
if(humanScore>computerScore){
    console.log("Human wins!");
} else if(computerScore>humanScore){
        console.log("Computer wins!");
} else {
    console.log("It's a tie!");
}

*/