
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 30;
const TOP_SPACE = 30;
const BALL_WIDTH = 25;
const PADDLE_SPEED = 5;
const PADDLE_WIDTH = 80;
const BALL_SPEED = 4;

let board = document.getElementById("board");
let rect = board.getBoundingClientRect();
let paddle = board.querySelector(".paddle");
let ball = board.querySelector(".ball");
let bricks = [];
let player = {lives:5, score:0};

function buildBricks(row) {

    let count = Math.floor( rect.width / BRICK_WIDTH );
    let x = (rect.width % BRICK_WIDTH) / 2;


    for(let j =0; j < row; j++){
        for (let i = 0; i < count; i++) {
            let brick = document.createElement("div");
            brick.classList.add( "brick" );
            brick.style.left = (i * BRICK_WIDTH) + x + "px" ;
            brick.style.top = (j * BRICK_HEIGHT) + TOP_SPACE + "px";
            board.appendChild(brick);
            bricks.push(brick);
        }
    }
}



function isTouching(e1, e2){
    return e1.offsetLeft + e1.offsetWidth > e2.offsetLeft
    && e1.offsetLeft < e2.offsetLeft + e2.offsetWidth &&
        e1.offsetTop + e1.offsetHeight > e2.offsetTop
        && e1.offsetTop < e2.offsetTop + e2.offsetHeight;
}

function setup() {
    buildBricks(5);

    player.score = 0;
    player.lives = 5;

    ball.ismoving = false;

    document.addEventListener( "keydown", (event)=>{
        if( event.key === "ArrowLeft" ) {
            paddle.moveleft = true;
        }

        if (event.key === "ArrowRight") {
            paddle.moveright = true;
        }
    } );

    document.addEventListener( "keyup", (event)=>{
        if( event.key === "ArrowLeft" ) {
            paddle.moveleft = false;
        }

        if (event.key === "ArrowRight") {
            paddle.moveright = false;
        }
    } );

    document.addEventListener( "keypress", (event)=>{
        if( event.key === " " ) {
            ball.ismoving = true;
        }
    } );

    ball.orientation = [1,-4];


    window.requestAnimationFrame( update );
}

function update() {

    //let paddleCurrentOffset = paddle.offsetLeft;

    if (paddle.offsetLeft >= 0 && paddle.moveleft) {
        paddle.style.left = paddle.offsetLeft - PADDLE_SPEED + "px";
    }

    if (paddle.offsetLeft <=  rect.width - PADDLE_WIDTH && paddle.moveright) {
        paddle.style.left = paddle.offsetLeft + PADDLE_SPEED + "px";
    }



    if (ball.ismoving) moveBall();

    updateScore();

    if( player.lives > 0 ) {
        window.requestAnimationFrame( update );
    }
    else{
        gameover();
    }

}

function moveBall(){
    let position = {
        X: ball.offsetLeft,
        y: ball.offsetTop
    };

    ball.style.left = (ball.offsetLeft + ball.orientation[0]) + "px";
    ball.style.top = (ball.offsetTop + ball.orientation[1] + "px");

    if(ball.offsetLeft <= 0 || ball.offsetLeft >= (rect.width - BALL_WIDTH) ) {
        ball.orientation[0] *= -1;
    }

    if(ball.offsetTop <= 0 || ball.offsetTop >= (rect.height - BALL_WIDTH)) {
        ball.orientation[1] *= -1;
        player.lives -= 1;
        ball.ismoving = false;

        ball.style.left = paddle.offsetLeft + ((paddle.offsetWidth - ball.offsetWidth) / 2) + "px";
        ball.style.top = paddle.offsetTop - ball.offsetHeight + "px";
    }



    if(isTouching( ball, paddle )) {
        console.log("isTouching Paddle ");



        let hitposition = (ball.offsetLeft + (ball.offsetWidth / 2));
        let hitpaddle = paddle.offsetLeft + (paddle.offsetWidth / 2) - hitposition;

        console.log(hitposition);

        ball.orientation[1] *= -1;

    }

    for (let i = 0; i < bricks.length; i++) {
        if(isTouching(ball, bricks[i])) {
            bricks[i].remove();
            ball.orientation[1] *= -1;
            player.score +=10;
            break; //Pour ne pas pouvoir briser 2 briques en un seul mouvement de pixel
        }
    }

}

function updateScore() {
    document.getElementById("score").innerText = player.score;
    document.getElementById("lives").innerText = player.lives;
}

function gameover() {
    let i = 0;
    let intervalId = window.setInterval( ()=>{

        // while( bricks[i] === undefined ) {
        //      i++;
        // }

        if( i >= bricks.length ) {
            window.clearInterval( intervalId );
            setup();
        } else {
            bricks[i++].remove();
        }



    }, 30 );
}

setup();