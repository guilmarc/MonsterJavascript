var score = document.getElementById("score");
var selection = document.getElementById("selection");
var winner = document.getElementById("winner");

const objects = ["Rock", "Paper", "Scissor"];

var matrix = [
  [0 , -1, 1],
  [1, 0, -1],
  [-1, 1, 0]
];

var computerScore = 0;
var playerScore = 0;

document.querySelectorAll( "button" ).forEach( (e, i)=> {

    e.index = i;
    e.addEventListener("click", (event) => {

        let computerIndex = Math.floor(Math.random() * objects.length);
        let playerIndex = e.index;

        selection.innerText = `Player[${objects[playerIndex]}] vs Computer[${objects[computerIndex]}]`;

        let result = matrix[playerIndex][computerIndex];
        switch(result){
            case -1:
                winner.innerText =  "You lose !";
                computerScore++;
                break;
            case 0:
                winner.innerText = "Tie, try again !";
                break;
            case 1:
                winner.innerText = "You win !";
                playerScore++;
                break;
        }

        score.innerText = `Player[${playerScore}] & Computer[${computerScore}]`;

    });

});