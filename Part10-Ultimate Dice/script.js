
let rollButton = document.getElementById("roll");
let playerDice = document.getElementById("playerdice");
let computerDice = document.getElementById("computerdice");
let playerTitle = document.getElementById("playertitle");
let computerTitle = document.getElementById("computertitle");

let computerScore = 0;
let playerScore = 0;


playerDice.innerText = "🎲";
computerDice.innerText = "🎲";


rollButton.addEventListener("click", (event) => {

        rollButton.disabled = true;
        let rebound = 15;
        let timerId = window.setInterval( roll, 100 );

        function roll(){

            let computerRoll = randomDice();
            let playerRoll = randomDice();

            let playerUnicode = 9855 + playerRoll;
            let computerUnicode = 9855 + computerRoll;
            playerDice.innerHTML = "&#" + playerUnicode + ";";
            computerDice.innerHTML = "&#" + computerUnicode + ";";

            if(--rebound === 0) {
                clearInterval(timerId);

                (playerRoll > computerRoll) ? playerScore++ : computerScore++;

                playerTitle.innerText = `Player score : ${playerScore}`;
                computerTitle.innerText = `Computer score : ${computerScore}`;

                rollButton.disabled = false;
            }
        }

});

function randomDice(){
    return random(1,6);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}
