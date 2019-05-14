
let rollButton = document.getElementById("roll");
let playerDice = document.getElementById("playerdice");
let computerDice = document.getElementById("computerdice");
let playerTitle = document.getElementById("playertitle");
let computerTitle = document.getElementById("computertitle");

let computerScore = 0;
let playerScore = 0;


playerDice.innerText = "\u2685";
computerDice.innerText = "\u2685";


rollButton.addEventListener("click", (event) => {

        let playerRoll = randomDice();
        let computerRoll = randomDice();

        (playerRoll > computerRoll) ? playerScore++ : computerScore++;

        playerTitle.innerText = `Player score : ${playerScore}`;
        computerTitle.innerText = `Computer score : ${computerScore}`;

        let playerUnicode = 9855 + playerRoll;
        let computerUnicode = 9855 + computerRoll;
        playerDice.innerHTML = "&#" + playerUnicode + ";";
        computerDice.innerHTML = "&#" + computerUnicode + ";";
});

function randomDice(){
    return Math.floor(Math.random() * 6 + 1);
}
