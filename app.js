let image_choice = document.querySelectorAll('.game_img .img');
let show = document.getElementById('show')
let userScoreBoard = document.getElementById('userScore')
let comScoreBoard = document.getElementById('comScore')

let userScore =0
let comScore =0

image_choice.forEach(element => {
   element.addEventListener('click',()=>{
    let choiceId= element.getAttribute('id')
    playGame(choiceId)
   })
});


function comChoiceGen(){
    const options = ["rock", "paper", "scissors"];

    let choIdx= Math.floor(Math.random()*3)
    console.log(choIdx);
    return options [choIdx]
}

function Draw (){
    show.innerText='Game is Draw! play Agin'
}
function playGame(choiceId){
    //    computer choice
    if(userScore>=6 || comScore >=6){
        show.innerText='Game is Over ! Reset and Play Agin'
        return;
    }

    let computerChoice = comChoiceGen()

    // condition check

    if (choiceId === computerChoice) {
        // It's a draw
        Draw();
    } else if (
        (choiceId === 'rock' && computerChoice === 'scissors') ||
        (choiceId === 'paper' && computerChoice === 'rock') ||
        (choiceId === 'scissors' && computerChoice === 'paper')
    ) {
        // Player wins
        show.innerText = 'You are the Winner!!!';
        userScore++;
        userScoreBoard.innerText=userScore
    } else {
        // Computer wins
        show.innerText = 'Computer Wins!';
        comScore++;
        comScoreBoard.innerText=comScore
    }
    if (userScore >= 6) {
        show.innerText = 'Congratulations! You won the game!';
    } else if (comScore >= 6) {
        show.innerText = 'Game Over! The computer won the game.';
    }

}