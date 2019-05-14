
let rollButton = document.getElementById("roll");
let playerDice = document.getElementById("playerdice");
let computerDice = document.getElementById("computerdice");
let playerTitle = document.getElementById("playertitle");
let computerTitle = document.getElementById("computertitle");

let computerScore = 0;
let playerScore = 0;

let computerRoll = 0;
let playerRoll = 0;

let dices = [playerDice, computerDice];

playerDice.innerText = "🎲";
computerDice.innerText = "🎲";

const REBOUND_TIMEOUT = 100;


rollButton.addEventListener("click", (event) => {

    rollButton.disabled = true;
    dices.forEach( (d)=>{startRolling(d)} );

});



function startRolling(dice){
    dice.strengh = random(10, 25);
    dice.isRolling = true;
    dice.timerId = window.setInterval( roll, REBOUND_TIMEOUT, dice);
}

function roll(dice){

    dice.roll = randomDice();

    let unicode = 9855 + dice.roll;
    dice.innerHTML = "&#" + unicode + ";";

    if(--dice.strengh === 0) {
        stopRolling(dice);
    }
}


function stopRolling(dice) {
    window.clearInterval( dice.timerId );
    dice.isRolling = false;

    if( isAnyRolling() === false) {
        (playerRoll > computerRoll) ? playerScore++ : computerScore++;

        playerTitle.innerText = `Player score : ${playerScore}`;
        computerTitle.innerText = `Computer score : ${computerScore}`;

        rollButton.disabled = false;
    }
}

function isAnyRolling(){
    let isRolling = false;
    dices.forEach((d)=>{
        if( d.isRolling ) isRolling = true;
    });
    return isRolling;
}

function randomDice(){
    return random(1,6);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}